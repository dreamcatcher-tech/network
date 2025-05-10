
>[!tip] Created: [2025-05-10 Sat 16:04]

>[!question] Targets: 

>[!danger] Depends: 

Perhaps with each action that is destined for a napp, the envelope should also include the version that we're expecting. Other methods are that we could download or pull down the napp schema so we always have the latest version, or we could use SemVer to allow some features to pass using old, out-of-date versions. 

The key problem for this is that the napps need to be downloaded separately from what's running on the server because they need to be bundled using NPM and other such things. I'm not sure if it's a good idea to use fully dynamic napp generation. 

All we could do is allow a JSON schema download where we could pull down the JSON schema for the currently installed napp, which saves us a lot of hassle on the front-end except it does make testing difficult. 