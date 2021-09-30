<template>
    <div class="row">
        <div class="col-md-4" v-for="patient in patients" :key="patient.id">
            <img class="rounded-circle" :src=" patient.photo"> 
            <p > {{ patient.name}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Patients',
    data () {
        return { 
            patients: [
                {
                    name: 'Zamzam Mohammed',
                    photo: 'img/zamzam.55aa8509.jpg',
                },
                {
                    name: 'Abdul Muhsin',
                    photo: 'img/abdul.cd495d82.jpg',
                },
                {
                    name: 'Hussein Ali',
                    photo: '/img/hussein.ed4c1969.jpg',
                },  
            ],
        }
    }
}
</script>

<style scoped>
   .rounded-circle{
       width:200px;
   }
   .text-center{
       text-align: center;
   }
</style>