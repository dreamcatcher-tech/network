
>[!tip] Created: [2024-12-28 Sat 13:43]

>[!question] Targets: 

>[!danger] Depends: 

Give it button controls so we can say when to talk or not.

Ideally pack it into a small device like a dictaphone.

Allow manual control of the talk button, to trigger an action or mute it.

Use voice recog on cell phone to send in instructions to help the device out. 

Make a context generating thing, where you ingest a chat with their parents, and ask some leading questions, particularly around what they're watching on tv right now.

So we'd have one webpage gets opened as the speaker, and this is what the child interacts with.

Measure our success by length of engagement, plus improvement of metrics like vocab, pronunciation.

Record poorly pronounced words so that we can critique them, and provide tips on how to improve.  This might go to a human to work with.  We could then match our listening to these words, which we could spell phonetically so we can detect them, then if they sound wrong we would issue corrective instructions, and generate sentences that use these words heavily.

The web page would hook the server infrastructure and register itself, then the controller webapp would see this thing.  The server then tracks the conversation, and sends various control messages into the application.

Use livekit EOU detection to manually trigger when the model should start talking, even tho we have realtime on.

Run the server side turn detection concurrently, and just use it to trigger when we should speak.

Do a nice quick LLM call before triggering a reply ?

Do a pure voice pipeline for now ?

use webrtc but do our own manual VAD.
So we run a voice pipeline that detects when its turn and triggers that automatically.

controller has a button to push pause, and when to resume.

dials to alter the turn detection ratio ?

Detect when it is getting cut off, and then start increasing the delay if it gets cut off a lot ?

controller has all the controls of the model, and the client just relays these thru to the server, and relays the server events back to the controller.

These dials could be set on the laptop doing the client processing.  Then use a cell phone with another controller instance running, which can do voice transcription of instructions and then send that thru.  May use realtime transcription so the total speed is faster when we hit send.

Could use the broadcast channel to send events around between devices.

Show when the server is about to trigger vad, and then let us push a button to give a delay.

Run the voice pipeline thing on the laptop, in a docker container, then use that to trigger realtime generation.

tell it that if we trigger speech during the quiet times, we want it to initiate something, like ask a question, tell a story, or some other thing.  So if the child is quiet, we might trigger a check to see if they're there.

Have games as modules that people can insert, where the bot knows how to play a certain game, which might come with some functions.

Allow the web page to connect my voice up thru the speaker, so that I can talk out of the speaker.  Could optionally allow the speaker mic to be turned on thru the phone, so we can be in another room listening.

Make it be able to play songs and tunes by way of tool calls.
Sound effects from a library.

use https://killedbyapixel.github.io/ZzFX/ to generate sound effects, and let the bot use these to tell a story.  Could use https://freesound.org/ and search for new sounds for a more dynamic experience.  Background o1 could use this to add more tools to the library on the fly.

Music requests can be asked for, and then we can go download the song somewhere so the kids can play it next time.  Video would let us talk about their dancing.  Sound might let them start to play instruments.

Button to trigger discipline, and cause, or use my voice to trigger a particular type of aciton.  Used when kid is interupting, or getting too excited and needs to calm down.