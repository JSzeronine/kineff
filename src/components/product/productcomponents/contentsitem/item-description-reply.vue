<template>
    <li>
        <dl>
            <dt><slot name="reply-content"></slot></dt>
            <dd><slot name="reply-jab"></slot></dd>
            <dd><slot name="reply-user"></slot></dd>
        </dl>
    </li>

</template>

<script>
    export default {
        name: "item-description-reply"
    }
</script>

<style scoped lang="scss">
    li{
        dl{
            font-family: $font-family-kr;
            dt{
                padding-bottom: 38px;
                border-bottom: 1px solid rgba( 0, 0, 0, 0.5 );
                margin-bottom: 21px;
                font-size: $font-size-lg;
                font-weight: 400;
                line-height: 30px;
            }
            dd{
                font-size: $font-size-s;
                line-height: 25px;
                font-weight: 400;
            }
        }
    }

    .mobile{
        li{
            dl{
                dt{
                    padding-bottom: 12px;
                    margin-bottom: 16px;
                    line-height: 24px;
                    font-weight: 400;
                    font-size: $font-size-xs;
                }
                dd{
                    font-size: $font-size-xs;
                    font-weight: 700;
                    line-height: 20px;

                    &:last-child{
                        margin-bottom: 36px;
                    }
                }
            }
        }
    }

</style>