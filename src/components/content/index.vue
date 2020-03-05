<template>
  <div class="content">
    <Grid
      v-if="currentPath == '/'"
      :apps="apps"
    />
    <Frame
      v-else
    />
  </div>
</template>

<script>
import Grid from "./Grid.vue";
import Frame from "./Frame.vue";

export default {
  name: "Content",
  components: {
    Grid,
    Frame
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
  computed: {
    currentPath() {
      return this.$route.path;
    }
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