<template>
  <h1>Hob details page</h1>
  <p>job id is {{ id }}</p>
</template>

<script>
export default {
    data()
    {
        return{
            id: this.$route.params.id
        }
    }

}
</script>

<style>

</style>