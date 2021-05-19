<template>
    <li>
        <slot name="description-list_img"></slot>
        <dl>
            <dt><slot name="description-list_title"></slot></dt>
            <dd><slot name="description-list_sub"></slot></dd>
        </dl>
    </li>
</template>

<script>
    export default {
        name: "comp-product-description-list"
    }
</script>

<style scoped lang="scss">
    li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        img{
            width: 58px;
            display: inline-block;
            margin-right: 17px;
            flex-shrink: 0;
        }

        dl{
            padding-left: 75px;
            position: absolute;
            margin-top: 2px;
            left: 0px;
            top: 0px;
            dt{
                font-size: $font-size-lg;
                font-weight: 600;
                font-family: $font-family-kr;
                line-height: 1.2;
            }
            dd{
                font-size: $font-size-s;
                font-weight: 400;
                margin-top: 6px;
            }
        }
    }

    .mobile{
        li{
            img{
                width: 48px;
                margin-right: 16px;
            }

            dl{
                position: relative;
                //padding-left: 64px;
                margin-top: 0px;
                padding-left: 0;
                dt{
                    margin-bottom: 4px;
                    font-size: $font-size-m-me;
                    line-height: 20px;
                }
                dd{
                    font-size: $font-size-xs;
                    line-height: 18px;
                }
            }
        }

    }
</style>