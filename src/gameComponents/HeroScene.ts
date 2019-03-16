class HeroScene extends eui.Component implements  eui.UIComponent {
	
	public btnReturn: eui.Button;
	public btnConfirm: eui.Button;
	public heroScroller: eui.Scroller;
	public heroList: eui.List;


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

		//原始数据数组
		let heroDataArray: any[] = [
			{image: 'resource/art/heros_goods/heros01.png', name: 'Hanzo', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros02.png', name: 'Mccrae', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros03.png', name: 'soldier76', value: '评价: 很特么厉害, 为所欲为', isSelected: true},
            {image: 'resource/art/heros_goods/heros04.png', name: 'Mercy', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros05.png', name: 'Genji', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
			{image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false}
		]

		//使用eui包装
		let euiHeroDataArray: eui.ArrayCollection = new eui.ArrayCollection(heroDataArray);
		this.heroList.dataProvider = euiHeroDataArray;
		this.heroList.itemRenderer = HeroList_item;

		//隐藏拖动条
		this.heroScroller.verticalScrollBar.autoVisibility = false;

		//给返回按钮添加事件监听
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			SceneManager.toMainScene();
		},this)

		//给确定按钮添加事件监听
		this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)
	}

	private onClick(evt: egret.Event){
		SceneManager.toMainScene();

		let dataProvider = this.heroList.dataProvider;
		let nameOfHeroSelected: string[] = [];

		for(let i = 0; i < dataProvider.length; i++){
			let heroItem = dataProvider.getItemAt(i);
			if(heroItem.isSelected)
				nameOfHeroSelected.push(heroItem.name)
		}

		SceneManager.showHeroSelected(nameOfHeroSelected);
	}
	
}