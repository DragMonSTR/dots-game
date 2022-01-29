<template>
  <div class="my-button"
       :class="{'my-button-selected': selected}"
       :style="{'height': `${textSize * 2}px`}">
    <img class="icon"
         v-if="iconName"
         :src="iconFileName"
         alt=""
         :style="{'margin-right': iconMarginRight}">

    <p
      class="text"
      v-if="text"
      :style="{'font-size': `${textSize}px`}">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    textSize: {
      type: Number,
      default: 50
    },
    iconName: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconMarginRight() {
      if (!this.text) {
        return 0
      }
      return "20px"
    },
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

.my-button-selected {
  background-color: #e3e3c9;
}

.my-button:hover {
  background-color: #e3e3c9;
}


.icon {
  width: 50px;
  height: 50px;
}

.text {
  text-align: center;

  color: #333;
}
</style>