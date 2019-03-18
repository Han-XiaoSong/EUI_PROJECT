class MainScene extends eui.Component implements  eui.UIComponent {
	
	public mbtnGroup: eui.Group;
	public mbtnPlayer: eui.ToggleButton;
	public mbtnHero: eui.ToggleButton;
	public mbtnGoods: eui.ToggleButton;
	public mbtnAbout: eui.ToggleButton;
	private mbtnArr: eui.ToggleButton[] = [];

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED,this.onAdded,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	/**
	 *当main被添加到显示列表中时触发
	 */
	private onAdded(){
		this.mbtnArr = [this.mbtnPlayer, this.mbtnHero, this.mbtnGoods, this.mbtnAbout];
		this.mbtnGroup.touchEnabled = true;
		this.mbtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switchUi,this);
	}

	/**
	 * 重置所有按钮的选中状态
	 */
	private resetBtn(){
		for(let i = 0; i < this.mbtnArr.length; i++)
			this.mbtnArr[i].selected = false;
	}
	/**
	 * 选择不同的按钮实现页面之间的跳转
	 */
	public switchUi(evt: egret.Event){
		let inst = SceneManager.instance;
		let target = evt.target;
		//所有按钮处于非选中状态，当前目标为选中状态
		this.resetBtn();
		target.selected = true;

		switch(target.name){
			case 'player':
				console.log("<<<<<<PLAYER>>>>>>");
				SceneManager.setScene('player');
				//处理返回按钮事件
				inst.playerScene.addEventListener(GameEvents.EVT_RETURN,()=>{
					this.resetBtn();
					SceneManager.setScene('main');
				},this)
				break;
			case 'hero':
				console.log("<<<<<<HERO>>>>>>");
				SceneManager.setScene("hero");
				//处理返回按钮
				inst.heroScene.addEventListener(GameEvents.EVT_RETURN,()=>{
					this.resetBtn();
					SceneManager.setScene("main");
				},this)
				break;
			case 'goods':
				console.log("<<<<<<GOODS>>>>>>");
				SceneManager.setScene("goods");
				//处理返回按钮
				inst.goodsScene.addEventListener(GameEvents.EVT_RETURN,()=>{
					this.resetBtn();
					SceneManager.setScene("main");
				},this)
				break;
			case 'about':
				console.log("<<<<<<ABOUT>>>>>>");
				SceneManager.setScene("about");
				//处理返回按钮
				inst.aboutScene.addEventListener(GameEvents.EVT_CLOSE_ABOUT,()=>{
					this.resetBtn();
					SceneManager.setScene("main");
				},this)
				break;
			default:
				break;
		}
	}	
}