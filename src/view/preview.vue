<template>
    <div class="wrapper" @click="fuck">
        这是预览界面,还未实现
    </div>
</template>

<script>
import bus from "@/utils/bus"
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            previewHtml: 'xoxo'
        }
    },
    computed: {

    },
    methods: {
        fuck() {
            bus.$on("message", (data) => {
                console.log(data);
                console.log(this.previewHtml);
            })
            
        }
    },
    watch: {

    },
    mounted() {
        bus.$on("message", (data) => {
                console.log(data);
                // console.log(this.previewHtml);
            })
    }
}
</script>

<style scoped>
</style>