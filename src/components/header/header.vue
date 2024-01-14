<script setup>
import { ref } from 'vue' 
const routerData = [{
    name: 'G6可视化',
    path: '/g6'
}, {
    name: 'three可视化',
    path: '/three'
}, 
{
    name: 'X6可视化',
    path: '/x6'
}
]
</script>

<template>
  <div class="hedaer-wrapper">
    <template v-for="(item, i) in routerData" :key="i">
        <router-link class="router-link" :to="item.path">{{ item.name }}</router-link>
    </template>
  </div>
</template>

<style scoped lang='scss'>
.hedaer-wrapper {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .router-link {
       padding: 6px 12px;
       
    }
}
</style>
