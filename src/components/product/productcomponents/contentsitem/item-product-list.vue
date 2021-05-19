<template>
    <li>
        <a :href="link" @mouseenter="mOver" @mouseleave="mOut"  >
            <div class="share-img">
                <slot name="img"></slot>
            </div>
            <div class="share-txt-con">
                <div class="share-list-tit">
                    <span class="share-list-bold">
                        <slot name="title"></slot>
                    </span>
                    <span>
                        <slot name="volume"></slot>
                    </span>
                </div>
            </div>
        </a>
        <div class="share-price">
            <slot name="price"></slot>
        </div>

        <div class="share-list-txt">
            <p>
                <slot name="description"></slot>
            </p>
        </div>
    </li>
</template>

<script>
    import gsap from "gsap";
    export default {
        name: "item-product-list",
        props : {
            link : {
                type : String,
                default : () => "javascript:;"
            }
        },

        methods : {
            mOver( $e ){
                let item = $e.target;
                let productImg = item.querySelector( ".share-img img" );

                gsap.to( productImg, 0.25, { scale:0.97, transformOrigin : "center bottom", ease:Cubic.easeOut });
            },

            mOut( $e ){
                let item = $e.target;
                let productImg = item.querySelector( ".share-img img" );

                gsap.to( productImg, 0.25, { scale:1, ease:Cubic.easeOut });
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        position: relative;
        width: 260px;
        margin-bottom: 120px;
        margin-right: 52px;
        border-bottom: 1px solid rgba(0,0,0,0.5);

        &:nth-child(4n+0) {
            margin-right: 0;
        }

        a{
            display: inline-block;
            overflow: hidden;
            width: 100%;
            .share-img {
                width: 260px;
                height: 380px;
                margin-bottom: 30px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }

            .share-txt-con {
                position: relative;

                .share-list-tit {
                    margin-bottom:30px;

                    span {
                        display: block;
                        font-size: $font-size-xs;
                        line-height: 1.5;
                        font-family: $font-family-sans-serif;
                        min-height: 42px;
                        &.share-list-bold {
                            margin-bottom: 13px;
                            line-height: 21px;
                            font-size: $font-size-s;
                            font-weight: 700;
                            font-family: $font-family-kr;
                        }
                    }

                    &::before {
                        position: absolute;
                        top: -29px;
                        left: 0;
                        content: '';
                        display: block;
                        width: 100%;
                        height: 1px;
                        background-color: rgba(0,0,0,0.5);
                    }

                    //&::after {
                    //    position: absolute;
                    //    bottom: -32px;
                    //    left: 0;
                    //    content: '';
                    //    display: block;
                    //    width: 100%;
                    //    height: 1px;
                    //    background-color: rgba(0,0,0,0.5);
                    //}
                }
            }
        }

        .share-price{
            font-size: 13px;
            line-height: 13px;
            position: absolute;
            left: 0;
            bottom: 10px;
            font-family: $font-family-sans-serif;
        }

        .share-list-txt {
            position: absolute;
            /*bottom: 0;*/
            /*padding-top: 28px;*/
            /*transform: translate3d( 0%, 100%, 0 );*/
            top: calc(100% + 28px);
            p {
                position: relative;
                height: 100%;
                font-size: $font-size-s;
                font-weight: 300;
                line-height: 20px;
                font-family: $font-family-kr;
            }
        }
    }

    .mobile{
        li {
            position: relative;
            width: 47%;
            margin-right: 0;
            margin-bottom: 110px;

            &:nth-child(odd) {
                margin-right: 15px;
            }

            .share-img {
                width: 150px;
                height: auto;
                margin: 0 auto;
                margin-bottom: 20px;
            }

            .share-txt-con {
                .share-list-tit {
                    position: relative;
                    margin-bottom: 20px;

                    span {
                        display: block;
                        font-size: $font-size-m-s;

                        &.share-list-bold {
                            margin-bottom: 8px;
                            line-height: 21px;
                            font-size: $font-size-xs;
                        }
                    }

                    &::before {
                        top: -18px;
                    }

                    &::after {
                        bottom: -15px;
                    }
                }



            }
        }

        .share-price{
            font-size: $font-size-m-s;
            line-height: 15px;
            position: absolute;
            left: 0;
            bottom: 13px;
        }

        .share-list-txt {
            top: calc(100% + 20px) ;
            /*position: relative;*/
            /*bottom: auto;*/
            /*transform: translate3d(0,0,0);*/
            p {
                font-size: $font-size-xs;
                line-height: 22px;
                br{
                    display: none;
                }
            }
        }
    }

    .windows{
        li {
            &:nth-child(odd) {
            }

            .share-img {
            }

            .share-txt-con {
                .share-list-tit {
                    span {
                        &.share-list-bold {
                        }
                    }

                    &::before {
                    }

                    &::after {
                    }
                }
            }
        }

        .share-list-txt {
            p {
                font-size: 14px;
                br{
                }
            }
        }
    }
</style>