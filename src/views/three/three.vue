<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three';
// 导入控制器 控制方向 旋转、缩放 并不是让元素动，而是相机在动
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const threeContainer  = ref()

// 1、创建3维场景
const scene = new THREE.Scene();
// 2、创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 3、设置相机位置
camera.position.set(0, 0, 10)
// 相机观察目标指向Threejs 3D空间中某个位置
// 设置相机的位置
camera.position.z = 5;
camera.position.y = 2; // 把相机抬起来一点
camera.position.x = 2; // 把相机抬起来一点
camera.lookAt(0, 0, 0); //坐标原点

// 添加物体
// 创建一个长方体的几何体 其他形状参考文档
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 物体外观：材质 比如：颜色、
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
// 设置 几何体 x y z 轴坐标
cube.position.set(2,0,0)
// 将几何体添加到场景中
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染尺寸
renderer.setSize(window.innerWidth, window.innerHeight);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

/**循环渲染函数 */
function animate () {
  controls.update() // 每次都控制相机的方向
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// 相机 控制器 控制上下左右
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true // 带有阻尼感
controls.dampingFactor = 0.05 // 设置阻尼系数

onMounted(() => {
  
  // 设置渲染器大小并将其添加到 DOM
  renderer.setSize(threeContainer.value.clientWidth, threeContainer.value.clientHeight);
  threeContainer.value.appendChild(renderer.domElement);
  
  // 开始渲染循环
  animate();
})
</script>

<template>
  <div ref="threeContainer" class="three-box"></div>
</template>

<style scoped lang='scss'>
.three-box {
  width: 100%;
  height: 100%;
}
</style>
