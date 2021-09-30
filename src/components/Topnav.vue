<template>
    <div class="row bg-embers">
        <div class="container">   
            <ul class="nav d-flex justify-content-between">
                <li class="nav-item">
                    <a class="nav-link" >Hi, Doctor {{user}}</a>
                </li>
                <li class="nav-item">
                    <a @click="Logout()" class="nav-link" href="#">Logout</a>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topnav',
    props: {
        user: {
            type: String,
            default:'Mustafa Saleh'
        }
  },
   methods: {
            Logout(){
            this.$router.push('/');
      }
    }
}
</script>

<style scoped>
    .site-branding{
        width: 500px;
    }
    .bg-embers{
        background-color:#B82601;
    }
</style>
