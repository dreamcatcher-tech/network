Giving the residues to the last person to claim is unfair, as a 1% holder could block a single unique item being transferred to the person that did 99% of the solving by just waiting or disappearing.

But a calculation to see what residues remain could be tough.

Mark who the biggest holder is just once.

Could make the residue calculation when bigdog withdraws.

The residue calculation will use a lot more gas than the claim, but filters can stop any maliciousness.

There is a bail early event ?
If the remaining shares could not possibly get a whole unit of whatever is left ?
If the size of the holdings was ordered, then we can know when to stop checking if something rounded to zero.

V1
For each asset,
Walk thru all unclaimed holders, 
calculate their share,
accumulate residue for the bigdog to claim

Worst case, this loads up 998 holders, and does a residue calc for each one.
This would multiple the gas costs by 998 for the first run, then only a small amount after that.
So probably safe to run this as part of the atomic claim function.
Just means bigdog pays more gas.
And means that shares have to be ordered when QA submits them.

V2
Make the residue extraction be a separate function call
Could cost a lot more gas since would be writing the asset balance twice.
V1 should be very cheap once the array is loaded into memory.
Sorting saves a lot of checking, but might not be needed ?

If the solvers were removed to indicate a claim, and residue was calculated on all of the remainder, then gas is lower, but kills some verbosity.