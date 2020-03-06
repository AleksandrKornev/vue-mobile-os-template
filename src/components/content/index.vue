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
import { apps } from "@/apps/apps.json";

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
      apps: []
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  created() {
    this.getListApps();
  },
  methods: {
    getListApps() {
      apps.forEach(app => {
        this.apps.push(app);
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