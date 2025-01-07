export const FAQ_COMMAND = {
	name: 'faq',
	description: 'Send a response to a FAQ based on a short name.',
	options: [
		{
			type: 3,
			name: 'name',
			description: 'The short name of the FAQ.',
			required: true,
			choices: [
				{
					name: 'no_general_programming_support',
					value: 'no_general_programming_support',
				},
				{
					name: 'prefix_commands_not_working',
					value: 'prefix_commands_not_working',
				},
				{
					name: 'no_slash_commands',
					value: 'no_slash_commands',
				},
				{
					name: 'no_module_named_audioop',
					value: 'no_module_named_audioop',
				},
				{
					name: 'twice_same_slash_command',
					value: 'twice_same_slash_command',
				},
				{
					name: 'krypton_not_available',
					value: 'krypton_not_available',
				},
				{
					name: 'config_json_not_found',
					value: 'config_json_not_found',
				},
				{
					name: 'how_to_ask_question',
					value: 'how_to_ask_question',
				},
				{
					name: 'krypton_assistant_source_code',
					value: 'krypton_assistant_source_code',
				},
				{
					name: 'setup_discord_bot_template',
					value: 'setup_discord_bot_template',
				},
				{
					name: 'discord_code_formatting',
					value: 'discord_code_formatting',
				},
				{
					name: 'cannot_find_module',
					value: 'cannot_find_module',
				},
				{
					name: 'what_permissions_for_bot',
					value: 'what_permissions_for_bot',
				},
				{
					name: 'ask_to_ask',
					value: 'ask_to_ask',
				},
				{
					name: 'feature_x_not_in_template',
					value: 'feature_x_not_in_template',
				},
				{
					name: 'contributing_guidelines',
					value: 'contributing_guidelines',
				},
			],
		},
		{
			type: 6,
			name: 'user',
			description: 'The user to be mentioned.',
			required: false,
		},
	],
};

