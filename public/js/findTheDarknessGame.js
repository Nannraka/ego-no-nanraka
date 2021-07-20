let app = new PIXI.Application({
    width: 600,     // スクリーン(ビュー)横幅 
    height: 600,    // スクリーン(ビュー)縦幅  
    backgroundColor: 0x1099bb,  // 背景色 16進 0xRRGGBB
});
// HTMLの<main id="app"></main>の中に上で作ったPIXIアプリケーション(app)のビュー(canvas)を突っ込む
let el = document.getElementById('app');
el.appendChild(app.view);

let ellipse = new PIXI.Graphics()       // メソッドチェーンで描画するので、;(セミコロン)を付けない   
.beginFill(0xff0000)                    // endFill()までの描画に対する塗りつぶし色指定
.drawRect(0,0,30,30)                 // (中心のx座標, 中心のy座標, 幅, 高さ)
.endFill();                             // ここまでに描いた図形を塗りつぶす

ellipse.pivot.x = 15
ellipse.pivot.y = 15
ellipse.x = 100;
ellipse.y = 100;     
ellipse.rotation = Math.PI / 6;
app.stage.addChild(ellipse);
