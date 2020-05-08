# EDIT Demo
The code in this repo contains the following steps in order to add edit functionality

- create a form on index.html containing input fields matching song properties and hidden input for id (!! if no id is present, same form can be used for creating a new song)

<!-- handling edit button -->
- add edit button to HTML representation with an edit--(songId) and edit_btn class
- test^^
- add (or in this case update) click event listener to songs_container to listen for edit buttons
- test^^
- get song Id from edit button using split - (code should already exist from delete)
- test^^

- add getSong method (which takes a songID as an argument) to API module
- call getSong(songId) in edit button event listener
- test^^

- update form values with song returned from getSong
- test^^

<!-- handling edit form -->
- add click event listener to form submit button
- test^^
- collect data from input fields on submit button click
- test^^
- create object from data collected (*updatedSong*)
- test^^
- add editSong method (which takes a song object as an argument) to API module (PUT request)
- call editSong method in event listener and pass in *updatedSong*  as argument
- test^^
- clear form values
- test^^
- get all songs and re-render
- test^^
