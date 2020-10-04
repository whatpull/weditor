<template>
    <div 
        v-show="context.show" 
        class="Weditor__Menu"
        :style="`top: ${context.y}px; left: ${context.x}px`">
        <div>{{context.show}}</div>
    </div>
</template>

<script>
    import { getters } from '../store/store';

    export default {
        computed: {
            context() {
                return getters.context();
            }
        }
    }
</script>

<style scoped>
    .Weditor__Menu {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: #e2e2e2;
        z-index: 1;
        cursor: default;
    }
</style>