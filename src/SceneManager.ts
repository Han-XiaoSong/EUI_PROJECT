/**
 * 场景管理,单例类
 */
class SceneManager {

	public _stage: egret.DisplayObjectContainer;
	public mainScene: MainScene;
	public playerScene: PlayScene;
	public heroScene: HeroScene;
	public goodsScene: GoodsScene;
	public aboutScene: AboutScene;

	//创建场景
	private constructor() {
		this.mainScene = new MainScene();
		this.playerScene = new PlayScene();
		this.heroScene = new HeroScene();
		this.goodsScene = new GoodsScene();
		this.aboutScene = new AboutScene();

	}

	public static sceneManager: SceneManager;

	public static get instance(){
		//单例类判断是否已经存在一个实例
		if(!this.sceneManager)
			this.sceneManager = new SceneManager();
		return this.sceneManager;
	}

	/**
	 * 设置根场景
	 */
	public setStage(s: egret.DisplayObjectContainer){
		this._stage = s;
	}

	/**
	 * 设置场景切换
	 */
	public static setScene(toWhich: string){
		let stage: egret.DisplayObjectContainer = this.instance._stage;
		let mainScene = this.instance.mainScene;

		//移除所有之前的场景
		this.instance.deleteScene();
		//设置新的场景
		switch(toWhich){
			case 'main':
				if(!mainScene.parent)
					stage.addChild(mainScene);
				break;
			case 'player':
				mainScene.addChildAt(this.instance.playerScene,mainScene.numChildren - 1);
				break;
			case 'hero':
				mainScene.addChildAt(this.instance.heroScene,mainScene.numChildren - 1);
				break;
			case 'goods':
				mainScene.addChildAt(this.instance.goodsScene,mainScene.numChildren - 1);
				break;
			case 'about':
				mainScene.addChildAt(this.instance.aboutScene,mainScene.numChildren - 1);
				break;
		}
	}
	
	/**
	 * 场景之间的切换时，删除之前存在的所有场景
	 */
	public deleteScene(){
		let main_scene: egret.DisplayObjectContainer =  SceneManager.instance.mainScene;
		let instance = SceneManager.instance;

		if(instance.playerScene.parent)
			main_scene.removeChild(instance.playerScene);
		if(instance.heroScene.parent)
			main_scene.removeChild(instance.heroScene);
		if(instance.goodsScene.parent)
			main_scene.removeChild(instance.goodsScene);
		if(instance.aboutScene.parent)
			main_scene.removeChild(instance.aboutScene);
	}
	
	//显示已经选择的英雄的名字
	public static showHeroSelected(arr: string[]){
        let text:string = '你选择了: '
        if (arr.length === 0) {
            text = '厉害了什么都不选'
        } else {
            text += arr.toString()
        }
        // 新建一个消息背景图
        let img:egret.Bitmap = new egret.Bitmap()
        img.texture = RES.getRes('toast-bg_png')
        SceneManager.instance.mainScene.addChild(img)
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2
        img.y = 500
        img.height = 40
​
        // 新建一个label用来显示
        let label:egret.TextField = new egret.TextField(); 
        label.text = text
        label.size = 20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2
        label.y = 510
        label.height = 40
​
        // 创建一个定时器,1000毫秒后删除label
        let timer:egret.Timer = new egret.Timer(1000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e)=>{
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        }, this)
	}
}