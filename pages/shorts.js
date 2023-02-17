// scroll specific height using vanilla js
// https://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation



let vid = {
    "0": {
        "title": "Jordan Peterson - The Psychology of Evil",
        "description": "Jordan Peterson - The Psychology of Evil",
        "video": "../assets/videos/jp.mp4",
        "profile": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "channel": "Jordan Peterson",
        "views": "1.2M",
        "likes": "1.2M",
        "dislikes": "1.2M",
        "comments": "1.2M"
    },
    "1": {
        "title": "The Last of Us Part II",
        "description": "The Last of Us Part II is an upcoming action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. It is scheduled to be released on June 19, 2020.",
        "video": "../assets/videos/y2mate.com - Joe Rogan Examines Ancient Flood Evidence_360p.mp4",
        "profile": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "channel": "Naughty Dog",
        "views": "1.2M",
        "likes": "1.2M",
        "dislikes": "1.2M",
        "comments": "1.2M"
    },
    "2": {
        "title": "Super Mario 3D All-Stars",
        "description": "Super Mario 3D All-Stars is a compilation of three Super Mario platform games developed by Nintendo for the Nintendo Switch. It was released on September 18, 2020.",
        "video": "../assets/videos/y2mate.com - Taking Revenge on a Disney Employee_v240P.mp4",
        "profile": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "channel": "Nintendo",
        "views": "1.2M",
        "likes": "1.2M",
        "dislikes": "1.2M",
        "comments": "1.2M"
    },
    "3": {
        "title": "The Last of Us Part II",
        "description": "The Last of Us Part II is an upcoming action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. It is scheduled to be released on June 19, 2020.",
        "video": "../assets/videos/jp.mp4",
        "profile": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
        "channel": "Naughty Dog",
        "views": "1.2M",
        "likes": "1.2M",
        "dislikes": "1.2M",
        "comments": "1.2M"
    }

}

let videos = Object.values(vid);
let currentVideo = 0;

function createVideo() {
    let vid = document.querySelector(".short_video");
    if (vid) {
        vid.remove();
    } else {
        let video = document.createElement("video");
        video.addClassName = "short_video";
        video.src = videos[currentVideo].video;
        video.controls = true;
        video.autoplay = true;
        video.className = "video";
        let metadata = `<div class="short_info">
                    <div class="short_title">
                        <p id="video-title">${videos[currentVideo].title}</p>
                    </div>
                    <div class="channel_info">
                        <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                            class="profile_img" id="video-profile"/>
                        <a href="./index.html" id="video-channel">${videos[currentVideo].channel}</a>
                        <button href="" class="subscribe_btn">subscribe</button>
                    </div>
                </div>`
        
        document.getElementById("video-container").appendChild(video);
        document.getElementById("video-container").innerHTML += metadata;
    }
    
}
function down() {
    if (currentVideo < videos.length - 1) {
        currentVideo++;
        document.getElementById("video-container").innerHTML = "";
        createVideo();
    }
}
// on up key press
function up() {
    if (currentVideo > 0) {
        currentVideo--;
        document.getElementById("video-container").innerHTML = "";
        createVideo();
    }
}
//press the down arrow key

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 40) {
        down();
    }
    if (event.keyCode === 38) {
        up();
    }
});
document.onload = createVideo();
