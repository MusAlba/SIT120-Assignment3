<template>
    <h3 class="p-2">Latest patient appointments</h3>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.fname}}</td>
        <td>{{ patient.lname}}</td>
        <td>{{ patient.email}}</td>
        <td>{{ patient.date}}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>

export default {
    name: 'Footer',

    data () {
      return {
          patients: [
            {
                fname: 'Zamzam',
                lname: 'Mohammed',
                email: 'zamzammohammed@gmail.com',
                date: '2/10/2021, 9:00am'
            },
            {
                fname: 'Abdul',
                lname: 'Muhsin',
                email: 'abdulmuhsin@gmail.com',
                date: '2/10/2021, 9:30am'
            },
            {
                fname: 'Hussein',
                lname: 'Ali',
                email: 'husseinali@gmail.com',
                date: '2/10/2021, 10:30am'
            },
        ],
      }
        
    },
}


</script>

<style scoped>
  
</style>