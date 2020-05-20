#简介
index.html:  
直接打开  
index1.html:  
http://127.0.0.1:5500/three-demo/index1.html  
# 基础
1. 设置阴影
光源：
    spotLight.castShadow=true  
物体：    
    cubeMesh.castShadow=true
    cubeMesh.receiveShadow=true
2. 鼠标控制
引入文件：
    <script src="./js/OrbitControls.js"></script>
相关代码：
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControls.target = new THREE.Vector3(0, 0, 0);//控制焦点
    orbitControls.autoRotate = false;//将自动旋转关闭
    clock = new THREE.Clock();//用于更新轨道控制器
3. 在墙上画出窗户
引入文件：
    <script src="./js/threeBSP.js"></script>
相关代码：
var sphere1BSP=new ThreeBSP(wall4)
var cubeBSP=new ThreeBSP(wall5)
resultBSP=sphere1BSP.subtract(cubeBSP)//设置差集
result=resultBSP.toMesh()//从BSP对象内获取到处理完后的mesh模型数据
//更新模型的面和顶点的数据
result.geometry.computeFaceNormals()
result.geometry.computeVertexNormals()
//重新复制文理
result.material = material;
//设置位置
result.position.set(75,40,50)
scene.add(result)
#资料   
画基本的图形：  
https://blog.csdn.net/qq_37338983/article/details/78569139  
鼠标控制图形的位置：  
https://blog.csdn.net/qq_37338983/article/details/78574039  
阴影：  
https://blog.csdn.net/qq_37338983/article/details/78581464  
添加全景图：
https://blog.csdn.net/qq_37338983/article/details/82562891
