
<template lang="pug">
  li.artist
    h2: a(:href="artist.url" target="_black") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>

export default {
  //es el nombre de la etiqueta html
  name:'artist',
  //la propiedad que le pasamos a v-bind:artist="artist"
  props: [ 'artist' ]
}

</script>
<style lang="stylus" scoped>
li.artist
  display block
  margin 10px 0

</style>


