<?php

/**
 * Scoreboard class file.
 * 
 * @author Mirza Widihananta <atnanahidiw@gmail.com>
 * @package application.modules.scoreboard
 * @since 2013.08.23
 */

/**
 * Module for public scoreboard of OSN 2013.
 * 
 * @author Mirza Widihananta <atnanahidiw@gmail.com>
 * @package application.modules.scoreboard
 * @since 2013.08.23
 */
class ScoreboardModule extends CWebModule
{

    /**
     * The default controller for the scoreboard module controller.
     * @var string
     * @since 2013.08.23
     */
    public $defaultController = 'index';

    /**
     * The default layout for the controllers.
     * @var string
     * @since 2013.08.23
     */
    public $layout = 'main';

    /**
     * The URL for the assets.
     * @var string
     * @since 2013.08.23
     */
    private $_assetsUrl;

    /**
     * Invoke a method before a certain controller called.
     * @param CController $controller the controller.
     * @param CAction $action the action.
     * @return boolean whether the action should be executed.
     * @since 2013.08.23
     */
    public function beforeControllerAction($controller, $action)
    {
        if (parent::beforeControllerAction($controller, $action)) {
            return true;
        }
        else
            return false;
    }

    /**
     * Initializes the module.
     * @since 2013.08.23
     */
    public function init()
    {

        $this->setImport(array(
            'scoreboard.models.*',
            'scoreboard.components.*',
            'scoreboard.controllers.*',
        ));

        Yii::app()->errorHandler->errorAction = '/scoreboard/error/index';
    }

    /**
     * Returns the URL for the module's assets.
     * @return string url for module's assets.
     * @since 2013.08.23
     */
    public function getAssetsUrl()
    {
        if ($this->_assetsUrl === null) {
            $this->_assetsUrl = Yii::app()->getAssetManager()->publish($this->getBasePath() . DIRECTORY_SEPARATOR . 'assets');
        }
        return $this->_assetsUrl;
    }

    /**
     * Sets url assets.
     * @param string $value assets url
     * @since 2013.08.23
     */
    public function setAssetsUrl($value)
    {
        $this->_assetsUrl = $value;
    }

    /**
     * Returns the assets URL for a CSS asset.
     * @param string $file CSS filename
     * @return the url for the CSS file
     * @since 2013.08.23
     */
    public function getCssAssetsUrl($file)
    {
        return $this->assetsUrl . '/css/' . $file;
    }

    /**
     * Return an image url stored in the assets.
     * @param string $file the file's name.
     * @return string image URL.
     * @since 2013.08.23
     */
    public function getImage($file)
    {
        return $this->getAssetsUrl() . '/images/' . $file;
    }

    /**
     * Return URL of a script file in the module
     * @param string $file the file's name
     * @return string file URL
     * @since 2013.08.23
     */
    public function getScriptFile($file)
    {
        return $this->getAssetsUrl() . '/js/' . $file;
    }

    /**
     * Register CSS files in the module.
     * @param string $file the file.
     * @param string $media the media.
     * @since 2013.08.23
     */
    public function registerCssFile($file, $media = 'all')
    {
        $url = $this->getAssetsUrl() . '/css/' . $file;
        Yii::app()->clientScript->registerCssFile($url, $media);
    }

    /**
     * Register a stript file in the module.
     * @param string $file the file's name.
     * @param int $position the script's position.
     * @since 2013.08.23
     */
    public function registerScriptFile($file, $position = 0)
    {
        $url = $this->getScriptFile($file);
        Yii::app()->clientScript->registerScriptFile($url, $position);
    }

}
