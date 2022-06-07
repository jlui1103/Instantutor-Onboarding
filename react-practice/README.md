# React Tutorial

Welcome to the react frontend practice module. In this module you will learn all the technologies you need to get started contributing to the Instantutor frontend. In particular this module will go over React which is a libarary/framework for javascript designed to make a faster and more user freindly UI. All material for this tutorial is derived from the following tutorials by youtube creator Brad Traversey:
* [React Tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
* [Redux Tutorial](https://www.youtube.com/watch?v=93p3LxR9xfM)

Before working through this tutorial it is recommended you understand some of the more advanced javascript features that are found in the README.md file at the root of this repository. To understand the basic section of this tutorial you will need to know all the features except for asynchronus javascript (i.e. promises, async/await) however those are still needed for the advanced portion. You will also be expected to have read the basic ideas of HTML and CSS listed in that README.

To start working through this tutorial make sure you are in a branch seperate from main and create a practice directory to work in. To do this in any linux based bash like git bash do the following from this directory:
```
mkdir practice
cd practice
```

From this point follow the instructions in the basic section.

If you would like to review an example application that has been created from this directory ```cd example``` and open two terminals. Perform the following commands. In the first terminal run ```npm start``` and in the second terminal ```npm run server```.

## Basic

This part of the tutorial will focus on the basics for React which includes components and state. After completing this part of the tutorial you should be able to work on all of the frontend features that don't directly interact with data from the API.

For a quick review of the DOM before starting the tutorial:
* The DOM stands for document object model and refers to the structure of HTML documents
* HTML documents come in the form of a nested tag structure i.e. every opening tag has a closing tag and the tags can have children

For this part of the tutorial you can simply follow Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8) until the 1:21:59 mark. Aditionally it is highly recommended you get very familiar with react dev tools and in particular the component tool that allows you to see the component tree and state.

For the final important piece of information is related to renders. Everytime a function to modify the state (i.e. the function returned the use state hook or when an effect is triggered due to a change in a variable observed by use effect) is called it triggers a re-render. These re-renders are generally restricted to a component level and are what make react very fast. For more information on this you can read [this](https://felixgerschau.com/react-rerender-components/) article. A hook that allows you to modify state without causing a re-render is the useMemo hook. More information on this hook can be found in [this](https://www.youtube.com/watch?v=THL1OPn72vo&t=207s) from web dev simplified. In general if you have questions about particular parts of react, html, or css you can often find answers from this channel or others on youtube.

## Advanced

This section will go into a deeper dive for how to interact with the backend server as well as routing in react. After you have worked through this part of the tutorial you will be ready to work on any part of the frontend of Instantutor.

### The API

The "API" or application programming interface in the context of communication between the frontend and backend is essentially a set of routes from which you can create, read, update, or delete data. To interact with this API you must make an HTTP request to a certain url. An HTTP request follows a protocol determining how information should be transfered by imposing certain requirements on the client and server. [This](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) is a list of http methods though the most important are get, put, post, and delete. For some additional clarification it is recommended you go through [this](https://www.youtube.com/watch?v=Q-BpqyOT3a8) video.

To do this part of tutorial continue from 1:21:59 to 1:39:15 in Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

### Routing

Put simply, normally when you click a link in an html docuemnt you are sent to another page. In actuality what is happening is you are making an http request to a server and it is returning a different html document. This behaviour is reliable but time consuming and also in general when using react it is prefered you create a single page application, in other words there is only one html document and all changes are handled by javascript with the react library. To get around this you can use the react-router-dom which is a special libary to navigate routes in react.

For this part of tutorial watch till the end from 1:39:15 in Brad Traversy's [react tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

One additional component you should know about is the switch component in react. In the tutorial above Brad uses routes which technically allows you to render multiple components for a certain route however switch makes it so you can only choose one route.