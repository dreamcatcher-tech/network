Make a js file in a separate repo that when run, will:
1. Store its blocks at a default location on disk
2. Begin listening on the given address
3. Load up SSL certs
4. publish its multiaddresses to console

To deploy this onsite:
1. checkout the git repo to disk
2. install the published dreamcatcher libraries, ensuring testing is good

Could publish an npm package that contains the executable within it.  This is what runs to start the server and install the crm if it doesn't exist.  This forces the install to be formally released with all tests passing before it can be update.  Then to update is a yarn command.

Components could be exported out of webdos as a package, and only if chromatic passes, then the published gh-pages app is outside the monorepo, and can supply some customer specific defaults like peerId and server url.

Import should be done in the browser, using an http proxy to access moneyworks db.  Pull comes in to a react component side effect that processes and writes updates to the main db.

Geocoding 

## Server options
`--faker 123` Generate fake data, using the given number of customers
`--port 1234` Listen on the given port number, or use a default random on
`--admin rootChainId` Supply a chainId to allow to connect without 

## Browser
Loads from a static ghpages site.
On load, asks for multiaddresses to connect to, and what chainId to load.
Once given, stores these in chain, and defaults to using them from then on.

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
