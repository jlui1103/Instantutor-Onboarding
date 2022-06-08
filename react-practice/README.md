# React Tutorial

Welcome to the react frontend practice module! In this module you will learn all the technologies you need to get started contributing to the Instantutor frontend. In particular this module will go over React which is a libarary/framework for javascript designed to make a faster and more user freindly UI. All material for this tutorial is derived from the following tutorials by youtube creator Brad Traversey:
* [React Tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
* [Redux Tutorial](https://www.youtube.com/watch?v=93p3LxR9xfM)

Before working through this tutorial it is recommended you understand some of the more advanced javascript features that are found in the README.md file at the root of this repository. To understand the basic section of this tutorial you will need to know all the features except for asynchronus javascript (i.e. promises, async/await) however those are still needed for the advanced portion. You will also be expected to have read the basic ideas of HTML and CSS listed in that README.

To start working through this tutorial make sure you are in a branch seperate from main and create a practice directory to work in. To do this in any linux based bash like git bash do the following from this directory:
```
mkdir practice
cd practice
```

From this point follow the instructions in the basic section.

If you would like to review an example application that has been created from this directory ```cd example``` and open two terminals. Perform the following commands. In the first terminal run ```npm start``` and in the second terminal ```npm run server```. Additionally all the code for the basic section up to routing comes from Brad Traversey's react crash course video for which he has a public git repo available [here](https://github.com/bradtraversy/react-crash-2021).

## Basic

This part of the tutorial will focus on the basics for React which includes components and state. After completing this part of the tutorial you should be able to work on all of the frontend features that don't directly interact with data from the API.

For a quick review of the DOM before starting the tutorial:
* The DOM stands for document object model and refers to the structure of HTML documents
* HTML documents come in the form of a nested tag structure i.e. every opening tag has a closing tag and the tags can have children

For this part of the tutorial you can simply follow Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8) until the 1:21:59 mark. Aditionally it is highly recommended you get very familiar with react dev tools and in particular the component tool that allows you to see the component tree and state.

The final important piece of information is related to renders. Every time a component is rendered the logic of the component is run with the final product being a result of the inputs as well as the state (data that remains or persists through re-renders as opposed to other data used in the component logic that will be erased when a render is complete). Everytime a function to modify the state (e.g. the function returned the use state hook or when an effect is triggered due to a change in a variable observed by use effect) is called it triggers a re-render. These re-renders are generally restricted to a component level and are what make react very fast. For more information on this you can read [this](https://felixgerschau.com/react-rerender-components/) article on rendering. A hook that allows you to modify state without causing a re-render is the useMemo hook. More information on this hook can be found in [this](https://www.youtube.com/watch?v=THL1OPn72vo) video from web dev simplified. In general if you have questions about particular parts of react, html, or css you can often find answers from this channel or others on youtube.

## Advanced

This section will go into a deeper dive for how to interact with the backend server as well as routing in react. After you have worked through this part of the tutorial you will be ready to work on any part of the frontend of Instantutor.

### The API

The "API" or application programming interface in the context of communication between the frontend and backend is essentially a set of routes from which you can create, read, update, or delete data. To interact with this API you must make an HTTP request to a certain url. An HTTP request follows a protocol determining how information should be transfered by imposing certain requirements on the client and server. [This](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) page is a list of http methods though the most important are get, put, post, and delete. For some additional clarification it is recommended you go through [this](https://www.youtube.com/watch?v=Q-BpqyOT3a8) video on Web APIs by Brad Traversey.

To do this part of tutorial continue from 1:21:59 to 1:39:15 in Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=5955s).

Also while Brad Traversy's tutorial uses the inbuilt fetch api with java, Instantutor uses a library called axios which serves the same purpose of making API requests with slight differences in implimentation, features, and syntax.

### Routing

Put simply, normally when you click a link in an html docuemnt you are sent to another page. In actuality what is happening is you are making an http request to a server and it is returning a different html document. This behaviour is reliable but time consuming and also in general when using react it is prefered you create a single page application, in other words there is only one html document and all changes are handled by javascript with the react library. To get around this you can use the react-router-dom which is a special libary to navigate routes in react.

For this part of tutorial watch till the end from 1:39:15 in Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=5955s).

One additional component you should know about is the switch component in react. In the tutorial above Brad uses routes which technically allows you to render multiple components for a certain route however switch makes it so you can only choose one route.

### Redux

For a quick note up till this point you could have reviewed Brad Traversey's code to make the practice app but from this point we will be adding redux to that base app which will require a little more thinking. For this section it is strongly recommended you continually review the code in the example directory and attempt to replicate it after learning the basic theory from Brad Traversey's react video.

We will start this section with some background on what redux is. Start by watching up to the 4:43 mark in Brad Traversy's [redux tutorial](https://www.youtube.com/watch?v=93p3LxR9xfM). To add some clarification on the different components in redux:
* Store: This is a place where you store the global state of the application. This state can not directly be manipulated by any component but can be accessed from any location.
* Reducers: Logic that will directly manipulate global state held in the store. It is important to note that state is never modified, you must return new state that has the appropriate modifications (this is where array functions and the deconstruction operator come in handy).
* Action creators: Functions that will dispatch actions to reducers. You can think of actions as requests to the reducer for how it should modify state. These action creators are generally used to make calls to APIs as API data is generally important to store in the global store. In general when you have a lot of componets and you have certain actions that will modify the whole app it may be more useful to just use an action creator with the alternative being prop drill down.

Now we can get into the implementation details for how to work with redux. Watch the rest of the [redux tutorial](https://www.youtube.com/watch?v=93p3LxR9xfM&t=1370) from 22:50 and try to implement the redux store into the application you have built so far. Essentially instead of the current functions that call API's try to use actions and don't use as much prop drill down using the global store instead. Again please refer to the code present in the example directory as there are many quirks that may be hard to figure out on your own.

These are some extra details needed to be able to understand how to implement this in the app you've created so far. The first point is relevent only for practice but the remaining are important in understanding how to use redux in the main repo:
1. For practice purposes modify index.js so that you put the store provider in here instead of App.js. This is only for practice purposes, in larger applications the main App.js does not have as much logic and just renders components that handle the views, routing logic and so on. For this practice app you want App.js to be able to access the store. You should just copy the [index.js](https://github.com/Instantutor/Instantutor-Onboarding/blob/main/react-practice/example/src/index.js) file from the example repo into your index.js
2. In most cases API data that is relevant across most components of the application should be in the store. In the case of the practice app you are making you could actually get away without using redux because there is no prop drill down but in other apps you might have different urls from the homepage that require access to the same data for example. For this practice app the goal should be to get rid of the need to have a use state hook for tasks and instead to access the store.
3. When making calls to API's it should be expected that there are errors. To account for this all actions should generally be wrapped in try catch blocks, an example of this can be seen with the delete action in the example directory and there should be an error type for each reducer. The error type used in the example is TASK_ERROR.
4. When using an action inside of a useEffect hook make sure that the name of the action is inside the useEffect's dependency array. Look at an example of this in [App.js](https://github.com/Instantutor/Instantutor-Onboarding/blob/main/react-practice/example/src/App.js).

For some final tips, make sure you are refering the the example that is already up, don't be afraid to google and if you want to get an idea of what was changed to make the app work with redux look at [this commit](https://github.com/Instantutor/Instantutor-Onboarding/commit/53c8f6b635d0ee53ec1d6c97103dd1deb60c4ab1).

*Note: Currently this repo uses an older version of the Redux libarary as that is what is currently present in Instantutor. This module will be updated if a migration to the newest version of redux occurs in the main repo.*
