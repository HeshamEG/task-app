# Info 
  - this repo consist of 3 apps 
      1 - backend app under /backend
      2 - a simple CRUD app to manage network gateways and allawed devices under dir /frontend/apps/web-react-task .
      3 - the problem solving app under dir /frontend/apps/products-app .
  - i was depending on NX mono repo for frontend , the plan was to include the backend as well but accourding to time i couldn't do tons of my plan :( .

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
- `sh rundev.sh` or the commands included in that file if you are not using bash .
- backend will run on http://localhost:1337 .
- swagger UI will run on http://localhost:5000 ( note: theres a known issue its generating extra endpoints you can use postman included file in the root project gatewaysAPI.postman_collection.json if you feel inconvenient)
- reactjs on http://localhost:8080 , http://localhost:8081 .

# Stop dev mode
- `sh stopdev.sh`

# Unit Testing 
- to run jest please use for the problem solving task use `yarn run products:test` inside the `frontend directory`
- for testing the CRUD app as well use `yarn run test` .

hints : 
- run the docker for 1st time will take some time to be setupped and install dependancies .
- i tryied to make some unit testing for redux but i couldn't complete it due too time and my availability .
