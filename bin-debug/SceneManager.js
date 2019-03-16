var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理,单例类
 */
var SceneManager = (function () {
    //创建两个场景
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayScene();
        this.heroScene = new HeroScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            //单例类判断是否已经存在一个实例
            if (!this.sceneManager)
                this.sceneManager = new SceneManager();
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 设置主场景
     */
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = this.instance.mainScene;
        if (!mainScene.parent)
            stage.addChild(mainScene);
        if (SceneManager.instance.playerScene.parent)
            mainScene.removeChild(this.instance.playerScene);
        if (SceneManager.instance.heroScene.parent)
            mainScene.removeChild(this.instance.heroScene);
        //if(SceneManager.instance.goodsScene.parent)
    };
    SceneManager.toPlayerScene = function () {
        var stage = this.instance._stage;
        if (SceneManager.instance.playerScene.parent)
            this.instance.mainScene.removeChild(SceneManager.instance.playerScene);
        if (SceneManager.instance.heroScene.parent)
            this.instance.mainScene.removeChild(SceneManager.instance.heroScene);
        this.instance.mainScene.addChildAt(this.instance.playerScene, this.instance.mainScene.numChildren - 1);
    };
    SceneManager.toHeroScene = function () {
        var stage = this.instance._stage;
        this.instance.mainScene.addChildAt(this.instance.heroScene, this.instance.mainScene.numChildren - 1);
    };
    SceneManager.toGoodsScene = function () {
    };
    SceneManager.toAboutScene = function () {
    };
    //显示已经选择的英雄的名字
    SceneManager.showHeroSelected = function (arr) {
        var text = '你选择了: ';
        if (arr.length === 0) {
            text = '厉害了什么都不选';
        }
        else {
            text += arr.toString();
        }
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        // 新建一个label用来显示
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map