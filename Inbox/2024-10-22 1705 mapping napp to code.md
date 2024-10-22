
>[!tip] Created: [2024-10-22 Tue 17:05]

>[!question] Targets: 

>[!danger] Depends: 

We are wrapping the "exports" functionality of the package manager.  All package managers do this as their primary function.

If the napp expected the tool name to be the same as the export from the package manager, then the mapping works ?

If you want to rename this, you have to rename the tool in the package manager, or wrap the napp with another napp, since otherwise we need to specify what the tool name is in order to override it ?

The napp object might be an export, or at least accessible at a certain path ?

Need to align things with the napp.json and the internal package manager.

napps can rewrite the tool names of the napps they import, too.