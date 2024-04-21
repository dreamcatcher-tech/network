
>[!tip] Created: [2024-04-21 Sun 20:53]

>[!question] Targets: 

>[!danger] Depends: 

There really is no need to not do serial execution immediately ?

If fail during execute, pool will be retried anyway, but will detect when it happened correctly.

? it should retry the execution too tho ?

So actually, reliability is unassured unless we atomically queue the execution, since it is guaranteed to work.

We could send off the queue item AND try do it ourselves, maybe with a delay ?