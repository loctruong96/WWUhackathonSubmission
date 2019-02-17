<template>
    <AppLayout></AppLayout>
    <!--<Hello></Hello>-->
</template>

<script>
    import AppLayout from "./components/AppLayout";
    import Hello from "./components/Hello";
    export default {
        name: 'app',
        components: {Hello, AppLayout}
    }
</script>

<style>
</style>
