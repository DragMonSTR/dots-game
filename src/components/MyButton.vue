<template>
  <div class="my-button">
    <img class="icon"
         :src="iconFileName"
         alt="">

    <p
      class="text"
      v-if="text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    iconFileName() {
      return require(`@/assets/img/icons/${this.iconName}.svg`)
    }
  }
}
</script>

<style scoped>
.my-button {
  height: 100px;
  padding: 0 50px;

  display: inline-flex;
  align-items: center;

  border: 2px solid #aaa;
  border-radius: 8px;

  transition: background-color .2s ease;
  cursor: pointer;
}

.my-button:hover {
  background-color: #e3e3c9;
}


.icon {
  width: 50px;
  height: 50px;
}

.text {
  margin: 0 0 0 20px;

  font-size: 50px;
  text-align: center;

  color: #333;
}
</style>