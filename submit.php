<?php
include 'contest_id.php';

$array = array();

$count = rand(20,50);
$time = time();
$end = $time + 18000;
$i = 0;
while( ($i<$count) && (count($id)!=0) && ($time<$end) ){
	$problem = rand(1,count($id));
	$time = $time + rand(1,60) * 60;
	if($time > $end) $time = $end;
	$result = (rand(0,3) == 0);
	$temp = array(
	    'problem_id' => $id[$problem-1]['id'],
		'submitted_time' => date('Y-m-d H:i:s', $time),
		'grade_status' => 3,
		'verdict' => $result?'Accepted':'Wrong Answer',
		'score' => $result?100:rand(0,19)*5,
	);
	array_push($array, $temp);
    if($result){
		for($j=$problem-1; $j<count($id)-1; ++$j) $id[$j] = $id[$j+1];
		unset($id[$j]);
	}
	++$i;
}

echo json_encode($array, JSON_PRETTY_PRINT);