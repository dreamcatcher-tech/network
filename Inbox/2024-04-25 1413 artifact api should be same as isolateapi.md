
>[!tip] Created: [2024-04-25 Thu 14:13]

>[!question] Targets: 

>[!danger] Depends: 

writing a file could be buffered so that multiple external commands could be done, and then a final commit occurs that pushes them all to disk.

Could be atomic and locked to the commit we read from, or could be just done bluntly.