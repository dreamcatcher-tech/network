
>[!tip] Created: [2025-06-14 Sat 10:43]

>[!question] Targets: 

>[!danger] Depends: 

Hit record, and then the source starts saving to disk.
periodically snapshots it down, so long running things are not lost.
may backup the partials to other workers something can stand in immediately.

at the same time there is realtime transcription happening, but also periodic high quality transcription that overwrites the partials.

maybe can get a custom model that handles sounds, and so we can start to understand someone with speech impairment, so we can start to help them get better.

could use the realtime api to do the transcription in realtime ?

or use it to converse with you to generate chunks of statements, that it uses to fill in tool calls.
use the VAD in realtime to determine when to mark a break in the speech, which then sends the speech of for hq transcription, or the realtime model itself outputs a transcribed version in a tool call.

then hopefully we can use the realtime watching api layer to allow the other side to receive streamed audio.
The streaming could be done using quic or some other transport, so that the streaming mode can be optimized for rapid viewing.
can have several quality streams going to allow selecting adaptive bitrates.
So to start a call with someone, stream your source data into a file, and the commit watching system will relay that round to the participants, using a combination of voip protocols and pure file transforms.
Periodically each side will commit which locks in the source audio and allows more long running processing operations to start.

Or the streams are relayed over the top of the artifact layer, using webrtc to have realtime video and voice, then these streams are tapped for ai processing.

implement the buffering speech thing on top of that.

