$(function(){
    var viewer = new Cesium.Viewer('cesiumContainer', {
        navigationHelpButton: false,
        timeline: false,
        animation: false,
        fullscreenButton: false,
        imageryProvider : Cesium.createWorldImagery({
          style : Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
        }),
        baseLayerPicker : false,
        geocoder: false,
        creditContainer: 'cesium-logo',
      })
  
      viewer.extend(Cesium.viewerCesiumNavigationMixin, {})
      var layers = viewer.scene.imageryLayers;
      var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }));
  
      blackMarble.alpha = 0.5;
  
      blackMarble.brightness = 2.0;
  
      // layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
      //     url : './data/echart.jpg',
      //     rectangle : Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75)
      // }));
      //旋转
      viewer.clock.multiplier = 200;//速度
      viewer.clock.shouldAnimate = true;
      var previousTime = viewer.clock.currentTime.secondsOfDay;
      function onTickCallback() {
          var spinRate = 1;
          var currentTime = viewer.clock.currentTime.secondsOfDay;
          var delta = (currentTime - previousTime) / 1000;
          previousTime = currentTime;
          viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta);
      }
      viewer.clock.onTick.addEventListener(onTickCallback);
      var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      handler.setInputAction(function(mouseover) {
        viewer.clock.onTick.removeEventListener(onTickCallback);
      }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
      handler.setInputAction(function(click){
        viewer.clock.onTick.addEventListener(onTickCallback); 
      },Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      //卫星
      Sandcastle.addDefaultToolbarButton('Satellites', function() {
          viewer.dataSources.add(Cesium.CzmlDataSource.load('./data/simple.czml'));
      
          viewer.camera.flyHome(0);
      });
      
      Sandcastle.addToolbarButton('Vehicle', function() {
          viewer.dataSources.add(Cesium.CzmlDataSource.load('./data/simple.czml'));
      
          viewer.scene.camera.setView({
              destination:  Cesium.Cartesian3.fromDegrees(-116.52, 35.02, 95000),
              orientation: {
                  heading: 6
              }
          });
      });
      
      Sandcastle.reset = function() {
          viewer.dataSources.removeAll();
      };
      //echarts
      var workEcharts = {
        layerWork: null,
        create: function(viewer) {
          this.viewer = viewer
          this.path = ''
        },
        activate: function() {
          // this.viewer.mars.centerAt({ y: 24.329757, x: 121.780921, z: 5933374.7, heading: 355.6, pitch: -80.3, roll: 0 })
          this.showData({
            citys: [{
              name: '北京',
              value: [116.407526, 39.90403, -14],
              symbolSize: 2,
              itemStyle: { normal: { color: '#58B3CC' } }
            }, {
              name: '上海',
              value: [121.473701, 31.230416, 44],
              symbolSize: 3,
              itemStyle: { normal: { color: '#F58158' } }
            },{
              name: '石家庄',
              value: [114.51486, 38.042307, 4],
              symbolSize: 2,
              itemStyle: { normal: { color: '#F58158' } }
            }, {
              name: '天津',
              value: [117.200983, 39.084158, 28],
              symbolSize: 2,
              itemStyle: { normal: { color: '#F58158' } }
            },{
              name: '深圳',
              value: [114.057868, 22.543099, 14],
              symbolSize: 2,
              itemStyle: { normal: { color: '#F58158' } }
            }],
            moveLines: [{
              fromName: '北京',
              toName: '天津',
              coords: [[116.407526, 39.90403, -14], [117.200983, 39.084158]]
            }, {
              fromName: '北京',
              toName: '石家庄',
              coords: [[116.407526, 39.90403, -14], [114.51486, 38.042307]]
            }, {
              fromName: '北京',
              toName: '深圳',
              coords: [[116.407526, 39.90403, -14], [114.057868, 22.543099]]
            }]
          })
        },
        disable: function() {
          this.layerWork.dispose()
          this.layerWork = null
        },
        showData: function(data) {
          var option = this.getOption(data)
          if(!this.layerWork) {
            this.layerWork = new FlowEcharts(this.viewer, option)
          }else {
            this.layerWork.updateOverlay(option)
          }
        },
        getOption: function(data) {
          return {
            animation: false,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            GLMap: {},
            title: { text: "3D地球", left: 'center', textStyle: { color: '#fff' } },
            legend: {
              show: !1,
              orient: 'vertical',
              top: 'bottom',
              left: 'right',
              data: ['地点', '线路'],
              textStyle: { color: '#fff' }
            },
            // geo: { map: '', roam: !0 },
            series: [{
              name: '地点',
              type: 'effectScatter',
              coordinateSystem: 'GLMap',
              zlevel: 2,
              rippleEffect: { brushType: 'stroke' },
              color:'#fff',
              label: { 
                  show: true, 
                  position: 'right', 
                  formatter: function(a){
                   
                    return a.name
                  }  
              },
              symbolSize: 2,
              showEffectOn: 'render',
              itemStyle: { normal: { color: '#46bee9' } },
              data: data.citys
            }, {
              name: '线路',
              type: 'lines',
              coordinateSystem: 'GLMap',
              zlevel: 2,
              large: !0,
              effect: { show: !0, constantSpeed: 30, symbol: 'pin', symbolSize: 3, trailLength: 0 },
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                  }, { offset: 1, color: '#F58158' }], !1), width: 2, opacity: 1, curveness: .6
                }
              },
              data: data.moveLines
            }]
          }
        }
      }
  
      function initWork() {
        workEcharts.create(viewer)
        workEcharts.activate()
      }
  
      initWork()
})