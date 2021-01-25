<template>
    <header class="td-header">
        <div class="td-header__inner">
            <div class="td-header__inner__left">
                <div class="wrap-logo">
                    <img
                            class="cat-logo-image"
                            alt="cat-logo"
                            src="@/assets/images/cat-logo.png"
                            @click="goToHome"/>
                </div>
                <div class="wrap-title"
                     onmousedown="return false"
                     @click="goToHome">
                    <h2 class="title">뷰 <br/>투두 리스트</h2>
                </div>
            </div>
            <div class="td-header__inner__right">
                <div class="navigation">
                    <router-link to="/detail"
                                 class="detail">할일 관리
                    </router-link>
                </div>
            </div>
            <td-clear-both/>
        </div>
    </header>
</template>

<script>
import TdClearBoth from '@/components/util/TdClearBoth.vue'

export default {
  name: 'td-header',
  components: {
    TdClearBoth,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
    .td-header {
        position: relative;
        &__inner {
            position: absolute;
            width: 1200px;
            height: 80px;
            top: 10px;
            left: 50%;
            margin-left: -600px;
            padding-right: 100px;
            z-index: 9999;
            &__left {
                float: left;
                width: 400px;
                height: 80px;
                .wrap-logo {
                    display: inline-block;
                    width: 110px;
                    height: 80px;
                    &:hover {
                        cursor: pointer;
                    }
                    .cat-logo-image {
                        display: table;
                        margin-left: auto;
                        margin-right: auto;
                        width: 100px;
                        height: 80px;
                    }
                }
                .wrap-title {
                    position: relative;
                    display: inline-block;
                    left: -35px;
                    width: 190px;
                    height: 80px;
                    .title {
                        font-size: 19px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
            &__right {
                float: right;
                width: calc(100% - 400px);
                height: 80px;
                .navigation {
                    float: right;
                    display: table;
                    position: relative;
                    height: 80px;
                    .detail {
                        display: table-cell;
                        vertical-align: middle;
                        line-height: 19px;
                        font-size: 19px;
                        transition: 0.4s;
                        &:hover {
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }
</style>
