
>[!tip] Created: [2025-01-19 Sun 11:53]

>[!question] Targets: 

>[!danger] Depends: 

**Inventor’s Notebook Entry (Using “refs branch”)**

**Overview**

- A dedicated “refs branch” tracks cross-branch references without polluting the main commit history.
- By referencing this single branch, we avoid direct merges between branches that could create “crisscross merges,” where multiple common ancestors tangle the history.
- Each branch periodically updates references from this authoritative branch to synchronize state.

**Avoiding Crisscross Merge History**

- Traditional Git merges between two branches that have already merged elsewhere risk forming complex commit graphs with multiple ancestors.
- The refs branch prevents those complications: branches consult a single source of truth instead of merging each other’s commits directly.

**On Short-Lived References**

- Short-lived signals aren’t strictly necessary because once a reference is recorded in refs, it’s permanent and replayable.
- Ephemeral operations can happen between commits, but each relies on an agreed-upon state from refs.

**Indexing & Stale References**

- No special indexing is needed for older references. Git’s immutable history retains them.
- Updates always reference the latest commit on refs, ensuring participants remain in sync.

**Compatibility**

- Standard Git tools still work. The extra validity rule is that any cross-branch communication must point back to the refs branch.
- A quorum-based update process secures the refs branch against unauthorized pushes.

**Key Points**

- Refs branch eliminates crisscross merges by centralizing cross-branch signaling in a single authoritative location.
- All references are cryptographically signed, giving a blockchain-like assurance of authenticity.
- Branches remain independent; merges only happen to adopt the latest refs state, keeping histories clean and consistent.

So basically allowing branch to branch comms that is repeatable, but without torturing the git branch history, as can ofter occur in branch to branch comms.