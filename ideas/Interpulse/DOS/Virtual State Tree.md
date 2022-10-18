In cases where the state of the app can safely fit within the browser, it might be useful to maintain a POJO copy of the state and have components read from this.

The engine could be responsible for this object, and would use Immutable.js to handle large datasets.