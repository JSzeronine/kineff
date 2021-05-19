<template>
    <li>
        <div class="health-img__container">
            <slot name="img"></slot>
        </div>

        <dl>
            <dt><slot name="img-name"></slot></dt>
            <dd><slot name="img-description"></slot></dd>
        </dl>
    </li>

</template>

<script>
    export default {
        name: "item-health-list"
    }
</script>

<style scoped lang="scss">
    li{
        .health-img__container{
            width: 460px;
            height: 600px;
            overflow: hidden;
            font-size: 0;
            img{ width: 100%;}
        }

        > dl{
            margin-top: 26px;
            dt{
                margin-bottom: 6px;
                font-size: $font-size-s;
                font-weight: 700;
                line-height: 19px;
                color: $color-set-green;
                font-family: $font-family-kr;
            }

            dd{
                font-size: $font-size-s;
                line-height: 19px;
                font-weight: 300;
                font-family: $font-family-kr;
            }
        }
    }

    .mobile{
        li{
            .health-img__container{
                width: 245px;
                height: 320px;
                margin: 0 auto;

                img{ width: 100%; transform: scale(1)

                }
            }

            > dl{
                width: 245px;
                margin: 26px auto 0;
            }
        }
    }

</style>