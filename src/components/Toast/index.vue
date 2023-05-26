<template>
    <div class="toast-box">
        <p class="toast-value" :style="{ background: background, color: color }">

        </p>

    </div>
</template>
    
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    // 定义组件：toast的4个属性
    // 背景色background
    // 字体颜色color
    // 文本value
    // 停留时间duration
    name: 'Toast',
    props: {
        // 组件四大基本属性：
        value: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 3000
        },
        background: {
            type: String,
            default: '#000'
        },
        color: {
            type: String,
            default: '#fff'
        }
    },
    setup() {
        // todo
        return {}
    }
})
</script>

<style  scoped>
.toast-box {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>