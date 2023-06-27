import { InteractionResponseType, InteractionType, verifyKey } from 'discord-interactions';
import { Router } from 'itty-router';
import { FAQ_COMMAND, FAQ_RESPONSES } from './commands.js';

class JsonResponse extends Response {
	constructor(body, init) {
		const jsonBody = JSON.stringify(body);
		init = init || {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		};
		super(jsonBody, init);
	}
}

const router = Router();

router.get('/', (request, env) => {
	return new Response(`👋 from ${env.DISCORD_APPLICATION_ID}`);
});

router.post('/', async (request, env) => {
	const { isValid, interaction } = await server.verifyDiscordRequest(request, env);
	if (!isValid || !interaction) {
		return new Response('🚫 Bad Request Signature', { status: 401 });
	}

	if (interaction.type === InteractionType.PING) {
		return new JsonResponse({
			type: InteractionResponseType.PONG,
		});
	}

	if (interaction.type === InteractionType.APPLICATION_COMMAND) {
		switch (interaction.data.name.toLowerCase()) {
			case FAQ_COMMAND.name.toLowerCase(): {
				const faq = interaction.data.options[0].value;
				let userId = '';
				if (interaction.data.options[1] !== undefined) {
					userId = interaction.data.options[1].value;
				}
				const response = FAQ_RESPONSES.get(faq);
				if (response === undefined) {
					return new JsonResponse({
						type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
						data: {
							flags: 1 << 6, // ephemeral flag
							embeds: [
								{
									color: 0xf38ba8,
									description: 'This FAQ is not existing, if you believe this is an error please send a message in <#819951345683529757>',
								},
							],
						},
					});
				}
				return new JsonResponse({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data: {
						content: userId === '' ? '' : `<@${userId}>`,
						embeds: [
							{
								color: 0xbebefe,
								description: response.description,
								author: {
									name: response.author,
									icon_url: 'https://cdn.discordapp.com/icons/739934735387721768/7ee25c41de1e2e6b273100e7bc521fd4.png',
								},
							},
						],
					},
				});
			}
			default:
				return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
		}
	}

	console.error('Unknown Type');
	return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});

router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request, env) {
	const signature = request.headers.get('x-signature-ed25519');
	const timestamp = request.headers.get('x-signature-timestamp');
	const body = await request.text();
	const isValidRequest = signature && timestamp && verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY);
	if (!isValidRequest) {
		return { isValid: false };
	}

	return { interaction: JSON.parse(body), isValid: true };
}

const server = {
	verifyDiscordRequest: verifyDiscordRequest,
	fetch: async function (request, env) {
		return router.handle(request, env);
	},
};

export default server;
