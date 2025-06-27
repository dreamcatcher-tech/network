
>[!tip] Created: [2025-06-27 Fri 11:41]

>[!question] Targets: 

>[!danger] Depends: 

would it be something that keeps track of the folder structure at `transcludes/`

the transclude frame would pull in this package from jsr.

napps must be installed if they are to have control over part of the filesystem.

when they get called, they are called by their aliased name and one or more of the paths they control.

if a frame could be referred to by this alias, that might help ?
so other frames can call based on this alias ?
there can be standard aliases, like file open, folder open ?
reserved aliases are things that the system provides.

might need a napp registry to be able to rapidly select napps from ?
time how long it takes to implement a change to a napp using traditional means, and then using a direct registry that simply registers transcludes.
count wall time and step count.
measure how transformed the code becomes too - a measure of information loss.


napps installation includes list of trigger that it responds to
must be able to reject a commit.
could run before the actual commit is generated, like when commit is about to be made, or after, and deny it form entering the genesis branch.
simple test is just to deny writing to the folder it manages - this can be handled with a json rule rather than firing up an execution context.