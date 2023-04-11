
>[!tip] Created: [2023-02-22 Wed 09:30]

>[!question] Targets: 

>[!danger] Depends: 

Make a small browser extension that detects html files of the format we

Use the IPFS format to sign the file, and include ascii armour in the html file.

Extension checks that the loaded html file has no unsigned data, and that the signature matches.

Must come from https source.

Means that you can stop relying on a specific http server and domain name, as anything can hold this domain.

The pages load as service workers, so any tamper becomes evident.

The base page should be standard and published by us, with the only changes being the specific chainId that the publisher wants to

Extension detects when loaded in safety mode, where it will walk the entire chain since origin to verify.  Will also store its history checks, so it remembers as far along the check it got.