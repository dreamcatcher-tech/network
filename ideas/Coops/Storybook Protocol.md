Storybook has a [protocol](https://storybook.js.org/docs/react/sharing/publish-storybook#cpp-level-1) which lets it [combine](https://storybook.js.org/docs/react/sharing/storybook-composition) components together.  We could make this work with our blockchains, and make each component transportable, rather than being attached to a larger storybook.

This should open up instant access to a marketplace of people who can work on your components, and invite people to pay to use your components.

We could provide an [addon](https://storybook.js.org/addons) that connected to our market at the base of each component, to allow feedback to be paid for or attributed to.

We would be making the storybooks permanent, offline usable, thickening the interconnection of components, encouraging re-use, and making publishing part of the norm - not the exception.

So you'd run locally, and to share with someone, you only need to flick a flag `discoverable` and add the remote persons chainId or toggle `public`. Discovery means that if someone has the chainId, they can find you.  Public means they don't need permissions to access it.  Publish would push it to a dns chain for inclusion in searches and other compilations.