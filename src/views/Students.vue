<template>
  <h1>All Students</h1>
  <table style="width:100%">
      <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>age</th>
                    <th>department</th>
                </tr>
            </thead>
             <tbody>
  <!-- <tr v-for="student in Students" :key="student.id"> -->
  <tr v-for="(student) in Students.slice(range,range+5)" :key="student.id">
      
        <!-- <router-link :to="{name: 'JobDetails',params: { id: job.id}}"> -->

      <td> {{student.id}}</td>
      <td> {{student.name}}</td>
      <td> {{student.email}}</td>
      <td> {{student.age}}</td>
      <td> {{student.department}}</td>
          
        
      
        <!-- </router-link> -->
  </tr>
   </tbody>

  </table>
   <button v-on:click="ranges(-5)">Back</button>
    <button v-on:click="ranges(5)">Next</button>
   <p>{{Students.length}}</p>
    <p>{{range}}</p>
   
</template>

<script>
import axios from "axios"

export default {
 data()
 {
     return{

         Students:[],
         range: 0,
         
           
     }
 },
 methods: {
     ranges(id)
     {
         if(id<0)
         {
             if(!this.range==0)
             {
                 this.range=this.range+id
             }
            
         }

         if(id>0)
         {
            
             if(this.range<this.Students.length-5)
             {
                  this.range=this.range+id
             }
         }
        
         
        
     }
 },

async created() {
    
          const response =await axios.get('http://localhost:8000/api/fetch',
          { 
            headers: {
                    
                             Authorization:'Bearer' + localStorage.getItem('token')
                 
                 }

          })
          .then((response) => {
            //  console.log(response);
             if(response.status===200)
            {
                 this.Students=response.data
                 console.log(response.data)

            }
              return response;
            })
            .catch((error) => {
             
             console.log(error.response.status);
             
            
            }) 
          ;
    


       
      
          
          
        
   
          
}
}
</script>

<style>
table, th, td,tr {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>