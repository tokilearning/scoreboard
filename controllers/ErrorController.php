<?php

class ErrorController extends CController
{

    public function actionIndex()
    {
        header('Content-type: application/json');
        $error = Yii::app()->errorHandler->getError();

        $response = array(
            'status' => 'Error',
            'message' => $error['message'],
        );
        echo CJSON::encode($response);
    }

}