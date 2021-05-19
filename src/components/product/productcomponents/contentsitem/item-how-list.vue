<template>
    <div class="use-explain__item">
        <span>
            <slot name="num"></slot>
        </span>
        <p>
            <slot name="content"></slot>
        </p>
    </div>

</template>

<script>
    export default {
        name: "item-how-list"
    }
</script>

<style scoped lang="scss">
    .use-explain__item{
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding-left: 46px;
        padding-right: 28px;
        align-content: flex-start;

        span {
            display: block;
            margin-right: 27px;
            line-height: 36px;
            font-size: $font-size-2xl;
            font-family: $font-family-sans-serif_medium;
        }

        p {
            line-height: 24px;
            font-size: $font-size-s;
            font-weight: 400;
        }

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            content: '';
            display: block;
            width: 1px;
            height: 68px;
            background-color: #D8D8D8;
        }

        &:last-child{
            &::after{
                display: none;
            }
        }

        //&:nth-child( 3 ){
        //    &::after{
        //        display: none;
        //    }
        //}
    }

    .mobile{
        .use-explain__item{
            position: static;
            width: 100%;
            padding: 28px 0 19px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            box-sizing: border-box;
            span {
                margin-right: 18px;
                line-height: 30px;
                font-size: 25px;
            }

            p {
                line-height: 24px;
                font-size: $font-size-xs;
                font-weight: 400;
            }

            &:first-child {
                border-top: 1px solid rgba(0,0,0,.2);
            }
        }

        /*.use-explain_03 {*/
        /*    margin-right: 0;*/
        /*    border-bottom: 1px solid rgba(0,0,0,.2);*/
        /*}*/

    }

    .ie{
        .use-explain__item{
            span {
            }

            p {
                font-size: 13px;
            }

            &::after {
            }

            &:last-child{
                &::after{
                }
            }
        }
    }

    .windows{
        .use-explain__item{
            span {
            }

            p {
                font-size: 13px;
            }

            &::after {
            }

            &:last-child{
                &::after{
                }
            }
        }
    }
</style>