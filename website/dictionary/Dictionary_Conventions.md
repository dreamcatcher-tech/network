---
id: Dictionary_Conventions
title: Dictionary Conventions
sidebar_label: Dictionary Conventions
---

1. Titles of Dictionaries are denoted in all-caps. E.g.
   1. DREAMCATCHER USER DICTIONARY
1. The Dictionary is hierarchical in nature. That is, one Dictionary can be extended by another, while inheriting the definitions of the first. The relationship is:

   1. DREAMCATCHER OS (or DOS for short) DICTIONARY
   1. DREAMCATCHER ARCHITECTURE DICTIONARY
   1. DREAMCATCHER USER DICTIONARY

1. A word Capitalised and in Italics refers to a defined term with its own Dictionary entry.
1. A defined term can be followed by a type, in parentheses. The list of valid types is as follows:
   1. Object
   1. Field
   1. Event
   1. Selection
   1. Link
   1. Workflow
   1. Typeof
   1. Covenant - logic in the blockchain system
1. Structure conventions:
   1. Object - denoted in the structure as: Objectname/
   1. Child - denoted in the structure as an object on a new line nested in by one tab from the object above it.
   1. Field - denoted as: ?fieldname: fieldvalue
   1. Link to another Project’s Object: name -> ObjectLocation
   1. Link in another Project that refers to this Project’s Object: name <- otherProjectsLink
   1. Weak Link to another Project’s Object: name ~> ObjectLocation
   1. Fork of an Object: name <# ObjectLocation which reads as “name is a Fork of ObjectLocation”
   1. To indicate where another Object is a fork of this one, the format is name #> ObjectLocation, where ObjectLocation is a Fork of name.
   1. Data in the structure that is auto-generated from an algo: (generatedFromAlgo)
   1. Branches of Projects are denoted by: [governanceName$/]projectName[@forkName].
   1. projectName@branchName denotes a Branch which has the same Governance as the Origin.
   1. governanceName:projectName@branchName denotes a Branch which has different governance from the Origin.
   1. Specific blocks within an Object’s chain are denoted by: Objectname#blockNumber. Objectname can be a full path or abbreviated for example.
   1. The top level of a Sovereign Object is denoted by Project1:/
   1. A Project which has not yet been Birthed is denoted by Project1/ This is a shorthand for the location of the Object within a hierarchy. E.g. DOSInstance:/Apps/Dreamcatcher/Projects/Project1/ can be shortened to Project1/
1. A term which refers to another location in the Dictionary is denoted by square brackets, e.g.:
   1. Attribution Algorithm [See Attribution ALGO DICTIONARY]
