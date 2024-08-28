
>[!tip] Created: [2024-08-27 Tue 17:23]

>[!question] Targets: 

>[!danger] Depends: 

There is only one thread, and it is a long thread.
Making a new one simply blanks this one ? or just makes a new one with a different name ?
Or starts a new backchat thread ?
Generate a whole new thread.
Switching back to it would 

Separate the thread from the backchat.
Backchat then, is not a thread, but a comms channel.
It takes in all the prompts, runs them past M.

Why even make a superuser thread ? it just needs a backchat, nothing more.

Backchat is your identifying terminal.  It gets authenticated IO in and out of the system.

Threads are in their own branch, as peers to backchat ? or, as children of the `threads` branch, which might run a controller ?

In the backchat branch, we store what thread branch is our primary.
User can switch what this branch is, but backchat is a machine level connection, not a thread.
The primary thread / base thread / HAL thread is not stored in the backchat branch, but is in one of the thread branches.
Inside that thread, the current focused thread is stored, since the thread might have switched over to pointing at some other thread as the thing to be processed.

Backchat runs everything thru M, which is the thread switcher.
M is an agent on the currently focused backchat thread.
If M decides

BUT wouldn't all of M's choices pollute the thread a lot ?
We can keep these separate, or hide them from the thread.
If M ever gets interrogated, we insert all the choices into the thread, and this may cause the gui to show them all too.

What about if the focused thread also has a focus of its own ?  This nested focus gets very convoluted.
All the nested threads would be viewed as flat by M.
Thread options would be the live threads, with deeper search requiring an tool call.

When a message lands on a thread, it goes via a switchboard to determine which agent to call.

If backchat doesn't have a base thread, then it should create a fresh one.

backchat would store this as its focusid.
backchat would keep a stash of all its threads that it was aware of.
this would get loaded up into M to choose between.
M may need direct triggering, rather than recognition.

use a threadIndex, since we shouldn't be able to just hit any given thread ?
Or, make a PID ?
Ejection from any thread would be just going back to backchat, and then it being used to select which thread you want to navigate to.

The routing of prompts should be doable on the client side to allow widgets to provide rapid navigation around the system.
threads should hold reference to their focus.
Parent and child threads.
Inside the thread, we should store what its current focus is.
A thread is responsible for intercepting calls that come to it, and relaying thru, or intercepting and conditionally relaying.

Could read the focus in from the message history of the target ?
Easiest to just pass to the thread, and the thread would be configured to pass things thru.

? how would a crm remote thread work ?

How to make agents pass the thread on, and use a prompt in it ?
# Example
Start a new CRM thread.
Be able to talk to backchat, and signal that you want to connect to the crm.  Start a new thread on the CRM and then switch focus over to that.
Release a version that comes CRM focused ? or allow multiple versions so people can do playground stuff too.
Allow being different users.