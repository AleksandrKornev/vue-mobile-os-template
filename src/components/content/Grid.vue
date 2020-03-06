<template>
  <div class="grid__wrapper">
    <div
      class="grid"
      v-for="(appsScreen, index) in formatedApps"
      :class="appsScreen.class"
      :key="'apps' + index"
      v-touch:swipe.left="swipeRight(index)"
      v-touch:swipe.right="swipeLeft(index)"
    >
      <div
        class="grid__app"
        v-for="(app, appIndex) in appsScreen.apps"
        :key="appIndex"
        @click="startApp(app.path)"
      >
        <div
          class="grid__app__img"
          :style="{ background: isHaveImage(app) }"
        />
        <span class="grid__app__name">{{ app.name }}</span>
      </div>
    </div>
    <div class="grid__dots">
      <div
        class="grid__dots__dot"
        v-for="(dot, dotIndex) in screens"
        :class="{ active: dot === currentScreen }"
        :key="'dot' + dotIndex"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      screens: 0,
      currentScreen: 1,
      formatedApps: null
    };
  },
  watch: {
    apps(newVal) {
      this.formatApps(newVal);
      this.screens = this.formatedApps.length;
    }
  },
  created() {
    this.formatApps(this.apps);
    this.screens = this.formatedApps.length;
  },
  methods: {
    isHaveImage(app) {
      return app.img !== undefined ? app.img : "rgba(80, 64, 96, 0.58)";
    },

    formatApps() {
      const appsInPage = 20;
      const apps = [];

      for (let i = 0; i < this.apps.length; i++) {
        const appInScreen = this.apps.slice(i, i + appsInPage);
        const item = {
          apps: appInScreen
        };
        item.class = i === 0 ? "center" : "right";
        apps.push(item);

        i += appsInPage;
      }

      this.formatedApps = apps;
    },

    swipeLeft(itemIndex) {
      return () => {
        if (this.screens === 1) return;
        if (this.currentScreen > 1) {
          this.currentScreen--;
          this.formatedApps[itemIndex - 1].class = "center";
          this.formatedApps[itemIndex].class = "right";
        }
      };
    },

    swipeRight(itemIndex) {
      return () => {
        if (this.screens === 1) return;
        if (this.currentScreen < this.screens) {
          this.currentScreen++;
          this.formatedApps[itemIndex].class = "left";
          this.formatedApps[itemIndex + 1].class = "center";
        }
      };
    },

    startApp(path) {
      this.$router.push(`/app/${ path }`);
    }
  }
};
</script>

<style lang="scss">
.grid {
  &__wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  position: absolute;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  align-content: baseline;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: .8s;

  &.left {
    transform: translateX(-100%);
  }
  &.center {
    transform: translateX(0);
  }
  &.right {
    transform: translateX(100%);
  }

  &__app {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-bottom: 30px;
    border-radius: 10px;

    &:not(:nth-child(4n)) {
      margin-right: 25px;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: #000;
    }

    &__name {
      position: absolute;
      bottom: -15px;
      font-size: 12px;
      color: #dadada;
      user-select: none;
    }
  }

  &__dots {
    position: absolute;
    left: calc(50% - 50px);
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100px;
    height: 20px;

    &__dot {
      width: 10px;
      height: 10px;
      border: 1px solid #888888;
      border-radius: 100%;
      box-sizing: border-box;
      background: transparent;
      transition: .4s;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.active {
        background: #fff;
        border: 0;
      }
    }
  }
}
</style>