<template>
  <div class="browser">
    <div class="browser__line_address">
      <input
        class="browser__line_address__input"
        type="text"
        v-model="newAddress"
        @keydown.enter="changeAddress"
      >
      <div
        class="browser__line_address__refresh"
        @click="refresh"
      >
        <img
          class="browser__line_address__refresh__icon"
          src="@/assets/images/refresh.png"
          alt="Ref"
        >
      </div>
    </div>
    <iframe
      class="browser__iframe"
      :src="address"
      frameborder="0"
      ref="iframe"
    />
  </div>
</template>

<script>
export default {
  name: "Browser",
  data() {
    return {
      address: "https://example.org",
      newAddress: null
    };
  },
  created() {
    this.newAddress = this.address;
  },
  methods: {
    changeAddress() {
      this.address = this.newAddress;
    },

    refresh() {
      this.address = "";
      setTimeout(() => this.address = this.newAddress, 100);
    }
  }
};
</script>

<style lang="scss">
.browser {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  &__line_address {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d4d4d4;

    &__input {
      width: 80%;
      padding: 5px 10px;
      border: none;
      box-sizing: border-box;
      font-size: 16px;
      outline: none;
    }


    &__refresh {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100%;
      background: #f3f3f7;
      transition: .4s;
      user-select: none;

      &:active {
        background: #e3e3e9;
      }

      &__icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>