
>[!tip] Created: [2024-04-17 Wed 11:12]

>[!question] Targets: 

>[!danger] Depends: 

Broadcasts are fast, but they can skip over some bits.

However, the skipped over bit might just contain the pierce pieces that we need.

So resolving pierces need not wait for the full item to be recovered ?  This is head of line blocking ?

We should make pierce watching be a dedicated thing, or at least allow outof order splices to come down.

For a file, we probably want to skip ahead anyway, so we just want the latest one.

For pierces, we can skip ahead, but it will likely get blanked.

If we allowed out of order, we could be guaranteed every splice, just not the order.  If we only want increasing, but without lineage guarantees, then we can just get the latest one.