
>[!tip] Created: [2024-07-02 Tue 09:39]

>[!question] Targets: 

>[!danger] Depends: 

If we have all sides of audio in amr, then we can feed this in to whisper and get timestamped text out.

Then we can make our own container format that has amr for each speaker, some sync info, and the transcriptions that resulted.

These can be done in chunks, so as realtime audio is being streamed in, we can be doing the transcription, and then we do some large chunk transcription at certain thresholds to get a clean result.

We then compress the output using gpt4 so the conversation is summarized and words like interjections are changed into a raised hand icon.