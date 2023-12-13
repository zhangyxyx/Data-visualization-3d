# Cesium

*  创建地球
```JavaScript
+ 1.Cesium放在public中
+ 2.vue.config.js中添加
```JavaScript
configureWebpack: {
    plugins: [
    new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(process.env.VUE_APP_ASSETS_DIR + '/Cesium')
    }),
    ], 
},
```
+ 3.vue文件中填写
```JavaScript
import * as Cesium from 'cesium';
import "/public/Cesium/Widgets/widgets.css";
var viewer = new Cesium.Viewer('cesiumContainer', {
    //需要进行可视化的数据源的集合
    selectionIndicator: false,//关闭绿色点击框
    animation: false, //是否显示动画控件
    shouldAnimate: false,
    homeButton: false, //是否显示Home按钮
    fullscreenButton: false, //是否显示全屏按钮
    baseLayerPicker: false, //是否显示图层选择控件
    geocoder: false, //是否显示地名查找控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: false, //是否显示投影方式控件
    navigationHelpButton: false, //是否显示帮助信息控件
    infoBox: false, //是否显示点击要素之后显示的信息
    requestRenderMode: true, //启用请求渲染模式
    scene3DOnly: false, //每个几何实例将只能以3D渲染以节省GPU内存
    sceneMode: 3, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
    fullscreenElement: document.body, //全屏时渲染的HTML元素 暂时没发现用处
    //加载谷歌影像地图，UrlTemplateImageryProvider该接口是加载谷歌地图服务的接口
    imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
    }),
    //需要纯色背景必须设置
    contextOptions: {
        webgl: {
        alpha: true,
        }
    },
    })
```
```
 
