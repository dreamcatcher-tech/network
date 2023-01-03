
>[!tip] Created: [2023-01-03 Tue 20:57]

>[!question] Targets: 

>[!danger] Depends: 

In order that React should have a top level js object that is passed as a prop and represents the current state of the [[App Complex]], a translation is required, since Pulses are hydrated in an asynchronous manner.

This translation must make use of structural sharing, and employ some caching techniques, least ram become scarce.  It must be diff aware to avoid lengthy operations when the Network slice of a Pulse is large, as in a Customer list with 20,000 members.

The translation must subscribe to future Pulses so that when a new Pulse comes in, the next React state prop is generated with a computation load proportional to the difference between the Pulses.  This must be tolerant of Pulses being skipped, or hydration being partially complete on a prior Pulse.

React renders must be triggered whenever the Pulses that make up the [[App Complex]] have been progressed by the fetching of more needed IPFS blocks, but the render triggering must have some kind of throttling to give the app a chance to breathe.  

Pulse internals should be used wherever possible to minimize memory usage.

The interface presented to React should be much simpler than a Pulse, hiding all the internals of Pulse structure but still making those details available if required.  This allows the programming interface of React apps to be nicer for this purpose that the raw Pulse layout, which has different design goals.  In general the React app should be concerned only with State and children, with all else hidden.

## Reconciler Signalling
The usage of the provided prop should include a seamless way for the application developers to signal that parts of the tree are required by the app, and should attempt to be synced, causing a new prop to be passed down.