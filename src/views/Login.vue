<template>

 
  <div id="log">


    <form @submit.prevent="checkForm">
      <p v-if="errors.length">
      
      
      <p v-for="error in errors">{{ error }}</p>
    
      </p>
      <input v-model="email" placeholder="email"><br>
      <input v-model="password" placeholder="password" type="password"><br>
      <input type="submit" value="login">
    </form>

    
    
   
    <!-- <p>{{msg}}</p> -->


  </div>


</template>


<script>
import axios from "axios"
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'
  // Vue.use(VueSession)


export default {
  
  name: "log",
  props:['items'],
  data() {
    return {
      errors:[],
      email:"",
      password:"",
      logindata:[],
      msg:"",
      emailrq: "",
      passwordrq: "",
      check:"faheem"

    };
     
  },

  methods: {
    checkForm:function(e) {
      
        
      
        this.errors = [];
      
      
      
      
      if(!this.email)
      {
       this.errors.push("email required.");
      }
      if(!this.password) 
      
      {
        this.errors.push("password required.");
      }
      else if (!this.validEmail(this.email)) {
        this.errors.push('Please Provide Valid Email address');
      }
      else if (!this.validName(this.password)) {
        this.errors.push('Use 4 characters or more for your password');
      }
        else
        {this.login()
        }
      e.preventDefault();
      
      // console.log(this.errors[0])
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validName: function (password) {
      var re = /^[A-Za-z]{4,}$/;
      return re.test(password);
    },
    async login() {
      
    
          const response =await axios.post('http://localhost:8000/api/login',
          {
            email: this.email,
            password: this.password,
            
            

            
          })
          .then((response) => {
          
             if(response.status)
            {
             
             
              localStorage.setItem('token',response.data.token);
            
              //  this.$router.push({
              //      Name: 'Home',
              //     params: { Name:response.data.token}});
              this.$router.push({name: 'Home', params: { foo: "bar"}});         
            }

              this.msg=  response.message;
            })
            .catch((error) => {
               console.log(error.response);
              // this.msg= error.response.data.message; 
              this.errors.push(error.response.data.message);
              //  this.emailrq= error.response.data.errors.email; 
              // // this.msg= error.response.data.message; 
              //  this.passwordrq= error.response.data.errors.password; 

            })
          
          ;
     
    
    
    },
    
   
   
    
    
    
  }
};
</script>