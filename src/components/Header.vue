<template>
  <div class="header">
    <div class="header__left">
      <span class="header__left__time">13:50</span>
    </div>
    <div class="header__right">
      <div class="header__right__internet">
        <div
          class="header__right__internet__bar"
          :class="{ active: isInternetBarOneActive }"
        />
        <div
          class="header__right__internet__bar"
          :class="{ active: isInternetBarTwoActive }"
        />
        <div
          class="header__right__internet__bar"
          :class="{ active: isInternetBarThreeActive }"
        />
      </div>
      <span class="header__right__battery">85%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileInternetProcent: 20
    };
  },
  computed: {
    isInternetBarOneActive() { return this.mobileInternetProcent > 0; },
    isInternetBarTwoActive() { return this.mobileInternetProcent > 40; },
    isInternetBarThreeActive() { return this.mobileInternetProcent > 80; }
  }
};
</script>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  width: 100%;
  height: 25px;
  padding: 0 10px;
  box-sizing: border-box;
  background: #000;
  color: #fff;
  font-size: 14px;

  &__left, &__right {
    display: flex;
    width: 50%;
    height: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
  }

  &__left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  &__right {
    justify-content: flex-end;
    align-items: flex-end;

    &__internet {
      display: flex;
      align-items: flex-end;
      height: 14px;
      margin-right: 5px;

      &__bar {
        width: 2px;
        margin-right: 2px;
        background: #9b9b9b;

        &:nth-child(1) { height: 6px; }
        &:nth-child(2) { height: 10px; }
        &:nth-child(3) { height: 14px; }

        &.active {
          background: #fff;
        }
      }
    }

    &__battery {
      line-height: 14px;
    }
  }
}
</style>