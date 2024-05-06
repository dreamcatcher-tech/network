
>[!tip] Created: [2024-05-07 Tue 10:50]

>[!question] Targets: 

>[!danger] Depends: 

Rather than sending the contents thru the io channel, we should be able to write to a local file in a safe location, and then have the action carry reference to this file with it, allowing for very large files to move with no extra effort.

Ideally the hashed object of the file would remain unchanged, reducing write load on the system.