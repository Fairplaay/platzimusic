<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Spinner from './components/Spinner.vue'
import Artist from './components/Artist.vue'
import getArtists from './api/index.js';
export default {
  name: 'app',
  data () {
    return {
      artists:[],
      countries:
      [ 
        { name: 'España',    value: 'spain'    },
        { name: 'Colombia',  value: 'Colombia' },
        { name: 'Venezuela', value: 'Venezuela'},
        { name: 'Argentina', value: 'Argentina'}
      ],
      selectedCountry: 'Venezuela',
      loading: true,
    }
  },
  components: {
    Artist: Artist,
    Spinner: Spinner
  },
  methods:{
    refresArtist(){
      const self = this;
      self.loading=true;
      getArtists(this.selectedCountry)
      .then(function(artists){
          self.loading=false;
          self.artists=artists;
      })
    }
  },
  mounted: function () {
    this.refresArtist()
  },
  watch:{
    selectedCountry: function(){
      this.refresArtist()
    }
  }
}
</script>



<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
