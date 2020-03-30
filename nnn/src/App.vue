<template>
    <div>
      <button @click="get()">点我</button>
    </div>
</template>

<script>
import fs from "fs"
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  methods: {
    get(){
      fs.readFile('./components.a', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  },
  components: {},
  mounted() {
  }
};
</script>

<style scoped>
</style>
