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
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        //设置为可点击
        this.mbtnGroup.touchEnabled = true;
        var thoseBtn = [this.mbtnPlayer, this.mbtnHero, this.mbtnGoods, this.mbtnAbout];
        this.mbtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            //将所有的按钮变为非选中状态
            for (var i = 0; i < thoseBtn.length; i++)
                thoseBtn[i].selected = false;
            //将当前选择的按钮置为选中状态
            var currentBtn = evt.target;
            currentBtn.selected = true;
            _this.switchUi(currentBtn);
        }, this);
    };
    MainScene.prototype.switchUi = function (target) {
        switch (target.name) {
            case 'player':
                console.log("player has been selected");
                SceneManager.toPlayerScene();
                break;
            case 'hero':
                console.log("hero has been selected");
                SceneManager.toHeroScene();
                break;
            case 'goods':
                console.log('goods has been selected');
                SceneManager.toGoodsScene();
                break;
            case 'about':
                console.log("about has been selected");
                SceneManager.toAboutScene();
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map