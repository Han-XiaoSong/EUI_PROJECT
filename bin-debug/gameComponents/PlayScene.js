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
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super.call(this) || this;
    }
    PlayScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //数组数据
        var skillDataArray = [
            { image: "resource/art/profile/skillIcon01.png", name: "旋龙幻杀" },
            { image: "resource/art/profile/skillIcon02.png", name: "魔魂天咒" },
            { image: "resource/art/profile/skillIcon03.png", name: "天魔舞" },
            { image: "resource/art/profile/skillIcon04.png", name: "痴情咒" },
            { image: "resource/art/profile/skillIcon05.png", name: "无间寂" },
            { image: "resource/art/profile/skillIcon06.png", name: "霸天戮杀" },
            { image: "resource/art/profile/skillIcon07.png", name: "灭魂狂飙" }
        ];
        //将数组转为eui数组
        var euiSkillDataArray = new eui.ArrayCollection(skillDataArray);
        //将数组作为list的数据源
        this.skillLIst.dataProvider = euiSkillDataArray;
        //隐藏scroller的拖动条
        this.skillScroller.horizontalScrollBar.autoVisibility = false;
        //给返回按钮增加事件侦听
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
        }, this);
    };
    return PlayScene;
}(eui.Component));
__reflect(PlayScene.prototype, "PlayScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlayScene.js.map