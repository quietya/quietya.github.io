<template>
  <div class="app" :style="{ '--theme-color': themeColor }">
    <div class="header">
      <div class="icon__wrapper">
        <i class="icon icon-printer" @click="save2pdf"></i>
      </div>
      <div class="icon__wrapper">
        <i class="icon icon-reload" @click="themeColor = randomColor()"></i>
      </div>
    </div>
    <div class="container">
      <resume />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Resume from "./RESUME.md";
import { randomColor, printer } from "./markdown";

const themeColor = ref(randomColor());

const save2pdf = () => {
  const targetElement = document.querySelector(".container__wrapper");
  printer(targetElement)
};
</script>

<style>
.header {
  margin-bottom: 10px;
  color: var(--light-mode);
  background-color: v-bind(themeColor);
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: flex-end;
}

.icon__wrapper {
  margin: 0 5px;
}

.container {
  background-color: #fff;
  padding: 20px 20px;
  box-sizing: border-box;
  border-radius: 3px;
}

a:hover {
  text-decoration-thickness: 1px;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-color: v-bind(themeColor);
}
</style>
