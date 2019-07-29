// <---------- intro ---------------->
window.onload = function introAnimation() {
  console.log("ready");
  document.getElementsByClassName("introText1")[0].style.display = "block";

  document.getElementsByClassName("introText1")[0].style.animation =
    "textDropOne 1s ease-in";

  setTimeout(() => {
    document.getElementsByClassName("introText1")[0].style.animation =
      "textDropTwo .25s ease-in";
    document.getElementsByClassName("introText2")[0].style.display = "block";
    document.getElementsByClassName("introText2")[0].style.animation =
      "textDropOne .25s ease-in";
    setTimeout(() => {
      document.getElementsByClassName("introText1")[0].style.display = "none";
    }, 250);
  }, 1500);
  setTimeout(() => {
    document.getElementsByClassName("introText2")[0].style.animation =
      "textDropTwo .25s ease-in";
    setTimeout(() => {
      document.getElementsByClassName("introText2")[0].style.display = "none";
    }, 250);
  }, 1850);
  setTimeout(() => {
    document.getElementsByClassName("introText3")[0].style.display = "block";
    document.getElementsByClassName("introText3")[0].style.animation =
      "textDropOne .25s ease-in";
    setTimeout(() => {
      document.getElementsByClassName("introText3")[0].style.animation =
        "textDropTwo .25s ease-in";
      document.getElementsByClassName("introText4")[0].style.display = "block";
      document.getElementsByClassName("introText4")[0].style.animation =
        "textDropOne .25s ease-in";
      setTimeout(() => {
        document.getElementsByClassName("introText3")[0].style.display = "none";
        setTimeout(() => {
          document.getElementsByClassName("introText4")[0].style.animation =
            "textFade 1s ease-in-out";
          document.getElementById("intro").style.animation =
            "textFade 1s ease-in-out";
          setTimeout(() => {
            document.getElementsByClassName("introText4")[0].style.display =
              "none";
            document.getElementById("intro").style.display = "none";
            inactivityTime();
          }, 1000);
        }, 500);
      }, 250);
    }, 350);
  }, 1950);
};

// <--checks inactivity for a period or 3 seconds and then starts to disable posters one by one -->
var inactivityTime = function() {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
    randomPoster();
    //location.href = 'logout.html'
  }

  function resetTimer() {
    console.log("reset");
    clearTimeout(time);
    time = setTimeout(logout, 3000);
    // 1000 milliseconds = 1 second
  }
};
// <---selects all posters in ascending order and scales them up and then down---->
function randomPoster() {
  let poster = document.getElementsByClassName("posterMask");
  for (i = 0; i < poster.length; i++) {
    (function(index) {
      setTimeout(function() {
        poster[index].style.transform = "scale(1.05)";
        setTimeout(function() {
          poster[index].style.transform = "scale(1)";
        }, i * 350);
      }, i * 250);
    })(i);
  }
}

// ----------------Global Variables Area----------------

var shazamTrailers = [
  '<img onclick = "vidHolderUp(\'281502145\')" src = "images/Stills/ShazamTrailerStill.png" alt = "" srcset = ""/>'
];

var narcosMexicoTrailer = [
  '<img onclick = "vidHolderUp(\'292769952\')" src = "images/Stills/NarcosMexicoTeaserStill.png" alt = "" srcset = ""/>'
];

var extinctionTrailer = [
  '<img onclick = "vidHolderUp(\'279750518\')" src = "images/Stills/ExtinctionTrailerStill.png" alt = "" srcset = ""/>'
];

var moneyHeistTrailer = [
  '<img onclick = "vidHolderUp(\'279750491\')" src = "images/Stills/MoneyHeistS2TrailerStill.png" alt = "" srcset = ""/>'
];

var narcosS2Trailer = [
  '<img onclick = "vidHolderUp(\'208770645\')" src = "images/Stills/NarcosS2TrailerStill.png" alt = "" srcset = ""/>'
];

var ozarkS1Teaser = [
  '<img onclick = "vidHolderUp(\'272281344\')" src = "images/Stills/OzarkS1TeaserStill.png" alt = "" srcset = ""/>'
];

// ----------------Functions Area----------------

// window.onload = function hoverCheckAll() {
//   var posterMask = document.querySelectorAll(".posterMask");

//   // this checks if any postermasks are being hovered over
//   for (var i = 0; i < posterMask.length; i++) {
//     let hoverCheck = false;
//     document
//       .getElementsByClassName("posterMask")
//       [i].addEventListener("mouseenter", e => {
//         hoverCheck = true;
//       });
//     document
//       .getElementsByClassName("posterMask")
//       [i].addEventListener("mouseleave", e => {
//         hoverCheck = false;
//       });
//   }
// };

function slideOverFunction(x, y) {
  var i;
  for (i = 0; i < x.length; i++) {
    document.getElementById("imageHolder").innerHTML += x[i];
  }
  document.getElementById("slider").style.background =
    "linear-gradient(" + y + ")";
  document.getElementById("slider").style.animation =
    "slideOver .75s ease-in-out";
  document.getElementById("slider").style.transform = "translateX(0%)";
  setTimeout(function() {
    document.getElementById("slider").style.animation = "";
  }, 1000);
}

function slideBackFunction() {
  document.getElementById("slider").style.transform = "translateX(0%)";
  document.getElementById("slider").style.animation =
    "slideBack 1s ease-in-out";
  document.getElementById("slider").style.transform = "translateX(100%)";
  setTimeout(function() {
    document.getElementById("imageHolder").innerHTML = "";
  }, 1000);
}

function slideshowButtonClick() {
  // function variables
  var imageLength = document
    .getElementById("imageHolder")
    .getElementsByTagName("img").length;
  var content = document
    .getElementById("imageHolder")
    .getElementsByTagName("img")[imageLength - 1];

  // function actions
  document.getElementById("nextArrow").style.animation =
    "buttonClick .25s ease-in-out";

  setTimeout(() => {
    document.getElementById("nextArrow").style.animation = "";
    content.style.animation = "imageSlide 1s ease-out";
  }, 250);

  setTimeout(() => {
    content.style.animation = "";
    var parent = content.parentNode;
    parent.insertBefore(content, parent.firstChild);
  }, 1250);
}

function vidHolderUp(x) {
  document.getElementById("vidHolderBG").style.display = "block";
  document.getElementById("vidHolder").style.display = "block";
  document.getElementById("vidHolderBG").style.animation =
    "vidHolderBGOpacityUp .5s ease-in";
  document.getElementById("video").innerHTML =
    '<iframe src="https://player.vimeo.com/video/' +
    x +
    '?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
}

function vidHolderDown() {
  document.getElementById("vidHolderBG").style.display = "none";
  document.getElementById("vidHolder").style.display = "none";
  document.getElementById("vidHolderBG").style.animation = "";
  document.getElementById("video").innerHTML = "";
}
