<template>
  <div>
    <div>
      <ul data-cy="todo">
        <li v-for="item in items" :key="item.id">{{ item.item }}</li>
      </ul>
    </div>
    <div>
      <button @click="addItems">add items</button>
      <button @click="logItems">log</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          item: "take grocery",
          id: 0
        },
        {
          item: "sell grocery",
          id: 1
        },
        {
          item: "profit",
          id: 2
        }
      ]
    };
  },
  methods: {
    addItems() {
      this.items.push({
        item: "new item",
        id: this.items.length + 1
      });
    },
    logItems() {
      if (this.items) {
        console.log(this.items);
      } else {
        console.log("no items found");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>