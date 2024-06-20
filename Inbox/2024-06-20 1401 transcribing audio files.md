
>[!tip] Created: [2024-06-20 Thu 14:01]

>[!question] Targets: 

>[!danger] Depends: 

Set up a process where you can upload an audio recording, and then have an isolate go thru and break it up using VAD to split it into bits.
We can optionally use an overlap function, so that we can stitch words together.
Then those bits get pushed thru parallel calls to the whisper AI transcription system.
GPT4 then runs over it to merge the overlaps a bit better, and add some timestamps.
Then the transcription chunks are available with references to the source file.

Then you can start asking questions about the content, and start what ever derived pipelines you like from there.

The parallel workers are managed using a project planner which is able to increase the number of parallel workers based on initial progress to ensure fast but efficient processing of chunks, particularly since the order doesn't matter.

Also have a realtime streaming version that tries to transcribe whatever it can, and then attempts to compact the conversation so far as it progresses.  So it figures it out as it goes along.