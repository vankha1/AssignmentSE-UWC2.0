# AssignmentSE-UWC2.0
Deploy at https://busy-red-pike-cuff.cyclic.app (but it was so bad 'cause this was the first time I have worked with NodeJS) with account used for accessing: vovankha2003@gmail.com and password : admin123
* This is source code about my Software-Engineering course assignment. The assignment is task and staff management with functionalities such as filter, view detail, create, update,...
# User Interface
![](https://github.com/hyla167/L02-Group-4/blob/master/demo/demo_homepage.png)
![](https://github.com/hyla167/L02-Group-4/blob/master/demo/demo_task.png)
![](https://github.com/hyla167/L02-Group-4/blob/master/demo/demo_staff.png)
![](https://github.com/hyla167/L02-Group-4/blob/master/demo/demo_detail_task.png)

# How to use
To use the application, you will need to follow these steps:
1. Clone the repository via `git clone https://github.com/hyla167/L02-Group-4.git` and `cd` into the cloned repository
2. Download NodeJS at https://nodejs.org/ if you haven't
3. Install the require packages: `npm install`
4. Install MongoDB Compass (https://www.mongodb.com/products/compass) if you haven't
5. Create a database named "uwc_v2" and add two collections called "staffs" and "tasks"
6. Add some data to each of the collections. The data should have the following formats:
<img src="readme_mongo1.png" width="450"/> <img src="readme_mongo2.png" width="450"/> 

7. Run the application: `node server.js`. The email and password for login is `vovankha2003@gmail.com` and `admin123`

## 🚀 Features
- 🔍 Search for a task by its ID, status, date; or by collector's name.
- 🔔 Send task notification to employee.
- ✅ Confirm done tasks
- 🌈 CRUD Operations on tasks.
- 🕓 View optimize route of a collector's task

## ⚠️ Limitations
1. Route, MCP and Vehicle Management not yet implemented
2. Each route can go through at most 3 MCPs
3. The system does not have statistical information on vehicle, MCPs and staffs
4. User profile and message not yet implemented
