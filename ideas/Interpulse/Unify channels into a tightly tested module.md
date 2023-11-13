Currently channels are not a module - they should be removed out to their own npm package, which deals strictly with the protocol, and allow experimentation with that protocol in a very concise way.

What gets done with the actions after arrival to the reducer is separate from the protocol by which they arrive.

We should provide utility methods, which make it much more fluent to use.

Documentation about how the protocol works is easier to provide too, given the test files will be more focused.