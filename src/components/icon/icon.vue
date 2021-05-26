<template>
    <i :class="'cain-icon-'+type"></i>
</template>

<script>
export default {
    name:"CIcon",
    props:{
        type:String
    }
}
</script>