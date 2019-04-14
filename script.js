$(document).on('keypress', function (event) {
  if (event.originalEvent.code === 'Enter') {
    searchSongs()
  }
})
$('.search button').on('click', searchSongs)

function searchSongs () {
  let inputContents = $('.search input').val()
  let queryType = $("input[name*='query']:checked")

  $.ajax({
    url: `https://itunes-api-proxy.glitch.me/search`,
    data: {
      term: inputContents,
      media: 'music',
      entity: queryType.val()
    },
    dataType: 'json'
  }).done(function (result) {
    $('.results').empty()
    for (let item of result.results) {
      let track = document.createElement('div')
      track.classList.add('track')
      track.setAttribute('data-song', item.previewUrl)
      let albumImage = document.createElement('img')
      let heading = document.createElement('h2')
      let songName = document.createElement('p')
      albumImage.src = item.artworkUrl100
      heading.innerText = item.artistName
      songName.innerText = item.trackName
      track.append(albumImage)
      track.append(songName)
      track.append(heading)
      $('.results').append(track)
      $(track).on('click', playSong)
    }
  }).fail(function (error, response) {
    console.log('There was an error')
    console.log(response)
  })
}

let player = document.querySelector('.play audio')
$(player).on('click', function () {
  console.log('hello')
})

function playSong (event) {
  player.src = event.delegateTarget.dataset.song
  player.play()
}
