
>[!tip] Created: [2024-01-12 Fri 10:42]

>[!question] Targets: 

>[!danger] Depends: 

Want to provide a function to chain on to promises that will only do setError when the component is mounted, so will swallow stale errors.

```js
const useError = () => {
	const [error, setError] = useState()
	if (error){
		throw error
	}
}

const catcher = useError()
useEffect(()=>{
	doThing.then(catcher)
	return catcher
})

```

Maybe.