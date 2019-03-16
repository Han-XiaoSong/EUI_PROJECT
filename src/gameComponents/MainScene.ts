class MainScene extends eui.Component implements  eui.UIComponent {
	
	public mbtnGroup: eui.Group;
	public mbtnPlayer: eui.ToggleButton;
	public mbtnHero: eui.ToggleButton;
	public mbtnGoods: eui.ToggleButton;
	public mbtnAbout: eui.ToggleButton;

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

		//设置为可点击
		this.mbtnGroup.touchEnabled = true;
		let thoseBtn: eui.ToggleButton[] = [this.mbtnPlayer, this.mbtnHero, this.mbtnGoods, this.mbtnAbout];

		this.mbtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt: egret.Event)=>{
			//将所有的按钮变为非选中状态
			for(let i = 0; i < thoseBtn.length; i++)
				thoseBtn[i].selected = false;
			//将当前选择的按钮置为选中状态
			let currentBtn: eui.ToggleButton = evt.target;
			currentBtn.selected = true;
			this.switchUi(currentBtn);
		},this)
	}

	public switchUi(target: eui.ToggleButton){
		switch(target.name){
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
	}
	
}