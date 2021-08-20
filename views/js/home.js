  // YOUTUBE API

    const API_KEY = 'AIzaSyD8cvm_u_Tl4KUlGvIiZbKIRWE9fjIIFic';
    const channelID = 'UCScGdWV_cDx05Jza_0oGftQ';
    const result = 6;
    
    var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        const resultVideos = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        let iframeSlots = document.querySelectorAll('#youtube-video');
        for(var i=0; i<6; i++){
          iframeSlots[i].setAttribute('src', resultVideos[i]);
        }
      })
      .catch(err => {
        console.error(err);
      });
      