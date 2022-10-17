By using a relative path in the application, we can read and write to preferences relevant to the local user only, such as column sizing, color themes, or anything else.

Use a special key that indicates "For this application" as a way to stop other applications writing to it.

We would normally block any other access outside of the [[App Complex]]

eg: `/.local/preferences/setting1` where `.local` is managed by the system to point to a secure chain in the home directory that only this application can write to. 

If the application wishes to share with other apps, it would need to use some local and shared space.