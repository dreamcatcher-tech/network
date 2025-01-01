
>[!tip] Created: [2025-01-01 Wed 22:03]

>[!question] Targets: 

>[!danger] Depends: 

If we have the widgets able to make api calls to the server, or basically make napp calls, then how can we marshall this ?

The widget gets given an interface to be able to call napps with different values ?

Can be locked to a specific branch, or can have access to a range of branches.

Widgets need to be made inside of a storybook component.

We could skip bundling it, and loosely couple it by making the widgets separate from the napps which run server side.  They would know how to use the napp api, but that is all, and they would get developed in the front end.  We control in the front end how we will wire up registed widgets, rather than bundling everything in the napp.

We could run a storybook in the root of the napp repo, and pull in widgets that way - gives a nice standard way to develop multiple widgets at once, in the same storybook.