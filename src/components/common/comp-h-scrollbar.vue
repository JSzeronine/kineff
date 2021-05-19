<template>
    <span class="h-scrollbar">
        <span class="h-scrollbar_thumb" style=""></span>
    </span>
</template>

<script>
    export default {
        name: "comp-h-scrollbar"
    }
</script>

<style scoped lang="scss">

    .h-scrollbar {
        position: fixed;
        bottom: 0;
        width: calc(100vw - 13px);
        height: 12px;
        transform-origin: center right;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 1;
        background-color: rgba(255,255,255,0.8);
        border-left: solid 1px #eeeeee;
        z-index: 9999;
    }

    .h-scrollbar_thumb {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #929292;
        width: 100px;
        height: 12px;
        transition: background-color 0.2s;
        //border-radius: 10px;
        //margin: 2px;
        cursor: -webkit-grab;
        cursor: grab;
    }

</style>