
>[!tip] Created: [2025-06-02 Mon 13:11]

>[!question] Targets: 

>[!danger] Depends: 

if the way that frames were developed was inside a frameholder which was wrapped in a mocked artifact, then how would be get them to be selected directly ? will we always have two pages, one as the holder and one as the frame ?

running the frame in a holder seems to make more sense as there is more about the environment that can be tested and mocked, like styling and scrolling.

so in this sense, it might make sense to only mock at the holder level, and then have two files - one is the true frame, the other is the default index which is the holder for the frame while it is being developed.