
>[!tip] Created: [2024-09-22 Sun 11:15]

>[!question] Targets: 

>[!danger] Depends: 

I want to make a modification to the way that gets stores its data on the disk. Choose the format restrictions that needs to compute the hash from a deflate calculation, But there is a compression algorithm that was released by Facebook that is particularly good at many small files, particularly text files. Where it builds up a shared dictionary between conversions. And so for each given repo, under the hood, we can store this larger dictionary of things And then when we store the files on disk, we use this compression method to store it. Right before we encrypt it, And so we retain Git compatibility, but the overall size of There. Text we take up should reduce This will have even further gains when we incorporate The Delta Pack algorithm of Git in order to further compress or bake down the repositories. Which we would probably want to run at the end of every day. In a batch process if certain thresholds, like, a size change occurred. So, basically, keep a handle on the maximum size of the unpacked data that we permit to exist. That could include things like file count as well as size.

Turns out that git already uses gstd internally.