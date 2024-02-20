<script setup>
import { ref } from 'vue' 
import Slot from '@/components/slot/slot'
</script>

<template>
  <div>
    <Slot>
        <div>我是一个默认插槽</div>
    </Slot>
  </div>
</template>

<style scoped lang='scss'></style>
