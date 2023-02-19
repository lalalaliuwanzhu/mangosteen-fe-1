<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const onClick = ()=>{
  count.value += 1;
}
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{count}}</h1>
  <div><button @click="onClick">+1</button></div>
</template>

<style>

</style>