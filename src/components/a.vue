<template>
    <div>
    
        {{hello}}
        {{myValue}}
    
        <button @click="emitMyEvent">点一下</button>
       <slot> no </slot>
    
    </div>
</template>

<script>
    export default {
        props:{'my-value':''},
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