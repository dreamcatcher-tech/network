
>[!tip] Created: [2024-04-03 Wed 21:42]

>[!question] Targets: 

>[!danger] Depends: 

Using commits, all this span information is already available, and can be walked thru with each level completing breadth first, so we can show the overall time and then drill down to finer times.

This can also be shown while things are executing, as each commit gives a time.  Plus we can grow times that we know are in progress since we just put the actual time in there once we have it.

Use something like https://www.npmjs.com/package/are-we-there-yet to track the info.

So ultimately the goal is to make a viewer that can show waterfall style how actions propogated thru the system, and be able to browse any historical item with ease.