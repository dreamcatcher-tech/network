
>[!tip] Created: [2024-02-26 Mon 15:24]

>[!question] Targets: 

>[!danger] Depends: 

should be the same as sending in text to the prompt, with the extra step of transcoding.
Because changes need approval, we can just enter the prompt text straight in.

We want to use some of the transcription as authentication data, and maybe even user identification.

Endpoint must in the same deployment since we need to do accounting and auth for endpoint access.

Want to encourage the AI to be told what it did wrong with the transcription so it can improve, rather than the user doing some edits in the box, that we'll never know about.

options:
- special endpoint for transcription then passing thru to pierce
- endpoint that sends the text back down to the client

If this was just another isolate layer function, then the audio would end up on chain, which is burdensome.  Unless it could be passed by reference somehow, like passed by url or hash.  Then the app can decide to keep it or not.

So there would be a pool of data that was a temporary store that isolates could have access to ?  If it is isolate side, then it must be repeatable, so the transcription has to occur before submission.

So best option is to make a relay endpoint that calls any given pierce but takes in audio data which is adds to the function arguments.  