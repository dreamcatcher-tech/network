
>[!tip] Created: [2023-02-08 Wed 11:23]

>[!question] Targets: 

>[!danger] Depends: 

When connecting to a remote [[App Complex]] we may way to fork it and play with it locally.  We can optionally pull down the whole complex, or we can allow lazy loading of data for the local fork.

This would be a replacement for using CAR files to test against.  Verification of the covenant logic being correct could be by using a `@@UPGRADE` action which would cause the covenant to check its logic matches the data, or do the upgrade if required.  This might be just part of the `@@INIT` logic, as the covenant should know if it is booting for the first time, or if it may have been around for some time.

For storybook testing, this would let us test components against a remote chain, fork it locally to make modifications, then only pull down what data we wanted to read, and only write whatever changes we wanted locally.
