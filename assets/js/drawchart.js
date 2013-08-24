function openModal(){
	$('#modal').show();
	$('body').css('overflow', 'hidden');
}

function closeModal(){
	$('#modal').hide();
	$('body').css('overflow', 'auto');	
}

google.load("visualization", "1", {packages:["corechart"]});
google.load("visualization", "1", {packages:["table"]});
function drawChart(submitter_id, contest_id) {
	openModal()
	
	var problem = new Array(),
		score = new Array(),
		failed = new Array();
	
	var contestStart, contestFinish;
		
	function getTotalScore(){
		var total = 0
		for(id in problem)	total += problem[id][1];
		return total;
	}
	
	//ajax load all problem_id from provided contest_id			
	$.ajax({
		url: 'http://localhost/scoreboard/contest_problem.php',
		type: 'GET',
		data: {contest_id:contest_id},
		dataType: 'json',
		success: function(data){
			for(i in data) problem[data[i]['id']] = new Array(data[i]['name'], 0);
		},
	});

	//init start time
	$.ajax({
		url: 'http://localhost/scoreboard/contest.php',
		type: 'GET',
		data: {contest_id:contest_id},
		dataType: 'json',
		success: function(data){
			contestStart = data[0];
			contestFinish = data[1];
			
			score.push(new Array('Time', 'Score'));
//			failed.push(new Array('Time', 'Times'));
			score.push(new Array(contestStart.substring(11), 0));	
//			failed.push(new Array(contestStart, 0));	
		},
	});

	//ajax load all submit from provided submitter_id
	$.ajax({
		url: 'http://localhost/scoreboard/submit.php',
		type: 'GET',
		data: {submitter_id:submitter_id, contest_id:contest_id},
		dataType: 'json',
		success: function(data){
			var totalFailed = 0;
			for(idx in data){
				if(data[idx]['grade_status'] == 3){
					problem[data[idx]['problem_id']][1] = data[idx]['score'];
					score.push(new Array(data[idx]['submitted_time'].substring(11), getTotalScore()));
				}
//				if(data[idx]['verdict'] != 'Accepted'){
//					failed.push(new Array(data[idx]['submitted_time'],++totalFailed)); 
//				}
			}
			
			//when contest finish
			score.push(new Array(contestFinish.substring(11), getTotalScore()));
//			failed.push(new Array(contestFinish, totalFailed));
						
			var table = new Array();
			table.push( new Array('Problem Name', 'Score'));
			for (i in problem) table.push(problem[i]);
			table.push(new Array('Total', getTotalScore()));
			
			var data = google.visualization.arrayToDataTable(table);
			var options = {
				sort: 'disable',
			};
			var chart = new google.visualization.Table(document.getElementById('table-chart'));
			chart.draw(data, options);

			var data = google.visualization.arrayToDataTable(score);
			var options = {
				colors: ['green'],
				title: 'Total Score',
				titleTextStyle: {
					fontSize: 20,
					
				},
				legend: 'none',
				animation: {
					duration: 1000,
					easing: 'linear',
				},
				hAxis: {textPosition: 'none'},
				vAxis: {
					gridlines: {count: (problem.length)},
					viewWindow: {max: (problem.length-1) * 100}
				},
			};
			var chart = new google.visualization.LineChart(document.getElementById('score-chart'));
			chart.draw(data, options);

//			var data = google.visualization.arrayToDataTable(failed);
//			var options = {
//				colors: ['red'],
//				title: 'Total Failed Attempt',
//				legend: 'none',
//				animation: {
//					duration: 1000,
//					easing: 'linear',
//				},
//				hAxis: {textPosition: 'none'},
//				vAxis: {
//					title: 'Attempts',
//					direction: -1
//				},
//			};
//			var chart = new google.visualization.AreaChart(document.getElementById('failed-chart'));
//			chart.draw(data, options);
		},
	});
}

$('document').ready(function(){
	$('#modal-close').click(function(){ closeModal(); });
});