<template>
  <div class="button">
    <img
      class="button__icon"
      :src="iconFileName"
      alt=""
    >
    <p
      class="button__text"
    >{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    iconFileName() {
      return require(`../assets/icons/${this.iconName}.svg`)
    }
  }
}
</script>

<style scoped>
.button {
  padding: 20px 50px;

  display: inline-flex;
  align-items: center;

  border: 2px solid #aaa;
  border-radius: 8px;

  transition: background-color .2s ease;
  cursor: pointer;
}

.button:hover {
  background-color: #e3e3c9;
}


.button__icon {
  width: 50px;
  height: 50px;
  margin: 0 20px 0 0;
}

.button__text {
  font-size: 50px;
  text-align: center;

  color: #333;
}
</style>