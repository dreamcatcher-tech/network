# 05 Warfabric

The current situation with the deployment of Russian forces on Ukrainian soil has five likely outcomes:

1. Short War - Russia escalates military operations, increases artillery and airstrikes and extends their use against non-military targets; escalates air operations from their current low tempo; targets key national infrastructure, energy supplies, comms networks.  Succeeds in capitulation of the Ukrainian gov and installs a pro-Moscow administration.  Ukrainian resistance would largely disperse into irregular small groups with little or no centralised control or logistics, with any surviving rump Ukrainian gov working from abroad to rally support.
2. Long War - Russia gets bogged down in the logisitically difficult task of fielding an occupation force for sustained periods over a large geographic area with a sizable population, in the face of motivated armed Ukrainian groups, largely irregular but without clear centralised control.  
3. European War - a partially successful Ukrainian campaign, or, alternatively, an unacceptably poor (for Russia) outcome in Ukraine, encourages Russia to push the area of conflict into non-Nato and previously Soviet countries bordering Ukraine - Moldova and Georgia.  Possibly, the provision of EU and NATO lethal aid to Ukraine and the reinforcement of NATO countries in the vicinity of Ukraine is considered active aggression by Russia, warranting limited escalation such as establishing a land corridor between Belarus and Kaliningrad.  Similar to (2) Long War, with extended footprint.
4. Diplomatic Solution - NATO/EU discovers an 'off-ramp' for Russia, short of capitulation of Ukraine.  Conversely, NATO/EU considers the economic or political cost too high.  International debate continues as to the long term normalisation of relations while accepting en passant the balkanization of Ukraine.  Limitted and asymetric warfare continued by Ukrainian irregular forces.
5. Decapitation or defenestration of the President of Russia - out of scope.

In outcome (1), (2) and (3), there will be a need for a communications and coordination fabric for irregular Ukrainian forces to leverage their asymetric advantage.

The main characteristic of asymetric warfare is that the dominant force has centralised Command and Control, most likely well-developed logistics including the rotation of forces; they can deploy sophisticated materiel in theatre and may have freedom of manoeuvre within the battlespace.  Whereas, the subordinate force has eclectic capabilities, is dispersed, does not have clear command and control lines, does not have freedom of manoeuvre and may not enjoy reliable logistics. 

In such as battlefield, asymetric forces may nevertheless have the advantage against the dominant force. A regular force under doctrinal control can be anticipated in mode of operation (although not necessary in deployment tactics); a smaller irregular force has no preferred doctrinal control, and therefore is difficult to anticipate.  The more dissimilar the opponent, the more difficult it is to anticipate his actions.  An opponent without doctrinal control cannot be practically anticipated.

However, short of descending to loosely associated individual operational cells, asymetric forces still need a method to coordinate, inform, communcate and prioritise.

This system is intended as a tool to allow that to happen.


## Strategic Intent

The system is intended to support an irregular force in asymetric warfare against an occupying force.  The system is to provide decentralised C3 (Command, Control, Communications), and by implication Resource Procurement and Allocation (Logistics) to the irregular force.  It needs to operate in a manner which allows for the prioritisation of resources, efficiency of their use, their deployment on specific tactical objectives while anticipating the potential modes of failure and their consequences, and the robustness of the overall system in the face of success and failure.


## Tactical Intent

In order to meet the Strategic Intent, the system must cover each of the three points on C3, but without the need for a centralised command centre or deployed/secure communications network.  Breaking these down, the system requires:

1. Communication: Robust and secure comms - the message always gets through.
	1. This may be through an API to existing (Telegram) or new messaging system.  Aim is to support the following tactical intents through secure comms that are likely to be disrupted, and which therefore prioritise that the message got through over speed of message delivery.  By analogy, traditional comms is UDP-like.  Asymetric comms needs to be TCP-like.
2. Command: Request Submission
	1. A method for submitting targets of opportunity, and targets to be avoided, with meta data on how reliable the information received is.
3. Command: Request QA
	1. A method for others to comment on, promote or deter targets referred to in (3)
4. Command: Target Prioritisation
	1. A method to allow private groups and inter-groups to manage finite resources, feeding back to (5).  Ie having a list of QA'd targets/objectives, not all need to be/should be/can be carried out in parallel.  This is the strategic level of coordination.
5. Control: Situational Awareness
	1. A method for condensing decisions that have passed QA at (4) into a tactical map or data representation that informs others in their Requests at (3)
6. Control: Target Identification
	1. A method to collate information on the target or objective from others, once that target/objective has passed QA.
7. Logistics: NFT non-combatant contribution
	1. Throughout 4-7, a method for non-combatants to to request (3) and promote (5-7) while providing supporting funds in exchange for NFTs for that objective.
8. Logisitics: Combatant Reputation.
	1. A method to weight (3-7 based on QAd results of previous objectives)



## Detailed Description


### Tactical Intent 1: Communication: Robust and secure comms - the message always gets through.

In support of the basic necessity to communicate, consider and execute on plans, there is a basic requirement for a secure comms channel, that being:

#### Must

1. Provide an accessible comms channel that is available to a majority of the irregular troops, without any requirement for training or additional equipment.
1. Provide secure communication between those on the comms network, in that intercepted comms cannot practically be read, albeit network analysis may show interactions and concentrations of interactions.

#### Should 

1. Be deployable with equipment that is already in the possession of the irregular force.

#### Could

1. Allow sub-groups to be set up and removed, as required by the tactical situation.

#### Must Not

1. Allow data recovery of communications or the operation of the system from captured equipment.


### Tactical Intent 2: Command: Request Submission

The first duty of command is to identify what can be done, ie what opportunities are available to the irregular force to further their strategic aim.  In a decentralised C3, identifying opportunities must likewise be decentralised.  This aspect of the system must cater for that identification of opportunity:

#### Must

1. Allow the submission of tactical opportunities in sufficient detail as to allow others to assess their worth, and comment on the tactical plan.
1. Provide a method for marking those submissions with additional information as to whether or not it should proceed.  (NB, this is the basic requirement - minimally "For the avoidance of fuck-ups".)

#### Should 

1. Provide a method for more detailed interaction with the wider force, to allow for timing and resource coordination, concentration of force and "Red Team" analysis (ie, antogonist analysis of what failure modes are possible.)

#### Could

1. Provide a method of weight voting based on multiple metrics, e.g. previous reputation of those providing an opinion, location and motability of resources, resource levels, time since previous deployment, potential tactical and strategic value.

#### Must not

1. Allow Byzantine submissions, or DOS submissions, to crowd out genuine requests.


### Tactical Intent 3: Command: Request QA 


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 

### Tactical Intent 4: Command: Target Prioritisation


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 


### Tactical Intent 5: Control: Situational Awareness


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 

### Tactical Intent 6: Control: Target Identification


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 

### Tactical Intent 7: Logistics: NFT non-combatant contribution


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 

### Tactical Intent 8: Logisitics: Combatant Reputation


#### Must

1. 

#### Should 

1. 

#### Could

1. 

#### Must not

1. 

## Further Guidance

### Offer

#### Expected Budget

#### Due Date

## QU Authority

