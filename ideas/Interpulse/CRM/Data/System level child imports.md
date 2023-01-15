If we could make a template of pulses for a new child, and then alter only the state within them, then present these as the children to be hashed, signed, and the changes rippled up, then this should be significantly faster than using the actions channels each time.

This approaches looking like a pull request faster.

Flick between conventional object and hamt if under a certain size to avoid any tuning issues whatsoever, or at least defer it.  Probably faster than tuning the hashmap class.

If the complex could be run without any pulsemaking right up until the end, then signing done on the whole tree at once, things might be a lot faster.