# React Leveling Challenge

_It was developed to create a client for a Blog. It must be configured in React and consume the data from a JSON placeholder, an API that exposes dummy data in JSON format._

## Challange requirements
```
The endpoints that you should use are:

GET https://jsonplaceholder.typicode.com/posts
Returns a list of posts

GET https://jsonplaceholder.typicode.com/posts/:id
Returns the detail of a post based on the id specified in the parameter

POST https://jsonplaceholder.typicode.com/posts
Simulate the creation of a new post

PUT / PATCH https://jsonplaceholder.typicode.com/posts/:id
Simulates the update of a post based on the id specified in the parameter

DELETE https://jsonplaceholder.typicode.com/posts/:id
Simulates the removal of a post based on the id specified in the parameter
```

## Considerations
_Using these endpoints, the application should contain the following sections:
* HOME:
It will show a list of posts. In this list, only the title of each
one, and the actions to go to the detail of it, edit it or delete it.
* DETAIL:
You should receive the identifier of a post and, if it exists, show your data.
Otherwise, you should display an error message.
* CREATION FORM:
You must show a form that allows you to create a new post. The form must
contain the title and content fields, and perform the validation of them (both are
required). When submitting, the request must be made to the corresponding endpoint.
* EDIT FORM:
You should receive the identifier of a post and show a form that allows you to edit it. In the
if it does not exist, display an error message. The form must contain the
title and content fields, and validate them (both are required).
When submitting, the request must be made to the corresponding endpoint.
* OTHER CONSIDERATION: The app must contain a header with the links to the Home and the Edition Form.
It must be responsive, you can use a template.
The "Delete" action that the posts listed in the Home section will contain must
make the request to the corresponding endpoint.
State management can be done in any way you like, as can logic
navigation._


# Starting 🚀 and Installation 🔧
## Install dependencies for the server
```
git clone
npm install
npm start
```

## The server runs at http: // localhost: 3000 


_After completing these steps you will be able to view the project_


## Project screenshots
![b1f5b238-eb91-4ed5-a3b8-31c41d76fbc0](https://user-images.githubusercontent.com/62455807/115910123-d7305d80-a442-11eb-8115-3f84b25546f8.png)
![8f8e2b41-74e8-4a8e-96cb-2abb8315ceea](https://user-images.githubusercontent.com/62455807/115910133-d8fa2100-a442-11eb-8d56-6a0efedfa9db.png)
![2aee4ad5-4627-431e-a08e-4f2ac77625b0](https://user-images.githubusercontent.com/62455807/115910135-dac3e480-a442-11eb-850c-0cdeb6428beb.png)


## Built with 🛠️

_The tools I use for this project are as follows:_
* [Redux] (https://es.redux.js.org/) - Used to work with a global state.
* [React-Hooks-Form] (https://react-hook-form.com/) - Used to estructure forms.
* [React] (https://es.reactjs.org/) - Framework used.
* [Sweetalert] (https://sweetalert.js.org/guides/) - Custom alerts.



## Authors ✒️

_Project carried out in a group way_

* ** Martin Cumpe ** - * Author *

## License 📄

All rights reserved.

