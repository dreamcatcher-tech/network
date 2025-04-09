
>[!tip] Created: [2025-04-09 Wed 16:50]

>[!question] Targets: 

>[!danger] Depends: 

storage is just computed as the size of the commits you are doing.

compute is measured by ms cpu time busy, and cpu time idle (waiting for some async call to complete).  Any busy time in a 50ms unit is counted as being busy.

Basically you have die time, when your hot on the CPU / GPU silicon, then you have ram time, where you're just parked.   If you're not on ram or die, then no fee.

data download should cost too.