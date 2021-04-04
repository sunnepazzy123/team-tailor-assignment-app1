
# Installation 
#
1. Download zip file or clone the repo
2. Run `npm install` to install all dependencies
3. Initialize the app using `npm start` to run on development mode
4. Open [http://localhost:777](http://localhost:777) to view it in the browser.
5. Open [https://team-tailor-assignment-1.herokuapp.com](https://team-tailor-assignment-1.herokuapp.com) to view it in the browser and can also be use for testing in production mode..

## Env Variables
You can also Edit the .env file in then root and add the following
```
NODE_ENV = development
MONGO_URI = your mongodb uri

```

# TEST API CALL
```
Development Mode: http://localhost:777/api/users/
Production Mode: https://team-tailor-assignment-1.herokuapp.com/api/users/
```

| Route                            | Method | Desc                                 | Field (required)
| -----------                      | ------ |-----                                 |------
| http://localhost:777/api/users/  | GET    | Get all Users                        |None
| http://localhost:777/api/users/3 | GET    | Get Single User                      |None
| http://localhost:777/api/users/  | POST   | Create Single User                   | name and email
| http://localhost:777/api/users/3 | PUT    | Update Single User                   | id, name and email
| http://localhost:777/api/users/3  | DELETE   | Delete Single User                | id


## To View all Users
    @Route: http://localhost:777/api/users/
    @Method: GET
    @Parameter: none 
    @Access: Public


## To View Single User
    @Route: http://localhost:777/api/users/:id
    @Method: GET
    @Parameter: specific :id params is required 
    @Access: Public

# To Create New User 
```
@Route: http://localhost:777/api/users/
@Method: POST
@Access: Public
@Payload: name and email field is required
{
  "name": "John bobb",
  "email": "Smith@gmail.com",
  "status": "active
}
```
## To Update User
```
@Route: http://localhost:777/api/users/:id
@Method: PUT
@Access: Public
@Payload: name and email field is required
{
  "name": "John bobb",
  "email": "Smith@gmail.com",
  "status": "active
}
```

## To Delete User
    @Route: http://localhost:777/api/users/:id
    @Method: DELETE
    @Parameter: specific :id params is required 
    @Access: Public

# API Tools for testing easily
    * Postman - For Windows/Linux/Mac Desktop Version

# Seed Database
You can use the following commands to seed the database with some sample users as well as destroy all data
```
    # Import data
    npm run data:import

    # Destroy data
    npm run data:destroy
```
### Sample User from Mock Seeder
```
Name: Joakim Olander - required
Email: joakim@gmail.com  - required
status: Active - optional

Name: Patrycja Gurgul - required
Email: john@gmail.com - required
status: Active - optional

Name: Odibo Sunday - required
Email: sunnepazzy123@gmail.com - required
status: Active - optional
```








