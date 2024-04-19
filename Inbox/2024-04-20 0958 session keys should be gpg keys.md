
>[!tip] Created: [2024-04-20 Sat 09:58]

>[!question] Targets: 

>[!danger] Depends: 

The user should sign things for pierce the same as they would sign a git commit.

It could be a two stage process where we get them to sign a tag about the current state of their session branch, and we put the next action in it too.

Ideally we wouldn't generate git objects on their side, since the library size gets bigger that way.

It would be best if they were generating their own branch, and then signing it and syncing it up.

When we implement networking via chains, we might switch to this method.