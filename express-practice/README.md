# Backend Tutorial

Welcome to the backend tutorial module with express.js and mongodb! This module will be broken into several sections and each section will contain resources to learn the specific technologies and concepts. There may be certain concepts that are not required to work on Instantutor but may be good to look into and these will be indicated.

It is also very strongly recommend that you create a directory called practice in your branch and in that directory attempt to follow along with the tutorials. This is most relevant for the express tutorials and actually making the practice app is easy if you are following the video so there is nothing to lose. It is also very useful to come back and experiemnt later.

## API and HTTP

To get some background on what a Web API even is, first watch until the 11:34 mark for [this](https://www.youtube.com/watch?v=Q-BpqyOT3a8) video on RESTful APIs. It may be helpful to watch further along into the video but unecessary as the next video will work through the topic in a little more depth.

The next video to watch is HTTP, watch [this](https://www.youtube.com/watch?v=iYM2zFP3Zn0) video until the 17:44 mark. It is key that you make sure you download postman and work through those examples. Aditionally if you have a linux based system (there is a similar utility for windows cmd) you can use the curl command which will do the same thing just on the command line. It may not be as conveniant but what is nice about this is that when you right click a request in the network tab you have the option to copy a request as a curl command.

For some final background it may also be helpful to understand what json web tokens are. These are like OAuth tokens and they are able to convey certain information. Most importantly they are able to encode the expiration date as well as potentially a "secret". You can play around pasting differnt JWTs in [jwt.io](https://jwt.io/)

## Node.js

To get an introduction to Node.js watch the first 20 minutes (until 22:50) specifically from Brad Traversy's [Node.js tutorial](https://www.youtube.com/watch?v=fBNz5xF-Kx4). From here the rest of the video is optional.

In particular from [22:50-47:00](https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=1370s) there is information on modules for path, file system, operating system and url. It may be a good idea to skim through these however you can also take a look through the [code on github](https://github.com/bradtraversy/node_crash_course/tree/master/reference) and refer back to the video as needed.

If curious it may also be worth watching from [47:00-56:00](https://www.youtube.com/watch?v=fBNz5xF-Kx4) as there is information on the event and listener API in js. This is similar to the observable and observer interface and may be useful in creating or using certain middlewares.

The rest of the video from 56:00 onwards is unnecessary as HTTP and server creation in vanilla node.js is uneccesary due to the express.js libarary/framework. Deployment for Instantutor is also on AWS and Digital Ocean with the application being too large for Heroku.

## Express.js

Watch Brad Traversey's [Express.js Tutorial](https://www.youtube.com/watch?v=L72fhGm1tfE) up to 57:54. Beyond this point the information is unnecessary for Instantutor as the frontend is dynamic and only one utility uses any templating.

A quick point to note about middlewares and routes however is that you can chain any number of middlewares on a specific API route or the app as a whole as you use. The below is syntactically valid and will simply repeat the same function 5 times.
```
router.get('/:id', logger, logger, [logger, logger, logger], (req, res) => res.send("Hi :)")
```
The reason this is significatn is that it allows for route specific middlewares such as auth and validators which are described in the sub-sections below.

### Express validator

For a lot of routes it is useful to do a check to see if the request body or any of the paramaters have invalid values. This can be checked in the route itself however it is useful to get familiar with express-validator especially when there are routes with a lot of checks for the values or if you have the same checks in multiple routes.

Express validator works using validation chains where you specify a field and then run a chain of checks as needed. To run the checks you can simply the code below at the beggining of the logic for an API route.
```
const errors = validationResult(req);

if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}
```

An example of how these checks can be used can be found in [members.js](https://github.com/Instantutor/Instantutor-Onboarding/blob/main/express-practice/Example/routes/api/members.js) in the example directory. Documentation for what methods are available in the validation chain can be found on [this](https://express-validator.github.io/docs/validation-chain-api.html) page. Some notable methods are:
* .withMessage which lets you define a custom message for the errors up to that point
* .bail that will not let the following checks run if any of the previous have failed
* .custom which allows you to make a custom check

### Mongodb and Mongoose

To get some background on what mongodb is watch up to 4:00 of [this](https://www.youtube.com/watch?v=2QQGWYe7IDU) video. If you would like to further understand mongodb and how to set it up as well as the compass client and command line access you may watch the rest of the video as well. Only the background is required to make basic contributions to Instantutor but if you would like to change the set up or migrate from atlas to a local db for example it is recommended you watch the full video.

Next up is mongoose which is what is called an object relational for Mongodb in Node.js. This means it allows you to interact with mongodb using mongodb commands and queries and such in Node.js directly. The two most relavant parts of it's API are the schema constructor and model methods.

An example of the use of the schema constructor can be seen in [this](https://github.com/Instantutor/Instantutor/blob/main/server/models/Post.js) schema in the main repository. Essentially the schema has the structure of the BSON objects with options to denote wether a particular part of the schema is required and what a default value is for example. Some additional documentation on schema options can be found [here](https://mongoosejs.com/docs/api/schematypeoptions.html).

Model methods are generally used in the API routes as the allow you to perform all the CRUD options with methods like find, delete, update, create as well as methods that are a mix or have special properties like findOne, findByIdandDelete or findOneandUpdate. Documentation on these different methods can be found [here](https://mongoosejs.com/docs/api.html#Model). Additionally many of these methods allow you to use mongo queries for which further information can be found [here](https://www.mongodb.com/docs/manual/tutorial/query-documents/)