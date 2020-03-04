<template>
  <div class="mobile">
    <div class="mobile__border">
      <div class="mobile__view">
        <Background />
        <Header />
        <Content />
        <BottomLine />
      </div>
    </div>
  </div>
</template>

<script>
import Background from "./Background.vue";
import Header from "./Header.vue";
import Content from "./content/index.vue";
import BottomLine from "./BottomLine.vue";

export default {
  name: "Mobile",
  components: {
    Background,
    Header,
    Content,
    BottomLine
  }
};
</script>

<style lang="scss">
.mobile {
  display: flex;
  width: 320px;
  height: 520px;
  overflow: hidden;

  &__border {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 30px;
    box-sizing: border-box;
    background: #000;
  }

  &__view {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
  }
}
</style>