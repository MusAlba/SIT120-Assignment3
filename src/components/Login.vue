<template>
    <div class="login-container">
        <img :class="loginLogo" src="../assets/logo.png">
        <h3 :style="loginTitle" class=" pt-2">{{title}}</h3>
        <form>
            <div class="form-group pt-2 pb-2">
                <select class="form-control" v-model="username" id="usertype" required>
                     <option>Select user..</option>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Administrator">Administrator</option>
                </select>
            </div>
            <div class="form-group py-2">
                <input type="email" class="form-control " v-model="email" id="email" placeholder="Email" required/>
            </div>
            <div class="form-group py-2">
                <input type="password" class="form-control " v-model="password" id="password" placeholder="Password" required/>
            </div>
            
            <button type="submit" class="btn btn-embers btn-block"  @click.stop.prevent="submit()">LOGIN <i class="fas fa-user"></i></button>
        
        </form>

    </div> 
</template>

<script>

export default {
    name: 'Login',
    props: {
        title: {
            type: String,
            default:'Login'
        },
    },
    data () {
        return {   
            loginTitle: {
                color:'#1D951B',
                textAlign: 'center'
            },
            loginLogo: {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '80%',
            },
        }
    },
    methods: {
            submit(){
            this.$router.push('/dashboard');
      }
    }
}
</script> 

<style scoped>
.login-container{
    width:70vh;
    padding:5%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -40%;
    transform: translate(-50%, -50%); 
    box-shadow:2px 5px 10px gray;
    border-radius:20px 20px 20px 20px;
}

</style>