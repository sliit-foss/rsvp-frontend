import { useState } from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/Admin/SideNav'
import Container from '../../components/Admin/Container'
import AdminUsers from '../../modules/Admin/AdminUsers'
import AdminEvents from '../../modules/Admin/AdminEvents'
import AdminAccount from '../../modules/Admin/AdminAccount'

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
        <Container>
          {selectedMenuOption === 'Users' ? (
            <AdminUsers />
          ) : selectedMenuOption === 'Events' ? (
            <AdminEvents />
          ) : (
            <AdminAccount />
          )}
        </Container>
      </section>
    </Layout>
  )
}

export default Admin
