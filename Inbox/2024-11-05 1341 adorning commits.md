
>[!tip] Created: [2024-11-05 Tue 13:41]

>[!question] Targets: 

>[!danger] Depends: 

If within each directory, we held a file that listed the commit where each item was last changed, then we can rapidly walk the commit history when focusing on a file.

The overhead would be small, since we would only make a new file when there was a change.
We could make an individual file for every single file, reducing churn.

When merging, this would require two entries.

In git, this operation requires reading every single commit.
We could make it faster by storing notes about what files were changed, slightly speeding up the walk.

In pijul, these walks are instant.