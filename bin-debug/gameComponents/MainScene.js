var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.mbtnArr = [];
        console.log("main constructor");
        _this.addEventListener(egret.Event.ADDED, _this.onAdded, _this);
        return _this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        console.log("main partAdded");
    };
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        console.log("main childrenCreated");
    };
    /**
     *当main被添加到显示列表中时触发
     */
    MainScene.prototype.onAdded = function () {
        this.mbtnArr = [this.mbtnPlayer, this.mbtnHero, this.mbtnGoods, this.mbtnAbout];
        this.mbtnGroup.touchEnabled = true;
        this.mbtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchUi, this);
    };
    /**
     * 重置所有按钮的选中状态
     */
    MainScene.prototype.resetBtn = function () {
        for (var i = 0; i < this.mbtnArr.length; i++)
            this.mbtnArr[i].selected = false;
    };
    /**
     * 选择不同的按钮实现页面之间的跳转
     */
    MainScene.prototype.switchUi = function (evt) {
        var _this = this;
        var inst = SceneManager.instance;
        var target = evt.target;
        //所有按钮处于非选中状态，当前目标为选中状态
        this.resetBtn();
        target.selected = true;
        switch (target.name) {
            case 'player':
                console.log("<<<<<<PLAYER>>>>>>");
                SceneManager.setScene('player');
                //处理返回按钮事件
                inst.playerScene.addEventListener(GameEvents.EVT_RETURN, function () {
                    _this.resetBtn();
                    SceneManager.setScene('main');
                }, this);
                break;
            case 'hero':
                console.log("<<<<<<HERO>>>>>>");
                SceneManager.setScene("hero");
                //处理返回按钮
                inst.heroScene.addEventListener(GameEvents.EVT_RETURN, function () {
                    _this.resetBtn();
                    SceneManager.setScene("main");
                }, this);
                break;
            case 'goods':
                console.log("<<<<<<GOODS>>>>>>");
                SceneManager.setScene("goods");
                //处理返回按钮
                inst.goodsScene.addEventListener(GameEvents.EVT_RETURN, function () {
                    _this.resetBtn();
                    SceneManager.setScene("main");
                }, this);
                break;
            case 'about':
                console.log("<<<<<<ABOUT>>>>>>");
                SceneManager.setScene("about");
                //处理返回按钮
                inst.aboutScene.addEventListener(GameEvents.EVT_CLOSE_ABOUT, function () {
                    _this.resetBtn();
                    SceneManager.setScene("main");
                }, this);
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map