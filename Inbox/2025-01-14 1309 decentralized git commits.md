
>[!tip] Created: [2025-01-14 Tue 13:09]

>[!question] Targets: 

>[!danger] Depends: 

If we can run a repo that is decentralized, and can reject commits that don't follow the protocol, then that seems all the way to having a blockchain ?

The consensus mechanism can be PoW, or it can be any other thing.

Ideally it would be proof of work done that is on an actual branch, so its proof of internal work, or something, like it ran a bunch of tasks.

Maybe proof of low latency could be used ?

So any repo you want to run could be run in a decentralized way, making it censorship resistant.

Could copy off the eth code, or other altorighms, and run this in pseudocode using LLMs or similar ?
Could replicate the eth algorithm, and just segment off groups of validators who are the valid branch producers.  They are now the only ones allowed to sign the pillar branches.

A math focused LLM could be in charge of execution ?

Circulating the hash of the new commit is the same as circulating the validators branch.

Making each validator have a single branch means that we can detect conflicts from that validator rapidly, and agree to punish them, since they would have signed a conflicting branch.

Each of these quorums could actually be a validator branch of a broader repo.

Allows validators to easily relay each others messages by way of relaying git info about latest and passing git objects around.

The theory is that a computational resource marketplace is reason enough to maintain an asset register as a side effect, which can be used as a distributed ledger.  What fortifies it is the computational suppliers use the energy they expend to attest to certain states of the ledger, which includes their payment, which gives them incentive to process promptly and with integrity.

A fee is paid to the attribution algorithm, like a gas fee or network fee, which pays everyone who made the network possible.

Ideally this could be used on realtime data, altho with a minimal delay that should be equal to the RTT of the packets.

---
Below is a concise description of the proposed model:

## Overview

- **Main Branch**: The canonical ledger state.
- **Validator Branches**: Each validator maintains a separate Git branch, storing local operations and signatures referencing the main branch’s commit hashes.

## Mechanics

1. **Local Commit Creation**
    
    - Each validator independently creates commits in its own branch.
    - These commits contain:
        - A reference to the latest known commit on the main branch (hash or parent commit).
        - The validator’s signature attesting its belief in that commit.
2. **Cross-Validator Visibility**
    
    - Validators share their branches with each other in a read-only manner (similar to sharing a remote branch in Git).
    - Other validators can pull these branches to see which commits (and corresponding main-branch references) have been signed.
3. **Consensus on Main**
    
    - A new commit on the main branch is considered “finalized” once ≥2/3 of validator branches have a signed commit referencing it.
    - Once validators see enough sign-offs, they know the main-branch HEAD has advanced to that new commit.
4. **Fast Forward / Skipping Old Commits**
    
    - A validator doesn’t need to finalize old commits if a newer one gains enough signatures.
    - Because each validator’s branch unambiguously references a main-branch commit hash, there’s no confusion about which commit they are collectively finalizing.
5. **Safety and Liveness**
    
    - Safety: No two conflicting main-branch commits can both gather ≥2/3 signatures referencing different parents.
    - Liveness: Validators can always create new local commits (sign-offs), and once a quorum references the same commit hash, it’s finalized—even if some validators were still locked on an older commit.

This approach preserves BFT-like guarantees without rigid locking at each round: validators can “fast-forward” to a new main-branch commit if it accumulates enough sign-offs in other branches.