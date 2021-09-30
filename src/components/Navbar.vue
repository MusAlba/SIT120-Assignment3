<template>
   <nav class="navbar navbar-expand-md bg-green navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">{{title}}</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        title: {
            type: String,
            default:'HealthyMe'
        }
  },
}
</script>

<style scoped>
    .site-branding{
        width: 500px;
    }
    .bg-green{
        background-color: #1D951B;
    }
</style>