<template>
    <div>
        <h1>我是苹果</h1>
    </div>
</template>

<script>
    export default {
        props: {
            'my-value': ''
        },
        data() {
            return {
                hello: " i am A"
            }
        },
        methods: {
            emitMyEvent() {
                this.$emit("my-event", this.hello)
            }
        }
    }
</script>