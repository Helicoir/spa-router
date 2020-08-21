<template>
  <main>
    <span>pageA</span>
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.name + ' opened')
  }
}
</script>