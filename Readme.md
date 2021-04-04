
## Installation 
#
1. download zip file or copy the repo link
2. Run `npm install` to install all dependencies
3. Initialize the app using `npm start` to run on development mode
4. Open [http://localhost:777](http://localhost:777) to view it in the browser.

# TEST API CALL

# To View all Users
    @Route: http://localhost:777/api/users/
    @Method: GET
    @Parameter: none 
    @Access: Public


# To View Single User
    @Route: http://localhost:777/api/users/:id
    @Method: GET
    @Parameter: specific :id params is required 
    @Access: Public

# To Create New User
    @Route: http://localhost:777/api/users/
    @Method: POST
    @Payload: name and email field is required
    @Access: Public

# To Update User
    @Route: http://localhost:777/api/users/:id
    @Method: PUT
    @Payload: name and email field is required
    @Access: Public

# To Delete User
    @Route: http://localhost:777/api/users/:id
    @Method: DELETE
    @Parameter: specific :id params is required 
    @Access: Public

# API Tools for testing easily
    * Postman - For Windows Desktop

# Seed Database
You can use the following commands to seed the database with some sample users as well as destroy all data

    # Import data
    npm run data:import

    # Destroy data
    npm run data:destroy

Sample User

Name: Joakim Olander -
Email: joakim@gmail.com (Active)

Name: Patrycja Gurgul -
Email: john@gmail.com (Active)

Name: Odibo Sunday -
Email: sunnepazzy123@gmail.com (Active)





