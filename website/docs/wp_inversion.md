---
id: wp_inversion
title: The Inversion Currency Whitepaper
sidebar_label: Inversion (NVN)
---

### Goal

<!-- What is the goal of the inversion currency -->

Provenance based payments, however small.

The goals of the currency are different depending on the phase. There is a speculative phase, which then transitions to a securities phase.
In the speculation phase, the goals are:

1. Allow investors to remove their money at any point - ie: ensure liquidity for token
1. Prohibit crashes, at the price of dampened booms
1. Forbid founders to take all the funds and disappear
1. Capture the speculative value of the endeavour in token form
1. Allow modest appreciation of value to reward early investors
1. Provide a burn rate to founders to sustain the project
1. Permit anonymous participation
1. Record contributions in an irrefutable way - money and code

1. NVN are completely independent from the price of joules in USD

In the utility phase, the goals are:

1. Provide a stable store of value, so holding the currency does not fluctuate wildly, and generally rises over time
1. Make the price insensitive to buying and selling of the currency
1. Incentivize holding the currency rather than selling out immediately
1. Increase the value of the currency based on
1. Ensure a slowly decreasing cost per Joule in USD (assuming USD is stable)
1. Ensure a slowly increasing value of NVN relative to the USD

This is made possible because the system is really a system for coordinating computation, that has the useful side effect that it also maintains an accounting system

NVN supports attribution tables natively in the least possible amount of information. Direct accounting of flows of attribution thru dependencies would generate a lot of traffic. NVN supports only calculating these amounts when withdrawls happen. This lets dust level transactions accumulate into useful amounts, without wasting the rewards in transaction fees. It allows to receive payments in a value less than 1 Joule, which would otherwise be useless to transfer as the cost of the transfer would be more than the value received.

It is also possible to operate at unlimited scale, as the minted coins can be used offline, in closed networks, and can be rejoined if the provenance remains correct according to the system rules. This allows supreme privacy, but also supreme assurance of AML - often providing both at the same time.

The price of the AMM is set by a calculation based on usage in joules over time, reserves in the AMM.
High activity with low deposits would increase the price, drawing in more deposits.  
Low activity with high deposits would stabilize the price, triggering exits as money better used elsewhere.
Will settle on an equilibrium of deposits vs usage.

In the power market the currency functions as a medium of exchange. It also functions as a store of value backed by offchain assets that it controls, and backed by the volume of computation purchases being made thru it. As a store of value, it effectively allows purchases of compute resource to be deferred by exchanging with someone else who has different time preferences. For example if you run your home computer for 12 hours a day doing work for others, the currency you earn can be spent.

This same time distribution principle can be used compressively - you can run your home server at 100% load for 2 hours, and then exchange that work with others to run your applications overnight at 5% load on their machines.

Designed so the price never goes down relative to the USD, but will over time go up.

Two kinds of growth are predicted for our system.  The zero sum fraction of all computing load on the planet that we aim to replace, and the expansion of worldwide computing requirements.  We see that expansion being dominate for the next 2 decades.

Bitcoin = Proof of Waste
NVN = Proof of Work Purchased

? how to increase based on a market cap of the currency ?

### Consensus mechanism

Based on the concept that if buyers are consuming computational work for their own purposes from suppliers in a uniform way, then which supplier is chosen can be randomized to prevent errors and abuse. Being blockchain, this work can also be calculated multiple times for fault tolerance.

The premise this currency operates on is that purchased computational work that is public can be used as a proof of work assertion about the state of some other blockchain. So in this system, the primary purpose is to supply computing resources in a generic and interchangeable form, with the side effect being that computation being used to assert the correctness of a ledger.

There are two major incentives for participants to operate the ledger correctly. First is that they themselves rely on getting paid for their provided labour from the correct functioning of the chain. Second is that purchasers want their work to be done correctly for their own selfish purposes, and so have strong reason to support the correct functioning chain.

Suppliers are not paid immediately, but must wait some period of time where their dishonesty might be discovered, and they have funds revoked from them.

### Attack cost

Attacks are difficult because one would have to overpower the computing work on the chain to overthrow it. As this work grows in volume, its price also goes towards zero rather than holding a premium as hashing power does, so gaining enough computing to overthrow the cheapest computing resources available is not cost effective.

### Extensions

The concept of taking something hard to do and provable and using the provenance of it to make some other assertions can be taken several steps further. We envision it being used in the case of code commits, where code that has passed review on popular projects can be treated as an agreement of some weight that is hard to overthrow, and so at the point of publishing it can also assert the correctness of the latest block in the top level ledger. These assertions are globally quite frequent and add an extra dimension of difficulty to overthrow the chain increasing trust in its correct operation.

The code committers are incentivized to keep the chain upright as their assertions about their code depend on it to, if it is used as a broadcast channel to assert what the latest correct version of their software is.

Consumers of the software are also incentivized to keep the top chain correct as they depend on it for their software security.

The repeating principle is a shared trusted zone where multiple suppliers and multiple consumers all desire correct operation of the trust zone each for their own self serving purposes. This causes the strength and breadth of this zone to increase as more actors are added. The spread of the zone is determined by how broadly useful it is, so in the case of a universal computing surface, its breadth is as wide as anyone wanting any kind of computing. In comparison Bitcoin is as wide as anyone wanting to make payments in that particular currency.



### What, who and why

<!-- What does the inversion currency do, who does it do it for and why do they want to do that? -->

For people who use the currency, the price is stable, making it feasible to hold the currency simply for the purposes of using it later, rather than derisking by moving to a more stable store of value.

For those producing goods, particularly computation and works of knowledge, the payments can economically be dispursed using attribution tables, and in tiny amounts.

For anyone transacting it has unlimited scale of transactional thruput, with cost fluctuating only by the price of pure computing resources and nothing else.

For people who hold the currency, it offers stability of value, with steady growth based on usage. This growth is buffered to make its curve smooth.

### Alternatives

<!-- What is the best current and foreseeable future alternative for each need identified in 1 and what makes NVN better than that alternative -->

### Red queen

<!-- What is the sustainable competitive advantage that allows NVN to stay ahead ahead of the alternatives -->

Every payment that is made using this system sends a small amount to the innovators who built the system.
This creates an incentive for others to improve the system to receive some of that revenue stream.

### Components

<!-- What are the components of the system. How do they work and how do they interact -->

[Interblock - the universal object protocol](./wp_interblock.md) which provides the underlying protocol for NVN, as well as the universal computing surface

## Properties

1. Work of the chain is the delivery of purchased labour.
1. Stable AMM pricing.
