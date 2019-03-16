class HeroList_item extends eui.ItemRenderer{
	//选择框
	public checkHero: eui.CheckBox;

	public constructor() {
		super();
		this.skinName = "HeroSkin";
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this)
	}

	//点击不同的条目的时候将该条目对应的数据更改为true
	public onComplete(){
		this.checkHero.addEventListener(egret.Event.CHANGE,()=>{
			this.data.isSelected = this.checkHero.selected;
		},this)
	}
	
	//数据更改的时候更新试图
	protected dataChanged(){
		this.checkHero.selected = this.data.isSelected;
	}
}