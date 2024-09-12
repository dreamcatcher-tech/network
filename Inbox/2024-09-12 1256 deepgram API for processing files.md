
>[!tip] Created: [2024-09-12 Thu 12:56]

>[!question] Targets: 

>[!danger] Depends: 

Upload a file to artifact
Tell the transcription bot to turn it into speech.

This should send the file off to deepgrams api, and then should websocket back the responses.

This is more fun than just watching for the whole process to finish.

This should retry if there is an error, or the websocket dies.

The streaming could go straight back into the users stateboard, and then gets saved only when that is complete, giving them some entertainment, but the processing isn't happening server side until the prompt is used.  Gives the nice experience of watching realtime processing.

Or could run the transcription serverside, at the edge, then tee the stream down to the user, plus we are server side, so on completion we continue operating.