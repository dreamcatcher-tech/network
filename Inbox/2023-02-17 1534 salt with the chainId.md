
>[!tip] Created: [2023-02-17 Fri 15:34]

>[!question] Targets: 

>[!danger] Depends: 

When asking for credentials before allowing a login from an unknown chain, we should require the passphrase to be salted with our chainId to prevent rainbow attacks.

Then the public connection can be made with the reducer doing some approvals based on password.