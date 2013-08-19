var Rank = {
	elmt : '',
	table : '<table></table>',
	fixture : function(elmt){
		Rank.elmt = elmt;
		$(elmt).append(Rank.table);
		head = '<thead><tr><th class="c0">Pantau</th><th class="c1">Rank</th><th class="c2">Nama Lengkap</th><th class="c3">Asal</th><th class="c4">P1</th><th class="c5">P2</th><th class="c6">P3</th><th class="c7">P4</th><th class="c8">Day1</th><th class="c9">P1</th><th class="c10">P2</th><th class="c11">P3</th><th class="c12">P4</th><th class="c13">Day2</th><th class="c14">Total</th></tr></thead>';
		$(elmt+' table').append(head);
		var body = '';
		for(i = 0; i < 90; ++i){
			var item = '';
			item += '<td class="c0">Pantau</td>';
			item += '<td class="c1">Rank</td>';
			item += '<td class="c2"><a href="javascript:drawChart(i,contest.id)">Nama Lengkap</td>';
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
		$(elmt+' table').append(body);
	},
}