<template>
    <transition class="page-fade">
        <section class="main-inner-container">
            <img class="home"/>
        </section>
    </transition>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
    .main-inner-container {
        width: 100%;
        height: 100%;
        position: relative;
        .home {
            position: absolute;
            bottom: 0;
            background-size: 1200px;
            width: 100%;
            height: 100%;
            background-image: url('~@/assets/images/main-drawing.png');
            background-repeat: no-repeat;
            background-position: bottom right;
        }
    }
</style>
