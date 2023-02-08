# Server 
Make a js file in a separate repo that publishes as `crm-cli` that when run, will:
1. Store its blocks on disk
2. Begin listening on the given address
3. Load up SSL certs
4. publish its multiaddresses to console
5. install bar bones version of the CRM.
6. populate the sector data
7. optionally generate fake customer data and progressively insert it

To deploy this onsite:
`yarn install --global @dreamcatcher-tech/crm-cli`
Then start it with `crm-cli path/to/repo`

This forces the install to be formally released with all tests passing before it can be update.  Then to update is a yarn command.

Components could be exported out of webdos as a package, and only if chromatic passes, then the published gh-pages app is outside the monorepo, and can supply some customer specific defaults like peerId and server url.

Import should be done in the browser, using an http proxy to access moneyworks db.  Pull comes in to a react component side effect that processes and writes updates to the main db.  Try set headers on gh-pages that means no proxy required.  Proxy probably needed as ssl will be enforced.

Geocoding happens client side in a react component.

## Server options
`--faker 123` Generate fake data, using the given number of customers
`--port 1234` Listen on the given port number, or use a default random one
`--admin rootChainId` Supply a chainId to allow to connect without being authd
`repo` required as this is installed globally, so must say where the repo will be.  KV store is in `repo/interpulse/`.
`.env` provided as a file which holds SSL keys.  If a .env file is found at the same place as the repo, it will be loaded ie: `repo/.env` will be loaded.

## Upgrade process
1. Halt pm2
2. zip up a copy of the db files
3. `yarn upgrade --global --latest @dreamcatcher-tech/crm-cli` to upgrade the global package
4. pm2 start the service again
5. Connect using dev version of the webapp for testing
6. publish the webapp

# Browser
1. Make a standalone site that does nothing more than load a react component for the app, which has been tested in storybook and exported
2. Once the server keys are permanent, we can include those in code for easy instant connect
3. Testing is simple vite server to ensure the page is loading, nothing more
4. On load, asks for multiaddresses to connect to, and what chainId to load, then stores these in chain and defaults to using them.

May publish straight out of webdos, if chromatic passes ?
Why make a separate package ?
After chromatic passes, then we should publish a new ghpages site which has a cname file.
Need a separation on the published site, so a separate repo gives this.
Then, chromatic and published npm can move forward with CI, but on site upgrade in manual.
Manual to update the server code in `crm-cli` and manual to redeploy the crm page.


## Launch component
First component that is presented is the one that gets the connection info required.
Shows the device stats, root chainId, peerId, multiAddrs, repo stats.

Takes the multiaddresses of the server, then a chainId:peerId mapping, and chooses a default mount point.  The app then boots using this location.

First screeen of the app may be one asking you to login, by having someone already logged in let you in.

Future may allow multiple mount points, then can choose to load each one, to navigate thru different instances of the app, including a self hosted version running in the browser.
Forking would be done from this point.
This could treat net like a datum, and allow manipulation of the data.
Can delete various mount points, which would purge all the pulses that it needed.
Repo maintenance functions that scrub the given paths and eject everything else, removing history optionally.
