
>[!tip] Created: [2025-01-13 Mon 15:12]

>[!question] Targets: 

>[!danger] Depends: 

derive a branch with compressed versions of the raw data.

look for word boundaries, and increase the pressure to find a word boundary as we get close to the cutoff, so we dynamically choose what we think is a word boundary, plus send the text into an LLM to choose a good place in the meaning of the words to cut.

These chunks get synced to git and can then be transcribed.

Transcribing and generating based off them running in realtime might be done too, but this latency tradeoff might be necessary.

Or have the realtime speech be happening in a separate tee'd off channel.