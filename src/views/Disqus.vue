<template>
  <div class="page">
    <h1>{{$route.params.id}}</h1>
    <vue-disqus-embed
      :identifier="$route.params.id"
      :url="'https://alijaya.github.io/vue-disqus-embed' + $route.path"
      :title="$route.params.id" 
      class="disqus" />
  </div>
</template>

<script>
export default {
  name: 'disqus',
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.disqus {
  width: 100%;
  max-width: 30rem;
}
</style>
