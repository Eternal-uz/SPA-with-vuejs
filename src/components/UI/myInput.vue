<template>
  <input
  type="text"
  class="input"
  :value="modelValue"
  @input="updateInput"
  >
</template>

<script>
export default {
  name: 'myInput',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
}

</style>
