<template>
    <div class="wrap-wash">
        <div class="inner-wrap-wash">
            <div class="contents-wash">
                <div class="product-detail__bx">
                    <div class="product-detail__introduce">
                        <dl>
                            <dt>
                                7:3 황금비가 빚어낸
                            </dt>

                            <dd>
                                Powder Bubble<br>
                                System
                            </dd>
                        </dl>
                    </div>

                    <div class="product-detail__info">
                        <div class="product-detail__info-title">
                            그래뉼 타입과 미분 타입의 파우더가 7:3 최적의 비율로 구성되어<br class="pc-br">
                            피부 속 사이사이 피지와 노폐물을 말끔하게 제거해 줍니다.
                        </div>
                    </div>
                </div>

                <div class="product-detail__info-list__bx">
                    <div class="product-detail__info-list__text">
                        <div class="product-detail__info-list__img">
                            <img :src="`../images/product/common/img-detail-wash.png`" alt="">
                        </div>

                        <ul>
                            <li>
                                <span>7</span>
                                <dl>
                                    <dt>그래뉼 타입 파우더</dt>
                                    <dd>
                                        모공 속<br>
                                        피지제거
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <span>3</span>
                                <dl>
                                    <dt>미분 타입 파우더</dt>
                                    <dd>
                                        피부결 사이<br>
                                        노폐물 제거
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>

                    <div class="product-detail__info-list">
                        <ul>
                            <li>
                                <div class="product-detail__info-list__img"><img :src="`../images/product/powder-wash/img-detail-0.png`" alt=""></div>
                                <div class="product-detail__info-list__txt">
                                    <span>과잉 피지</span>
                                </div>
                            </li>
                            <li>
                                <div class="product-detail__info-list__img"><img :src="`../images/product/powder-wash/img-detail-1.png`" alt=""></div>
                                <div class="product-detail__info-list__txt">
                                    <span>피지 흡착</span>
                                </div>
                            </li>
                            <li>
                                <div class="product-detail__info-list__img"><img :src="`../images/product/powder-wash/img-detail-2.png`" alt=""></div>
                                <div class="product-detail__info-list__txt">
                                    <span>피지 & 노폐물 제거</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    export default {
        name: "comp-product-detail-list"
    }
</script>

