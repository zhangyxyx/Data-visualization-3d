一、页面效果
![image](https://github.com/zhangyxhuomu/Data-visualization-3d/blob/master/three-3d/three-3d/img/show.gif)
二、技术选择
中间的建筑相关的显示和效果都是threejs实现的
左右两侧用的是echarts
三、代码结构
1.画布
用js自己创建一个放置画布的div
 container = document.createElement('div')
 document.body.appendChild(container)
2.场景的创建
之后的比如几何体 摄像机 光源都是放在场景里面
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ antiakuas: true })
  renderer.setClearColor(new THREE.Color("rgba(3,19,52)"), 1)//整个画布的背景颜色
  renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMapEnabled = true;//需要阴影映射
container.appendChild(renderer.domElement)

3.摄像机
摄像机是有两种类型的
·  透视投影摄像机:PerspectiveCamera会让物体近大远小；
·  正交投影摄像机：OrthographicCamera物体渲染的大小是一致的；
camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(0, 150, 300)//相机位置
camera.lookAt(new THREE.Vector3(0, 0, 0))//相机观看物体的位置
4.光源
光有基本的四种类型：
环境光( AmbientLight )：笼罩在整个空间无处不在的光
点光源( PointLight )：向四面八方发射的单点光源
聚光灯( SpotLight )：发射出锥形状的光， 模拟手电筒，台灯等光源
平行光( DirectinalLight )：平行的一束光，模拟从很远处照射的太阳光
        var ambientLight = new THREE.AmbientLight(0x606060)//环境光
        scene.add(ambientLight)
        var spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(200, 160, 85)
        spotLight.castShadow = true
        scene.add(spotLight)
5.创建栅格平面
Geometry这是存储几何体相关的信息，是为了减少CPU的消耗
栅格用的是线段画出来的
function plane() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-800, 0, 0));
        geometry.vertices.push(new THREE.Vector3(800, 0, 0));
        for (var i = 0; i < 50; i++) {
            var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "rgba(38,55,84,1)", opacity: 1 }));
            line.position.z = (i * 50) - 800;
            scene.add(line);

            var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "rgba(38,55,84,1)", opacity: 1 }));
            line.position.x = (i * 50) - 800;
            line.rotation.y = 90 * Math.PI / 180;
            scene.add(line);
        }
    }
6.建筑
建筑用的是立方体，需要注意的是可以自己设置一个图片，然后将图片作为纹理贴到立方体上面来；
根据移动立方体的位置，来拼合成建筑；
var loader = new THREE.TextureLoader();
loader.load("./img/cude1.png", (texture) => {
    var geometry = new THREE.BoxGeometry(30, 5, 20);
    var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
    buildArr[i] = new THREE.Mesh(geometry, material);
    buildArr[i].position.x = 10
    buildArr[i].position.y = 5 + i * 5
    buildArr[i].position.z = -10
    scene.add(buildArr[i]);
})
7.视角的移动
当我们看到视角的远近，其实是摄像机的移动，我们通过修改摄像机的位置，来达到响应的目的；
var cameraz = 10;
var camerax = 10;
var timer;
timer = setInterval(function () {
    cameraz += 1
    camerax += 1
    camera.position.x = 50 - cameraz
    camera.position.z = 100 + cameraz
    if (cameraz >= 300 && camerax >= 50) {
        clearInterval(timer)
    }
}, 30)
for (var i = 0; i < 30; i++) {
    buildArr[i].position.y = 5 + i * 5
}
8.车流
我们先是设置一下管道的几何体和小球，然后同样的修改小球的x y z值来进行流动，需要注意的是小球需要根据管道的路径进行流动，
    var curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-150, 2, -280),
        new THREE.Vector3(-110, 2, -50),
        new THREE.Vector3(-10, 2, 0),
        new THREE.Vector3(100, 2, 100),
        new THREE.Vector3(140, 2, 200)
    ], false/*是否闭合*/);
function traffic() {
    //一条
    var tubeGeometry2 = new THREE.TubeGeometry(curve, 100, 2, 50, false);
    var tubeMaterial2 = new THREE.MeshPhongMaterial({
        color: "rgb(45,245,216)",
        transparent: true,
        opacity: 1,
    });
    var tube2 = new THREE.Mesh(tubeGeometry2, tubeMaterial2);
    scene.add(tube2);
    //物体
    geometryP = new THREE.BoxGeometry(5, 5, 5);
    var materialP = new THREE.MeshBasicMaterial({ color: 'rgb(165,244,7)' });
    circleP = new THREE.Mesh(geometryP, materialP);
    scene.add(circleP);
    geometryP.rotateY(Math.PI / 2);
    //circleP.position.set(-80, -40, 0);
}
if (progress > 1.0) {
    circleP.position.set(-150, 2, -280);
    progress = 0
    //return;    //停留在管道末端,否则会一直跑到起点 循环再跑
}
progress += 0.001; //0.0009;
if (curve) {
    let point = curve.getPoint(progress);
    if (point && point.x) {
        circleP.position.set(point.x, point.y, point.z);
    }
}
9.事件
 window.addEventListener("click", onDocumentMouseMove, false)

四、相关资料
Threejs：
https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene
Echarts:
https://www.echartsjs.com/zh/index.html