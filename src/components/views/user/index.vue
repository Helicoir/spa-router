<template>
  <main>
    <p>Pagename: {{ this.$route.name }}</p>
    <p>param: {{ this.$route.params.id }}</p>
    <p>user: {{ dataset.user[this.$route.params.id].name }}</p>
  </main>
</template>

<script>
import axios from 'axios'
import '@/dataset.json'
export default {
  data(){
    return {
      dataset: require('@/dataset.json')
    }
  },
}
</script>