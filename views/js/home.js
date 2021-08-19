//  FIREBASE
 
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDD026eNT422iw3FF8AcOmKXJhT-od3EVs",
      authDomain: "personal-website-c568f.firebaseapp.com",
      projectId: "personal-website-c568f",
      storageBucket: "personal-website-c568f.appspot.com",
      messagingSenderId: "254236089898",
      appId: "1:254236089898:web:a383a581b010f0b6c22d53"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let contactInfo = firebase.database().ref("infos");

    document.querySelector(".contact-form").addEventListener("submit", submitForm);

    function submitForm(e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let message = document.getElementById("message").value;

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      saveContactInfo(name, email, subject, message, dateTime);

      let alert = document.getElementById('alert');
      alert.innerHTML = 'Your message has been sent successfully';

      setTimeout(() => {
        alert.innerHTML = '';
        document.querySelector(".contact-form").reset();
      }, 3000)
    }

    // Save user information to Firebase
    function saveContactInfo(name, email, subject, message, dateTime) {
      let newContactInfo = contactInfo.push();

      newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
        dateTime: dateTime,
      });
    }


  // YOUTUBE API

    const API_KEY = 'AIzaSyD8cvm_u_Tl4KUlGvIiZbKIRWE9fjIIFic';
    const channelID = 'UCdQSId2bcEOojt6uolDexGg';
    const result = 6;
    
    var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        const resultVideos = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
        let iframeSlots = document.querySelectorAll('#youtube-video');
        for(var i=0; i<6; i++){
          iframeSlots[i].setAttribute('src', resultVideos[i]);
        }
      })
      .catch(err => {
        console.error(err);
      });
      