<template>
  <div class="frame">
    <component :is="currentApp" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Frame",
  computed: {
    ...mapState({
      currentApp: state => state.currentApp
    })
  }
};
</script>

<style lang="scss">
.frame {
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>