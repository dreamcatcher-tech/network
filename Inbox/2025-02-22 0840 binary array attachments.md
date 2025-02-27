
>[!tip] Created: [2025-02-22 Sat 08:40]

>[!question] Targets: 

>[!danger] Depends: 

We could make a highly efficient uploader, which walks the json object only at upload time, using the replacer in stringify.

Then store the binary arrays as multipart uploads.

Or we can have files be a first class object, and we send those up as multipart uploads.