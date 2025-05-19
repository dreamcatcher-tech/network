
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