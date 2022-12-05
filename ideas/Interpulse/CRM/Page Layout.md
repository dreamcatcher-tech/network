## Multiple accordions

## Fully scroll the main page

## Customers list is never an accordion
Accordions can set their max size by %vh

Callback to tell the top level stack to grow to full height

Put each accordion in its own box with its own overflows - turn overflow off if not expanded, once transition has completed.

## Problems
1. Accordions need to 'discover' their size nad squash other panels
2. Virtual lists need to be told what their size is
3. Sometimes the virtual list reaches its maximum size, in which case it should not push the accordion to grow any more
