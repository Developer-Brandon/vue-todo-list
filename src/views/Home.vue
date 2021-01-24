<template>
    <div class="common-inner-container">
        <img class="home" />
    </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
}
</script>

<style lang="scss" scoped>

    //@ Override
    .common-inner-container {
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
