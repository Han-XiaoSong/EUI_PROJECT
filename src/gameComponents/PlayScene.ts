class PlayScene extends eui.Component implements  eui.UIComponent {
	
	public btnReturn: eui.Button;
	public btnEquip: eui.Button;
	public btnStrengthen: eui.Button;
	public skillScroller: eui.Scroller;
	public skillLIst: eui.List;

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

		//数组数据
		let skillDataArray: Object[] = [
			{image:"resource/art/profile/skillIcon01.png",name:"旋龙幻杀"},
            {image:"resource/art/profile/skillIcon02.png",name:"魔魂天咒"},
            {image:"resource/art/profile/skillIcon03.png",name:"天魔舞"},
            {image:"resource/art/profile/skillIcon04.png",name:"痴情咒"},
            {image:"resource/art/profile/skillIcon05.png",name:"无间寂"},
            {image:"resource/art/profile/skillIcon06.png",name:"霸天戮杀"},
            {image:"resource/art/profile/skillIcon07.png",name:"灭魂狂飙"}
		]

		//将数组转为eui数组
		let euiSkillDataArray: eui.ArrayCollection = new eui.ArrayCollection(skillDataArray);
		//将数组作为list的数据源
		this.skillLIst.dataProvider = euiSkillDataArray;
		//隐藏scroller的拖动条
		this.skillScroller.horizontalScrollBar.autoVisibility  = false;

		//给返回按钮增加事件侦听
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.dispatchEventWith(GameEvents.EVT_RETURN);
			//SceneManager.toMainScene();
		},this)
	}
	
}