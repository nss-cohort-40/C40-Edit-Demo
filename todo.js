

// TODO - create a form on index.html containing input fields matching song properties and hidden input for id (!! if no id is present, same form can be used for creating a new song)

// handling edit button
// TODO- add edit button to HTML representation with an edit--(songId) and edit_btn class
// TODO- add (or in this case update) click event listener to songs_container to listen for edit buttons
// TODO- test^^
// TODO- get song Id from edit button using split - (code should already exist from delete)
// TODO- test^^

// Before we can edit a song, we need to get the current song details and pre-populate the form with that info:

// TODO- add getSong method (which takes a songID as an argument) to API module
// TODO- call getSong(songId) in edit button event listener
// TODO- test^^

// TODO- update form values with song returned from getSong
// TODO- test^^

// handling edit form
// TODO- add click event listener to form submit button
// TODO- test^^
// TODO- get references to input fields ()
// TODO- collect data from input fields on submit button click
// TODO- test^^ -->> add event.preventDefault() to prevent page refresh
// TODO- create object from data collected (*updatedSong*)
// TODO- test^^
// TODO- add condition to check for hidden id value (if there is an id, then the form acts like edit / otherwise you're adding a new song)
// TODO- test^^
// TODO- add updateSong method (which takes a song object and id as arguments) to API module (PUT request)
// TODO- call updateSong method in event listener and pass in the updated song and song id as arguments
// TODO- test^^ (how do we know if it was updated - refresh or check json)
// TODO- get all songs and re-render
// TODO- test^^
// TODO- clear form values (similar to prepopulate function)
// TODO- test^^


// ! TODO- ** mention CSS custom properties(variables)
// ! TODO- ** add create song functionality
// ! TODO- test^^




















// TODO: ALTERNATIVE -> add click event listeners to all delete buttons to delete song
// function addEventListenersToDeleteBtns() {
//   const deleteBtns = document.querySelectorAll("button")
//   deleteBtns.forEach(button => button.addEventListener("click", deleteSong))
// }
// ! you must call addEventListenersToDeleteBtns AFTER the songs have been rendered to the DOM in the getAndRenderAllSongs function like so:
// function getAndRenderAllSongs() {
//   songOutputContainer.innerHTML = ""
//   apiManager.getAllSongs().then(songs => {
//     songs.sort(sortAZ).map(songToHTML).forEach(renderToDOM)
//  ! HERE >>   addEventListenersToDeleteBtns()
//   })
// }