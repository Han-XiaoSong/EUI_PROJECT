// //////////////////////////////////////////////////////////////////////////////////////
// //
// //  Copyright (c) 2014-present, Egret Technology.
// //  All rights reserved.
// //  Redistribution and use in source and binary forms, with or without
// //  modification, are permitted provided that the following conditions are met:
// //
// //     * Redistributions of source code must retain the above copyright
// //       notice, this list of conditions and the following disclaimer.
// //     * Redistributions in binary form must reproduce the above copyright
// //       notice, this list of conditions and the following disclaimer in the
// //       documentation and/or other materials provided with the distribution.
// //     * Neither the name of the Egret nor the
// //       names of its contributors may be used to endorse or promote products
// //       derived from this software without specific prior written permission.
// //
// //  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
// //  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
// //  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// //  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// //  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// //  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
// //  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// //  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// //  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// //  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// //////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        const result = await RES.getResAsync("description_json");
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            //RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this)
            const loadingView = new LoadingUI();
            await RES.loadGroup('loading');
            this.stage.addChild(loadingView);
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        SceneManager.instance.setStage(this);
        SceneManager.setScene('main');
    }
}

// class Main extends eui.UILayer{

//     private loadingView: LoadingUI;
//     protected createChildren(): void {
//         super.createChildren();

//         egret.lifecycle.addLifecycleListener((context) => {
//             // custom lifecycle plugin
//         })

//         egret.lifecycle.onPause = () => {
//             egret.ticker.pause();
//         }

//         egret.lifecycle.onResume = () => {
//             egret.ticker.resume();
//         }

//         //inject the custom material parser
//         //注入自定义的素材解析器
//         let assetAdapter = new AssetAdapter();
//         egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
//         egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
//         //设置加载进度界面
//         this.loadingView = new LoadingUI();
//         //this.stage.addChild(this.loadingView);
//         //加载资源配置文件
//         RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
//         RES.loadConfig("resource/default.res.json","resource");
//     }

//     /**
//      * 配置资源加载完成，开始加载主题和资源组
//      */
//     private onConfigComplete(){
//         RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);

//         //加载主题
//         let theme = new eui.Theme("resource/default.thm.json",this.stage);
//         theme.addEventListener(egret.Event.COMPLETE,this.onLoadingThemeComplete,this);
//         //加载资源组
//         RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onLoadingGroupComplete,this)
//         RES.loadGroup('preload');
//         this.stage.addChild(this.loadingView);
//     }

//     private isThemeLoaded: boolean = false;
//     /**
//      * 主题文件加载完成
//      */
//     private onLoadingThemeComplete(): void{
//         console.log("theme is loaded");
//         this.isThemeLoaded = true;
//         this.createGameScene();
//     }

//     private isGroupLoaded: boolean = false;
//     /**
//      * 预加载组加载完成
//      */
//     private onLoadingGroupComplete(){
//         //loadingView中存在图片的获取，所以必须在group加载完成后在将该loadingView加载显示容器内
//         console.log('loadGroup completed');
//         this.isGroupLoaded = true;
//         this.createGameScene();
//     }

//     /**
//      * 主题和预加载组件加载完成，开始创建主场景
//      */
//     protected createGameScene(): void{
//         console.log("theme and group loaded?："+this.isThemeLoaded+"  "+this.isGroupLoaded);
//         //主场景加载前，移出加载场景
//         if(this.loadingView.parent)
//             this.loadingView.parent.removeChild(this.loadingView);
//         //开始加载主场景
//         if(this.isThemeLoaded && this.isGroupLoaded){
//             SceneManager.instance.setStage(this);
//             SceneManager.toMainScene();
//         }
//     }
// }