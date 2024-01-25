
>[!tip] Created: [2024-01-26 Fri 10:21]

>[!question] Targets: 

>[!danger] Depends: 

If we run a task every minute, then it should pick up on any tasks that failed and need re-incovation.
We could also use a queue to fire off watchdog tasks to ensure that something absolutely definitely executed.

Or we could use consensus, and this is the resiliency mechanism.
The other live nodes could kick the laggard and ensure recovery processes were started.



Also the user should be able to run their own cron jobs that will trigger serverside execution of something based on the state of their complex.