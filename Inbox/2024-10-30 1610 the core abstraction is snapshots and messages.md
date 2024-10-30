
>[!tip] Created: [2024-10-30 Wed 16:10]

>[!question] Targets: 

>[!danger] Depends: 

Filesystem snapshots, which are ordered, and json messages that are being passed around - passed into snapshots, and generated as the next snapshot.

So execution takes in a collection of json messages, a sequence of snapshots, and outputs a new snapshot with some more json messages back out.

Snapshots is not required to run the system, but is a significant enough addition that it makes up a dedicated layer in the model.

Threading is the next layer.

Finally, remote calls, are where we are passing messages and snapshots between trust domains, like between multiple repositories.

Actions imply a sequence.  Sequence implies snapshots of the fs.

State is a convenience addition that we make to solve a common use case.

Snapshots and transmission need to be atomic. Pooling of messages is required to ensure the independence between threads.

Transmittable snapshots.

There are only snapshots, but messages are useful to reason about, even tho they are stored on snapshots, and transported using snapshots.

even posix filenames are someone abstractable, since the snapshot is just binary data, that can be interpreted any way you want.  So you don't have to return files, but most likely this is how thing will get used.

Define a thread as a single place where json actions are executed in a linear sequence.