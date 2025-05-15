
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
it is best to make the frame fetch the html and use the cache ? this would work great if fetch code was a get request with some headers ?

need a way in the widget format of the napp to specify multiple different widgets.

later, we would trigger the build on artifact, and just store directly, rather than needing gh actions.
use a serviceworker so that calls to html were resolved with files.

use the dev server hosted in a docker instance running as a side effect napp.

easiest way right now is just to allow the parent to relay the artifact messages straight to the server.
or let the frame talk direct to the api ?
maybe give the api a scoped token ?
send the message over raw, check if it matches the scope, then send it on if so.

a widget would expect a frame client rather than the web artifact.

can be told what a scope is, or can chroot style just hide from the widget what the scope is ?

seems easier just to pass it down.

export a frame component that will handle all the frame rendering bits and pieces.

to render a widget, push in a message requesting a render.
rendering a different widget should be just another message ?
we need to pass props, so the render contains the props.
new props causes the component to rerender.

widgets would have a helper component that listens for the messages from the parent frame.
the full page should be built up from data from the parent frame.

first pass would just pull in html directly
page helper would store dev credentials for testing purposes with a real backend.
so build in gh on push, storing data in a branch, or in the main branch, and then fetch it from raw content ?
or sync down into a repo on platform, and load from there ?

webhook the git repo in artifact.
pull in the latest changes.
trigger a napp to run and do the build for the changed files - this could use isogit to check out to the actual disk of the container running the job.  then run vite build.  then store dist in artifact.
or, use ghactions to upload to artifact in a releases branch, or in a temporary registry napp.
ghpages build then frame it.

if we are the top frame, render a helper.

if not, render the page in itself as an iframe.


iframe down the privy component, then iframe the widget inside this authed frame, avoiding downloading privy at all.

gh pages the widget, then if it loads as top level, show a default page to connect up a backend.
if not top level, then you should just render widgets, or if we pass in a special code.
else we will load up the privy auth wrapper, that will then load the page origin again, but inside a frame, after auth has passed.

Make a static page that can load the dev server in an iframe, and can provide debug info for the actions flowing over the artifact channel to help the ai debug, as well as synthesize what's happening for test purposes.

stream out the mouse and typing from the widget, unless the widget doesn't want to.