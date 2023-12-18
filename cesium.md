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

* 矩形
```JavaScript
    let graphical = viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(116.8, 36.1, 116.9, 36.2), // 最西、最南、最东、最北
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        stRotation: Cesium.Math.toRadians(45),
        // material: stripeMaterial,
      },
    })
```
* 多边形
```JavaScript
 	let graphical = viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([   // 绘制多边形，经度和纬度值列表。值交替显示[经度，纬度，经度，纬度...]。
            -107.0,
            27.0,
            -107.0,
            22.0,
            -102.0,
            23.0,
            -97.0,
            21.0,
            -97.0,
            25.0,
          ])
        ),
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        // material: stripeMaterial,
      },
    })
```
* 椭圆
```JavaScript
 	let graphical = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(116.8, 36.1),
      ellipse: {
        semiMinorAxis: 300000.0,  // 指定半短轴的数字属性。
        semiMajorAxis: 500000.0,  // 指定半长轴的数值属性。
        rotation: Cesium.Math.toRadians(-40.0),  // 一个数字属性，指定椭圆从北方逆时针旋转。
        outline: true,   // 一个布尔属性，指定是否勾勒出椭圆。
        outlineColor: Cesium.Color.WHITE,  // 一个属性，指定轮廓的 颜色 
        outlineWidth: 4,    // 一个数字属性，指定轮廓的宽度。
        stRotation: Cesium.Math.toRadians(22), //  一个数字属性，指定椭圆纹理从北方逆时针旋转。
        // material: stripeMaterial,
      },
    });
```
* 圆形
```JavaScript
	let graphical = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-72.0, 25.0),
      ellipse: {
        semiMinorAxis: 250000.0,
        semiMajorAxis: 250000.0,
        rotation: Cesium.Math.toRadians(-40.0),
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        stRotation: Cesium.Math.toRadians(90),
        // material: stripeMaterial,
      },
    });
```
* 立体形
```JavaScript
	// 绘制立方体
    let graphical = viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(
          -118.0,
          38.0,
          -116.0,
          40.0
        ),
        extrudedHeight: 500000.0,
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        stRotation: Cesium.Math.toRadians(45),
        material: Cesium.Color.fromRandom({ alpha: 1.0 }),
      },
    });
```
* 立体椭圆
```JavaScript
	// 绘制椭圆柱体
    let graphical = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-117.0, 35.0),
      ellipse: {
        semiMinorAxis: 100000.0,
        semiMajorAxis: 200000.0,
        height: 100000.0,
        extrudedHeight: 200000.0,
        rotation: Cesium.Math.toRadians(90.0),
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        material: Cesium.Color.fromRandom({ alpha: 1.0 }),
      },
    });
```
* 多边柱体
```JavaScript
// 绘制多边柱体
    let graphical = viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([
            -118.0,
            30.0,
            -115.0,
            30.0,
            -117.1,
            31.1,
            -118.0,
            33.0,
          ])
        ),
        height: 300000.0,
        extrudedHeight: 700000.0,
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        material: Cesium.Color.fromRandom({ alpha: 1.0 }),
      },
    });
```

* 圆柱体
```JavaScript
    // 绘制圆柱体
    let graphical = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-70.0, 45.0, 100000.0),
      cylinder: {
        hierarchy: new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([
            -118.0,
            30.0,
            -115.0,
            30.0,
            -117.1,
            31.1,
            -118.0,
            33.0,
          ])
        ),
        length: 200000.0,
        topRadius: 150000.0,   // 一个数字属性，指定圆柱顶部的半径。
        bottomRadius: 150000.0,  // 一个数字属性，指定圆柱体底部的半径。
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        material: Cesium.Color.fromRandom({ alpha: 1.0 }),
      },
    });
```
* 多边柱体
```JavaScript
// 绘制多边柱体
    let graphical = viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([
            -118.0,
            30.0,
            -115.0,
            30.0,
            -117.1,
            31.1,
            -118.0,
            33.0,
          ])
        ),
        height: 300000.0,
        extrudedHeight: 700000.0,
        outline: true,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 4,
        material: Cesium.Color.fromRandom({ alpha: 1.0 }),
      },
    });
```
 
