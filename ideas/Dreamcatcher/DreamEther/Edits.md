Should an edit make a new header, and replace what the packet points to ?

Or should it mutate the header, inserting the new contents ? No, bx shares are set for that header.

Or should an edit become a header, with uplink pointing to previous header ?

What should the new header point to ?  The packet can repoint to the new header, the new header uplink should point to the edit ?  Then the edit points to the old header.