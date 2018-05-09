This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation
Run next commands
```
# clone repo
cd ~/some-directory
git clone https://github.com/mihaiyoo6/reactnd-project-readable-starter.git
cd reactnd-project-readable-starter
cd frontend
npm install
npm start
```
Project configured to work with local api. To run api-server run commands
```
cd ~/some-directory
cd js--react-readable
cd api-server
npm install
node server.js
```
## Project Structure
```
.
├── README.md
├── api-server
│   ├── README.md
│   ├── categories.js
│   ├── comments.js
│   ├── config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── posts.js
│   └── server.js
└── frontend
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    ├── src
    │   ├── actions
    │   │   ├── categories.js
    │   │   ├── comments.js
    │   │   └── posts.js
    │   ├── components
    │   │   ├── App.css
    │   │   ├── App.js
    │   │   ├── App.test.js
    │   │   ├── Category
    │   │   │   ├── Category.js
    │   │   │   └── CategoryList.js
    │   │   ├── Comment
    │   │   │   ├── Comment.js
    │   │   │   ├── CommentForm.js
    │   │   │   └── CommentsList.js
    │   │   └── Post
    │   │       ├── Post.js
    │   │       ├── PostForm.js
    │   │       └── PostsList.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── pages
    │   │   ├── CategoryPage.js
    │   │   ├── MainPage.js
    │   │   └── PostPage.js
    │   ├── reducers
    │   │   ├── categories.js
    │   │   ├── comments.js
    │   │   ├── index.js
    │   │   └── posts.js
    │   ├── registerServiceWorker.js
    │   └── utils
    │       └── api.js
    └── yarn.lock
```
## Requirements 

- [x] Default (Root)
    - [x] should list all available categories, which should link to a category view for that category
    - [x] should list all of the posts
    - [x] should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
    - [x] should have a control for adding a new post
- [x] Category View
    - [x] identical to the default view, but filtered to only include posts with the selected category
- [x] Post Detail View
    - [x] should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
    - [x] should list all of the comments for that post
    - [x] should have controls to edit or delete the post
    - [x] should have a control to add a new comment.
    - [x] implement comment form however you want (inline, modal, etc.)
    - [x] comments should also have controls for editing or deleting
- [x] Create/Edit View
    - [x] should have a form to create new post or edit existing posts
    - [x] when editing, existing data should be populated in the form
