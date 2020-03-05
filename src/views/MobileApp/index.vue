<template>
  <div class="app">
    <Mobile />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { apps } from "@/apps/apps.json";
import Mobile from "@/components/Mobile.vue";

import importApps from "./importApps";

export default {
  name: "MobileApp",
  components: {
    Mobile
  },
  data() {
    return {
      appsComponents: null
    };
  },
  created() {
    this.appsComponents = importApps(apps);
    this.importApps();
  },
  methods: {
    ...mapMutations({
      CHANGE_APP: "CHANGE_APP"
    }),

    importApps() {
      const appName = this.$route.params.app;
      const appArr = this.appsComponents.filter(item => item.name.toLowerCase() === appName);

      if (appArr.length === 0) return;
      this.CHANGE_APP(appArr[0]);
    }
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>