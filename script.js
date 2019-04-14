'use strict'
/* global fetch */

function query (selector) {
  return document.querySelector(selector)
}

function queryAll (selector) {
  return document.querySelectorAll(selector)
}

function getMusic (search) {
  encodeURIComponent(search)
  let promise = fetch(`https://itunes-api-proxy.glitch.me/search?term=${search}&amp;media=music`)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
  return promise
}

function displayMusic (search) {
  const resultDiv = query('#results')
  resultDiv.innerHTML = ''
  getMusic(search)
    .then(function (result) {
      for (let item of result.results) {
        const trackDiv = document.createElement('div')
        trackDiv.classList.add('track')
        trackDiv.setAttribute('data-song-source', item.previewUrl)
        let albumArt = document.createElement('img')
        let title = document.createElement('p')
        let header = document.createElement('h2')
        albumArt.src = item.artworkUrl100
        header.innerText = item.artistName
        title.innerText = item.trackName
        trackDiv.append(albumArt)
        trackDiv.append(title)
        trackDiv.append(header)
        resultDiv.append(trackDiv)
        console.log(title)
      }
    })
}

query('#search-bar').addEventListener('change', function (event) {
  displayMusic(event.target.value)
})
