
>[!tip] Created: [2024-09-22 Sun 10:34]

>[!question] Targets: 

>[!danger] Depends: 

avoids wasting all the generated text if there was an issue with the path or some other thing.

Also needs to use the stateboard to show the user what is going on.

Can do this for match updating too, in cases where there is a big match to be done, so it writes to temp file, then uses a regex to insert the contents of that file in.

Also add write with an update flag, so it will error if there is no file there already, or use a completely new method.