
>[!tip] Created: [2023-03-02 Thu 10:53]

>[!question] Targets: 

>[!danger] Depends: 

Upgrading a system should require no downtime as load can be moved fluidly and granularly between engines.  Chains can be upgraded on the fly so no need to every upgrade everything all at once.  There is no central DB so the schema need not be upgraded as a single operation.  There are no large tables, everything is handled per customer.

Long dormant data that can be upgraded when inflated, so the chains can exist in many different schema formats, with upgrades being done per record, rather than all at once.