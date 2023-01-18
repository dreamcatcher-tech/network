
>[!tip] Created: [2023-01-19 Thu 10:04]

>[!question] Targets: 

>[!danger] Depends: 

.xlsx is not a diff aware file format.  Saving requires the entire file be recompressed and saved.  Diff native is like packing onedrive and git inside of every file.  The file can exist in multiple states, and can be merged.  References to other documents can be held by hash, and can be unbreakable.

Saving only alters what was changed, making it very efficient to transfer.

Even if pure binary was used to try and achieve these same effects with traditional files, a diff aware file structure would take much greater advantage, and would include merge presentation to the customers.  Makes the file be breakapartable, modular, by default rather than as a difficult afterthought.

So should text files be diff aware too ?

A diff native format for text files could be made that mimicks google docs.  When saving on disk, it saves based on diffs being expected, so if other edits are found they can be merged intelligently without conflicts, or we can at least highlight the conflicts to the user as a conflicting suggestion.

If we start with .md format files, then we can integrate directly with Obsidian, but deeper - at the filesystem level, where we present back to it MD files, and when it edits, we convert to our diff aware format.

We should be bundling the storage on a per file basis, not on a whole collection of files.  

By removing the middle party from the transforms required for collaborative editing, we can also know when the other party has received our changes.  We can offer a reliable 3rd party to play buffer in between, but it would be pure storage, having no modification ability.

So then a piece of editing software that can be downloaded, or runs in browser, or runs offline in the browser, can be used to share docs on a per document basis, and requires no central server, but offers all the goodness of cloud.

All apps should strive for this capability in their files.  Google docs has this, but forces you to use their cloud, as there are no pure offline versions - they must have a server, and their server is radically different to the clients.  In our model, there is no server, only clients.

An entire app, like the [[CRM Goals|CRM]] is really just a diffing document.  The "server" is a higher privileged client than the others.

A vscode editor could be made in this fashion.

Spreadsheets that are modularizable can be used as components in other apps, where the edit and reuse ability is included in an app.  Gives customers greater maleability over their applications, where they would typically use a spreadsheet to accomplish something, we can include these spreadsheets as ways to input data into the application.  Trigger a human review cycle, and some automated tests when changes are made, but it still makes the app much more programmable by the client.

The more the client can program their own app, the less we are actually required to program.

[EtherPad](https://etherpad.org/) may contain some modules we can start with.

Files made in this way are easier to connect up to grid processing tooling like AI guidance and heavy computation.  Sharing the data is easier, charging for usage is easy, can be run privately too.