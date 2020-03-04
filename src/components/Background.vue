<template>
  <div class="background">
    <img
      class="background__img"
      src="@/assets/images/main.jpg"
    >
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style lang="scss">
.background {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>