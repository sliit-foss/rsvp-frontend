import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/Admin/SideNav'
import AdminUsers from '../../modules/Admin/AdminUsers'
import AdminEvents from '../../modules/Admin/AdminEvents'
import AdminAccount from '../../modules/Admin/AdminAccount'
import BottomBar from '../../components/Admin/BottomBar'
import AdminAttendees from '../../modules/Admin/AdminAttendees'
import AdminAddEvent from '../../modules/Admin/AdminAddEvent'

const Admin = (): JSX.Element => {
  let userRole = ''
  if (process.browser) {
    userRole = window.localStorage.getItem('Role') || ''
  }
  const [selectedMenuOption, setSelectedMenuOption] = useState('Users')
  const [selectedEventId, setSelectedEventId] = useState('')

  useEffect(() => {
    if (userRole != 'Admin') {
      setSelectedMenuOption('Events')
    }
  }, [userRole])

  return (
    <Layout title="Management | RSVP SLIIT">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover grid grid-rows-1 grid-cols-1 md:grid-cols-8 gap-4 min-h-90vh"
      >
        <SideNav
          onMenuItemSelect={setSelectedMenuOption}
          selectedMenuOption={selectedMenuOption}
        />
        {selectedMenuOption != '' ? (
          <section className="md:col-span-6 py-10 px-4 sm:px-6 mb-10 md:mb-0">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              {selectedMenuOption === 'Users' ? (
                <AdminUsers />
              ) : selectedMenuOption === 'Events' ? (
                <AdminEvents
                  setSelectedModule={setSelectedMenuOption}
                  setSelectedEventId={setSelectedEventId}
                />
              ) : selectedMenuOption === 'Account' ? (
                <AdminAccount />
              ) : selectedMenuOption === 'Attendees' ? (
                <AdminAttendees selectedEventId={selectedEventId} />
              ) : (
                <AdminAddEvent />
              )}
            </div>
          </section>
        ) : (
          <div></div>
        )}
        <BottomBar
          onMenuItemSelect={setSelectedMenuOption}
          selectedMenuOption={selectedMenuOption}
        />
      </section>
    </Layout>
  )
}

export default Admin
