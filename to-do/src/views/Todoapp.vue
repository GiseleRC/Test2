<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img src="@/assets/logo.png" id="icon" alt="User Icon" />
        </div>

        <!-- Login Form -->
        <form v-on:sumit.prevent="login">
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="User" v-model="User">
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="Password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Passowrd -->
        <div class="alert alert-danger" role="alert" v-if="error">
          {{error_msg}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    
  },
  data: function(){
    return{
      user: "",
      password: "",
      error: false, 
      error_msg: ""
    }
  },
  methods:{
    login(){
      let json = {
        "user": this.user,
        "password": this.password
      };
      axios.post('https://solodata.es/auth', json)/* ver esta direccion*/
      .then( data =>{
        if(data.data.status == 'ok'){
          console.log("is ok")

        }else{
          this.error = true;
          this.error_msg = data.data.result.error_msg;/* ver error al cambiar la contraseña en el console.log*/
        }
      })
    }
  },
}
</script>

<style scoped>