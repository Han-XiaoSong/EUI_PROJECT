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
var HeroList_item = (function (_super) {
    __extends(HeroList_item, _super);
    function HeroList_item() {
        var _this = _super.call(this) || this;
        _this.skinName = "HeroSkin";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    //点击不同的条目的时候将该条目对应的数据更改为true
    HeroList_item.prototype.onComplete = function () {
        var _this = this;
        this.checkHero.addEventListener(egret.Event.CHANGE, function () {
            _this.data.isSelected = _this.checkHero.selected;
        }, this);
    };
    //数据更改的时候更新试图
    HeroList_item.prototype.dataChanged = function () {
        this.checkHero.selected = this.data.isSelected;
    };
    return HeroList_item;
}(eui.ItemRenderer));
__reflect(HeroList_item.prototype, "HeroList_item");
//# sourceMappingURL=HeroList_item.js.map