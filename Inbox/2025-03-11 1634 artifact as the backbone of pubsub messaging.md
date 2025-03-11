
>[!tip] Created: [2025-03-11 Tue 16:34]

>[!question] Targets: 

>[!danger] Depends: 

The properties of artifact are such that it effectively provides all of the compute resources and capabilities that many popular charged services offer, like pub/sub messaging, real-time video calling, large object storage, high-throughput queues, and high-throughput compute. 

We could take this base design and make the argument that we could make all these competitive standalone services that are really just Artifact under the hood, with global regions, but they can also easily integrate with other Artifact services. This provides a way for Artifact usage that is internal to poke out. 

they become standard competitive options unto themselves. If you additionally want to plug them into serverless compute, cheap high-volume storage, and other features, it comes kind of built-in, ready-to-go, and easy to use. 

all the while the deployment mechanism being AI-guided is very natural and very fast, going from prod to test and back to prod again is very seamless. As well as being hooked up to automated exception monitoring that can attempt to solve the bugs in your code in real-time based on the infrastructure. Plus allowing replay of any faults or any activity that has occurred. Plus allowing contributions from anyone if you open-source or open-state what your infrastructure is, and so anyone can see inside it and can improve it for you on your behalf. And can share revenue with these contributors based on some fair allocation algorithm. 

We should be able to present easy UI options so that if you integrate your service using our service or then you can just use these widgets to show things like where the servers are located and what data paths are being enacted how much bandwidth is being sent through them all what the latency is the jitter other such statistics 

for doing real-time communications, we probably need to have an always-on instance, so we would fire up the dedicated real-time computer in this case. We would manage its CPU utilization to ensure that we fired up new ones when they were needed, as well as consolidation of connections once Swiss cheese these holes appeared from users disconnecting and leaving an unbalanced load or uncompacted load. 

A good thing about running a real-time video or voice service through the Fly.io Edge containers is that if the client is disconnected or suffers loss which we can detect using Client Side Libraries then the server still has a copy so it can buffer on behalf, which can allow the client to catch up, so the client can show the other side what or how much it processed so the other people in the room can be aware of when what they're saying is having difficulty getting to their own local Edge server or when one of the participants is having difficulty downloading it so you can put a definitive end to the debate about whose side of the connection problem is on This can be represented as a very simple GUI widget showing the network architecture in place and the performance and statistics and graphs of each particular component or leg in the hop. 