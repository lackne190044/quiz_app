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
      categories: Array<string>(),
      info: 'info',
    }
  },
  mounted() {
    // @ts-ignore
    this.getcategories().then((data) => {
      // @ts-ignore
      this.categories = data
    }) 
  },
  methods: {
    getcategories() {
      const promise = new Promise<string[]>((accept, reject) => {
        axios
          .get('/api/categories')
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
  <Jeoparty :categories="categories" />
</template>
