class AboutScene extends eui.Component implements  eui.UIComponent {
	
	private closeBtn: eui.Button;

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
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.dispatchEventWith(GameEvents.EVT_CLOSE_ABOUT);
		},this);
	}
}