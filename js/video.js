var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener('click', function(){
	console.log("Play Video")
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
})

document.querySelector("#pause").addEventListener('click', function(){
	console.log("Pause Video")
	video.pause();
})

document.querySelector("#slower").addEventListener('click', function(){
	console.log("Slow Down Video")
	video.playbackRate -=0.05;
	console.log("Play back speed: " + video.playbackRate)
})

document.querySelector("#faster").addEventListener('click', function(){
	console.log("Speed Up Video")
	video.playbackRate +=0.05;
	console.log("Play back speed: " + video.playbackRate)
})

document.querySelector("#skip").addEventListener('click', function(){
	console.log("Skip Ahead")
	if (video.currentTime + 15 < video.duration){
		video.currentTime = video.currentTime + 15
	}
	else{
		video.currentTime = 0
	}
	console.log("Video time: " + video.currentTime)
})

document.querySelector("#mute").addEventListener('click', function(){
	if (video.muted == false){
		console.log("Mute Video")
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else{
		console.log("Unmute Video")
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
})

document.querySelector("#slider").addEventListener('click', function(){
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
	console.log("Slider Volume: " + video.volume);
})

document.querySelector("#vintage").addEventListener('click', function(){
	console.log("Old School")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener('click', function(){
	console.log("Original")
	video.classList.remove("oldSchool")
})
