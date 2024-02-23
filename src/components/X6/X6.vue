<script setup name="X6">
import { onMounted, ref } from "vue";
import { GridLayout } from "@antv/layout"; // umd模式下， const { GridLayout } = window.layout
import { data } from "./data";
import { Graph } from "@antv/x6";

const container = ref();

Graph.registerNode(
  "custom-node",
  {
    inherit: "rect", // 继承于 rect 节点
    width: 100,
    height: 40,
    markup: [
      {
        tagName: "rect", // 标签名称
        selector: "body", // 选择器
      },
      {
        tagName: "image",
        selector: "img",
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
        fill: "#fff",
        rx: 6,
        ry: 6,
      },
      img: {
        "xlink:href":
          "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
        width: 16,
        height: 16,
        x: 12,
        y: 12,
      },
    },
  },
  true
);
onMounted(() => {
  init();
});
const init = () => {
  const graph = new Graph({
    container: container.value, // 容器
    autoResize: true,
    width: 600,
    height: 400,
    background: {
      color: "#F2F7FA",
    },
    panning: true, // 移动画布
    mousewheel: true, // 缩放画布
    grid: {
      // 背景网格配置
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee", // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: "#ddd", // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
  });

  const source = graph.addNode({
    shape: "custom-node", // 可以直接使用上面注册过的 shape
    x: 40,
    y: 40,
    label: "hello",
  });

  const target = graph.addNode({
    shape: "custom-node",
    x: 160,
    y: 180,
    label: "world",
  });

  graph.addEdge({
    source,
    target,
    attrs: {
      line: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
      },
    },
  });

  // graph.fromJSON(data); // 渲染元素
  graph.centerContent(); // 居中显示
};
</script>

<template>
  <div id="container" ref="container"></div>
</template>

<style scoped lang="scss"></style>
