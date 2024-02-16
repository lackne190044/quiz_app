<script lang="ts">
import { defineComponent } from 'vue'
import Grid from './components/Grid.vue'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      values: [] as bigint[][],
      api: 'http://api:5000/',
      info: 'info'
    };
  },
  mounted() {
    this.getValues().then((data) => {
      this.values = data
    })
  },
  methods: {
    getValues() {
      const promise = new Promise<bigint[][]>((accept, reject) => {
        
        axios
        .get(this.api + 'values')
        .then((result) => {
          accept(result.data)
        })
        .catch((error) => {
          this.info = error
          reject(error)
        })
      })
      return promise
    }
  }
});
</script>

<template>
  {{ info }}
  <br>
  {{ values }}
  <h1>
    <Grid :values="values" />
  </h1>
  <button @onclick="getValues">get</button>
</template>

<style>
.grid-container {
  display: grid;
}
</style>
