<template>
    <li>
        <div class="effect-list__img"><slot name="img"></slot></div>
        <dl>
            <dt>
                <slot name="title"></slot>
            </dt>

            <dd class="effect-list__type">
               <slot name="type"></slot>
            </dd>

            <dd class="effect-list__patent" v-if="isPatent">
              <slot name="patent"></slot>
               <dl>
                   <dt>수딩쿨러 특허</dt>
                   <dd>
                       *특허 제 10-1793098 호<br>
                       알로에베라잎추출물, 참마뿌리추출물,<br>
                       다시마추출물, 당느릅나무뿌리추출물,<br>
                       제비꽃추출물
                   </dd>
               </dl>
            </dd>

            <dd class="effect-list__type-name">
               <slot name="type-names"></slot>
            </dd>

            <dd class="effect-list__type">
                <slot name="type2"></slot>
            </dd>

            <dd class="effect-list__type-name">
                <slot name="type-names2"></slot>
            </dd>

<!--            <dd class="effect-list__important">-->
<!--                <slot name="important"></slot>-->
<!--            </dd>-->
        </dl>
    </li>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    export default {
        name: "item-effect-list",
        props : {
            isPatent : {
                type : Boolean,
                default : () => false
            }
        }
    }
</script>

<style scoped lang="scss">
    li{
        height: 227px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .effect-list__img{
            width: 227px;
            height: 227px;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 32px;

            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            img{
                width: 100%;
            }
        }

        dl{
            dt{
                margin-bottom: 10px;
                font-size: $font-size-lg;
                font-weight: 700;
                line-height: 30px;
            }

            dd{
                margin-top: 8px;
                font-size: $font-size-s;
                font-weight: 400;
                line-height: 25px;
                font-family: $font-family-kr;

                &.effect-list__type{

                }

                &.effect-list__patent{
                    margin-top: 20px;
                    margin-bottom: 31px;
                    display: flex;
                    justify-content: flex-start;
                    img{
                        flex-shrink: 0;
                        width: 67px;
                        height: 100%;
                        display: inline-block;
                        margin-right: 18px;
                    }

                    dl{
                        dt{
                            font-size: $font-size-s;
                            line-height: 19px;
                            font-weight: 400;
                        }
                        dd{
                            font-size: $font-size-m-s;
                            line-height: 18px;
                            font-weight: 300;
                        }
                    }
                }

                &.effect-list__type-name{
                    font-size: $font-size-m-s;
                    line-height: 19px;
                    font-weight: 300;
                    font-family: $font-family-kr;
                    sub{
                        font-family: $font-family-sans-serif_thin;
                    }
                }

                &.effect-list__important{
                    font-size: 12px;
                    line-height: 19px;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
        }
    }

    .mobile{
        li{
            height: 130px;
            .effect-list__img{
                flex-shrink: 0;
                width: 130px;
                height: 130px;
                margin-right: 27px;
            }

            dl{
                dt{
                    margin-bottom: 4px;
                    font-size: $font-size-m-me;
                    line-height: 20px;
                    font-weight: 700;
                }

                dd{
                    margin-top: 0;
                    font-size: $font-size-xs;
                    line-height: 18px;
                    margin-top: 12px;

                    &:nth-child( 2 ){
                        margin-top: 0px;
                    }

                    &.effect-list__type{

                    }

                    &.effect-list__patent{
                        display: none;
                    }

                    &.effect-list__type-name{
                        font-size: $font-size-m-s;
                        line-height: 16px;
                    }

                    &.effect-list__important{
                        font-size: $font-size-m-s;
                        line-height: 19px;
                        font-weight: 400;

                    }
                }
            }

            &:last-child{
                //align-items: flex-start;
                //height: 220px;
            }
        }
    }

</style>