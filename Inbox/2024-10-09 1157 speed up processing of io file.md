
>[!tip] Created: [2024-10-09 Wed 11:57]

>[!question] Targets: 

>[!danger] Depends: 

If the check on the object was done using weakmap, and the object was frozen, then we can skip much of the rechecking that occurs.

When freezing deeply, if detect a frozen object, then skip freezing any more.

check of the io file is the most expensive function call.

Also making the io channel flush correctly would save a lot of the parsing time.

If the io file held the PID in it, then we can lock the logic of it, so it can be cached in a weakmap.

But, no need to freeze, since ts handles the safety of all modifications since then.