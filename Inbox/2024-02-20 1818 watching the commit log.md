
>[!tip] Created: [2024-02-20 Tue 18:18]

>[!question] Targets: 

>[!danger] Depends: 

For anything watching the repo, this might be the strongest guarantees of consistency.

Make a HEAD key, write the latest commit and the sequences in it.

Each time it changes, watchers should get the .io.json file, and see if what they are watching is in there.

Has good recovery, since a reload of the connection will cause the latest to be fetched.

Downside is that fetching the full repo is costly.

Could store versions of the io.json file.

Could store .io.json patches against the commit hash, which expires.