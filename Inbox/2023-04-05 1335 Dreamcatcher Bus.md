
>[!tip] Created: [2023-04-05 Wed 13:35]

>[!question] Targets: 

>[!danger] Depends: 

## Situation
We have a blockchain based system that we want to develop into a service bus for connecting business systems together.  This bus would include processing capability, and would form and installation target for making bus native systems.  An appstore would supply these applications, and requests for applications would be gathered by a bus application that was part of the base installation.  A services marketplace would allow purchasing services for construction and maintenance of the bus.  The software would be open source avoiding any form of vendor lockin.

An active bus which is capable of computation as well as data storage and transmission allows a surround and absorb pattern to unfold, where blackbox systems are gradually replaced by open bus native systems.

## Subsystems
1. Publication of digital topology and costings as an advertisement for services
2. a system bus as an integration baseline.
3. cloud connector services to regain control of cloud based data
4. an appstore for products that plug into the bus
5. a services marketplace for bus related things

Ultimately, if a group of companies can implement this bus, then cross company applications can be deployed that will enable generalized goods and services trade in a purely digital manner.

## Cloud connector
Disaster recovery should be held to a single standard across the company - leaving it up to each individual SaaS vendor will eventually lead to irreparable loss.  

## Bus MVP

Root bus - a global bus that contains the top level appstore.

## Notes

Bridge between multiple cloud based system.  View communication between those systems, take backups.
Host the bus, support it, migrate it, take it offline.



After chatting with Rod, the follow next steps arise:
Two major areas of pain are:
1. ETL processes required for consolidated reporting
2. System integration between software systems.

Make a base connector to PowerBI so the bus can be dropped in immediately.

Make a system bus that goes in to a company.
Value point is as soon as the company wants consolidated reporting, as the bus installation would be simpler, cheaper, has more connectivity options.
Deployment is currently $5k - $10k for the sql database and data integration pieces.  Then on top is about $500 per report.
API mapper that wraps each system with its API functions and provides a dictionary to other systems or to a standard format.
Making the bus come with a store and a marketplace for services

A graphical tool to map out the systems in an org.  Show all the systems and their connectivity strengths to each other.
Map out manual processes too.

Impact marketplace / toolbox.
Services marketplace where the mapping tool also includes each individual computer, and th
Show the bus topology shifting over time.
Plan the tranformations based on bus topology.
Show other people with similar topologies.
Cost of each component, and the API calls that they are capable of.
Show the usage of the actual APIs so can score the cross section.

There are pillars in a company, like sales, financial, data governance.
Model people in an org as connected to systems in the topology.

Connect to Xero, and extract the cost of each topology piece so can know how much each is costing and how much it should cost.  Allow a shared database

Publish your own connectivity topology, billing per month, usage / calls, integration maps, integration desires.  Open publishing and deduplication of requirements.

Syncing and backing up data in cloud based systems.  Configure the frequency of sync if it is polling based.  Triggers into other systems can be formed in this way.



## Integrations work
Map out what companies are currently paying for integrations between difference systems

## Process management
The bus should be able to detect when a process is taking place, and connect multiple system data interactions together in a common thread.

## Integrations marketplace
Wrappers around systems describing their api in standard terms.
Hooks / functions / triggers, but also the models of the data inside the systems and mappings between them.  This should be able to be filled in by a low skilled person, and then automatically tested to ensure connectivity with the target system.

## Topology tool
The topology tool should be able to show systems, and people, and individual machines.
Use this tool without having the bus installed.  Show topology mesh ratings, and how they are missing some connections.

Summarize multiple instances of company to view the overall systems connectivity graph.  Shows how many times a given system connects to another one, and how much is being paid for that integration.

## OpenIT
IT services provide a stable baseline to enable a marketplace of services.  Stop bundling the whole IT projects along
Diagram of how being a contractor / employer onselling is dangerous and kills markets.