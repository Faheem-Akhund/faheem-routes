<template>
  <h1>All Students</h1>
  <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'JobDetails',params: { id: job.id}}">

      <p>{{job.id}}: Title : {{job.title}} Desgination {{job.details}}</p> 
      
        </router-link>
          <!-- <p>{{job.id}}: Title : {{job.title}} Desgination {{job.details}}</p>  -->
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
 mounted(){
     fetch('http://localhost:8000/api/data')
     .then(res => res.json())
     .then( data => this.jobs=data)
     .catch( err => console.log(err.message))
 }
}
</script>

<style>

</style>