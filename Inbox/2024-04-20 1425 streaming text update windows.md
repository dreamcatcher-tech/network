
>[!tip] Created: [2024-04-20 Sat 14:25]

>[!question] Targets: 

>[!danger] Depends: 

In a large body of text, if we have asked the ai to produce a patch, which will be applied using the patching function, which selects some regex starting markers, then writes the patch, we can stream this result by running the patch pre-emptively on the target file.

If the args specifying start and end anchors for the patch are first in the order of args, we can highlight the text as changing before the patch even starts to stream down.

Basically AI updates to a filesystem should act like GDI(?) windows where a piece of video display is opened up to the graphics card to paint into, without the CPU oversight.