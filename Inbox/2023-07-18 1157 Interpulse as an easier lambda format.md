
>[!tip] Created: [2023-07-18 Tue 11:57]

>[!question] Targets: 

>[!danger] Depends: 

Have secrets for a service as env vars so that when run on the trusted infrastructure, the reducer has access to this information.  Must be very careful not to store this info in state when using it.  Would likely be for making api calls out using effects, so would only pass this info to the web request.

We can put guards that throw an error if a secret makes it into state or action in any way, and/or only if the chain is public.

Using our framework, could make your whole backend and user auth with very little effort, and stay totally mobile to move the infrastructure wherever you like.  Plus we can provide http gateways to translate external requests into chain requests for compatibility.  Again you don't need to do much except use the web interface to make changes to the chain that you share with the hosting provider.  So the provider is controlled by the same api as the app itself uses.

## Use Case: proxying requests with credentials
Making an app that needs to make some queries to some external APIs but needs to use secrets to authenticate.  Don't want those secrets on the net, so need to proxy thru something.  This would normally require setting up a bunch of annoying things and keeping them running.  In Interpulse we would just specify some conditions in the config of the chain, and then a hosting provider would handle the rest, including scale.
