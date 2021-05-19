<template>
    <li>
        <div class="product-detail__info-list__img" :class="{ 'orange' : isOrange }">
            <slot name="img"></slot>
        </div>
        <div class="product-detail__info-list__txt">
            <dl>
                <dt>
                    <slot name="img-title"></slot>
                </dt>
                <dd>
                    <slot name="img-description"></slot>
                </dd>
                <dd class="product-detail__info-list__important">
                    <slot name="important"></slot>
                </dd>
            </dl>
        </div>
        <div v-if="views.isPoint" class="product-detail__info-list__point">
            <span class="product-detail__info-list__point--line"></span>
            <span class="product-detail__info-list__point__txt">
                <slot name="point-text"></slot>
            </span>
        </div>
    </li>
</template>

<script>
    export default {
        name: "item-detail-list",
        props : {
            views : Object,
            isOrange : {
                type : Boolean,
                default : () => false
            }
        },

        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    li{
        position: relative;
        .product-detail__info-list__img{
            width: 292px;
            margin-right: 64px;
            margin-bottom: 38px;
            overflow: hidden;
            border: 2px solid $color-set-green;
            border-radius: 100%;
            font-size: 0;

            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);

            &.orange{
                border: 2px solid #FEC199;
            }

            img{ width: 100%; }
        }

        .product-detail__info-list__txt{
            dl{
                font-size: $font-size-s;
                line-height: 25px;
                font-family: $font-family-kr;
                dt{
                    color: $color-set-green;
                    font-weight: 700;
                    span {
                        color: $color-set-green;
                        font-weight: 300;
                    }
                }

                dd{
                    font-weight: 300;
                    line-height: 25px;
                    span {
                        color: $color-set-green;
                        font-weight: 300;
                    }

                    &.product-detail__info-list__important{
                        margin-top: 10px;
                    }
                }
            }
        }

        .product-detail__info-list__point{
            position: absolute;
            left: 289px;
            top: 122px;
            display: flex;
            align-items: flex-start;

            .product-detail__info-list__point--line{
                position: relative;
                top: 8px;
                display: inline-block;
                width: 47px;
                height: 1px;
                background-color: $color-set-green;
                margin-right: 13px;
            }

            .product-detail__info-list__point__txt{
                font-size: $font-size-lg;
                line-height: 24px;
                font-weight: 600;
                color: $color-set-green;
                display: inline-block;
            }
        }

        &:nth-child( 2 ){
            width: 493px;
        }
    }

    .mobile{
        li{
            position: relative;
            margin-bottom: 80px;

            &:last-child {
                margin-bottom: 0;
            }
            .product-detail__info-list__img{
                width: 200px;
                margin-right: 0;
                margin: 0 auto;
                margin-bottom: 25px;

                img{ width: 100%;}
            }

            .product-detail__info-list__txt{
                width: 200px;
                margin: 0 auto;
                dl{
                    text-align: center;
                    line-height: 17px;
                    dt{
                        margin-bottom: 4px;
                        font-size: $font-size-xs;
                        font-weight: 600;
                    }

                    dd{
                        font-size: $font-size-xs;
                        font-weight: 300;
                        line-height: 19px;

                        &.product-detail__info-list__important{
                            font-size: 12px;
                            line-height: 19px;
                        }
                    }
                }
            }

            .product-detail__info-list__point{
                left: 0;
                top: 0;
                width: 100%;
                text-align: center;
                margin-top: 16px;
                display: block;

                .product-detail__info-list__point--line{
                    position: absolute;
                    left: 50%;
                    top: 40px;
                    width: 1px;
                    height: 32px;
                }

                .product-detail__info-list__point__txt{
                    font-size: 14px;
                    line-height: 17px;
                    font-weight: 400;
                }
            }

            &:nth-child( 2 ){
                width: 100%;
            }
        }
    }

    .HydracicaToner{
        li{
            .product-detail__info-list__img{
                &.orange{
                }

                img{}
            }

            .product-detail__info-list__txt{
                dl{
                    dt{
                        color: #000;
                        font-weight: 300;
                    }

                    dd{
                        span {
                        }

                        &.product-detail__info-list__important{
                        }
                    }
                }
            }

            .product-detail__info-list__point{
                > span{
                }
            }

            &:nth-child( 2 ){
            }
        }
    }




</style>