<template>
    <p>{{greeting}} World</p>
</template>

<script>
module.exports = {
    data() {
        return {
            greeting: "Hello"
        }
    },
}
</script>
<style scope>
p {
    font-size: 2em;
    text-align: center;
}
</style>

