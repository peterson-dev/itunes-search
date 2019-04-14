# iTunes Search API

## Description

In this app you can search for songs by hitting the iTunes API and allows a user to listen to a thirty second sample of any audio file available in the iTunes library.  

## Built With
- HTML/CSS and particles.js used for the UI design
- Javascript, JQuery used for hitting the API and serving the data 

## Resources 
- [API documents](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)

**NOTE**: The iTunes API can be a little flaky when it comes to returning CORS headers. These headers are necessary for Ajax to work correctly. I have replaced `https://itunes.apple.com/` in the API URL with `https://itunes-api-proxy.glitch.me/`.  Proxy credit to [Clinton Dreisbach](https://github.com/cndreisbach)