We could tag each snippet of the chat history with sentiment, on taskness, train of thought score, fragmentation

Let the user change the role, system messages by editing files.  But ultimately let them be edited by the main tool, and then have it know how to update those specific files.  Walking a user thru a git conflict seems a useful scenario to be able to navigate.

Comparison mode where ai goes to do something, then it generates a question that represents a test for that question having been done, then tests that.  May also generate a negative question, and checks if that comes back negative.  Eg: "change every word to start with B" => has every word changed to start with B and nothing else ? name what else has changed (feed this back in as a corrective loop) => not all words should start with B OR there have been no changes relating to B, then check that this is false.

Ask GPT to guess at what a useful layout for a given schema would be, and to select from the list of components that we have to build with.  give it the tools to persist this design, and update it based on user feedback, and send it back to mothership.