# SQLITE SERVER

> Basic on-the-go backend with sqlite database for a quick server for frontend.

After cloning the repo,
```
npm install
npm start
```

or

```
yarn install
yarn start
```

to get started.


| Method | API                                | Description                          | Parameters                          |
| ------ | ---------------------------------- | ------------------------------------ | ----------------------------------- |
| get    | http://localhost:8000/projects/all | Fetch all Projects from DB           |                                     |
| get    | http://localhost:8000/projects/:id | Fetch Project with given id from DB  | params: id                          |
| post   | http://localhost:8000/add          | Add new Project to DB                | params: {name, desc, completed}     |
| post   | http://localhost:8000/update       | Update Project                       | params: {id, name, desc, completed} |
| delete | http://localhost:8000/delete/:id   | Delete Project with given id from DB | params: id                          |
