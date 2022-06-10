# Backend Tutorial

Welcome to the backend tutorial module with express.js and mongodb! This module will be broken into several sections and each section will contain resources to learn the specific technologies and concepts. There may be certain concepts that are not required to work on Instantutor but may be good to look into and these will be indicated.

## API and HTTP

To get some background on what an API in the context of web development even is first watch until the 11:34 mark for [this](https://www.youtube.com/watch?v=Q-BpqyOT3a8) video on RESTful APIs. It may be helpful to watch further along into the video but unecessary as the next video will work through the topic in a little more depth.

The next video to watch is HTTP, watch [this](https://www.youtube.com/watch?v=iYM2zFP3Zn0) video until the 17:44 mark. It is key that you make sure you download postman and work through those examples. Aditionally if you have a linux based system (there is a similar utility for windows cmd) you can use the curl command which will do the same thing just on the command line. It may not be as conveniant but what is nice about this is that when you right click a request in the network tab you have the option to copy a request as a curl command.

For some final background it may also be helpful to understand what json web tokens are. These will be expanded on further along in the express.js secotion however long story short these are temporary tokens that are required to access certain routes similar to OAuth tokens. 

## Node.js

To get an introduction to Node.js watch the first 20 minutes (until 22:50) specifically from Brad Traversy's [Node.js tutorial](https://www.youtube.com/watch?v=fBNz5xF-Kx4). From here the rest of the video is optional.

In particular from [22:50-47:00](https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=1370s) there is information on modules for path, file system, operating system and url. It may be a good idea to skim through these however you can also take a look through the [code on github](https://github.com/bradtraversy/node_crash_course/tree/master/reference) and refer back to the video as needed.

If curious it may also be worth watching from [47:00-56:00](https://www.youtube.com/watch?v=fBNz5xF-Kx4) as there is information on the event and listener API in js. This is similar to the observable and observer interface and may be useful in creating or using certain middlewares.

The rest of the video from 56:00 onwards is unnecessary as HTTP and server creation in vanilla node.js is uneccesary due to the express.js libarary/framework. Deployment for Instantutor is also on AWS and Digital Ocean with the application being too large for Heroku.