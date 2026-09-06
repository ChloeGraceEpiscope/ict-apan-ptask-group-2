const music = document.getElementById("egyptMusic");

if (music) {

    // get the saved position yeahhh
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // save the position while the music plays i think
    music.addEventListener("timeupdate", function () {
        localStorage.setItem("musicTime", music.currentTime);
    });

    // remember whether the music was playing ye
    music.addEventListener("play", function () {
        localStorage.setItem("musicPlaying", "true");
    });

    music.addEventListener("pause", function () {
        localStorage.setItem("musicPlaying", "false");
    });

    // try to resume automatically yayyy
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play().catch(function () {
            console.log("Browser blocked autoplay.");
        });
    }
}
