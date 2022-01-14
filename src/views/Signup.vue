<template>


   <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  
      

</div>
  
</template>

<script>
export default {};
</script>


<style>


.form-signin {
    border-radius: 5%;
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: rgb(0, 42, 182);
  border: 1px solid rgba(238, 225, 225, 0.1);  

	}
    .form-signin-heading
    {
        color: white;
    }

	input[type="text"] {
	  margin-bottom: 5px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
    
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}


</style>