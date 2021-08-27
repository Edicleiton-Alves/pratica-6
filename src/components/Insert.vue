<template>
  <input
    type="text"
    v-on:keyup.enter="add"
  />
</template>

<script>
export default {
  name: "Insert",
  inject: ["insertions"],
  methods: {
    add($event) {
      let insertion = {};
      insertion.value = $event.target.value;
      insertion.checked = false;
      console.log(this.insertions);
      this.insertions.push(insertion);
    },
  },
};
</script>

<style></style>