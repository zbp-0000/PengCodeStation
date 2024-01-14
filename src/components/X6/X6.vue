<script setup name="X6">
import { onMounted, ref } from 'vue'
import { Graph } from '@antv/x6';
import { GridLayout } from '@antv/layout' // umd模式下， const { GridLayout } = window.layout
import { data } from './data';

const container = ref()

onMounted(() => {
    init()
})
const init = () => {

    const graph = new Graph({
        container: container.value,
        width: 600,
        height: 400,
    })

    const model = {
        nodes: [
            {
                id: 'node1',
            }, {
                id: 'node2',
            },
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
            },
        ],
    }

    const gridLayout = new GridLayout({
        type: 'grid',
        width: 600,
        height: 400,
        center: [300, 200],
        rows: 4,
        cols: 4,
    })

    const newModel = gridLayout.layout(model)

    graph.fromJSON(newModel)
}

</script>

<template>
    <div id="container" ref="container"></div>
</template>

<style scoped lang='scss'></style>
