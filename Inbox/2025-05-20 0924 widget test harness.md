
>[!tip] Created: [2025-05-20 Tue 09:24]

>[!question] Targets: 

>[!danger] Depends: 

ideally we would have a widget that could run other widgets in a debug mode, so we could provision full fat artifact responses, like for testing.

So the debug widget would have various controls that can be used to exercise the dev server.

the dev server could be running on fly.io, and could suspend periodically if no traffic.   That makes it serving https and working exactly like how it would be hosted.

Seems best to make a separate project, and pull in artifact.

Then we can publish a jsr package, or npm package.  This then gets imported with a top level component, and debug adapter, and some react hooks.

If we publish to npm, but pull in artifact using an esm.sh url, so we avoid nested jsr resolution.
then we also pull in privy using a url.

Longing for a base project that is provisioned just the right way for codex, artifact, and bolt.new.

dual run the project, so we get the ui done in bolt, but we publish using deno to jsr so we don't have to fuss with types and exports and things.

we might be able to nest deps if we used the npm compat syntax.
If exporting a react component, would be best to export to npm, due to jsx issues in jsr.

but if we could export the GUI for the harness separately to the actual project that did the harness piece itself ?
The frames can nest several levels without loss, tho ?

Definitely not exporting from the main artifact system tho - that just exports a framer that holds a widget in a frame.  Widget creators would import the framer to wrap their widgets, and then they would also wrap the harness up top, which would disappear itself during production.

The Harness is a separate project, meant to ease developement of these widgets.

We could start it off as just a starter project, then turn it into something that gets imported from a registry.

Framer could be configured via props to use a frame or be a frame.
If be a frame, then it cooperates with the parent.  If use a frame, then it writes its children in a parent ?
Or, should the parent be the only thing that uses the parent module ?

```tsx
<Harness url='https://artifact.com' privyAppId='1234' hidden>
	<ArtifactFrame>
		// rest of the app ?
	</ArtifactFrame>
</Harness>
```

If it doesn't have any of these tools, then it can do either a mock mode, or will show the dashboard.
`hidden` makes the dashboard hidden.
`Harness` presents a frame message protocol parent to the child
Or, we could make the harness be the base artifact provider.

Harness should be able to disappear if it finds itself in a frame.
Pass itself a prop to say when its running itself as a child ?

might be easiest to use the full blown artifact, running a harness widget, to then run the test widget ?  that test widget could be running on a dev server.

so we could run in dev mode within a harness that was hosted externally on an https site, or you could run it in full artifact, maybe wrapped in some other code, like a debug tool to simulate some things, in which case your artifact installation sets the context.

capabilities advertisement from children is important, as well as listing the widgets available and their caps.

if the harness was the only place we ran the jspm pattern, where it loads all the big things in from cdn, then in the children, they need to pull in the frame item, to get the hooks and things, 

is the framer a separate repo ? with its own published npm package ? or is it in the monorepo ?

can pull the harness in as a test project in the workspace if we get stuck, but other wise it is a standalone, it handles privy.

THEN once we have it, we can use that to make a frame that runs privy ? or maybe this IS the privy frame ?  the privy widget can then sit as part of the dashboard controls.**