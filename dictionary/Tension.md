
# Tension

> [2022-09-15 Thu 16:29] <br/>
> Targets: [[PulseChain]] <br/>
> Depends: [[]]

A [[PulseChain]] is said to be under tension if any of its requests have not been settled.  Its requests may have received a promise, but the tension still remains.

This chain needs some remote state change from another [[PulseChain]] to be able to be exhausted.

This concept is utilized for [[crash recovery]] to identify what [[PulseChain]]s need to be processed on restart.
