<template>
   <div class="bg-green">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item p-3">
          <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" data-toggle="pill" href="#appointments">Appointments</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" data-toggle="pill" href="#patients">Patients</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" data-toggle="pill" href="#labs">Labs</a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link" data-toggle="pill" href="#schedule">Schedule</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidenav',
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