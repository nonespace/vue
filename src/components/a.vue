<template>
    <div>
    
        {{hello}}
    
        <button @click="emitMyEvent">点一下</button>
    
    </div>
</template>

<script>
    export default {
    
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