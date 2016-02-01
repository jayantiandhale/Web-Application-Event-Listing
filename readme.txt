Author: Jayanti Andhale

1)	Introduction:

Event listing application is designed using Node.JS, AngularJS and RESTful services. It uses MongoDB as a back-end database.
The application provides features for creating a new event, modify any existing event (update/delete).

2)	Setting up the environment:

For running the application one is required to install NodeJS, Angular JS and MongoDB in the system to begin with.

Step1: Create a folder named nodeprojects in C:\ drive.

Step 2: Create a project folder named eventlistapp inside the nodeprojects folder.

Step 3: Open a command prompt (CMD or gitbash) and install the modules required for node viz. body-parser, mongojs, express as shown below:

Step 4: Once all the modules have been installed correctly create folder named public inside eventlistapp folder.
Copy the index.html file inside the public folder.

Step 5: Create folder named controllers inside the eventlistapp folder and copy the controller.js file inside controllers folder.

Step 6: Copy the server.js file to the main eventlistapp folder

Step 7: Create a folder data inside the C:\ drive and create a folder named db inside the data folder.
MongoDB will use this folder.

Step 8: Through the command prompt insert the sample data by running the insert script in the insert.txt file. Once, the data is inserted, you’ll see that once the site loads.
 
3)	Running the application:

Step 1: First navigate to the directory where MongoDB is being installed. Navigate to the bin folder and start Mongod.exe process.

Step 2: Open one more command prompt and start mongo.exe process and type use eventlist to use that database.

Step 3: Start another command prompt, navigate to the nodeprojects>eventlistapp and start the node server

Step 4: Once server is started, go to the web browser and type localhost:3003 You should see the project running.

 
 
