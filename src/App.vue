 <template>
    <router-view/>
    <Footer/>
</template>

<script> 
export default {
  name: 'App',
  
}
</script>

<style>
     
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

  body {
    
    font-family: 'Comfortaa', cursive;
  }
  
  .bg-green{
        background-color: #1D951B;
  }
  
  .bg-white{
        background-color: #ffffff;
  }
  .btn {
    display: inline-block;
    background: #B82601;
    color: #FFFFFF;
    border: none;
    padding: 10px 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit ;  
  }
  .title{
    text-align:center;
    color: #1D951B;
    padding: 5px;
}
.motto{
    text-align:center;
    color:#B82601;
}
.footer{
    color: #1D951B;
}
.footer a{
    color: #B82601;
}
.text-embers{
    color:#B82601;
}
.text-green{
    color: #1D951B;
}
.text-white{
    color:#ffffff;
}
.text-center{
    text-align:center;
}
.text-black{
    color:#000000;
}
.text-center{
    text-align: center;
}

.bg-embers{
    background-color: #B82601;
}

.nav-link{
    color:#ffffff !important;
}

.btn-embers {
    background-image: linear-gradient(to right, #B82601 0%, #b31217  51%, #B82601 100%);
    color:white !important;
}
</style>
  