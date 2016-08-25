define(function (require) {
	var $ = require('jquery');
	var TweenLite = require('TweenLite');
	console.log($)

	var demo = {score:0},
	    scoreDisplay = document.getElementById("scoreDisplay");

	//create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
	var tween = TweenLite.to(demo, 20, {score:100, onUpdate:showScore})

	//each time the tween updates this function will be called.
	function showScore() {
	  scoreDisplay.innerHTML = demo.score.toFixed(2);
	}
});
