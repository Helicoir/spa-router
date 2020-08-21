<template>
  <main>
    <span>pageB</span>
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.name + ' opened')
  }
}
</script>