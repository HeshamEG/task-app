#  Info
- this is a test app for managing gateways and devices

# Tech used

- docker & docker-compose
- sailsjs
- mongodb
- swagger
- react NX https://nx.dev/getting-started/intro , react hooks , formik
- typescript
- redux & redux-observable
- jest & marbles diagram
- material UI

# Run the app in dev mode
- `sh rundev.sh`
- backend will run on http://localhost:1337
- swagger UI will run on http://localhost:5000 ( note: theres a known issue its generating extra endpoints you can use postman included file in the root project gatewaysAPI.postman_collection.json if you feel inconvenient)
- reactjs on http://localhost:3000

# Run the app in prod mode
- `sh runprod.sh`
- backend will run on http://localhost:1337
- swagger UI will run on http://localhost:5000 ( note: theres a known issue its generating not included endpoints )
- reactjs on http://localhost:3000
# Stop dev mode
- `sh stopdev.sh`



hints : 
- run the docker for 1st time will take some time to be setupped and install dependancies .
- i tryied to make some unit testing for redux but i couldn't complete it due too time and my availability .
