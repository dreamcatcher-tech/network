
>[!tip] Created: [2024-12-31 Tue 10:10]

>[!question] Targets: 

>[!danger] Depends: 

Get a remote mic and speaker so that we can have some conversations away from the computer ?

Use a single laptop to start with.

Hotkeys on a browser window:
1. mute the mic - allows giving instructions to the subject
2. take the mic - listen to what I'm saying and not what the toddler is saying.

How to take the mic AND put the instructions in with sysprompt level precedence ?
Could start with typing the instructions in ?

taking the mic means need a second mic somewhere, otherwise the toddler voice comes in loudest or interupts.

sidechannel that mic ?  can we put in audio from a separate source to the model ?

So we need to be running a transcribe, and once we're done, the text goes in, and it needs to go in at a sysprompt level, with some higher power than the conversation.

could prompt it to ignore anyone that introduces themselves as the adult ?

phase 1 is having a conversation at the same time as the toddler.
phase 2 is having a conversation separately to the toddler, that gets steered, from the same device
phase 3 is two devices, one steering the other.


Super crappy version can just have a single deno deployment that uses a broadcast channel to send messages between the browsers that are connected.

The first browser connects in client mode, the second connects in controller mode.


Or, take in two mic streams, and use one as deepgram live transcription, and the other is the realtime api using a remote bluetooth mic.

Actually the simplest version is just a single web page, where the controller can mute the mic (to speak to the subject) and can type in commands to steer the bot without interupting the conversation flow.  

To insert audio, we would just talk to the bot directly, if we wanted some pronunciation done correctly.
Sysprompt it to pay attention to the parent.

Use the boom as the mic and speaker ?

Could connect my phone to the boom, then when I push the system button, I can speak in and have it transcribe and then enter as sysprompt what I am saying.

Or I can take over the mic and talk directly to the device, just from my phone.  This would switch to the phones mic, which should drown out the toddler due to the phone noise cancellation and my proximity / volume.  This is when I want to talk directly to the session.

Otherwise, if I speak into the mic, it would transcribe it, and then send the results in as sysprompt.
Keyword triggering -  if I say the words "transmission complete" then it should trigger it to send the text immediately.

Page would need to show some mic management options.
With a single mic, it would just take that main mic when I hit the sysprompt button, or I could type in the sysprompt using a paired keyboard.


also need buttons to override turn detection, where we can hold a key down and it will not do turn detection until I release the button again.
Modify using sliders what the turn detection settings are.
Possibly parse the transcriptions coming back from deepgram to tune these sliders.
Do calls out to 40-mini to determine if it is our turn to talk ?
Include a tool call in the bot so if it thinks it might not be its turn, it can make this tool call, which uses 4o-mini to deduce end of turn.

Record the whole thing for study and analysis, as well as the sysprompt tracks and info too.
Sysprompts would act like subtitles on the audio tracks.

Measure engagement, vocab spread, urgency of communication, turn quality (each side got a full turn), not being interupted.

Try get the bot to detect when it got interupted.
The innate model has no concept of being interupted, so we need to figure it out another way.

Deepgram speaker detection timestamp analysis tries to pick the cadence of the conversation, so that VAD works bettter, and is more dynamically adjustable.

measure things like idea stickability, stubbornness, how easily can they be swayed off an idea.