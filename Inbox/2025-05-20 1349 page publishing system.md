
>[!tip] Created: [2025-05-20 Tue 13:49]

>[!question] Targets: 

>[!danger] Depends: 

Using a simple service that can intercept and interpret HTTPS addresses, we could have a wildcard domain and let users register a replay (or any part of a repo) that would respond to that DNS name. The DNS name would determine which repo to use, and then it would load the widget viewer over the top, which could be pre-configured to some config or data that points it at an exact repo. The widget would only allow you to interact with that repo in a certain way.

What that means for example for the CRM is you could have the backstage view where you can see the widgets and the repo and all that, but you can present this universal view or this kiosk mode view which is intended for stuff they come in they have to log in the top level frame handles artifact interactions and they only see this dedicated widget which may be a wrapper widget giving a nav bar and other such things, and then each page gets assembled as a frame. 