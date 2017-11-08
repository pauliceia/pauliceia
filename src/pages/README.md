# Routes

* `/`

  Home route. Should display the map.
  
* `/about`

  About page.
  
* `/layers`

  The main layers page. It should display a preview of the most well-rated
  layers, as well as a search bar to search for layers.

* `/layers/:id`

  An individual layer page. It should display the map along with the layer. It
  should also display associated information, like the layer's owner, any extra
  text/descriptions/images/videos that belong to the layer, the feedback section
  (where people can rate and comment about the layer), and a way to add it to
  the map in the main page.

* `/projects`

  The main projects page. It should display a preview of the most well-rated
  projects, as well as a search bar to search for projects.

* `/projects/:id`

  An individual project page. It should display the map along with all the
  layers that the project has. It should also display associated information,
  like the project's owner, the project's co-owners and helpers, any extra
  text/descriptions/images/videos that belong to the project, the feedback
  section (where people can rate and comment about the project), and a way to
  add it to the map in the main page as a nested layer.

* `/user`

  The user page. If there's no existing user session, it should redirect to the
  login/register page. If there's an existing user session, it should redirect
  to the dashboard page.

* `/user/dashboard`

  The user's dashboard should display a way to access the user's data and
  projects.
  
* `/user/settings`

  The user's settings page.
  
* `/user/data`

  The user's data page. It should contain a list of the most recent data that
  the user uploaded, along with a search bar.
 
* `/user/data/:id`

  An individual datum page. It should contain the map with the datum along with
  all the associated information, like text/descriptions/images/videos, the name
  of the datum, etc... It should also have a way to edit the information and to
  delete the datum.
  
* `/user/data/upload`
  
  A page where you can upload an individual datum. It should contain a form with
  the following fields:
  
    * Name
    * Description

* `/user/layers`

  The user's layers page. It should contain a list of the most recent layers
  that the user uploaded, along with a search bar.
 
* `/user/layers/:id`

  An individual layer page. It should contain the map with the layer along with
  all the associated information, like text/descriptions/images/videos, the name
  of the layer, etc... It should also have a way to edit the information and to
  delete the layer.
  
* `/user/projects`

  The user's projects page. It should contain a list of the most recent projects
  that the user uploaded, along with a search bar.
 
* `/user/projects/:id`

  An individual project page. It should contain the map with the project's
  layers along with
  all the associated information, like text/descriptions/images/videos, the name
  of the project, etc... It should also have a way to edit the information and
  to delete the project.
  
