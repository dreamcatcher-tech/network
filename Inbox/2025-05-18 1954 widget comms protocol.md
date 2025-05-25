
>[!tip] Created: [2025-05-18 Sun 19:54]

>[!question] Targets: 

>[!danger] Depends: 

at page load, we could supply a json object as a url header, which we could decode, this could serve as the default data ?

then if new messages come in, what would they be ?

messages out would be in the format for the widget manager.
The would include context changing, and some free form data.
so a standard format for scope, and some freeform json for anything else that might be asked for - like state.

So the privy widget would send up typed messages with payloads
1. state / custom data objects (seems not needed generally)
2. context selection which lists selection order and names primary selection by integer
3. context access requests
4. navigateTo - send to another widget with another scope, diff, context selection
5. artifact

it would receive down:
1. show - sends down the scope to present on screen
2. diff - an array of other scopes for comparison - not required to handle this
3. selection - passes down selection from on top.


```tsx
<Privy>
  <ArtifactBase> // the web transport interface
	// other components
	<ArtifactFrame src='https://some.frame/path' scope=''>
	  // the browser frame boundary, pierced only by messages
	
	</ArtifactFrame>
  </ArtifactBase>
</Privy>
```


State is a side channel where widgets can be made to communicate with each other. A prime example is when privy needs to pass back the login information that it has. It would send it to the parent using a state transfer. 
But this might not be within scope for the comms system, although I guess it might as well be. 

Widgets that want to pass state down should probably pass things down and query parameters. The internal logic of a parent and a child that need to communicate in this way will need to be tightly coupled, so they might as well just not be part of Artifact. 

send a navigate to message.
or an artifact message.
artifact messages would be provider messages, which would be filtered by the parent.

artifact comms out would be just provider actions.
artifact has some ping methods.

Ideally, this comms channel would work across many different windows and devices. So for example, something set up that was controlled on a remote browser or on your television, so long as it was logged in with Artifact, the real-time streaming layer should be able to move the widget manager or UI manager data around the place to make all the pages feel like one page.

It would be cool if one of the generic message helping libraries was able to break down messages into an optimal size and perhaps in some cases use transferable arrays when the optimization was right. 

allow widgets to advertise if they can do in chat summary items.
so the widget needs to be able to advertise what it can supply in terms of names of widgets and some info about it.
This should be just a napp interface that it exposes.

Widget loads, and then it receives a napp call asking for a specific napp to be displayed.

It can receive diffs that it is asked to show, which could be n way.

Top bar lets you navigate history.

widget should advertise if it can to in chat versions / brief versions of itself.
the versions should be split in to full board, or partial / dynamic sizeable items.

advertise if diff capable.  or just make it a message type that sends in arrays to diff the target with.
pull in privy by dynamic import, but pull in the types as a statically analyzable dynamic import, or make it part of the package.

by far the easiest path is a wrapper component that goes round the outside of any widget. 
this can be the top level wrapper of all widgets, and in production it can render its children

another version can render all the components directly, without being in a frame, but it still handles the privy login stuff.

the privy stuff is what will be slowing bolt down too.

make the iframe background transparent, and have some test widgets like a storybook.

The Framer would be the thing that handles private login and sets up Artifact, connecting it to wherever it needs to go. If the widget is loaded in development, otherwise it acts as a wrapper around the outside and just marshals messages in and out to itself which would be its parent. 

Additionally, we can publish an independent package that can sit inside of the Framer. Or can wrap around the outside that can represent the development environment or the debugging panel where you can sit a URL of the Artifact you connect to. You can see its sizing information like mobile, tablet desktop. You could see the message flow in and out of the widget. You could see the context that was being set. You could see it scopes to pass in diff options to pass in so that you can see it in your own. 

So then the framer would pass down some extra props that would allow you to change the URL, change the privy app ID. 

is it just an artifact scope component ?
can the scoped version handle the ui concerns ?

if we made the starter pack with the framed ui built in, then it might be simpler ?
rendering a frame means passing down the props we want to send in ?

making a frame use esm imports so that it isn't bundling all these things would be good, but we need some kind of other tool to map imports to things on artifact, so they are integrity hashed, and pulled only from artifact.

Should be able to open a new window with the frame in it, and have it load up full screen, basically, without all the surrounding artifact stuff in it.

? does the framehost need to be told what the limiting scope is ? and would it automatically permit anything within this range ?
it would need to be a permissions object that declared a scope and the permissions within it.