
>[!tip] Created: [2024-08-06 Tue 15:59]

>[!question] Targets: 

>[!danger] Depends: 

Make a cron task that just pulls from the HAL repo every minute ?

Then each time an actor does anything, it merges in the latest changes.  The user should never have to deal with this, and they never work in the actor branch anyway.

Or just a cheap webhook that triggers su to do a pull on hal in github.

Or make a general function that can call any isolate, and target any place.

You would set the target of all the commands by writing to a file, or calling set target first, then calling all the other functions which get pointed wherever the target is, both by repo and by branch.