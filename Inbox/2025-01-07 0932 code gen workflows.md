
>[!tip] Created: [2025-01-07 Tue 09:32]

>[!question] Targets: 

>[!danger] Depends: 

Use o1 pro to generate a very precise spec for v0.dev to use to build on.
	"I need you to turn what I say into a clear and concise prompt for an AI agent that's going to build the system I described for me. You should fill in any details that you think are missing based on what makes sense to you and if you need clarification from me on any of the points before proceeding, if you think there's ambiguity that I should clear up, then ask me those questions and I will respond to you."

Use the flop of v0 to generate a version of the app.

Maybe try flop it multiple times, and include appraisals or feedback back in to o1 each time, so that o1 makes the seed prompt better increasingly.

Ideally we want a flop that works first time, rather than diving in to the details.
Theory being that the flop is the best version ?

We can try making adjustments, and then feed that back in to o1-pro, so that o1-pro works in the background to try figure out what the seed prompt should have been.
The worst case is the need for a flop plus a correction, but that might be optimal to do, if we cannot get the seed right, as o1pro could do a seed plus a second shot.

in our platform, we would expect that these multiple flops would be run in the background, and the lifting off of the new seeds would be done automatically, so the user comes in and sees several versions.

o1-pro might be able to look at the generated code and determine if it meets the requirements or not, and then would adjust its seed prompt in a certain way.  It could be passed screenshots of the app for appraisal.

This points towards a collaborative nature between ai tooling that has been made, and so making a platform to faciliate this is key, rather than closed systems that can't integrate with other systems.

Its almost like starting from scratch - rinsing the project - gives higher quality outputs, rather than patching repeatedly.  So long as the units are small, this should go well.

Ideally a big project would be broken up into modules, so each one could be rinsed and supplied its output as an interface back to the larger assembly project.  That assembly might need the modules as source files, or need them in some kind of way that makes it friendly to use, possibly as an interface import.

Flop plus some adjustment seems inevitable, since right first time seems out of reach for current models.  The issue is that v0 has a great tool wrapper around the ai, a tool wrapper that we sort of want for ourselves.

Errors in the app while running, in the browser, should be fed back to the model, and it should iterate on fixing them, preferrably all at once.  So when generating, use a logging framework that feed back into the stuckloop, and is hooked at all major places, like in try catch.

Testers would be agents that are designed to go thru a list of specs, and attempt to check if the app meets these specs by interacting with the app - UAT effectively.  This should be automated.  