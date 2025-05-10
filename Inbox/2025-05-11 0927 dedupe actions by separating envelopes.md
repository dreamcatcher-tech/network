
>[!tip] Created: [2025-05-11 Sun 09:27]

>[!question] Targets: 

>[!danger] Depends: 

If we took each action and stripped off its envelope signatures, then it would mean that it could be stored in an object that could be de-duplicated. Otherwise, the insertion of the nuts and other entropy like the signature means that it cannot possibly be de-duplicated. 

So if we store it just as the signature signer sees it, then that is good, and the signatures can come separately and just be held in I guess independent little objects or maybe one big file. Or have some sort of compression that runs on them periodically to squash them down as a one object. 

If there were many actions at a time, then we could sign them all by way of attaching a single proof. 

Here’s a good idea: 

If the signature for the action also points to the previous action that was received, then we can throw away each prior signature because the current signature points to all the others. Now it can point to many in parallel; they need not be a linear sequence per se. 

The action itself can use the hash of the object in GET, as the thing that gets signed, and so it is transmitted as an object and only signed out of band or at a high level in a different plane. 

Furthermore, we could set the action format to be a Git tree, and then this means the files piece is much easier. I guess it becomes inefficient though, but it could be just a blob that holds all the config information and then a tree that holds all the file's information, and then the signature goes on the blob as a whole. 

What's good about that is that it means all the actions are naturally browsable, so the same way you browse data files is the same way that you browse the config and events files. You don't need a special decoder to understand what's happening inside them. 

Further space could be saved by making the nonce be in the file name of the action, so that's even higher up. 

The amount of hashing and data storage is still pretty much exactly the same. It's just got better alignment with the rest of the system. There's no special boundary jump where we have to take the files and treat them like a Git object. It's just literally a folder on the disk, and that is what represents the action. 

Is the data format of an action then the exact same data structure as a stuck? 
