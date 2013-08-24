Rank = {
	elmt : '',
	trackedCount : 10,
	trackedState : new Array(),
	table : '<table></table>',
	init : function(elmt){
		Rank.elmt = elmt;
		Rank.trackedState = new Array(Contest.memberCount);
		for(i=0; i<Contest.memberCount; ++i) Rank.trackedState[i] = false;
	},
	fixture : function(){
		$(Rank.elmt).append(Rank.table);
		head = '<thead><tr><th class="c0"><i class="icon-target-white"></i></th><th class="c1">Rank</th><th class="c2">Nama Lengkap</th><th class="c3">Asal</th><th class="c4">P1</th><th class="c5">P2</th><th class="c6">P3</th><th class="c7">P4</th><th class="c8">Day1</th><th class="c9">P1</th><th class="c10">P2</th><th class="c11">P3</th><th class="c12">P4</th><th class="c13">Day2</th><th class="c14">Total</th></tr></thead>';
		$(Rank.elmt+' table').append(head);
		var body = '';
		for(i = 0; i < Rank.trackedState.length; ++i){
			var item = '';
			item += '<td class="c0"><a class="mark mark-' + i + '" href="javascript:Rank.changeTrackedState(' + i + ')"></a></td>';
			item += '<td class="c1">' + (i+1) + '</td>';
			item += '<td class="c2"><a href="javascript:drawChart(' + i + ',' + Contest.id + ')">Nama Lengkap</a></td>';
			item += '<td class="c3">Asal</td>';
			item += '<td class="c4">P1</td>';
			item += '<td class="c5">P2</td>';
			item += '<td class="c6">P3</td>';
			item += '<td class="c7">P4</td>';
			item += '<td class="c8">Day1</td>';
			item += '<td class="c9">P1</td>';
			item += '<td class="c10">P2</td>';
			item += '<td class="c11">P3</td>';
			item += '<td class="c12">P4</td>';
			item += '<td class="c13">Day2</td>';
			item += '<td class="c14">Total</td>';
			item = '<tr>' + item + '</tr>';
			body += item;
		}
		body = '<tbody>' + body + '</tbody>'
		$(Rank.elmt+' table').append(body);
	},
	changeTrackedState : function(i){
		if(Rank.trackedState[i]==true){
			Rank.trackedState[i] = false;
			$('.mark-' + i).removeClass('mark-active');
			++Rank.trackedCount;
		}
		else{
			if(Rank.trackedCount == 0){
				alert('Sistem tidak bisa menambah jumlah peserta yang dipantau lagi');
			}
			else{
				Rank.trackedState[i] = true;
				$('.mark-' + i).addClass('mark-active');
				--Rank.trackedCount;
			}
		}
		Tracker.update();
	},
}