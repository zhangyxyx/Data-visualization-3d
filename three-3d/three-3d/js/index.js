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

    var progress = 0;
    var camera, scene, renderer, orbitControls, clock, delta;
    var buildArr = [
        'build1', 'build2', 'build3', 'build4', 'build5', 'build6', 'build7', 'build8', 'build9', 'build10',
        'build11', 'build12', 'build13', 'build14', 'build15', 'build16', 'build17', 'build18', 'build19', 'build20',
        'build21', 'build22', 'build23', 'build24', 'build25', 'build26', 'build27', 'build28', 'build29', 'build30',
        'build31', 'build32', 'build33', 'build34', 'build35', 'build36', 'build37', 'build38', 'build39', 'build40',
        'build41', 'build42', 'build43', 'build44', 'build45', 'build46', 'build47', 'build48', 'build49', 'build50',
    ]
    //管道
    var curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-150, 2, -280),
        new THREE.Vector3(-110, 2, -50),
        new THREE.Vector3(-10, 2, 0),
        new THREE.Vector3(100, 2, 100),
        new THREE.Vector3(140, 2, 200)
    ], false/*是否闭合*/);

    var buildtop1; var buildtop2; var buildtop3; var buildtop4
    var geometryP
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
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 1000)
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
        traffic()
        window.addEventListener("click", onDocumentMouseMove, false)
    }
    function render() {
        delta = clock.getDelta();
        orbitControls.update(delta);
        requestAnimationFrame(render);
        renderer.render(scene, camera)
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load("./img/cude1.png");
        texture.offset.x -= 0.06
        if (progress > 1.0) {
            circleP.position.set(-150, 2, -280);
            progress = 0
            //return;    //停留在管道末端,否则会一直跑到起点 循环再跑
        }
        progress += 0.001; //0.0009;
        if (curve) {
            let point = curve.getPoint(progress);
            if (point && point.x) {
                circleP.position.set(point.x, point.y, point.z);
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
            line.position.x = (i * 50) - 800;
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
            plane.scale.set(3, 5, 2)
            scene.add(plane);
        })

    }
    //车流

    function traffic() {
        //一条
        var tubeGeometry2 = new THREE.TubeGeometry(curve, 100, 2, 50, false);
        var tubeMaterial2 = new THREE.MeshPhongMaterial({
            color: "rgb(45,245,216)",
            transparent: true,
            opacity: 1,
        });
        var tube2 = new THREE.Mesh(tubeGeometry2, tubeMaterial2);
        scene.add(tube2);
        //物体
        geometryP = new THREE.BoxGeometry(5, 5, 5);
        var materialP = new THREE.MeshBasicMaterial({ color: 'rgb(165,244,7)' });
        circleP = new THREE.Mesh(geometryP, materialP);
        scene.add(circleP);
        geometryP.rotateY(Math.PI / 2);
        //circleP.position.set(-80, -40, 0);
    }

    //建筑
    function cube() {
        for (let i = 0; i < 30; i++) {
            var loader = new THREE.TextureLoader();
            loader.load("./img/cude1.png", (texture) => {
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
        loader.load("./img/cude1.png", (texture) => {
            var geometry = new THREE.BoxGeometry(20, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop1 = new THREE.Mesh(geometry, material);
            buildtop1.position.x = 10
            buildtop1.position.y = 5 + 30 * 5
            buildtop1.position.z = -10
            scene.add(buildtop1);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude1.png", (texture) => {
            var geometry = new THREE.BoxGeometry(15, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop2 = new THREE.Mesh(geometry, material);
            buildtop2.position.x = 10
            buildtop2.position.y = 5 + 31 * 5
            buildtop2.position.z = -10
            scene.add(buildtop2);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude1.png", (texture) => {
            var geometry = new THREE.BoxGeometry(10, 5, 20);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop3 = new THREE.Mesh(geometry, material);
            buildtop3.position.x = 10
            buildtop3.position.y = 5 + 32 * 5
            buildtop3.position.z = -10
            scene.add(buildtop3);
        })
        var loader = new THREE.TextureLoader();
        loader.load("./img/cude1.png", function (texture) {
            var geometry = new THREE.ConeBufferGeometry(5, 10, 32);
            var material = new THREE.MeshBasicMaterial({ color: 0x739783, map: texture });
            buildtop4 = new THREE.Mesh(geometry, material);
            buildtop4.position.x = 10
            buildtop4.position.y = 5 + 33 * 5
            buildtop4.position.z = -10
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
            for (var i = 0; i < 30; i++) {
                buildArr[i].position.y = 5 + i * 5
            }


        } else {
            tipFunc()
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

            for (var i = 0; i < 30; i++) {
                buildArr[i].position.y = 5 + i * 10
            }

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

        let rect = new THREE.Mesh(geometry1, material1)
        rect.position.set(43, 100, 0)
        scene.add(rect)
    }
})
