Make everything by default a promise

This could remove the need for two channels in system and reducer, since we could simply walk the actions and pluck out the ones we wanted as system actions first.

This would be equivalent to replying with a promise to everything reducer action while we process the system actions.