Componentized Database Development.
Hotreload on the database.
Isolate components of the database and work on them in isolation to explore hard to reach edge cases.
Timetravel on the database with application logic and UI following too.

I want to write my covenant code incrementally alongside the UI that will interact with it.
Database bindings come with each component.

storybook quotes: Storybook provides a workshop to build UIs in isolation. It helps you develop hard-to-reach states and edge cases without needing to run the whole app.

but with this blockchain wrapper we're softening that considerably, by allowing you to isolate the app itself into different hard to reach states. Like componentizing the database as well as the UI.

By binding to the database early, heavy isolated testing occurs on the dappabase, early.  Also the bindings are subject to inspection constantly, so far less chance of errors occuring.  With the dappabase being inspected visually thru UI components, finely detailed errors are spotted, as typically a database and its application are developed blind, on CLI.

## Isolated Storybooks.
This leads to a way to componentize durably and portably.  There should be one storybook per component.  Each component should be rendered in isolation, using [React SSR](https://reactjs.org/docs/react-dom-server.html) and then the output virtual DOM rendered on the clients front end without any security risks.

The storybooks should be combinable into groups, and assembled to make compound stories that use multiple components together.  All of this should be done durably with never any disconnection between the backend (database and application logic) and the front end (UI and presentation logic).

Isolation is the same as the isolation for the reducers, but has a different type of output.  Computation may take place across many machines, but the component still stays as a single isolated unit at all times, connected only by interpulses.

To fork the stories should be possible online, instantly.  Adding funding and change requests should be one click away.  Code editing should be possible in the browser too.

These storybook components allow for end to end testing to be done at the component level, in isolation from the complete app.  Encourages reuse between apps, allows sharing browser caches.

Refer to the components by hash in the browser pages, and have them fetched without having to bundle them up for each page, reducing the amount of load required.  Client side SSR, as @rexmondo said.

From within the component on the page, you should be able to enter a backstage view and immediately view the storybook and fiddle with it.  You should be able to induce a bug by mutating the component until it reached a fault state, then snapshot the state and the actions that got it there, so it can be submitted as a bug.

When fixes roll out, then can update a single component at a time, rather than triggering an entire application rebuild.