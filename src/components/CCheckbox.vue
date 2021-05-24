<template>
  <div>
    <label class="d-flex align-items-center" v-for="{text, value} in options" :key="value">
      <input
        v-model="temp"
        :value="value"
        type="checkbox"
      />
      <span class="checkmark"></span>
      <span class="text">{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CCheckbox',
  props: ['options', 'checked'],
  computed: {
    temp: {
      get() {
        return this.checked;
      },
      set(newValue) {
        this.$emit('update:checked', newValue);
      },
    },
  },
};
</script>

<style scoped lang="scss">

label {
  position: relative;
  margin: 0.5rem 0;
  cursor: pointer;
}

.text {
  font-style: italic;
  font-weight: 500;
  font-size: 0.9rem;
  padding-left: 0.5rem;
}

.checkmark {
  width: 1rem;
  height: 1rem;
  border: 2px solid black;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    top: 0.2rem;
    left: 0.4rem;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    height: 0.7rem;
    width: 0.3rem;
    transform: rotate(45deg);
    visibility: hidden;
  }
}

input {
  display: none;
  &:checked ~ .checkmark {
    &:after {
      visibility: visible;
    }
  }
}

</style>
