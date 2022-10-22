Point in Polygon calculations.  Used for determining which polygons on a map contain what addresses.

Specific use case is in the [[CRM Goals]] 

Can be optimized by calculating bounding rectangles for each polygon, and checking inclusion in there first, saving much time.