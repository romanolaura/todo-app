# To Do App
This app consists of a simple to-do list. The user can add new tasks using a form, mark tasks as completed and hide or show completed tasks.

## Start the app in developer mode
npm start

## App specs

### Frameworks/ Libraries used
react
react-bootstrap

### Folder tree
* todo-list
    - Components: Containes all components
        - Header: JS and CSS file for the Navbar
        - NewTask: JS and CSS files to add new tasks
        - TodoList: JS and CSS files for each task and the list of tasks
    - store: Contains context and data for the app components
    - App.css
    - App.js: Root component with the application layout.
    - index.css
    - index.js: Renders the root component

### App snapshot

![This is an screenshot of the application](/AppScreenshot.png)

## Future improvements

This app is just started. Some elements can be added, like a Login page. Moreover, to be able to store data, a backend should be added so tasks can be stored in a DB or local file.

Thanks for reading! :)