<template>
    <Topnav/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 p-2">
                <Sidenav/>
            </div>
            <div class="col-md-9 p-2">
                <div class="tab-content">
                    <div class="tab-pane container active" id="home">
                        <Home/>
                    </div>
                    <div class="tab-pane container fade" id="appointments">
                        <Appointments/>
                    </div>
                    <div class="tab-pane container fade" id="patients">
                        <Patients />
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Footer/>
    
    
</template>

<script>

import Topnav from '../components/Topnav'
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Patients from '../components/Patients'
import Appointments from '../components/Appointments'
export default {
    name: 'Dashboard',
    components : {
        Topnav,
        Sidenav,
        Footer,
        Home,
        Patients,
        Appointments
    },
}
</script>

<style scoped>

</style>
