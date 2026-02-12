# COMP3133 Lab04 - Mongoose Validation (Users)

## Requirements implemented
- All fields are required
- username: min length 4, max length 100
- email: required, valid format, unique
- city: alphabets and spaces only
- website: must start with http or https
- zipcode: DDDDD-DDDD
- phone: D-DDD-DDD-DDDD

## Setup
1. Create MongoDB Atlas database and a collection named `users`
2. Copy `.env.example` to `.env` and paste your Atlas connection string.

## Install & Run
```bash
npm install
npm start
```
Server: http://localhost:8081

## API
### POST /users
URL:
`http://localhost:8081/users`

Body example: use any object from `UsersData.json`.
