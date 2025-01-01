
>[!tip] Created: [2025-01-01 Wed 22:03]

>[!question] Targets: 

>[!danger] Depends: 

If we have the widgets able to make api calls to the server, or basically make napp calls, then how can we marshall this ?

The widget gets given an interface to be able to call napps with different values ?

Can be locked to a specific branch, or can have access to a range of branches.

Widgets need to be made inside of a storybook component.

We could skip bundling it, and loosely couple it by making the widgets separate from the napps which run server side.  They would know how to use the napp api, but that is all, and they would get developed in the front end.  We control in the front end how we will wire up registed widgets, rather than bundling everything in the napp.

We could run a storybook in the root of the napp repo, and pull in widgets that way - gives a nice standard way to develop multiple widgets at once, in the same storybook.

Importing a napp would import its widgets as react components.  They would be aware of the napp config and how to call it.  They would have been tested against mocks.

Might be easiest to make the widgets in a separate storybook, and then import them all into the napps that then re-export them.

So any kind of web framework would work, its just it needs a unique way to hook in to each framework, since how the napp function calls are transported is different every time.

So best to make widgets separately, in storybook, and then import them in whatever gets made.
jsr publish using the widgets that get imported and re-exported.