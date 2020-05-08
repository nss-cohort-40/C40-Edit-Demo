const apiURL = "http://localhost:5050/songs"

const apiManager = {
  getAllSongs() {
    return fetch(`${apiURL}`)
      .then(data => data.json())
  },
  deleteSong(songId) {
    return fetch(`${apiURL}/${songId}`, {
      method: "DELETE"
    })
  }
}

export default apiManager