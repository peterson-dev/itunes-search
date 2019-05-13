# iSearch

## Description

This [app](https://thirty-second-dance-party.herokuapp.com/) uses iTunes Search API and allows you to lookup and listen to thirty second samples of any audio file available in the iTunes library.


## Built With
- HTML/CSS and particles.js for simple UI
- GET from API, use JQuery to perform async HTTP (Ajax) request 

## Resources 
- [API documents](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)

**NOTE**: The iTunes API can be a little flaky when it comes to returning CORS headers. These headers are necessary for Ajax to work correctly. I have replaced `https://itunes.apple.com/` in the API URL with `https://itunes-api-proxy.glitch.me/`.  Proxy credit to [Clinton Dreisbach](https://github.com/cndreisbach)