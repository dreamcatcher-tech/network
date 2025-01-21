From the [Wikipedia Page](https://en.wikipedia.org/wiki/Project_Xanadu#Original_17_rules) Xanadu lists 17 rules that define it.  We believe the Dreamcatcher solves all of these constraints, which are:

1.  Every Xanadu server is uniquely and securely identified.
2.  Every Xanadu server can be operated independently or in a network.
3.  Every user is uniquely and securely identified.
4.  Every user can search, [retrieve](https://en.wikipedia.org/wiki/Document_retrieval "Document retrieval"), create and [store](https://en.wikipedia.org/wiki/Computer_data_storage "Computer data storage") documents.
5.  Every document can consist of any number of parts each of which may be of any data type.
6.  Every document can contain links of any type including virtual copies (["transclusions"](https://en.wikipedia.org/wiki/Transclusion "Transclusion")) to any other document in the system accessible to its owner.
7.  Links are visible and can be followed from all endpoints.
8.  Permission to link to a document is explicitly granted by the act of publication.
9.  Every document can contain a royalty mechanism at any desired degree of granularity to ensure payment on any portion accessed, including virtual copies (["transclusions"](https://en.wikipedia.org/wiki/Transclusion "Transclusion")) of all or part of the document.
10.  Every document is uniquely and securely identified.
11.  Every document can have secure [access controls](https://en.wikipedia.org/wiki/Access_control "Access control").
12.  Every document can be rapidly searched, stored and retrieved without user knowledge of where it is physically stored.
13.  Every document is automatically moved to physical storage appropriate to its frequency of access from any given location.
14.  Every document is automatically stored redundantly to maintain availability even in case of a disaster.
15.  Every Xanadu service provider can charge their users at any rate they choose for the storage, retrieval and publishing of documents.
16.  Every transaction is secure and auditable only by the parties to that transaction.
17.  The Xanadu client–server communication protocol is an openly published standard. Third-party software development and integration is encouraged.

Closest approximations have been limited prototypes like OpenXanadu or offshoots (Udanax) and some decentralized hypermedia efforts, but none fully realized the original vision. Key issues include persistent, globally unique document addressing; dynamic transclusion at scale; secure micropayments and complex royalty structures; and universal access control. The complexity and overhead of maintaining stable links, ensuring stable identity, and handling real-time document royalties have been the main roadblocks. With advancements in distributed storage (e.g., content-addressed systems like IPFS), secure identities, and integrated micropayments (e.g., blockchain-based solutions), some of these challenges could be revisited and potentially solved.

the cheapest micropayments system is a deferred one - so one that accumulates micropayments before setting is cheaper than one that records each transaction.

not sure why server identity matters, and it can't be the same as a person ?

How can we know if xanadu can actually be solved ?

reverse transclusion as a way of atributing back for code snippets.  So for all code, we attribute back to whoever said it first, or something like it.  For all code, we order it as a type of function pattern or something, so that all docs point back to the early writers.