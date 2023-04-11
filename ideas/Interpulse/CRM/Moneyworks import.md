Get lock in the settings object, so that only one browser instance can run at a time.
Read the last known import time from moneyworks.
Begin pulling in records that changed since this time.
For each one, update the customer record.  If new ones, create using batching.
Once done, release the lock.

Manually force the lock open.  Browser should check it still has the lock in case it should stop for some reason.

Will need a proxy due to SSL requirements.