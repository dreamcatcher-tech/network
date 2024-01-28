
>[!tip] Created: [2024-01-28 Sun 14:56]

>[!question] Targets: 

>[!danger] Depends: 

This seems to be the key to the whole UI.
Each commit element should carry with it the diffs of what changed inside the repo.

Then higher components can be built out of this, that show different things in different states.

Could make a storybook for just this component, and then load it up straight from its github url rather than bothering with publish steps ?

Later, can edit this raw in artifact and load from esm.sh that way ?

Make an esm native component, so it comes with its url loaded bundles anyway, rather than rebundling.