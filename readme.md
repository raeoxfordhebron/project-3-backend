# Road Trip Buddy

##### This app lets users keep track of their destinations as they emark on a road trip. Users will be able to add a name and a link for their destinations on their journey. Users will be able to see the list of places they will visit, click on one and view an individual destination, delete and update that destination as well as check it off as visited. The words places and destinations are interchangeable.

##### Group members:

- Release manager: Rae Hebron
- Product manager: Ruhama Yared
- Lead front-end dev: Brandon Haupt
- Lead back-end dev: Samantha Whitford

[Trello Board Link](https://trello.com/b/dbz1Qnlz/unit-3-project)

### Technologies Used

- JavaScript
- HTML
- CSS/SCSS
- React
- Mongoose
- MongoDB
- render.com

### Routes & Components

```
App --> Header 
App --> Outlet 
Outlet -- "/" --> Index
Outlet -- "/places/:id" --> Show
Outlet -- "/places/create" --> createAction
Outlet -- "/places/update/:id" --> updateAction
Outlet -- "/places/delete/:id" --> deleteAction
```

| Route | Element | Loader | Action | Summary |
| ----- | ------- | ------ | ------ | ------- |
| /     | Index   | indexLoader |   | Loads up list of places |         |
| /places/:id | Show | showLoader |  | Loads up an individual place | 
| /places/create | Create|        | createAction | Handles submission of create form for one place | 
| /places/update/:id | Update  |   | updateAction | Handles submission of update form for one place | 
| /places/delete/:id | Delete  |   | deleteAction | Handles submission of delete form for one place |  

### User Stories

- As a user, I want to be able to see a list of my places.
- As a user, I want to click on one of the places and it will appear on the index page - which will be the show page at that point.
- As a user, I want to be able to add, edit, and delete places.
- As a user, I want to be able to check off places as I visit them.


### Schema

<img src="https://i.imgur.com/NJGzoq0.png" width="600px">

### Wireframes/Mockups

#### Index Page - Desktop and mobile

<img src="https://i.imgur.com/a0CAsYt.png" width="600px">
<img src="https://i.imgur.com/KL81RA6.png" width="600px">
<img src="https://i.imgur.com/qHv09pg.png" width="300px">

#### Show Page - Desktop and mobile

<img src="https://i.imgur.com/NpWI7hJ.png" width="600px">
<img src="https://i.imgur.com/YF0hRze.png" width="600px">
<img src="https://i.imgur.com/WOa3m2i.png" width="300px">

<!-- prettier-ignore-start -->
### Daily Plan

| Day | Goal |
|-----|------|
| 1/17 | First meeting - discuss project ideas. Work on things needed to get project approved. Set up project and create main and dev branch in GitHub.|
| 1/18 | Create Trello Board and Readmes.
| 1/21 | Work on a Trello Board - claim cards and work on cards.|
| 1/22 - 1/24 | Group members work on cards on their own time. Claim more card when done with a card. |
| 1/25 | Second meeting - discuss what else needs to be done and work on finishing assignment. |
| 1/26 | Meet to test app and make final changes. Check/test deployed site and submit. |
| 1/27 | Meet to discuss presentation. |
<!-- prettier-ignore-end -->

### Link to Project

[Deployed Project Page](https://project-3-frontend-uxxk.onrender.com)
