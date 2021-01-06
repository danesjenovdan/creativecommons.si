<template>
  <div class="d-flex">
    <label>
      <input type="checkbox" @change="$emit('input', $event.target.checked)" />
      <span class="checkmark"></span>
    </label>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'CCheckbox',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">

label {
  position: relative;
  margin-bottom: 0;
}

.text {
  font-style: italic;
  font-weight: 500;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
}

.checkmark {
  width: 1rem;
  height: 1rem;
  border: 2px solid black;
  display: inline-block;
  cursor: pointer;

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
