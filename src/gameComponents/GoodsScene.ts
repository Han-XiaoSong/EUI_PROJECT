class GoodsScene extends eui.Component implements  eui.UIComponent {
	
	private goodsScroller: eui.Scroller;
	private goodsList: eui.List;
	private returnBtn: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		//创建原始数据数组
		let goodsArray: any[] = [
			{image: "resource/art/heros_goods/goods01.png", name: "魔法石", value: "法术+3"},
			{image: "resource/art/heros_goods/goods02.png", name: "提伯斯", value: "血量+3"},
			{image: "resource/art/heros_goods/goods03.png", name: "暗黑戒指", value: "法术+3"},
			{image: "resource/art/heros_goods/goods04.png", name: "魔法石", value: "法术+3"},
			{image: "resource/art/heros_goods/goods05.png", name: "魔法石", value: "法术+3"},
			{image: "resource/art/heros_goods/goods06.png", name: "魔法石", value: "法术+3"},
			{image: "resource/art/heros_goods/goods07.png", name: "魔法石", value: "法术+3"}
		]
		//使用eui数组保证
		let euiGoodsArray: eui.ArrayCollection = new eui.ArrayCollection(goodsArray);
		this.goodsList.dataProvider = euiGoodsArray;
		//隐藏垂直滚动条
		this.goodsScroller.verticalScrollBar.autoVisibility = false;
		//给返回按钮增加事件监听
		this.returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.dispatchEventWith(GameEvents.EVT_RETURN);
		},this)

	}
	
}