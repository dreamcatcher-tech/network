
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
<Harness>


</Harness>
```