
>[!tip] Created: [2025-03-09 Sun 14:57]

>[!question] Targets: 

>[!danger] Depends: 

Email is just one example of what could be done with such a service. 

The issue right now is that when you do something like set up an email service, then the person who is running the service could potentially tap your mail. 

So, what you want is a way for a disinterested third party (like Fly.io) to run your Docker container. This container would handle inbound connections and other such things, and guarantee that the source code matches what it's running - so that everyone watching knows that when they receive an email from this service, there's a disinterested third party (Fly.io) that was actually running it and not the person providing the email service. 

The person providing the email service then becomes more like a software vendor, and they allow Fly.to run their code in a trusted environment on their behalf. The running of the container in this system should provide a royalty stream back to the authors of it to incentivize them to keep the system up-to-date.

