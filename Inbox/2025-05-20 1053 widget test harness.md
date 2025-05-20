
>[!tip] Created: [2025-05-20 Tue 10:53]

>[!question] Targets: 

>[!danger] Depends: 

we could run privy at the top level, then host the rest of the app as a widget ?

This means the harness includes the auth, which is essential to providing artifact access.

an env var could make it be not the harness, or if it loads and is not the harness url, then the control panel shows up.

console would give access to a global to show the harness tooling.

first it will show the privy login screen, but once completed, will show the widget in an iframe.

BUT in bolt.new, that becomes hard to do.
we could publish the harness code to npm / esm, and then dual host a simple page which loads the harness.

we could make the harness be a component that will recursively load the iframe ?
in dev, it loads with the harness on top, but in production the harness is blanked off ?
works well in bolt, since the iframe loads itself.
but we then drag the harness into the dev build.

wrap the top level in a componet, then import privy as a dynamic import.
this means it won't be installed to any child project, and if the component knows it is in production, or knows it is the top level frame, then it will recuse itself from the render tree.