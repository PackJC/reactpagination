1. Changes would include enabling setLoading and having a loading option during the API call.
useEffect should be used as the hook because we are trying to do something after render. We must consider
how much data is being retrieved and how we can reduce complexity.WE also nee to consider if there is an issue
making the API call, if so then give an error page and give a loading symbol until something loads
2. The issues with nanoid is that the keys themselves are not stable and could change