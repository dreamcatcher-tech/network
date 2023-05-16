
>[!tip] Created: [2023-05-16 Tue 18:03]

>[!question] Targets: 

>[!danger] Depends: 

Given a dns name of a chain gateway, and then some info on finding the chain root, we can make pathed requests into chains with responses back in json.  This means that we can provide our chains as an API with near zero modification.  We can also make front ends that call our chains using traditional requests, so we can be compatible with web2.0 tech.

A generalized / foreign request could be:
`https://gateway.somewhere.xyz/QmVQEFQi81SSbZaezrm78p333EGeYzfEZyvCnX848KaMCw/some/path&funtion=add&name='child1'`

The chainId can be replaced with something if the gateway specifically serves this app complex.

The gateways we make could be huge, and can be fronted by AWS api gateway, so we could handle very large load.

Could provide the DMZ functions as http requests.  Can make iterables like `LS` be given a start and an end parameter, and also requiring a pulseId to ensure sanity.