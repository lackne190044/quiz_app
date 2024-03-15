<script setup lang="ts">
import { defineComponent } from 'vue'
import Grid from './components/Grid.vue'
import Jeoparty from './components/Jeoparty.vue'
import Question  from './components/Question.vue'
</script>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      values: [[1,2,3],[1,2,3],[1,2,2]],
      info: 'info',
      api: 'api',
    }
  },
  mounted() {
    // @ts-ignore
    this.getValues().then((data) => {
      // @ts-ignore
      this.values = data
    }) 
  },
  methods: {
    getValues() {
      // @ts-ignore
      const api = this.api
      const promise = new Promise<number[][]>((accept, reject) => {
        axios
          .get(api + 'values')
          .then((result) => {
            accept(result.data)
          })
          .catch((error) => {
            // @ts-ignore
            this.info = error
            reject(error)
          })
      })
      return promise
    }
  }
};
</script>

<template>
  {{ info }}
  <Grid :values="values" />
</template>
