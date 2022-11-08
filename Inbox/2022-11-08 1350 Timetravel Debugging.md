>[!tip] Created: [2022-11-08 Tue 13:50]

>[!question] Targets: 

>[!danger] Depends: 

A special set of controls one level higher than the app being rendered that let you move back and forth thru [[approot]] history.  Then it builds up the complex for this point in time, and renders the app.  Optionally you can fork at this point and then begin editing.  Then can merge back in at any point.  The forks are browseable like git, and gitlike operations can be performed on them.

A link can be generated that lets you post the state of the app in a url as a bug report.

All the rendered components should know they are read only, so the ability to execute actions would be disabled and some kind of decoration should appear around the window to indicate you are in a forked mode.  Fork and frozen history should be different colored indicators.

This feature could be used to test new versions of the app by forking the current prod, then rendering a new UI and replacing the covenants, possibly running an upgrade too.