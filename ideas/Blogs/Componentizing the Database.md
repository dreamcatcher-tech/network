Componentized Database Development.
Hotreload on the database.
Isolate components of the database and work on them in isolation to explore hard to reach edge cases.
Timetravel on the database with application logic and UI following too.

I want to write my covenant code incrementally alongside the UI that will interact with it.
Database bindings come with each component.

storybook quotes: Storybook provides a workshop to build UIs in isolation. It helps you develop hard-to-reach states and edge cases without needing to run the whole app.

but with this blockchain wrapper we're softening that considerably, by allowing you to isolate the app itself into different hard to reach states. Like componentizing the database as well as the UI.

By binding to the database early, heavy isolated testing occurs on the dappabase, early.  Also the bindings are subject to inspection constantly, so far less chance of errors occuring.  With the dappabase being inspected visually thru UI components, finely detailed errors are spotted, as typically a database and its application are developed blind, on CLI.