<style scoped lang="scss">
    .wrap-wash{
        .inner-wrap-wash{
            .contents-wash{
                .product-detail__bx {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 50px;

                    .product-detail__introduce {
                        dl {
                            dt {
                                font-size: $h2-font-size;
                                line-height: 42px;
                                margin-bottom: 12px;
                                font-weight: 700;

                                span {

                                    color: $color-set-green;
                                }
                            }

                            dd {
                                font-size: $h2-font-size;
                                line-height: 42px;
                                color: $color-set-green;
                                font-family: $font-family-sans-serif_medium;
                            }
                        }
                    }

                    .product-detail__info {
                        width: 850px;

                        .product-detail__info-title {
                            font-size: $font-size-me;
                            line-height: 28px;
                            font-weight: 300;
                            font-family: $font-family-kr;
                        }
                    }
                }

                .product-detail__info-list__bx{
                    display: flex;
                    justify-content: flex-start;
                    .product-detail__info-list__text{
                        width: 270px;
                        margin-right: 60px;
                        .product-detail__info-list__img{
                            width: 232px;
                            height: 232px;
                            overflow: hidden;
                            border: 2px solid $color-set-green;
                            border-radius: 100%;
                            margin-bottom: 30px;
                            margin-left: 14px;
                            -webkit-backface-visibility: hidden;
                            -moz-backface-visibility: hidden;
                            -webkit-transform: translate3d(0, 0, 0);
                            -moz-transform: translate3d(0, 0, 0);


                            img{
                                width: 100%;
                            }
                        }


                        ul{
                            display: flex;
                            justify-content: space-between;
                            li{
                                display: flex;

                                &:first-child{
                                    border-right: 1px solid $color-set-green;
                                    padding-right: 16px;
                                    margin-right: 16px;
                                }

                                span{
                                    display: inline-block;
                                    font-size: $font-size-2xl;
                                    line-height: 36px;
                                    width: 31px;
                                    font-family: $font-family-sans-serif;
                                    color: $color-set-green;
                                }

                                dl{
                                    dt{
                                        font-size: 12px;
                                        line-height: 22px;
                                        font-weight: 700;
                                        color: $color-set-green;
                                        font-family: $font-family-kr;
                                    }

                                    dd{
                                        font-size:11px;
                                        line-height: 15px;
                                        font-weight: 300;
                                        color: black;
                                        font-family: $font-family-kr;
                                    }
                                }
                            }
                        }
                    }

                    .product-detail__info-list{
                        ul{
                            display: flex;
                            //justify-content: flex-end;
                            justify-content: flex-start;

                            li{
                                position: relative;
                                margin-right: 32px;
                                &:last-child{
                                    margin-right: 0;
                                }

                                .product-detail__info-list__img{
                                    margin-bottom: 30px;
                                    overflow: hidden;
                                    border: 2px solid $color-set-green;
                                    border-radius: 100%;
                                    font-size: 0;
                                    -webkit-backface-visibility: hidden;
                                    -moz-backface-visibility: hidden;
                                    -webkit-transform: translate3d(0, 0, 0);
                                    -moz-transform: translate3d(0, 0, 0);

                                    img{ width: 100%; }
                                }

                                .product-detail__info-list__txt{
                                    text-align: center;

                                    span{
                                        font-size: 12px;
                                        line-height: 22px;
                                        color: $color-set-green;
                                        font-weight: 700;
                                        font-family: $font-family-kr;
                                    }
                                }

                                .product-detail__info-list__point{
                                    background-color: #FEC199;
                                    position: absolute;
                                    font-size: $font-size-s;
                                    line-height: 19px;
                                    left: 289px;
                                    top: 122px;
                                    color: $color-set-green;

                                    > span{
                                        position: relative;
                                        top: -5px;
                                        display: inline-block;
                                        width: 47px;
                                        height: 1px;
                                        background-color: $color-set-green;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile {
        .wrap-wash{
            .inner-wrap-wash{
                .contents-wash{
                    .product-detail__bx {
                        flex-direction: column;
                        .product-detail__introduce {
                            dl {
                                dt {
                                    margin-bottom: 8px;
                                    font-size: $font-size-m-lg;
                                    font-weight: 700;
                                    line-height: 27px;
                                    span{
                                        font-size: $font-size-m-lg;
                                        font-weight: 700;
                                        line-height: 27px;

                                    }
                                }

                                dd {
                                    margin-bottom: 24px;
                                    font-size: 22px;
                                    line-height: 27px;
                                    font-family: $font-family-sans-serif_bold;
                                }
                            }
                        }

                        .product-detail__info {
                            width: 100%;

                            .product-detail__info-title {
                                font-size: $font-size-xs;
                                line-height: 24px;
                            }
                        }
                    }

                    .product-detail__info-list__bx{
                        flex-direction: column;
                        .product-detail__info-list__text{
                            width: 100%;
                            margin-right: 0;
                            padding: 45px 45px 0 45px;
                            box-sizing: border-box;

                            .product-detail__info-list__img {
                                width: 200px;
                                height: 200px;
                                margin-right: 0;
                                margin: 0 auto;
                                margin-bottom: 25px;

                                img{ width: 100%;}
                            }

                            ul{
                                display: flex;
                                justify-content: space-between;
                                width: 223px;
                                margin: 0 auto;
                                margin-bottom: 80px;
                                li{
                                    width: 112px;
                                    display: flex;
                                    text-align: center;

                                    &:first-child{
                                        //padding-right: 42px;
                                        box-sizing: border-box;
                                        margin-right: 12px;
                                        padding-right: 0;
                                        padding-bottom: 0;
                                        margin-bottom: 0;
                                        border-bottom: 0;
                                    }

                                    span{
                                        width: 19px;
                                        margin: 0 auto;
                                        font-size: $font-size-m-2xl;
                                        line-height: 41px;
                                        margin-right: 10px;
                                    }

                                    dl{
                                        dt{
                                            text-align: left;
                                            margin-bottom: 8px;
                                            line-height: 19px;
                                            font-size: $font-size-xs;
                                        }

                                        dd {
                                            text-align: left;
                                            font-size: $font-size-xs;
                                        }

                                    }
                                }
                            }
                        }

                        .product-detail__info-list{
                            width: 100%;
                            ul{
                                flex-direction: column;
                                li{
                                    width: 100%;
                                    margin-right: 0;
                                    margin-bottom: 80px;
                                    padding: 0 10px;
                                    box-sizing: border-box;

                                    &:last-child {
                                        margin-bottom: 0;
                                    }

                                    .product-detail__info-list__img{
                                        width: 200px;
                                        margin: 0 auto;
                                        margin-bottom: 17px;
                                    }

                                    .product-detail__info-list__txt{
                                        width: 100%;
                                        span{
                                            font-size: $font-size-s;
                                            line-height: 19px;
                                            font-weight: 600;
                                        }
                                    }

                                    .product-detail__info-list__point{
                                        position: absolute;
                                        font-size: $font-size-s;
                                        line-height: 19px;
                                        left: 289px;
                                        top: 122px;
                                        color: $color-set-green;

                                        > span{
                                            display: inline-block;
                                            width: 47px;
                                            height: 1px;
                                            background-color: $color-set-green;
                                            position: relative;
                                            top: -5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>