$(function () {
    $(".floor").click(function () {
        mesh2.position.y = 17
        mesh3.position.y = 29
        code2.position.y = 17
        code3.position.y = 29
        code4.position.y = 44
    })
    $(".floor1").click(function () {
        mesh2.position.y = 15
        mesh3.position.y = 25
        code2.position.y = 15
        code3.position.y = 25
        code4.position.y = 40
    })

    var progress1 = 0;
    var progress2 = 0;
    var camera, scene, renderer, orbitControls, clock, delta;
    var buildArr = [
        'build1', 'build2', 'build3', 'build4', 'build5', 'build6', 'build7', 'build8', 'build9', 'build10',
        'build11', 'build12', 'build13', 'build14', 'build15', 'build16', 'build17', 'build18', 'build19', 'build20',
        'build21', 'build22', 'build23', 'build24', 'build25', 'build26', 'build27', 'build28', 'build29', 'build30',
        'build31', 'build32', 'build33', 'build34', 'build35', 'build36', 'build37', 'build38', 'build39', 'build40',
        'build41', 'build42', 'build43', 'build44', 'build45', 'build46', 'build47', 'build48', 'build49', 'build50',
    ]
    var buildArr1 = [
        'build_1_1', 'build_1_2', 'build_1_3', 'build_1_4', 'build_1_5', 'build_1_6', 'build_1_7', 'build_1_8', 'build_1_9', 'build_1_10',
        'build_1_11', 'build_1_12', 'build_1_13', 'build_1_14', 'build_1_15', 'build_1_16', 'build_1_17', 'build_1_18', 'build_1_19', 'build_1_20',
        'build_1_21', 'build_1_22', 'build_1_23', 'build_1_24', 'build_1_25', 'build_1_26', 'build_1_27', 'build_1_28', 'build_1_29', 'build_1_30',
        'build_1_31', 'build_1_32', 'build_1_33', 'build_1_34', 'build_1_35', 'build_1_36', 'build_1_37', 'build_1_38', 'build_1_39', 'build_1_40',
        'build_1_41', 'build_1_42', 'build_1_43', 'build_1_44', 'build_1_45', 'build_1_46', 'build_1_47', 'build_1_48', 'build_1_49', 'build_1_50',
    ]
    var buildArr2 = [
        'build_2_1', 'build_2_2', 'build_2_3', 'build_2_4', 'build_2_5', 'build_2_6', 'build_2_7', 'build_2_8', 'build_2_9', 'build_2_10',
        'build_2_11', 'build_2_12', 'build_2_13', 'build_2_14', 'build_2_15', 'build_2_16', 'build_2_17', 'build_2_18', 'build_2_19', 'build_2_20',
        'build_2_21', 'build_2_22', 'build_2_23', 'build_2_24', 'build_2_25', 'build_2_26', 'build_2_27', 'build_2_28', 'build_2_29', 'build_2_30',
        'build_2_31', 'build_2_32', 'build_2_33', 'build_2_34', 'build_2_35', 'build_2_36', 'build_2_37', 'build_2_38', 'build_2_39', 'build_2_40',
        'build_2_41', 'build_2_42', 'build_2_43', 'build_2_44', 'build_2_45', 'build_2_46', 'build_2_47', 'build_2_48', 'build_2_49', 'build_2_50',
    ]
    //管道
    var curve1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-150, 2, -280),
        new THREE.Vector3(-110, 2, -50),
        new THREE.Vector3(-10, 2, 0),
        new THREE.Vector3(100, 2, 100),
        new THREE.Vector3(140, 2, 200)
    ], false/*是否闭合*/);
    var curve2 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-300, 2, 30),
        new THREE.Vector3(300, 2, 0),
    ], false/*是否闭合*/);

    var buildtop1; var buildtop2; var buildtop3; var buildtop4
    var geometryP1,geometryP2
    var labelRenderer
    main();
    render();
    function main() {
        //创建元素画布
        container = document.createElement('div')
        document.body.appendChild(container)
        //创建场景
        scene = new THREE.Scene();
        //创建相机
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 100000)
        camera.position.set(0, 150, 300)//相机位置
        camera.lookAt(new THREE.Vector3(0, 0, 0))//相机观看物体的位置
        //渲染整个场景
        renderer = new THREE.WebGLRenderer({ antiakuas: true })
        renderer.setClearColor(new THREE.Color("rgba(3,19,52)"), 1)//整个画布的背景颜色
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.shadowMapEnabled = true;//需要阴影映射
        container.appendChild(renderer.domElement)


        orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControls.target = new THREE.Vector3(0, 0, 0);//控制焦点
        orbitControls.autoRotate = false;//将自动旋转关闭
        clock = new THREE.Clock();//用于更新轨道控制器


        //光源
        var ambientLight = new THREE.AmbientLight(0x606060)//自然光
        scene.add(ambientLight)
        var spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(200, 160, 85)
        spotLight.castShadow = true
        scene.add(spotLight)
        plane()
        groundenvironment()
        cube()
        cube1()
        cube2()
        traffic(curve1)
        traffic(curve2)
        $(".clickrotate").click(function(){
            onDocumentMouseMove()
        })
        window.addEventListener("click", tipFunc, false)
    }
    function render() {
        delta = clock.getDelta();
        orbitControls.update(delta);
        requestAnimationFrame(render);
        renderer.render(scene, camera)
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load("./img/cude2.png");
        texture.offset.x -= 0.06
        if (progress1 > 1.0) {
            circleP1.position.set(-150, 2, -280);
            progress1 = 0
            //return;    //停留在管道末端,否则会一直跑到起点 循环再跑
        }
        if (progress2 > 1.0) {
            circleP2.position.set(-150, 2, -280);
            progress2 = 0
            //return;    //停留在管道末端,否则会一直跑到起点 循环再跑
        }
        progress1 += 0.001; //0.0009;
        progress2 += 0.001; //0.0009;
        if (curve1) {
            let point1 = curve1.getPoint(progress1);
            if (point1 && point1.x) {
                circleP1.position.set(point1.x, point1.y, point1.z);
            }
        }
        if (curve2) {
            let point2 = curve2.getPoint(progress2);
            if (point2 && point2.x) {
                circleP2.position.set(point2.x, point2.y, point2.z);
            }
        }
    }
    //栅格平面
    function plane() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-800, 0, 0));
        geometry.vertices.push(new THREE.Vector3(800, 0, 0));
        for (var i = 0; i < 50; i++) {
            var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "rgba(38,55,84,1)", opacity: 1 }));
            line.position.z = (i * 50) - 800;
            scene.add(line);

            var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "rgba(38,55,84,1)", opacity: 1 }));
            line.position.x = (i * 50) - 1200;
            line.rotation.y = 90 * Math.PI / 180;
            scene.add(line);
        }
    }
    //地面环境
    function groundenvironment() {
        var loader = new THREE.TextureLoader();
        loader.load("./img/mapbg.png", (texture) => {
            var geometry = new THREE.PlaneGeometry(200, 200, 200);
            var material = new THREE.MeshBasicMaterial({ map: texture });
            var plane = new THREE.Mesh(geometry, material);
            plane.position.x = 0
            plane.position.y = 1
            plane.position.z = 0
            plane.rotateX(-Math.PI / 2)
            plane.rotateZ(Math.PI / 2)
            plane.scale.set(9, 10, 2)
            scene.add(plane);
        })

    }
    //车流
    function traffic() {
        //一条
        var tubeGeometry1 = new THREE.TubeGeometry(curve1, 100, 2, 50, false);
        var tubeMaterial1 = new THREE.MeshPhongMaterial({
            color: "rgb(45,245,216)",
            transparent: true,
            opacity: 1,
        });
        var tube1 = new THREE.Mesh(tubeGeometry1, tubeMaterial1);
        scene.add(tube1);
        var tubeGeometry2 = new THREE.TubeGeometry(curve2, 100, 2, 50, false);
        var tubeMaterial2 = new THREE.MeshPhongMaterial({
            color: "rgb(45,245,216)",
            transparent: true,
            opacity: 1,
        });
        var tube2 = new THREE.Mesh(tubeGeometry2, tubeMaterial2);
        scene.add(tube2);
        //物体
        geometryP1 = new THREE.BoxGeometry(5, 5, 5);
        var materialP1 = new THREE.MeshBasicMaterial({ color: 'rgb(165,244,7)' });
        circleP1 = new THREE.Mesh(geometryP1, materialP1);
        scene.add(circleP1);
        geometryP1.rotateY(Math.PI / 2);
        geometryP2= new THREE.BoxGeometry(5, 5, 5);
        var materialP2 = new THREE.MeshBasicMaterial({ color: 'rgb(165,244,7)' });
        circleP2 = new THREE.Mesh(geometryP2, materialP2);
        scene.add(circleP2);
        geometryP2.rotateY(Math.PI / 2);
       
    }
    //建筑1
    function cube() {
        for (let i = 0; i < 30; i++) {
            var loader = new THREE.TextureLoader();
            loader.load("./img/cude2.png", (texture) => {
                var geometry = new THREE.BoxGeometry(30, 5, 20);
                var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
                buildArr[i] = new THREE.Mesh(geometry, material);
                buildArr[i].position.x = 10
                buildArr[i].position.y = 5 + i * 5
                buildArr[i].position.z = -10
                scene.add(buildArr[i]);
            })
        }
        //顶部
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", (texture) => {
            var geometry = new THREE.BoxGeometry(20, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop1 = new THREE.Mesh(geometry, material);
            buildtop1.position.x = 10
            buildtop1.position.y = 5 + 30 * 5
            buildtop1.position.z = -10
            scene.add(buildtop1);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", function (texture) {
            var geometry = new THREE.ConeBufferGeometry(15, 10, 32);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop4 = new THREE.Mesh(geometry, material);
            buildtop4.position.x = 10
            buildtop4.position.y = 5 + 31 * 5
            buildtop4.position.z = -10
            scene.add(buildtop4);
        })
    }
    function cube1() {
        for (let i = 0; i < 30; i++) {
            var loader = new THREE.TextureLoader();
            loader.load("./img/cude2.png", (texture) => {
                var geometry = new THREE.BoxGeometry(30, 5, 20);
                var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
                buildArr1[i] = new THREE.Mesh(geometry, material);
                buildArr1[i].position.x = 100
                buildArr1[i].position.y = 5 + i * 5
                buildArr1[i].position.z = -10
                scene.add(buildArr1[i]);
            })
        }
        //顶部
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", (texture) => {
            var geometry = new THREE.BoxGeometry(20, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop1 = new THREE.Mesh(geometry, material);
            buildtop1.position.x = 100
            buildtop1.position.y = 5 + 30 * 5
            buildtop1.position.z = -10
            scene.add(buildtop1);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", function (texture) {
            var geometry = new THREE.ConeBufferGeometry(15, 10, 32);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop4 = new THREE.Mesh(geometry, material);
            buildtop4.position.x = 100
            buildtop4.position.y = 5 + 31 * 5
            buildtop4.position.z = -10
            scene.add(buildtop4);
        })
    }
    function cube2() {
        for (let i = 0; i < 30; i++) {
            var loader = new THREE.TextureLoader();
            loader.load("./img/cude2.png", (texture) => {
                var geometry = new THREE.BoxGeometry(30, 5, 20);
                var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
                buildArr2[i] = new THREE.Mesh(geometry, material);
                buildArr2[i].position.x = 40
                buildArr2[i].position.y = 5 + i * 5
                buildArr2[i].position.z = 100
                scene.add(buildArr2[i]);
            })
        }
        //顶部
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", (texture) => {
            var geometry = new THREE.BoxGeometry(20, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop1 = new THREE.Mesh(geometry, material);
            buildtop1.position.x = 40
            buildtop1.position.y = 5 + 30 * 5
            buildtop1.position.z = 100
            scene.add(buildtop1);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude2.png", function (texture) {
            var geometry = new THREE.ConeBufferGeometry(15, 10, 32);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop4 = new THREE.Mesh(geometry, material);
            buildtop4.position.x = 40
            buildtop4.position.y = 5 + 31 * 5
            buildtop4.position.z = 100
            scene.add(buildtop4);
        })
    }
    //点击事件函数
    function onDocumentMouseMove() {
        //camera.position.set(0, 150, 300)//相机位置
        if ($(".echarts_left").css("left") === '-250px') {
            $("#canvas").hide()
            $(".echarts_left").animate({ left: '20px' })
            $(".echarts_right").animate({ right: '20px' })
            var cameraz = 10;
            var camerax = 10;
            var timer;
            timer = setInterval(function () {
                cameraz += 1
                camerax += 1
                camera.position.x = 50 - cameraz
                camera.position.z = 100 + cameraz
                if (cameraz >= 300 && camerax >= 50) {
                    clearInterval(timer)
                }
            }, 30)
            // for (var i = 0; i < 30; i++) {
            //     buildArr[i].position.y = 5 + i * 5
            // }


        } else {
           
            $(".echarts_left").animate({ left: '-250px' })
            $(".echarts_right").animate({ right: '-250px' })
            var cameraz = 10;
            var camerax = 10;
            var timer;
            timer = setInterval(function () {
                camerax += 1
                cameraz += 1
                camera.position.x = 0 + cameraz
                camera.position.z = 300 - cameraz
                if (cameraz >= 200 && camerax >= 50) {
                    clearInterval(timer)
                }
            }, 30)

            // for (var i = 0; i < 30; i++) {
            //     buildArr[i].position.y = 5 + i * 10
            // }

        }

    }
    //提示信息
    function tipFunc() {
        //用canvas生成图片
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        canvas.width = 300
        canvas.height = 300
        //制作矩形
        ctx.fillStyle = "rgba(4,47,106,0.8)";
        ctx.fillRect(0, 0, 300, 300)
        //设置文字
        ctx.fillStyle = "#fff";
        ctx.font = 'normal 18pt "楷体"'
        ctx.fillText('模型介绍', 100, 20)
        let textWord = '提示信息'
        //文字换行
        let len = parseInt(textWord.length / 10)
        for (let i = 0; i < (len + 1); i++) {
            let space = 10
            if (i === len) {
                space = textWord.length - len * 10
            }
            console.log('len+' + len, 'space+' + space)
            let word = textWord.substr(i * 10, space)
            ctx.fillText(word, 15, 60 * (i + 1))
        }
        //生成图片
        let url = canvas.toDataURL('image/png');

        //将图片构建到纹理中
        let geometry1 = new THREE.PlaneGeometry(30, 30)
        let texture = THREE.ImageUtils.loadTexture(url, null, function (t) { })

        let material1 = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            opacity: 1,
            transparent: true,
        })

        let rect1= new THREE.Mesh(geometry1, material1)
        rect1.position.set(40, 100, -10)
        scene.add(rect1)
        let rect2 = new THREE.Mesh(geometry1, material1)
        rect2.position.set(100, 100, -10)
        scene.add(rect2)
        let rect3 = new THREE.Mesh(geometry1, material1)
        rect3.position.set(40, 100, 100)
        scene.add(rect3)
        
    }
    
})
