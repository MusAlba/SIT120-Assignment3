<template>
    <Navbar />
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Header',
    components : {
        Navbar,
    },
    props: {
        title: {
            type: String,
            default:'HealthyMe'
        }
  },
}
</script>

<style scoped>
   header {
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 20px;
   }
</style>