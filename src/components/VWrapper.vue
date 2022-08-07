<template>
  <div class="wrapper">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  margin: 0 auto;
  max-width: 1280px;
  position: relative;
  box-sizing: border-box;
  padding: 0 var(--indentSize-2);

  @media (max-width: 720px) {
    padding: 0 var(--indentSize-1);
  }
}
</style>