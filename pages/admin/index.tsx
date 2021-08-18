import React from 'react'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SideNav from '../../components/Admin/SideNav'
import Container from '../../components/Admin/Container'

const Admin = (): JSX.Element => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('Users')

  return (
    <Layout title="Register | RSVP SLIIT">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover flex flex-col justify-around h-95vh"
      >
        <SideNav
          onMenuItemSelect={setSelectedMenuOption}
          selectedMenuOption={selectedMenuOption}
        />
        <Container>Haylow</Container>
      </section>
    </Layout>
  )
}

export default Admin