export const FAQ_RESPONSES = new Map([
	[
		'no_general_programming_support',
		{
			author: 'We do not provide general programming support',
			description:
				"Hey! We appreciate your questions regarding overall Python and programming questions but unfortunately we try not to provide support for that and move to providing support for Krypton's projects only - this means that if you have issues running a project of Krypton that you **haven't edited** or **aren't trying to edit** you can ask such questions. That being said you are free to talk about some suggestions and architecture questions in <#866757436476227595>.\n\n" +
				"We are simply trying to move away from providing overall Python and programming support that is unrelated to Krypton's project. There are Discord servers such as [Python](https://discord.gg/python) and [discord.py](https://discord.gg/dpy) that you can go in to ask such questions - the [documentation](https://discordpy.readthedocs.io/en/stable/) is very useful to find information as well, and we recommend taking a look at it.",
		},
	],
	[
		'prefix_commands_not_working',
		{
			author: 'Prefix commands are not working?',
			description:
				"For prefix commands to work you need to enable the `MESSAGE_CONTENT` intent on Discord's developer portal. You will also need to enable that intent in the bot's code.\n\n" +
				'You can see [here](https://github.com/kkrypt0nn/Python-Discord-Bot-Template/blob/main/bot.py#L65-L71) for more information on this regard.',
		},
	],
	[
		'no_slash_commands',
		{
			author: 'Slash commands are not showing up?',
			description:
				'"If slash commands are not showing up upon the first start of the bot this is perfectly normal behavior. You will need to **synchronize** them. You can easily do so by sending the following message in a channel your bot can read messages in\n' +
				'```\n' +
				'@Bot sync <guild/global>\n' +
				'```\n' +
				'*Of course `@Bot` is you mentioning your actual bot.*\n\n' +
				"* If you use `sync guild` the slash commands will only be available **in the current guild** where you've executed the command - this is perfect for testing your commands.\n" +
				"* If you use `sync global` the slash commands will be available in **all guilds across all servers** your bot is in - ideally you'd do that once you are sure the commands are working and you want to make them globally available.",
		},
	],
	[
		'no_module_named_audioop',
		{
			author: "Getting a `No module named 'audioop'` error?",
			description: "This is because as per Python 3.13, `audioop` has been removed from the standard library (see https://docs.python.org/3/whatsnew/3.13.html#whatsnew313-pep594).\n" +
				'discord.py officially does not support Python 3.13, it is therefore recommended to **downgrade** your Python installation to **3.12** so that you do not face this issue or eventually other issues later on while coding your bot.',
		},
	],
	[
		'twice_same_slash_command',
		{
			author: 'Seeing twice the same slash command?',
			description:
				'If you see twice the same slash command for the bot this means that you have both **global** and **guild** commands. You will need to `unsync` them from either the global scope or the guild scope - this can be done with\n' +
				'```\n' +
				'@Bot unsync <guild/global>' +
				'```\n' +
				'*Of course `@Bot` is you mentioning your actual bot.*',
		},
	],
	[
		'krypton_not_available',
		{
			author: "Why isn't Krypton available?",
			description:
				'Krypton is currently doing military service since <t:1688342400:D> for a couple of months, there is no specific date of his return so you will not be able to get any. Krypton himself will make an announcement in <#739937488868474881> once he will be back just like he did when he went to military service.\n\n' +
				'> 💡 *He **may** be online sometimes during weekends.*',
		},
	],
	[
		'config_json_not_found',
		{
			author: 'The config.json file is not found in the Discord bot template?',
			description:
				'If you are getting an error stating that the `config.json` file cannot be found, you are most likely running an old version of the template and you should update it.',
		},
	],
	[
		'how_to_ask_question',
		{
			author: 'How to ask a question properly?',
			description:
				'The key at getting the most accurate possible answer to your issue is the way you formulate the question and what information you provide. Some of the most useful information to provide are the following:\n' +
				'* Share what the **full** error/traceback is - this will help us getting more context on where the issue is.\n' +
				'* Give the **version of the project** that you are using - this will help us isolate the issue.\n' +
				'* **What have you done** to get to that error - this will help us replicate the issue.\n' +
				"* What are the steps you've **already tried** to fix the issue - this will help us not repeat what you've tried already.\n\n" +
				'> 💡 *The best is to always try on your own solving the problem with the documentations that are offered, as well as the different search engines.*',
		},
	],
	[
		'krypton_assistant_source_code',
		{
			author: "Can I get the source code of Krypton's Assistant bot?",
			description: 'The source code is available [here](https://github.com/kkrypt0nn/krypton-assistant).',
		},
	],
	[
		'setup_discord_bot_template',
		{
			author: 'How to setup the Discord bot template?',
			description:
				'There is a `README.md` file containing the steps to follow to set it up correctly [here](https://github.com/kkrypt0nn/Python-Discord-Bot-Template/blob/main/README.md#how-to-download-it).',
		},
	],
	[
		'discord_code_formatting',
		{
			author: 'How to properly format code on Discord?',
			description:
				'To format code on Discord you can use code blocks that can be sent with\n' +
				'\\`\\`\\`language\n' +
				'code\n' +
				'\\`\\`\\`\n\n' +
				'Make sure to replace `language` with the actual programming language the `code` was written in.',
		},
	],
	[
		'cannot_find_module',
		{
			author: 'I\'m getting the error "Cannot find module ..." in the Discord bot template',
			description:
				'Firstly make sure you have installed the requirements correctly with\n' +
				'```bash\n' +
				'python -m pip install -r requirements.txt\n' +
				'```\n\n' +
				'> 💡 *You may need to replace `python` with `py`, `python3`, `python3.11`, etc. depending on what Python versions you have installed on the machine.*\n\n' +
				"Once that is done, make sure you start the bot with **the same** command you've installed the requirements with. If you've installed the requirements with `python` then use `python bot.py`, if you've installed the requirements with `python3` then use `python3 bot.py`, etc.",
		},
	],
	[
		'what_permissions_for_bot',
		{
			author: 'What permission(s) should I give to my bot(s)?',
			description:
				'Invite your bot **only** with the permissions **it needs** to work properly. Do not invite your bot with `BAN_MEMBERS` permission if your bot will never need that permission.\n\n' +
				'__**DO NOT**__ invite **any** bot with the `ADMINISTRATOR` (`8`) permission, it is **never** needed and **no** bot requires it.',
		},
	],
	[
		'ask_to_ask',
		{
			author: "Don't ask to ask, just ask",
			description:
				"Yes, someone can most likely help you with your issue - you don't need to ask if someone can help you, simply provide the information needed for us to be able to help you. See [this website](https://dontasktoask.com).",
		},
	],
	[
		'feature_x_not_in_template',
		{
			author: 'Why is X not in the Discord bot template?',
			description:
				'As the name suggests, it is a **template** - not a fully fledged Discord bot that anyone would be able to copy paste and publish a bot with it.\n\n' +
				"The idea behind the template is that newcomers can get their head around what's possible to be done with `discord.py`. It shows some core concepts such as hybrid commands, select menus, etc. so that **you** can code **your** bot **alone**. The template is here so that you can get a small reference on what can be done and how it can be done.\n\n" +
				'> 💡 *If you believe a **core functionality** of `discord.py` is missing and not showcased in the template you are free to create an [issue](https://github.com/kkrypt0nn/Python-Discord-Bot-Template/issues/new/choose) or [discussion](https://github.com/kkrypt0nn/Python-Discord-Bot-Template/discussions/categories/ideas) that follows the [contributing guidelines](https://github.com/kkrypt0nn/Python-Discord-Bot-Template/blob/main/CONTRIBUTING.md).*',
		},
	],
	[
		'contributing_guidelines',
		{
			author: 'Contributing Guidelines',
			description:
				"Your input is amazing! Making contributing to Krypton's projects as easy and transparent as possible is one of the most important side, this includes:\n" +
				'* Reporting a bug\n' +
				'* Discussing the current state of the code\n' +
				'* Submitting a fix\n' +
				'* Proposing new features\n' +
				'* Becoming a maintainer\n\n' +
				'This guideline **must** be followed so that the project is kept clean and consistent.\n\n' +
				'**Wanted changes**\n' +
				'* New features\n' +
				'* Bug fixes\n' +
				'* (Better) Documentation\n' +
				'* Fixing of spelling and grammatical mistakes\n\n' +
				'**Unwanted changes**\n' +
				'* Whitespaces and punctuation changes\n' +
				'* Word changes using synonyms\n' +
				'* Entire rewrites of the project, or parts of the project - unless approved first by a maintainer\n\n' +
				'**All code changes happen through pull requests**\n' +
				'Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:\n' +
				'1. Fork the repo and create your branch from `main`.\n' +
				'2. Keep consistency with the current state of the codebase, this includes but is not limited to naming convention, folders structure, etc.\n' +
				"3. Format the code of the files you've edited with the formatter of the project.\n" +
				'4. Submit that pull request!\n\n' +
				'**Commit messages**\n' +
				"All of Krypton's projects uses [`Conventional Commits 1.0.0`](https://conventionalcommits.org/en/v1.0.0/) hence your commit messages **must** follow the same convention or your contributions will be ignored, refused or assigned to another user or maintainer.\n" +
				'It would be more than welcome to keep your contributions as a single commit rather than, for examples, 20 `"fix: Stuff"` commits in-between. You may use multiple commmits if you believe the changes made in these commmits have nothing, or close to nothing, in common - feel free to ask a maintainer on whether or not it should be a single commit or not.\n\n' +
				'**Create an issue first and __then__ a pull request**\n' +
				'Start contributing by first opening a new issue on the respective project. Once that is done, you can create a pull request for the issue.\n\n' +
				'**License**\n' +
				'Your submissions are understood to be under the same license that covers the project - the license is available in the `LICENSE.md` file.\n\n\n' +
				'> 💡 *Remember to always check the **`CONTRIBUTING.md`** file* of each project, as some points may be different or have some clarifications that are specific for the project.',
		},
	],
]);
