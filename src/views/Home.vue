<template>
  <div class="home">
    <Mobile />
  </div>
</template>

<script>
import Mobile from "@/components/Mobile.vue";

export default {
  name: "Home",
  components: {
    Mobile
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>