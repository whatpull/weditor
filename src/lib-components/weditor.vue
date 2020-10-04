<template>
    <div class="Weditor" :style="{'height': height}">
        <div class="Weditor__Head">

        </div>
        <div class="Weditor__Body">
            <editor />
            <context-menu />
        </div>
        <div class="Weditor__Foot">
            {{footer}}
        </div>
    </div>
</template>

<script>
    import Editor from './editor/Editor.vue';
    import ContextMenu from './tools/ContextMenu.vue';

    export default {
        name: 'Weditor',

        components: {
            Editor,
            ContextMenu
        },

        props: {
            height: {
                type: String,
                default: '400px'
            },
            footer: {
                type: String,
                default: 'weditor.'
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    .Weditor {
        outline: none;
        border: 1px solid #000000;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
    }

    .Weditor__Head {
        flex: 0 0 30px;
        padding: 0 10px;
        display: flex;
        align-items: center;
    }

    .Weditor__Body {
        flex: 1;
        position:relative;
    }

    .Weditor__Foot {
        flex: 0 0 30px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 12px;
    }
</style>