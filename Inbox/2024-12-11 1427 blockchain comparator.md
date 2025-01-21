
>[!tip] Created: [2024-12-11 Wed 14:27]

>[!question] Targets: 

>[!danger] Depends: 

Additional comparisons to add:

1. Token dependency:
    
    - Does the chain have a built-in token?
    - How tightly coupled is that token to the consensus?
    - How easy is it to remove, replace, or adjust that token?
    - Is the consensus mechanism itself token-agnostic or inherently token-bound?
    - is the token stable or fluctuatable

1. Integration format:
    
    - Can the chain’s data and consensus be naturally represented in Git commits or NPM packages?
    - Are translations or bridging layers required to interface with standard tools, and if so, do these weaken the consensus?
3. Portability:
    
    - Can the system run in isolated parts, completely on your own infrastructure?
    - Can these isolated instances later merge consensus without loss of trust?

For the demonstration of a sharded or “splintered” proof-of-work system, consider calling it “Shattered Proof-of-Work” (S-PoW). This name reflects how the workload can be broken into isolated segments and later merged based on verifiable computational work.

There is significant political entanglement in the token, since this is the contribution, and so changing the token will be rejected by the community.



It seems it isn't the LLM execution that matters on the chain, its the execution model at all, which matters.

"thereby removing the unfairness or distortions introduced by a chain’s native token."

like a proof of commit, or proof of contribution, proof of knowledge work.

having no token, but also having a centralizing force to coordinate around.