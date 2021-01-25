<template>
    <section class="inner-container">
        <button class="td-button">쓰&nbsp;기</button>
        <td-clear-both />
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>

import TdClearBoth from '@/components/util/TdClearBoth.vue'

export default {
  name: 'home',
  components: {
    TdClearBoth,
  },
}
</script>

<style lang="scss" scoped>
    //@Override
    .td-button {
        width: 100px;
        height: 40px;
        font-size: 20px;
        float: right;
    }

    //@Override
    .inner-container {
        top: 100px;
        width: 1000px;
        margin:0 auto;
        padding-top: 100px;
        padding-bottom: 100px;
    }

</style>
