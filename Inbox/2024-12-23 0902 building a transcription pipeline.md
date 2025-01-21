
>[!tip] Created: [2024-12-23 Mon 09:02]

>[!question] Targets: 

>[!danger] Depends: 

given a youtube link, download the highest quality audio file, transcribe it with diarization, identify the speakers, then output the result.

The path, make each function as a separate napp, since they get used for a single purpose.

to build:
1. youtube file downloader, to take down the high quality audio file, and return back the path to the file that changed
2. deepgram transcriber, to take the audio file, check the format, transcribe with diarization in deepgram.  Returns back the filename to the transcripts, both in json format and plain text. 
3. speaker identifier, where the names of the speakers from deepgram and given, and the name to translate is given, and the identified transcripts are passed back


How to verify the accuracy of the transcription ?
- best done by keeping a list of points or topics that were identified, and using that to build upon

What is the napp executor ?