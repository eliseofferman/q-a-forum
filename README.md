# Team Project: Build a Forum

For this team challenge it's time to focus more on how to build interfaces and interactive, useful applications. It's also a chance to wrap up everything you've learnt so far, and build an application with both a frontend and a backend and analyze the security of your application. We'll be working together with Detectify - a team who has a service for analyzing website security. Your challenge will be to build an FAQ forum and make it secure.

The forum needs two parts; one for visitors to ask questions and find answers, and another for customer support staff to write answers to questions.

To give you a head start we have supplied a basic structure with react router showing two routes: Home and Admin. In Home we have made a simple page that shows a form that you can use to send questions and below on the same page the questions will be listed. This page uses two endpoints:

* POST http://localhost:8080/faq
* GET http://localhost:8080/faq

You have to start by making these two endpoints work by adding them to the api in the backend.

When you have your app ready and up and running it's time to make the security analysis. Start by creating an account at detectify.com. For Detectify to work you need to have your site online and therefore we will use a tool called ngrok, which is a simple tool to tunnel a site that is running on your localhost. Go to ngrok.com, sign up and follow the instructions to get it all working.

This task is completely open for you to decide the scope, design, and functionality. Maybe you want the questions to be upvoted, or sorted in a specific way, or categorized, or some other functionality – it's up to you and your team to decide.

**The basics that you need to have:**

* An FAQ frontend for customers, which should include:
  * The ability to view questions and answers.
  * A page or form where customers can ask new questions.
* An admin page for support personnel, where they can answer questions.

**Technical Requirements:**

* React frontend
* API in Express
* MongoDB as a database to store questions and answers

## How to complete this project

The project should be built in React with a Node backend and Mongo database. It should also be responsive and work well on mobile, tablet and desktop. Your code should conform to the Technigo eslint rules, too.

The code folder in this repository contains a copy of the Technigo React Starter project. You should use this as a base for your project.

## How to approach this as a team

The first step, as always, should be to sketch out your application and decide how things should look, and what kind of components you'd like. *Give thought - as a team - as to what components you might need, and what naming you should use.*

Like the previous group assignment, this task is quite open, which means you must be careful to limit the scope of your project. Make sure to concentrate on what is necessary first, before adding more features and bling.

Once you have an idea of the design of the app, and what kind of components you'll need, you should consider which endpoints you need in your API and how to structure the data in your database. For example, one endpoint that fetches all questions could be a good idea. This will be easier to visualize after the first couple of lectures in this sprint.

# :bulb: Inspiration

Check out some of these examples of FAQ pages for some inspiration!...

* https://fragor.liseberg.se/org/liseberg/
* https://hallakonsument.se/frageforum/
* https://kundo.se/org/sj/
* https://kundo.se/org/sats-sverige/
* https://www.skistar.com/sv/Min-sida/Support/

# :boom: Success!

At the end of this sprint you will have the knowledge of how to build full applications with both a front and a backend. You will have practiced you Node.js knowledge and understood how APIs work, and how to build them.

# :runner: Stretch Goals

Done with the main task? Try to come up with some fun stretch goals within your team. Here's some ideas:

1. Add login functionality so that the support staff need to identify to be able to answer questions.
1. Add an upvoting function on questions so that users can upvote the more relevant questions and these get showed on top.
