<template>
  <div class="content">
    <Grid :apps="apps" />
  </div>
</template>

<script>
import Grid from "./Grid.vue";

export default {
  name: "Content",
  components: {
    Grid
  },
  data() {
    return {
      apps: [
        {
          name: "App"
        },
        {
          name: "App"
        }
      ]
    };
  },
  created() {
    for (let i = 0; i < 42; i++) {
      this.apps.push({
        name: "App"
      });
    }
  }
};
</script>

<style lang="scss">
.content {
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100% - 65px);
}
</style>