
>[!tip] Created: [2023-02-14 Tue 17:35]

>[!question] Targets: 

>[!danger] Depends: 

If a single validator chain lost some data, it might restart generating pulses from an earlier point than the rest of the network knows about it.  This would not be a byzantine error, but is a fault that should be guarded against.

Probably if someone proves we signed something later than we are aware, we would just increment our counters to match and carry on, trying to retrieve what we last said.


We would issue retractions for anything faulty we may have put out.