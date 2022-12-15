React native seems best platform choice due to:
1. hot reloading
2. js is a firsrt class citizen, which is required to run the engine easily
3. js networking stack

Problems: 
1. Maps navigation SDKs might not work well with RN.
2. Kotlin might be able to call out to js networking without hassle, since it can import npm packages.
3. Mapbox is preferred sdk as completely open and written in kotlin
Basically will be dictated by the maps SDK that we need to use on an android tablet.

## Requirements
1. Turn by turn navigation aka [Active Guidance](https://docs.mapbox.com/android/navigation/guides/androidauto/active-guidance/)
2. Offline navigation
3. Breadcrumb Location tracking of the trucks
4. Route deviation should route back to preplanned route
5. Allow unscheduled pickups
6. Automatically close out jobs when moving on to the next one
7. Audio guidance options
8. Satellite view with house numbers
9. May allow signing up new customers
10. May allow general access to customer data
11. Live feedback to the central application of truck progress
12. May capture the camera feed for events


## Initial Tests
1. Kotlin app using mapbox sdk that can load the blockchain based on [mapbox examples](https://github.com/mapbox/mapbox-navigation-android-examples)
