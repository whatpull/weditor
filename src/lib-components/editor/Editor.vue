<template>
    <div
        class="Weditor__Editor" 
        contenteditable="true">
    </div>
</template>

<script>
    import {CONTEXT_MENU_OPEN} from '../store/store_type';
    import { actions } from '../store/store';

    export default {
        methods: {
            onDblclick(event) {
                event.preventDefault();
                console.log(event);
                return false;
            },
            
            onContextmenu(event) {
                event.preventDefault();
                const rect = event.target.getBoundingClientRect();
                const x = event.layerX; //x position within the element.
                const y = event.layerY;  //y position within the element.
                if(window.getSelection().type === "Range") { // 영역을 잡았을 경우
                    actions[CONTEXT_MENU_OPEN]({
                        show: true,
                        x: x,
                        y: y
                    });
                } else {
                    actions[CONTEXT_MENU_OPEN]({
                        show: false,
                        x: x,
                        y: y
                    });
                }
                return false;
            }
        },

        mounted() {
            this.$el.addEventListener('dblclick', this.onDblclick);
            this.$el.addEventListener('contextmenu', this.onContextmenu);
        },

        beforeDestroy() {
            this.$el.removeEventListener('dblclick', this.onDblclick);
            this.$el.removeEventListener('contextmenu', this.onContextmenu);
        }
    }
</script>

<style scoped>
    .Weditor__Editor {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        padding: 10px;
        outline: none;
        background-color: #fafafa;
    }

    .Weditor__Editor:focus {
        cursor: text;
    }
</style>