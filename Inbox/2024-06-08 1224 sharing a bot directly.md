
>[!tip] Created: [2024-06-08 Sat 12:24]

>[!question] Targets: 

>[!danger] Depends: 

Making a bot available for anyone to interact with where each chat starts a new sessions.
Optionally allow people to fork these bots, make their own version.
Then run a reconciler that finds the differences between the base facts that each bot holds.

Have multiple people in the same session talking about the bot, and optionally programming it as they go along.  They would be programming their version, then doing a PR to get their modifications merged.  These PRs might be contentious, and require a vote to be merged in.
The public facing bot should be aware of PRs that are pending that would change it, where those PRs have some authority attached and might likely pass.

We should make these bots to define our own internal architecture and reasoning.

These would like GPTs in the gpt store, except they allow collaboration between users.

It might be that the CRM is just a bot that gets shared ?
The CRM provisioner is a higher level bot that sets up a base bot.

This bot can become a proposal that gets put forwards to be voted upon.

The questions that key people posed stay as checks on what the document means.  Example scenarios are examined and proposed.  These questions are merged where possible if the similarity is enough.  These checks run each time a change occurs, and people can get notified.  So some checks are core, and others are external, which are either private or a state of proposal to be made core.

If you chat up a bot, then you could have both a session url and a bot url.  Coming in at the bot url starts a new session for your terminal.  This can be shared using the session url.
So the agent is a dedicated branch, that looks like a machine, which has its own sessions.

Advanced features can give the bot its own subdomain, so when you come in that way, it has restrictions on what you can do which are configured on chain.  This can include showing different UI components that were configured in the help.

There should be a distinct step where you share either the summary information of your interaction, or make the whole session public, or share with dedicated individuals from your friends list. 