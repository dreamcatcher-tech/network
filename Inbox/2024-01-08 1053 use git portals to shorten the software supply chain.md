
>[!tip] Created: [2024-01-08 Mon 10:53]

>[!question] Targets: 

>[!danger] Depends: 

Being able to use the chain joining operating to punch holds in git repos in a lighter version that submodules could be used to remove the need for npm.

BH suggested that the chain joining principle between remotes might be more generally useful as a feature of git that means the nodemodules folder can be treated as little snippets of remote repos that get pulled in as needed, and can receive pending updates from the remote side.

currently the flow is:
1. git commit
2. ghaction build
3. publish to npm
4. remote pull from npm
5. remote build
6. remote publish to npm

Updates could propogate a lot faster.

The publication is direct at that point.

NPM should never be running scripts in any way.