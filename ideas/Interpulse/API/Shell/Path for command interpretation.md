In posix, typing a command that does not have pathing information (ie: no `./` to fix the command to the directory tree), will cause the `$PATH` environment variable to be searched for matches.  We need a similar policy, so that we can:
1. Reduce the surface area of DOS by removing almost all of the commands
2. Allow apps to add their commands to the system, at the users request.

## Implementation
We can store a path array in the shell object, and use this.
If the interpulse engine provided a line interpreter, then even more load can come off DOS, such as being given a command path, and the args, then shell handles the rest.

## Overriding system commands
Covenants should be given the chance to modify system commands if they receive them.  The system should send a call to the reducer and accept back a modified command, or handle a throw.

This should require an explicit config flag, else we can cause errors if the developer is being strict about their reducer types.  Or we can require them to be aware of an array of system commands, and they should actively ignore those.