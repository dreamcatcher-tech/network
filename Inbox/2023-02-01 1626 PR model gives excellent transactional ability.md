
>[!tip] Created: [2023-02-01 Wed 16:26]

>[!question] Targets: 

>[!danger] Depends: 

The transaction can be done as a fork, and can be fully checked for the status of its output across many children, then it can be merged atomically.

The lock required to do this is not crippling, as we only need to lock approot for long enough to commit the PR.

We can also keep retrying so long as the PR merges without any failures.

If a failure occurs, we simply discard the tree of fails (altho maybe not...)

This makes it desirable to make pulse signing be done only by a single signature at the approot, as this allows for transactional rollback across the whole tree.

The endurance store should be aware of this, as the engine would write all new pulses that have not been updated into approot into a separate area, and move it over to the main kv store only when it has computed correctly.