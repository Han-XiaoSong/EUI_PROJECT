//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
        console.log("loadingView");
    }

    private textField: egret.TextField;//进度条文本
    private bgImg: egret.Bitmap;//Loading界面背景
    private loadImg: egret.Bitmap;//Loading界面图标

    private createView(): void {
        //创建loading背景
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('loading_jpg');
        this.addChild(this.bgImg);

        //创建loading界面图标
        this.loadImg = new egret.Bitmap();
        this.loadImg.texture = RES.getRes('loading2_png');
        this.loadImg.x = this.stage.stageWidth / 2;
        this.loadImg.y = this.stage.stageHeight / 2;
        //锚点居中，方便旋转
        this.loadImg.anchorOffsetX = this.loadImg.width / 2;
        this.loadImg.anchorOffsetY = this.loadImg.height / 2;
        this.addChild(this.loadImg);

        //创建loading文本
        this.textField = new egret.TextField();
        this.textField.y = (this.stage.stageHeight - this.textField.height) / 2;
        this.textField.width = 480;
        this.textField.height = 20;
        this.textField.size = 14;
        this.textField.textAlign = "center";
        this.addChild(this.textField);

        //添加侦听事件，每一帧图标转动一下
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }

    //旋转loading图标
    private onEnterFrame(){
        this.loadImg.rotation += 5;
    }
    
    //此方法在资源加载中会自动调用
    public onProgress(current: number, total: number): void {
        this.textField.text = `${Math.floor((current / total) * 100)}%`;
    }
}
