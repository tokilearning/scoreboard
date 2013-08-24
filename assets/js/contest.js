var Contest = {
	id : 0,
	end : false,
	memberCount : 0,
    secondLeft : 0,
	setSecondLeft : function(){
		$.ajax({
			url: 'http://localhost/scoreboard/contest_time.php',
			type: 'GET',
			async: false,
			dataType: 'json',
			success: function(data){
				Contest.secondLeft = data;
			},
		});
	},
	getFormattedTime : function(){
		hour = Contest.secondLeft;
		second = hour % 60;
		hour = (hour-second) / 60;
		minute = hour % 60;
		hour = (hour-minute) / 60;
		return ((hour > 9)?hour:'0'+hour) + ':' + ((minute > 9)?minute:'0'+minute) + ':' + ((second > 9)?second:'0'+second);
	},	
	init : function(elmt, id){
		Contest.id = id;
		Contest.end = false;
		$.ajax({
			url: 'http://localhost/scoreboard/contest_member.php',
			type: 'GET',
			async: false,
			dataType: 'json',
			success: function(data){
				Contest.memberCount = data;
			},
		});
		Contest.setSecondLeft();
		$(elmt).text(Contest.getFormattedTime());
		var time = setInterval(function(){
			if(Contest.secondLeft > 0) --Contest.secondLeft;
			else{
				clearInterval(time);
				Contest.end = true;
			}
			$(elmt).text(Contest.getFormattedTime());
		}, 1000);
	},
}