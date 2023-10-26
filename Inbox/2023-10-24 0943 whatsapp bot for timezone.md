
>[!tip] Created: [2023-10-24 Tue 09:43]

>[!question] Targets: 

>[!danger] Depends: 

When anyone proposes a time, the bot does the conversion for all participants, gracefully.
Ideally each person would be able to hide the bots messages or not.  It can also speak for people, so the responses are faster, since some people might be sleeping.

It should be able to induct everyones calendars, and walk them thru the process, then answer timing questions based on this info.  The group should set some goals for meeting times, and the bot continually tries to calculate this whenever someones calculator changes, showing the best times.  Each individual can tune the response privately based on other goals.

Would say something like "hey currently theres a window for x y z people to meet - a, can do rearrange to make that time ?"  The bots can have discussions between each other, and we could audit that discussion to see how it was going.

Must be able to accomodate people who don't use the bot, as we will need to use their direct chat reponses to handle

Bot can ultimately change your calendar if you want it to.  Bot can approve time changes.

Bot would have access to everyone elses bots, if they existed, and would chat in the background with them, in a separate whatsapp group, so the humans could debug the conversation.  Human can correct the bots when they're talking.  An individual bot can create a central coordinator bot, which will create conversations between individual bots, if present.  User must have signed up for this.  You can talk via voice message to the bot too, which gets whisper transcribed.

Any instructions can be sent in this way, such as creating tasks or packets, changing simulation parameters for city simulators.

Bot can be part of group calls, and handle transcription of audio.

Whatsapp is very good since it handles authentication for you.  What we're selling is dreamcatcher usage, and we're trying to get the problems people have.

"When I say X, you should say Y" type of problem reports - bot can supply the text context, screened for anonymity, and post that publicly for sale.

Interactive messages in whatsapp can give people buttons to push for actions. 
Allow chats with bots directly using whatsapp, and change convos to use different bots.  This data goes into our db for processing.

Can maybe pay people using cc dispersals, or payment on the meta platform.

If we could control the whatsapp account on the phone directly, that would be even better, as we could parse all the messages there.

Bots could signal when they reloaded, and invite people to continue, or restart their sessions.

The chats can be a good as a record of all the data we need to parse, better than a set of files.  This uses whatsapp as a form of storage.  Means we can rapidly get a lot of data.  Can get people using our bots as part of their existing workflows, as most people use a messaging app as the main way of interacting with each other.

When you add a bot, it should give a link where anybody can go and see the bot, view its chats, and see its background work, plus see a copy of the chat it is watching.

The bot could also help discover resources of relevance, handle subscribing meetings, and summarizing interesting parts by people of interest.

If the Dreamcatcher.ai website pointed you to a whatsapp bot, then we could handle spam easier too.  Anonymized messages are free if publicized, pay money to stay private.

Great as the first intro for people, as we immediately have their number, their authentication, their indentified comms with us, a way to talk back to them, even if just by updating our status messages in the bot, all from an interface they are familiar with and feel safe to use.

## Calendar 
Sit down with someone and get them to chat thru a calendar that works for them.  Eg: JM.  Don't ask them to book their time, you book your time, and ask if that suits them, so they get booking by having all other time, which feels better than them being boxed in.
## Denoising group chats
Take part in a group chat, but theres only you and the bot.  The bot manages all comms and only contacts you when needed.  Attribution is given to everyone involved.  Can mean that multiple groups can collab in this way.  Means you could be just chatting to your agent, but really you are interfacing with the whole world.

May start to use your bot as your actual profile account, so that everyone it talks to gets filtered thru the bot.  You can choose to talk directly to some contacts, and others it just takes samples thru the bot.  It can ask people questions on your behalf, using buttons, and can do menial tasks like booking meetings or updating invites, or updating a shopping list.  You should be able to see everything it does in your whatsapp app, so you can intercept, or talk to it about what to do differently.

## Editing a stateboard
Each time the bot comes back, and small external url box invites clicking to open up the stateboard in the Dreamcatcher agent or on the web.  Each box takes you to the version at that time, and you can browse prior versions, and see diffs between other versions, so you know how the doc changed over time.  At each change, the current set of chat that caused it is shown, with easy scrolling forwards or back past this.  The chat history is segmented to the changes in the stateboard, and you can scroll thru either chat or stateboard to move the oposing component.

When you are not at HEAD the color changes and signals you are not looking at the most recent version. 

These messages streams can be threaded for when there are multiple users engaged in a collaborative edit session.

On the dreamcatcher agent, you can show stateboards, so if you have a second phone or something, you can have chats, and then watch the stateboard update live.

Editing directly just shows as a "direct edit" message, with some starting line info, and the edit.  Use the git diff hunk format to describe this.  These edits trigger some processing and chats that come back commenting on the change.

## Auth loop
In the webpage, we can get them to send a photo of a QR code we generate, which connects the sessions.  Connect to our bot using a whatsapp qr to get our contact, possibly embed some ID info in that, so we can instantly send them their convos.
## Deployment
Use the git repo for honing the bots, and having automated tests to assert the veracity of the bots.  Then each push will run the bot in a lambda deployment hooked up to a set of whatsapp bots.  This also provides the chat interface on the main website.

## Interface to file renamer
If the bot let everyone see what a given function in an org was doing, then instant guidance could be given.  So an admin could see the prompts that staff we doing in their interactions.  Lets you see errors quicker, and interject easily from afar, fixing the problem directly rather than going thru the loop with the staff member.  Makes sharing the state of the system easier, so you can see whats going on, since it is just a chat.

## Files
Submit files in whatsapp and it stores them in good places in the virtual filesystem, plus makes them available for reference when you ask it questions, or when it answers on your behalf to people.  Can start to treat the bot like a little personal assistant that you make available to the whole company, and you start training it with the rules of your company, so it can adopt your ethocs, like the Schick way.

Need to attack at the filesystem level, so from a browser, we can connect directly to their filesystem.  Then connect to our app and have our agent on machine or on browser.

Share the contact and share some credits.

Pro version is that the bot is you.

## Audio
Audio could be done via a call, and then realtime audio processing occurs in the chat.
Might be able to take in voip calls and route them to a whatsapp number, with chat transcription updates happening in realtime.

## UI
Show a band where the bots memory is up to, where it is summarizing, and other info about the chat.  The stateboard view should be purely readonly.  We could allow editing of text in this view, but that would just make a new message with selections and changes.  Select something then push "use this selection" to have it sent to the chat.  Edit is just sent to the chat when you're finished.