<template>
    <button class="btn">
      <slot>Create</slot>
    </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  margin-top: 15px;
  background: none;
  border: 1px solid teal;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  justify-content: flex-end;
}


</style>
