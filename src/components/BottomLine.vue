<template>
  <div class="bottom_line">
    <div class="bottom_line__btn">
      <img
        class="bottom_line__btn__img"
        src="@/assets/images/burger-menu.png"
      >
    </div>
    <div class="bottom_line__btn">
      <img
        class="bottom_line__btn__img"
        src="@/assets/images/box.png"
      >
    </div>
    <div class="bottom_line__btn">
      <img
        class="bottom_line__btn__img back"
        src="@/assets/images/arrow.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomLine"
};
</script>

<style lang="scss">
.bottom_line {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  background: rgba(56, 56, 56, 0.4);

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: .2s;
    user-select: none;

    &:active {
      background: rgba(134, 134, 134, 0.6);
    }

    &__img {
      width: 18px;
      height: 18px;

      &.back {
        transform: rotate(90deg);
      }
    }
  }
}
</style>