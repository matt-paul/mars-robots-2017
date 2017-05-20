I have used create-react-app to bootstrap this application, and then added airbnb eslint configuration.  This is a convenient way to get going quickly using a well regarded rule set, and a jest testing environment.  

I have added flow in, because whilst I have fairly limited experience with it, this seems like a great oppotunity for learning more about it.  No doubt I will not use it to it's full potential, but will do my best to make use of it.

I have decided to approach this in a way that is inspired by functional programming, and in particular patterns I have learnt from the use of redux over the last few months, such as immutability and partial application.  I hope this will work well!

I am tempted to make use of Ramda as another learning experience for this project, but think I will hold off and potentially incorporate it in refactoring later on, when I can understand whether adding it is worth it.

Midway through....
I have slowly built up the project to the point of being able to interpret an array of instructions and give a final coordinates. What next?

 TODO - Take into account the size of Mars

 TODO - add 'Lost' property  to robot, and mark as true if robot goes over edge.

 TODO - add 'Lost robots' array to state that will help robot avoid taking lost commands.

 TODO - Create function that creates each robot and loads up with data including lost robot array.  


To run this project locally...

yarn install
yarn start

Server will be running on localhost port 3000
