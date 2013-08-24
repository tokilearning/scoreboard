<?php
$contest_id = 10;
?>

<!DOCTYPE html>
<html>
	<head>
        <?php Yii::app()->controller->module->registerCssFile('main.css'); ?>
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
        <?php Yii::app()->controller->module->registerScriptFile('drawchart.js'); ?>
        <?php Yii::app()->controller->module->registerScriptFile('contest.js'); ?>
        <?php Yii::app()->controller->module->registerScriptFile('rank.js'); ?>
        <?php Yii::app()->controller->module->registerScriptFile('tracker.js'); ?>
	</head>
	<body>
		<script type="text/javascript">
			
			var contest;
			$(window).resize(function(){
				$('#main').height($(window).height() - $('header').outerHeight() - $('footer').outerHeight());
			});
			
			$(document).ready(function(){
				$('#main').height($(window).height() - $('header').outerHeight() - $('footer').outerHeight());

				Contest.init('#time',<?php echo $contest_id; ?>);
				Rank.init('#rank');
				Rank.fixture();
				Tracker.init('#tracker');

//				setInterval(function(){
//					$('table').html('');
//					$('#tracker-list').html('');
//				}, 10000);
			});
		</script>
		<header>
			<?php
			echo CHtml::image(Yii::app()->controller->module->getImage('logo.jpg'), '', array(
				'id' => 'logo',
			));
			?>
			<span id="title">Olimpiade Sains Nasional 2013 - Komputer</span>
			<span id="time"></span>
		</header>
		<div id="main">
			<div id="tracker">
				<div id="tracker-header">Peserta yang dipantau : </div>
				<ul id="tracker-list">
					<li class="tracker-item-up">
						<span class="tracker-item-rank">1</span>
						<span class="tracker-item-name">Siapalah</span>
						<span class="tracker-item-status">-1</span>
					</li>
					<li class="tracker-item-down">
						<span class="tracker-item-rank">2</span>
						<span class="tracker-item-name">Entahlah</span>
						<span class="tracker-item-status">+1</span>
					</li>
					<li class="tracker-item-up">
						<span class="tracker-item-rank">3</span>
						<span class="tracker-item-name">Siapalah</span>
						<span class="tracker-item-status">-1</span>
					</li>
					<li class="tracker-item-down">
						<span class="tracker-item-rank">4</span>
						<span class="tracker-item-name">Entahlah</span>
						<span class="tracker-item-status">+1</span>
					</li>
					<li class="tracker-item-up">
						<span class="tracker-item-rank">5</span>
						<span class="tracker-item-name">Siapalah</span>
						<span class="tracker-item-status">-1</span>
					</li>
					<li class="tracker-item-down">
						<span class="tracker-item-rank">6</span>
						<span class="tracker-item-name">Entahlah</span>
						<span class="tracker-item-status">+1</span>
					</li>
					<li class="tracker-item-up">
						<span class="tracker-item-rank">7</span>
						<span class="tracker-item-name">Siapalah</span>
						<span class="tracker-item-status">-1</span>
					</li>
					<li class="tracker-item-down">
						<span class="tracker-item-rank">8</span>
						<span class="tracker-item-name">Entahlah</span>
						<span class="tracker-item-status">+1</span>
					</li>
					<li class="tracker-item-up">
						<span class="tracker-item-rank">9</span>
						<span class="tracker-item-name">Siapalah</span>
						<span class="tracker-item-status">-1</span>
					</li>
					<li class="tracker-item-down">
						<span class="tracker-item-rank">10</span>
						<span class="tracker-item-name">Entahlah</span>
						<span class="tracker-item-status">+1</span>
					</li>
				</ul>
			</div>
			<div id="rank"></div>
		</div>
		<footer>Tim Olimpiade Komputer Indonesia &copy 2013</footer>	
		<div id="modal">
			<div id="overlay"></div>
			<div id="modal-wrapper">
				<div id="modal-content">
					<a id="modal-close" href="#">x</a>
					<div id="contestant-detail">
						<h3 class="contestant-name">Nama Peserta</h3>
						<div class="contestant-data">Asal Peserta</div>
						<div id="table-chart"></div>
					</div>
					<?php
					echo CHtml::image(Yii::app()->controller->module->getImage('default_propic.jpg'), '', array(
						'class' => 'contestant-picture',
					));
					?>
					<div id="score-chart"></div>
					<div id="failed-chart"></div>
				</div>
			</div>
		</div>
	</body>
</html>
