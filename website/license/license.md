---
id: license
title: The Dreamcatcher License
sidebar_label: License Overview
slug: /
---

## License Overview

This document gives the high level overview of the Dreamcatcher License Stack.  This is not a legal document, but rather gives the intent of the agreement when working inside the Dreamcatcher, and in due course the briefing material to a Legal Professional to generate this stack dependent on location.

The Dreamcatcher is a Packetised Innovation Platform that brings together Do-ers (those who carry out tasks), Funders (those who provide capital for tasks to be done) and Buyers (those who look to use the software produced in return from some consideration.)

There is no preferred or authoritative organisation within the Dreamcatcher - and so there is a need to offer to Members a legal template under which they can do business with each other.

## License Scope

Dreamcatcher is Open Source, and so others may choose to fork the software and run it under different rules.  However, the Dreamcatcher Brand is proprietary, and therefore to work within the Dreamcatcher domain it's necessary for all Members to agree to abide by a common set of rules.

In overview, there are three parts to the Dreamcatcher License Stack:

1. The Dreamcatcher Public License (the DPL)
1. Modules, which extend that License for specific purposes, but which cannot overrule any clause in the DPL.
1. The Dreamcatcher Contract, which contains the specifics of what is agreed.

## License Stack

 ```mermaid

flowchart TB
subgraph Dreamcatcher License Stack
Modules-->|consistent with|DPL[Dreamcatcher Public License]
DCC[Dreamcatcher Contract]-->|References| Modules
DPL-->|wraps| DCC
end
 ```
## Use of a Pool

Work undergone within the Dreamcatcher License Stack happens within the [Pool].  This acts like a club, where all members have agreed to abide by the rules, and can be thrown out if necessary.  

Entry into the Pool and each stage in producing the work goes through QA.  QA is a safeguard that ensures that the Request or Idea is of sufficient quality that the intent is reasonably obvious, and checks that the work done meets that QA'd intent.

The Pool also offers the escrow service, which is released on a QA pass.

### Dreamcatcher Public License (DPL)

The DPL is the foundation of the License Stack.  The DPL comes into force between any two Members of the system who have each unilaterally signed up to the Core DPL, and by doing so agree to be held to its clauses when dealing on the Dreamcatcher with any other Member who has also signed it. It forms a common, basic standard for interactions.

### Dreamcatcher Contracts (DCC)

Dreamcatcher Contracts detail an agreement between a Funder or Buyer and a Do-er, where the Do-er carries out work on a Packet in exchange for the consideration detailed in the DC Contract.  It also stipulates the Pool under which the work is offered; Pools provide access to QA, Arbitration and Escrow services.

Unlike the Core DPL, DC Contracts are not signed unilaterally in advance but rather are agreed between two parties before signature. 

### Modules

Optionally the DPL can be extended by the use of Licence Modules which are unilaterally signed and are consistent with the DPL. If a Module has been independently and unilaterally signed by two parties, it is available to those two parties should they want to do business. I.e. it forms a menu of pre-signed P2P options that can be selected.  An example of a Module would be an NDA which can be references from a Dreamcatcher Contract and enforced through the Dreamcatcher Public License.

## In Use

The aim of the Dreamcatcher License Stack is to provide the DPL generally, optionally to provide off-the-shelf Modules (e.g. an NDA), and to allow hooks in the legal wording that binds these with a Dreamcatcher Contract to provide a legal agreement.

The Dreamcatcher License Stack is captured and executed in code, but can also be condensed into a printable format that can be read by legal professionals and signed by third parties if necessary.


[Pool]: ../docs/dictionary/User_Dictionary/Pool


