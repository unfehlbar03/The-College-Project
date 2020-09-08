var endDate = new Date("Sep 10, 2020 12:30:20").getTime();


		var x = setInterval(function () {
			var now = new Date().getTime();
			var remain = endDate - now;



			var hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((remain % (1000 * 60)) / 1000);


			document.getElementById("timer").innerHTML = hours + "h "
				+ minutes + "m " + seconds + "s ";


			if (remain < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "Event has Started";
			}
		}, 1000);