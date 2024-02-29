# Fruits App - MEN Stack Walkthrough
<img src="https://i.imgur.com/4fW408l.png" width="100%">



## The MEN Stack
Full stack apps are often referred to by abbreviations of the technologies used within the app. The app you'll build during this multi-part exercise is known as a MEN Stack app. The MEN stack is comprised of:
- **M**ongoDB/Mongoose
- **E**xpress.js
- **N**ode.js



Refer to the solutions branch of this repo for the finished code for each part.



## Create a Route Table
Let's create a route table that will define and describe what each route in our application will do:

|       **URL**   | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**   |
| --------------- | -------------- | ------------- | --------------- | ------------------- |
| /               |                | GET           | read            | fruit-home.ejs      |
| /fruits         | index          | GET           | read            | fruit-home.ejs      |
| /fruits/:id     | show           | GET           | read            | fruit-details.ejs   |
| /fruits/new     | new            | GET           |                 | new-fruit.ejs       |
| /fruits         | create         | POST          | create          |                     |
| /fruits/:id/edit| edit           | GET           | read            | edit-fruit.ejs      |
| /fruits/:id     | update         | PATCH/PUT     | update          |                     |
| /fruits/:id     | destroy        | DELETE        | delete          |                     |
| /seed           |                | GET           | delete & create |                     |
| /about          |                | GET           |                 | about.ejs           |
| /*              |                | GET           |                 | 404.ejs             |
