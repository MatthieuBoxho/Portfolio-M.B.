<template src="./home.html">
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Home',
  data () {
    return {
      selectedStory: 0,
      started: false,
      selectedAnimation: 0
    }
  },
  components: {
    Parallax
  },
  methods: {
    startJourney: function () {
      if (!this.started) {
        this.started = true
        this.selectedStory ++
        setTimeout(function () {
          console.log(this.selectedAnimation, 'test')
          this.selectedAnimation ++
        }.bind(this), 1000)
      }
    },
    next: function () {
      if (this.selectedStory < 4) {
        this.selectedStory ++
      } else {
        this.selectedStory = 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./home.scss" lang="scss">
</style>
