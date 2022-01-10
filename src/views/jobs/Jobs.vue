<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'JobDetails',params: { id: job.id}}">

      <p>{{job.title}}</p>
        </router-link>
  </div>
</template>

<script>
export default {
 data()
 {
     return{

         jobs:[
          
         ]

     }
 },
 mount(){
     fetch('http://localhost:8000/api/data')
     .then(res => res.json())
     .then( data => this.jobs=data)
     .catch( err => console.log(err.message))
 }
}
</script>

<style>

</style>