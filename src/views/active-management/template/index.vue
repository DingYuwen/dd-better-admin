<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-10-14 23:03:26
 * @LastEditTime: 2022-11-18 19:16:00
 * @LastEditors: dingyuwen
 * @Description:
-->
<template>
  <div id="ggl" text-center class="flex-y-center flex-x-center w-390px h-844px bg-[var(--page-bg)]">
    <div w="25%" bg="#666">1</div>
    <div w="25%" bg="[$pagebg]">2</div>
    <div w="25%" bg="[var(--g-c)]">3</div>
    <div w="25%" bg="[$gc]">4</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#ggl {
  $gc: #050404;
  $pagebg: #ffbc70;
  $panelfontcolor: #f26b27;
  --g-c: #a70019;
  --page-bg: #ffbc70;
  --panel-font-color: #f26b27;
  --rule-bg: url(./images/rule-bg.png);
  --awards-center-bg: #ffe4c5;
}
</style>
