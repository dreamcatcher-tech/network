
>[!tip] Created: [2023-12-11 Mon 14:21]

>[!question] Targets: 

>[!danger] Depends: 

If we avoid having full pulses be available in reducers, then we have saved storing that information in the pulses, however they will only be verifiable by fetching the remote pulses anyway, so what has really been saved ?

It may be that we don't need the full pulse, so can trim it down by logging what the reducer accessed.

When accessing specific slices, like state, we should be able to prune these intelligently to provide just the proof down to the state from the remote state.