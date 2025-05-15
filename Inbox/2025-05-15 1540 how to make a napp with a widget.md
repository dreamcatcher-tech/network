
>[!tip] Created: [2025-05-15 Thu 15:40]

>[!question] Targets: 

>[!danger] Depends: 


how to make the iframe wrapper round the outside of the widget.
does it need anything more than a context updated and a navigateTo request ?

how to deploy them ? the dist file should be handled how ?

artifact interface can be identical, and just cross the postmessage boundary.
pass scopes up as the context selection.
request a navigation to a raw resource like a file, or to a napp.

send the context bundle along with any napp actions, and some might want to show a widget.

if the bundle has a widget field, then this is saying: here is the contect from this widget, and we want to navigate to this other widget.

what's a good pattern for hosting this ?
if we use bolt to make each isolated widget, then we would publish it by doing the build when a commit gets made, and store it as a commit in tigris.  then we would serve it from either artifact and building the frame internally, or pointing the frame at some base ?

later, we would trigger the build on artifact, and just store directly, rather than needing gh actions.