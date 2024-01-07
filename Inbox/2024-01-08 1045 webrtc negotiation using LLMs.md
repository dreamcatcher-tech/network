
>[!tip] Created: [2024-01-08 Mon 10:45]

>[!question] Targets: 

>[!danger] Depends: 

Give the LLMs the basic tools of managing a webrtc connection and the goal of making that connection.  Each LLM should get a place they can publicly advertise to the other one, like a static page that is a jump off point.  

Once they have found each other using the slow version, like a dht query or similar, then they can focus on getting webrtc opened up.

They can try a different list of relay servers, which can be gossiped around between each other, even resorting to sending each other emails.  Ultimately they would show the webrtc connection and show the reliability of that connection, with a relayed connection as a backup / quality booster.

They then run processors that take different streams in and use them to give the lowest latency, without it being focused on how to set all that up - the LLMs control the device and then let all the computation be done by it, with them monitoring and tweaking it every second or so.

So in this way, we could set up a webrtc video call between two parties without much code, and with highly adaptive reliability.