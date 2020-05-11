# EDIT Demo
The code in this repo contains the following steps in order to add edit functionality

- create a form on index.html containing input fields matching song properties and hidden input for id (!! if no id is present, same form can be used for creating a new song)

<!-- handling edit button -->
- add edit button to HTML representation with an edit--(songId) and edit_btn class
- add (or in this case update) click event listener to songs_container to listen for edit buttons
- test^^
- get song Id from edit button using split - (code should already exist from delete)
- test^^

Before we can edit a song, we need to get the current song details and pre-populate the form with that info:

- add getSong method (which takes a songID as an argument) to API module
- call getSong(songId) in edit button event listener
- test^^

- update form values with song returned from getSong
- test^^

<!-- handling edit form -->
- add click event listener to form submit button
- test^^
- collect data from input fields on submit button click
- test^^ -->> add event.preventDefault() to prevent page refresh
- create object from data collected (*updatedSong*)
- test^^
- add condition to check for hidden id value (if there is an id, then the form acts like edit / otherwise you're adding a new song)
- test^^
- add updateSong method (which takes a song object and id as arguments) to API module (PUT request)
- call updateSong method in event listener and pass in the updated song and song id as arguments
- test^^ (how do we know if it was updated - refresh or check json)
- get all songs and re-render
- test^^
- clear form values (similar to prepopulate function)
- test^^


- ** mention CSS custom properties(variables)
- ** add create song functionality
- test^^

