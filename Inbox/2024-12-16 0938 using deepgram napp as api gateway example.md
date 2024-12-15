
>[!tip] Created: [2024-12-16 Mon 09:38]

>[!question] Targets: 

>[!danger] Depends: 

This napp needs to use an api key to consume the services from deepgram.  It is annoying to have this part of the setup.

Each user could run their own instance of the gateway, locally, or on our platform, where they enter their own keys in there.

Or they just use shared keys amongst all members of the platform.

So it would route thru our api gateway, so long as they authenticated with the main platform.

Could be used in conjunction with the ffmpeg napp, which can do format conversions.

ffmpeg can show the streaming nature of the napp format, so we can stream changes to the filesystem in chunks.

Might want a different filesystem mode other than git, since when in streaming mode, can say we want intermittent snaps, or one big snap at the end only.