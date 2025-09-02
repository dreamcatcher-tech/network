
>[!tip] Created: [2025-09-01 Mon 14:26]

>[!question] Targets: 

>[!danger] Depends: 

and should each app be running its own router ?

it would pull from the router image, and this would be the base machine that every user has.

So instead of a home agent, it is actually this router thing that you hit, and it also has all the agent bits that make it ttyd-able, and it looks like self.

So when the app url hits, it goes to one of the machines that are the self agent, which is the thing that has the router running.

misconfiguration just drops you there - app is broken.

? why route per app rather than at one single place ?

takes load off the front router.

breaks the dependence on the front router.
Makes the app a unit.

Saves an extra machine, since we were going to have the self agents anyway.

BUT for auth to carry across apps, we need some extra config.
however, if the router added its own header, saying the request was ok, this might work in the short term.