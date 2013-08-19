<?php
echo json_encode(array(date('Y-m-d H:i:s', time()), date('Y-m-d H:i:s', strtotime('+5 hours'))));