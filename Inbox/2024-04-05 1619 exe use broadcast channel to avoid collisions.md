
>[!tip] Created: [2024-04-05 Fri 16:19]

>[!question] Targets: 

>[!danger] Depends: 

If the cache context sets up a channel instantly, and listens for parallel execution announcements, then it might avoid doing double executions ?

Definitely needs to do some kind of effects lock for side effects, to avoid duplicate executions.
This would be a traditional lock mechanism, with pulsing to keep the lock active for long periods.
Write a timestamp and know this means something is active.

Know what the outcome should be, so if expired, can check if the outcome was completed or not.