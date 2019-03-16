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
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        return _super.call(this) || this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //原始数据数组
        var heroDataArray = [
            { image: 'resource/art/heros_goods/heros01.png', name: 'Hanzo', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: 'Mccrae', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: 'soldier76', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: 'Mercy', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: 'Genji', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
        ];
        //使用eui包装
        var euiHeroDataArray = new eui.ArrayCollection(heroDataArray);
        this.heroList.dataProvider = euiHeroDataArray;
        this.heroList.itemRenderer = HeroList_item;
        //隐藏拖动条
        this.heroScroller.verticalScrollBar.autoVisibility = false;
        //给返回按钮添加事件监听
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
        }, this);
        //给确定按钮添加事件监听
        this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    HeroScene.prototype.onClick = function (evt) {
        SceneManager.toMainScene();
        var dataProvider = this.heroList.dataProvider;
        var nameOfHeroSelected = [];
        for (var i = 0; i < dataProvider.length; i++) {
            var heroItem = dataProvider.getItemAt(i);
            if (heroItem.isSelected)
                nameOfHeroSelected.push(heroItem.name);
        }
        SceneManager.showHeroSelected(nameOfHeroSelected);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HeroScene.js.map