<template>
    <div id="app">
        <div class="container">
            <td-header/>
            <router-view/>
            <td-footer/>
        </div>
    </div>
</template>

<script>
import tdHeader from '@/components/main/TdHeader.vue'
import tdFooter from '@/components/main/TdFooter.vue'

export default {
  name: 'App',
  components: {
    tdHeader,
    tdFooter,
  },
  data() {
    return {
      values: {
        lifeCycle: false,
      },
    }
  },
  methods: {
    noScroll() {},
    createWholeScroll() {
      // firefox, chrome
      document.documentElement.style.overflow = 'auto'
      // ie only
      document.body.scroll = 'yes'
    },
    removeWholeScroll() {
      // firefox, chrome
      window.removeEventListener('scroll')
      document.documentElement.style.overflow = 'hidden'
      // ie only
      document.body.scroll = 'no'
    },
  },
}
</script>

<style lang="scss">
    #app {
        background-color: $td-color;
        .container {
            overflow-x: hidden;
            max-width: 100%;
            height: 100vh;
            margin: 0;
            &.modal-has-opened {
                -ms-overflow-style: none;
                overflow-y: hidden;
                &::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    background: transparent;
                }
            }
            &.modal-has-close {
                height: 100%;
                overflow-y: auto;
            }
        }
    }
</style>
