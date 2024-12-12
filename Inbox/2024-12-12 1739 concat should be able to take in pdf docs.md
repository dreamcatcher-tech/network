
>[!tip] Created: [2024-12-12 Thu 17:39]

>[!question] Targets: 

>[!danger] Depends: 

So when it finds a pdf doc, use the pdfs napp to pull out a string version of it.

So in this case, it would need to use the napp executor, to wrap another napp ?

Or, it would list its deps and these would get called ?

It would pass on its api to the napp executor layer, so that a child napp could operate just like it ?

Concat should also respect the .gitignore files, if it is in a git directory.

May need a concat config file, which says how concat will behave, or provides a command line / config for it, so that all you have to do is run concat, and then it will look at the concat config to make special pulls.

Concat could have named pulls, so you can refer to different ones for different purposes.