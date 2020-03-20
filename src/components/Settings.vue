<template>
  <div class="modal">
    <h2>Settings</h2>
    <button @click="close"><span>Close</span>X</button>
    <h3>Area size limits</h3>
    <p>
      Use this slider to set the lower and upper bounds for the size of area you
      want displayed on the map
    </p>
    <div class="field">
      <label for="rangeMin">Lower limit</label>
      <input
        ref="rangeMin"
        type="range"
        v-model="lower"
        min="0"
        max="999999999"
      />
      <p class="value">{{ lower }}m<sup>2</sup></p>
    </div>
    <div class="field">
      <label for="rangeMax">Upper limit</label>
      <input
        ref="rangeMax"
        type="range"
        v-model="upper"
        min="0"
        max="999999999"
      />
      <p class="value">{{ upper }}m<sup>2</sup></p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  watch: {
    lower: function() {
      this.setRange()
    },
    upper: function() {
      this.setRange()
    },
  },
})
export default class Settings extends Vue {
  lower = 0
  upper = 999999999

  setRange() {
    this.$emit('setRange', { lower: Number(this.lower), upper: Number(this.upper) })
  }
  close() {
    this.$emit('close')
  }
}
</script>

<style scoped>
.modal {
  @apply absolute bg-white w-full max-w-lg p-4 right-0 mr-4 shadow-lg;
  top: 50%;
  transform: translateY(-50%);
}
h2 {
  @apply mt-0;
}
.field {
  @apply w-full mb-4 flex flex-wrap;
}
label {
  @apply block w-full font-bold;
}
input[type="range"] {
  @apply block w-3/4;
}
.value {
  @apply w-1/5 text-xs flex-shrink ml-auto;
}
button {
  @apply absolute top-0 right-0 mt-4 mr-4 bg-white border-solid border-2 border-black font-bold text-xl cursor-pointer;
  transition: all 0.2s ease;
}
button:hover {
  @apply bg-black text-white;
}
button span {
  @apply hidden;
}
</style>
