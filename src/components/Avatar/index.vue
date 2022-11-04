<template>
    <img class="avatar-container" :src="url" :style="{
        width:size+'px',
        height:size+'px'
    }">
</template>

<script>
export default {
props:{
    url:{
        type:String, 
    },
    size:{
        type:Number,
        default:100
    } 
}}
</script>

<style scoped>
img{
    object-fit: cover;
    border-radius: 50%;
    display: block;
}
</style>