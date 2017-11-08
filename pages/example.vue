<template>
  <section class="container">
    <div>
      
     
      <h1 class="title">
        jB
      </h1>
      
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
      
    </div>
  </section>
</template>

<script>  

  export default {
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    display: flex;
  }


  .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
    &.offline {
      background: red;
    }
  }
</style>
