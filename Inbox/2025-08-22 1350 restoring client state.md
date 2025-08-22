
>[!tip] Created: [2025-08-22 Fri 13:50]

>[!question] Targets: 

>[!danger] Depends: 

two ways we could do this.
first is to start the state of the session in a repo so that we can recover it any time the client reconnections.
second is to customize the client so that it is aware of the client state, and whenever it goes to reconnect, it uses that state.

In chainland we would do this bit directly.