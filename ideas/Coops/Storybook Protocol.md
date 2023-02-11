Storybook has a [protocol](https://storybook.js.org/docs/react/sharing/publish-storybook#cpp-level-1) which lets it [combine](https://storybook.js.org/docs/react/sharing/storybook-composition) components together.  We could make this work with our blockchains, and make each component transportable, rather than being attached to a larger storybook.

This should open up instant access to a marketplace of people who can work on your components, and invite people to pay to use your components.

We could provide an [addon](https://storybook.js.org/addons) that connected to our market at the base of each component, to allow feedback to be paid for or attributed to.

We would be making the storybooks permanent, offline usable, thickening the interconnection of components, encouraging re-use, and making publishing part of the norm - not the exception.

So you'd run locally, and to share with someone, you only need to flick a flag `discoverable` and add the remote persons chainId or toggle `public`. Discovery means that if someone has the chainId, they can find you.  Public means they don't need permissions to access it.  Publish would push it to a dns chain for inclusion in searches and other compilations.

## Gallery
[Storybook](https://storybook.js.org/) has a [glossary](https://storybook.js.org/showcase/glossary) of components, but the trouble is that each one opens a link to the hosted site.  If Storybook was made as a swarm app, then each instance could automatically link to other running instances, and components would have a greater chance of being collaboratively developed.

The hosting of each component should be able to be independent of anything else, and the composition into a storybook is a matter of search filters, rather than a grouping that indicates ownership.