# Instantutor-Onboarding
A repository with tutorial material to onboard new members

Welcome to first time developers or anyone who would like to learn the different technologies used in the Instantutor repository!

All practice material included was made by following tutorials from the youtube channel Brad Traversey.

You can find the specific videos here:
* [React Tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
* [Node Tutorial](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Express Tutorial](https://www.youtube.com/watch?v=L72fhGm1tfE)


## Git and Github

To start with you are going to need to be able to know how to use git. To do this first start by making sure you have git downloaded. You can do this by typing the following command into the terminal:

```
git --version
```

This should tell you what version of git you currently have installed. If you do not have git installed you can download it from **[here](https://git-scm.com/downloads)**. Coming packaged with this bundle is the git bash, a very useful terminal with linux like functionality and other features that allow you to work easily with git.

With git installed do the following:
1. Clone the repository using `git clone https://github.com/Instantutor/Instantutor-Onboarding.git`
2. Create your own branch using `git branch YOUR_BRANCH_NAME`
3. Checkout to that branch using `git checkout YOUR_BRANCH_NAME`
4. Make a change to the document by adding your username to the list of usernames below
5. Add your changes to the index using `git add *`
6. Commit your changes using `git commit -m "YOUR_COMMIT_TITLE" -m "YOUR_COMMIT_MESSAGE`
7. Push your code to Github using `git push -u origin YOUR_BRANCH_NAME`
    1. You are doing this cause you've created a new branch but generally you can remove the -u argument and make it `git push -u origin YOUR_BRANCH_NAME`
8. Create a pull request

I'm done with this tutorial:
* Samyuth
* Stanley Guo

If you can do the above you know all the basic commands you need to contribute to this repository.

Other materials:
* https://learngitbranching.js.org/

## HTML and CSS

HTML is a markup language in other words a way to specify the layout of a page similar to latex. Visually however you can not acheive many styles with html which is where CSS comes in, with CSS simply being styles that can be added to html. It is recommended you go through at least the first 5 lessons of the W3 schools tutorials for each of these and read through more as you come across ideas you don't understand.
* [HTML W3 Schools](https://www.w3schools.com/html/)
* [CSS W3 Schools](https://www.w3schools.com/css/)

## Javascript

Javascript is a scripting language used on the web. It is a very highlevel interpreted language with dynamic typing like python however users will recognize a much closer similarity in syntax to c or c++.

The following are special features or quirks of the language that are important to know for web development:
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [Object deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (Look into methods like map and filter in particular)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)