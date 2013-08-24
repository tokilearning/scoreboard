var Tracker = {
	elmt : '',
	update : function(array){
		//alert(Rank.trackedState.length);
		item = '';
		//for(i=0;i<Rank.trackedState.length;++i) temp+= Rank.trackedState[i]?'1':'0';
		//alert(temp);
		$(Tracker.elmt).html('<div id="tracker-header">Peserta yang dipantau : </div>');
		$(Rank.elmt + ' tr .c0 a').each(function() {
			i = parseInt($(this).attr('class').substring(10));
//			if(i == 1) alert(Rank.trackedState[i]==true?'1':'0');
//			temp += Rank.trackedState[i]?'1':'0';
			if(Rank.trackedState[i]){
				temp = '';
				temp += '<span class="tracker-item-rank">' + (i+1) + '</span>';
				temp += '<span class="tracker-item-name">' + '<a href="javascript:drawChart(' + i + ',' + Contest.id + ')">Nama Lengkap</a>' + '</span>';
				temp += '<span class="tracker-item-status">' + (i%2?'\+1':'-1') + '</span>';
				item += (i%2?'<li class="tracker-item-down">':'<li class="tracker-item-up">') + temp + '</li>';
//				$.ajax({
//					url: 'http://localhost/scoreboard/contest_time.php',
//					type: 'GET',
//					async: false,
//					dataType: 'json',
//					success: function(data){
//						item = data['status']>0?'<li class="tracker-item-down"></li>':'<li class="tracker-item-up"></li>';
//						item.addChild('<span class="tracker-item-rank">' + data['rank'] + '</span>');
//						item.addChild('<span class="tracker-item-name">' + data['name'] + '</span>');
//						item.addChild('<span class="tracker-item-status">' + (data['status']>0?'+'+data['status']:data['status']) + '</span>');
//						$(Tracker.elmt).addChild(item);
//					},
//				});
			}
		});
		item = '<ul id="tracker-list">' + item + '</ul>';
		$(Tracker.elmt).append(item);
//		alert(temp);
	},	
	init : function(elmt){
		Tracker.elmt = elmt;
		Tracker.update();
	},
}