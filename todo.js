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