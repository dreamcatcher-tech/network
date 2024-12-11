
>[!tip] Created: [2024-12-12 Thu 09:58]

>[!question] Targets: 

>[!danger] Depends: 

If we pull down the whole page, then we can use this to generate a readme to spec our own product that does similar things, or modules that do part of the spec.

scraper that is build as a napp tool using fetch.

Being able to scrape and store a snapshot is key.

Then we can build things like making a desktop app that can take in dictation, and turn that in to its own high grade transcription, that was made for doing a prompt.

We would be able to make a web app that can run a napp in this way, where it is running as an api service.

Could also trigger the live regeneration of the dump files, so the prompts are being auto loaded up.  This is always useful, since once we have an api, we will still use the same formats and everything, its just the copy paste will be done automatically.

These scrapes should be saved as ingestions, which the codebases is formed from.
Reapers check the codebase to see that all ingestions are currently either applied in the codebase or explicitly ignore from being patched in.

crawler should have different strategies based on domains, since we would start to specilize on particular ones.

So crawling youtube, to get the audio, might be chosen from a range of options.

Could then auto parse it thru deepgram, by crawling their api.
The crawler should support shared crawling, where there is a shared and staked (stake to say) library of prior crawls, which can be preprocessed to make more useful ?

Transcriber should be a separate napp, that takes an audio stream, and runs it thru deepgram, and then returns the result

Or optionally put it thru whisper to get higher quality.

Then a separate napp that further processes the information, so if it was dictation, it would clean up the speech to make it kinder.

make a napp that does the translation from xml db into json.  First make a splitter that uses ai to check the incoming xml fits roughly the format.  If there are errors, it will say why, so probably use 4o-mini for this task.

crawler to view the dom using mini, and choose links to follow, which go into the fetcher.  Ultimately come out with a md page summary of the knowledge in the page.

Links might be set up as markdown links.