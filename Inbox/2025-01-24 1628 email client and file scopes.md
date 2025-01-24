
>[!tip] Created: [2025-01-24 Fri 16:28]

>[!question] Targets: 

>[!danger] Depends: 

We would treat all the emails like files on your computer, and so you could scope them down, so when you want to work on something, we can restrict the files that are available, and can allow realtime updates or not.

So you are in email, use that to scope down what files you want to work on, then once selected, pass these on to another tool.

This means we can pass things a long much simpler.

So passin g a scope that the napp can access presents a chrooted git view.  The napp would run in a branch, so when it commits, it can only change those scoped files, and it may be required to not change some other files that were passed in with readonly permissions.