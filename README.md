# Task Manager - Vue, Fastify, GraphQL, MongoDB
A full-stack task management application built with Vue.js and Tailwind CSS for the frontend, Fastify and GraphQL for the backend, and MongoDB for data storage.

## Features
- **Frontend**: Vue.js with Tailwind CSS for responsive design.
- **Backend**: Fastify with GraphQL for fast and efficient APIs.
- **Database**: MongoDB (Atlas) for storing tasks.
- **Functionality**:
  - Create, check and delete tasks.
  - View tasks in a list format.
  
## Tech Stack
- **Frontend**: Vue.js, Tailwind CSS
- **Backend**: Node.js, Fastify, GraphQL
- **Database**: MongoDB (Atlas)
- **Tooling**: dotenv, Mongoose, Mercurius (GraphQL)

## Prerequisites
- Node.js v16 or higher
- MongoDB Atlas account (or local MongoDB setup)
- NPM or Yarn

## Getting Started
### 1. Clone the Repository

```
git clone https://github.com/your-username/task-manager-vue-fastify-graphql.git
cd task-manager-vue-fastify-graphql
```
### 2. Set Up the Backend
**Install Dependencies**
```
cd server
npm install
```
**Environment Variables**
Create a .env file in the backend directory with the following:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

**Start the Backend Server**
```
node server.js
```
The server will run on http://localhost:4000.


### 3. Set Up the Frontend

Install Dependencies
```
cd client
npm install
```
**Start the Frontend**

```
npm run dev
```
The frontend will be available at http://localhost:5173.

## Directory Structure

```
task-manager-vue-fastify-graphql
├── server
│   ├── config
│   ├── models
│   ├── resolvers
│   ├── schema
│   ├── package.json
│   └── server.js
├── client
│   ├── src
│   │   ├── components
│   │   ├── graphql
│   │   ├── router
│   │   ├── services
│   │   ├── views
│   │   ├── App.vue
│   │   └── main.ts
│   └── package.json
└── README.md
```

## How to Use
1. Start the backend and frontend servers.
2. Open the frontend in your browser.
3. Interact with tasks:
   - Add new tasks.
   - Check existing tasks.
   - Delete tasks.
   - View all tasks.
