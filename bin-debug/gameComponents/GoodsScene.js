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
var GoodsScene = (function (_super) {
    __extends(GoodsScene, _super);
    function GoodsScene() {
        return _super.call(this) || this;
    }
    GoodsScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GoodsScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        //创建原始数据数组
        var goodsArray = [
            { image: "resource/art/heros_goods/goods01.png", name: "魔法石", value: "法术+3" },
            { image: "resource/art/heros_goods/goods02.png", name: "提伯斯", value: "血量+3" },
            { image: "resource/art/heros_goods/goods03.png", name: "暗黑戒指", value: "法术+3" },
            { image: "resource/art/heros_goods/goods04.png", name: "魔法石", value: "法术+3" },
            { image: "resource/art/heros_goods/goods05.png", name: "魔法石", value: "法术+3" },
            { image: "resource/art/heros_goods/goods06.png", name: "魔法石", value: "法术+3" },
            { image: "resource/art/heros_goods/goods07.png", name: "魔法石", value: "法术+3" }
        ];
        //使用eui数组保证
        var euiGoodsArray = new eui.ArrayCollection(goodsArray);
        this.goodsList.dataProvider = euiGoodsArray;
        //隐藏垂直滚动条
        this.goodsScroller.verticalScrollBar.autoVisibility = false;
        //给返回按钮增加事件监听
        this.returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(GameEvents.EVT_RETURN);
        }, this);
    };
    return GoodsScene;
}(eui.Component));
__reflect(GoodsScene.prototype, "GoodsScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GoodsScene.js.map