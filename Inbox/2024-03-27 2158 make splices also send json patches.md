
>[!tip] Created: [2024-03-27 Wed 21:58]

>[!question] Targets: 

>[!danger] Depends: 

If we request binary, we just get raw binary each change with no attempt at diffing, altho we might do something like rsync.

If request a string, then return string diffs.

If request JSON, then we send down json patches, which can be more efficient for large json objects since no huge string processing overheads each commit.