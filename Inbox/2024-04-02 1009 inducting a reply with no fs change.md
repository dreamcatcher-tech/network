
>[!tip] Created: [2024-04-02 Tue 10:09]

>[!question] Targets: 

>[!danger] Depends: 

Without fs changes, we can induct as part of the pooling effort.
Can we add to the pool atomically ?  Can we add to the pool and know we are not a duplicate ?

? is there a way to pool the fs changes too somehow ?

For every queue message received, we have to determine:
- is this a duplicate message that we are executing on?
- we must keep retrying until our task is done, since we have to compete to update the head commit

From pierce, the other 3 queue message types are triggered by a transmit.

Our actions need to be idempotent.
We should be able to make the queue randomly generate multiple messages and delay the messages and deliver out of order, and it should still be able to pass all its tests.
The devils queue can do anything except not deliver a message.  Use mocks to force caches being dumped, or provided direct cache drop control.
Devils queue should be able to be directly manipulated to provide insidious tamper.  
Test that duplicate invocations do not change the queue in any way.

Every action should look at the io file as a sign that it should bail on its edits.
So can items be added to the pool as a precaution, then get removed if they are irrelevant ?
Ideally we would add to the pool atomically.

Exe might have to definitely commit, since no way to safely add to the pool without creating a duplicate, at the small cost of an extra commit beyond being able to pool.

Every queue message:
- has a definition of done, which can be used to determine if this job is still relevant

Must detect:
- check if we are a duplicate
- do our job atomically
- if fail, repeat the check and the job attempt
- exit by either completing the atomic task, or by detecting duplication
So the definition of job done, should be all around commits to a pid, and the io.json file status.
Has the object of interest been included in the iojson object in a valid commit - this is the point we can stop trying.