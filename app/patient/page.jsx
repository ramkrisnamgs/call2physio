import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhysioDashboard from './dashboard/page'
import PatientDashboard from './dashboard/page'

const page = () => {
  return (
    <div>
     {/* <Header /> */}
     {/* <h1>Physio Dashboard</h1> */}
     <PatientDashboard />
     
     {/* <Footer /> */}
    </div>
  )
}

export default page