# library-app
📚 A library web app for storing books and their information

### Purpose
This web applications allows users to store the information for all their favorite books in one place! Gone are the days
of struggling to remember good reads lost in memory throughout time. With this library-app, users can simply create their
account and add books to their library, which are then stored for their account.

## Technical Details

### Server
This web application was created using a NodeJS backend server, and EJS as a templating engine for the front end.

### Databases
MongoDB was used as the database for this application, as it allows for scaling and its allowance of dynamic forms of data formatting acts as an asset.

### API
The [Goodreads API](https://www.goodreads.com/api) was used to obtain information about each book in the library

### Users
User authentication was implemented in the application using [passport](http://www.passportjs.org), limiting library viewing access to registered users only
