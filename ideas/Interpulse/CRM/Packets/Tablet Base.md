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
13. Gate codes and notes shows info for each collection
14. Bin number
15. Side rubbish, christmas trees
16. Phone version that has onsite 
17. Phone with overload photos
18. no access blocking photos
19. still print out manifest with gate codes
20. Phone and tablet versions need to have exact same functionality
21. No need to have phone and tablet communicate while offline


## Device Requirements
23. Wet test
24. With gloves, possibly stylus
25. Waterproof phones and tablets ?
Bin number needs to be typed in

## Initial Tests
1. Kotlin app using mapbox sdk that can load the blockchain based on [mapbox examples](https://github.com/mapbox/mapbox-navigation-android-examples)
