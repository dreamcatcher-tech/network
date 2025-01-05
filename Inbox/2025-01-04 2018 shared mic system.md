
>[!tip] Created: [2025-01-04 Sat 20:18]

>[!question] Targets: 

>[!danger] Depends: 

want the highest possibly quality audio, with max redundancy so that even with connection issues something audible still makes it thru.

Add ability to:
- live transcribe
- signal buttons from partipants, like they are thinking, they can private record, they want to mute for the other side and just record for themselves.

If connection issues occur, switch over to the transcription which is pushed up from the server side and is the full data ?

we want to use auto egress feature in livekit.

coordinating track start time should be in absolute, not relative time, so never matters.

Need to start auto egress, and to show each participant the tracks for download, plus let them delete them possibly.  Definitely they need to finalize them.

Want noise cancellation with krisp

list files in the bucket.
have a trigger that hooks back to the deployment when the bucket is updated.

Because we don't have active room control, controlling sessions becomes hard.

Provide a little dj widget so can play multiple tracks at once, select, deselect, and have them time synchronized together.  Provide a unified timeline to scrub over.  Show track waveforms.
All tracks being shown should be immediately playable.

audio quality must be redundant so we never miss anything.

? could we avoid all this rigmarole, and just record on the mic with a good clean timestamp or sync sound / echo estimation between participants ?
So we would be simply storing the audio locally, and when the shared room says stop, we push all the audio we have up to artifact ?

We could upload incremental snips, and also do incremental transcribes on each segment too, so we have these utterance blocks.

Seems a lot of the features we are attempting require supressing or removing many of the livekit features which is the two way audio feed ?

Data ingestion processes should be totally separate from any kind of real-time streaming. So, when humans are having a meeting, separate channels, separate systems should be used for taking the voice and streaming it off to the side.

use the browser realtime voice to detect when speech has paused a bit, and then send that off to whisper as a little batch.