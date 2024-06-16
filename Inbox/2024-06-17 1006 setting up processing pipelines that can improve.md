
>[!tip] Created: [2024-06-17 Mon 10:06]

>[!question] Targets: 

>[!danger] Depends: 

Example is setting up a way to process speech input more accurately.
Pipeline is take in the audio, transcribe it, look for areas in the text that do not make sense and might be transcription errors, for each one, search the knowledge base for things this user said, and try to correct them.

Finally update the common mishearings file, so next time the lookup is faster.

Present to the user as showing areas of the text it is trying to check, and show the corrections appearing.  User can manually intervene.

Set up testing pipeline by generating some synthetic errors, and assessing if the pipeline detected the errors or not.
Allow modifications to parts of the pipeline, and award the job to the arrangment that scores the highest.