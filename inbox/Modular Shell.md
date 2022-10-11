Shell can be broken into nested covenants, some of which can be represented as dedicated chains.  These chains can be lazily created, as they only need to be made when we have data to store in them.

An action to the shell can be tested to see which chain it should be routed to, and then sent that way for processing.  The child chains should be able to receive api instructions directly too.

Optionally, we may require the commands go to the subchains directly.