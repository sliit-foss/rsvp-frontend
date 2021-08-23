import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Navbar from '../../components/Layout/Navbar'
import SideNav from '../../components/Admin/Layout/SideNav'
import AdminUsers from '../../modules/Admin/AdminUsers'
import AdminEvents from '../../modules/Admin/Events/AdminEvents'
import AdminAccount from '../../modules/Admin/AdminAccount'
import BottomBar from '../../components/Admin/Layout/BottomBar'
import AdminAttendees from '../../modules/Admin/AdminAttendees'
import AdminAddEvent from '../../modules/Admin/Events/AdminEventManager'

const Admin = (): JSX.Element => {
  let userRole = ''
  let selectedMenuOptionCache = ''
  let selectedEventIdCache = ''
  if (process.browser) {
    userRole = window.localStorage.getItem('Role') || ''
    selectedMenuOptionCache =
      window.localStorage.getItem('MenuOptionCache') || ''
    selectedEventIdCache =
      window.localStorage.getItem('SelectedEventIdCache') || ''
  }
  const [selectedMenuOption, setSelectedMenuOption] = useState('Users')
  const [selectedEventId, setSelectedEventId] = useState('')

  useEffect(() => {
    if (userRole != 'Admin') {
      setSelectedMenuOption('Events')
    }
  }, [userRole])

  useEffect(() => {
    if (selectedMenuOptionCache != '') {
      setSelectedMenuOption(selectedMenuOptionCache)
    }
  }, [selectedMenuOptionCache])

  useEffect(() => {
    if (selectedEventIdCache != '' && selectedEventIdCache != null) {
      setSelectedEventId(selectedEventIdCache)
    }
  }, [selectedEventIdCache])

  const updateSelectedMenuOption = (option: string) => {
    setSelectedMenuOption(option)
    if (process.browser) {
      window.localStorage.setItem('MenuOptionCache', option)
    }
    if (option == 'Events') {
      updateSelectedEventId(null)
    }
  }

  const updateSelectedEventId = (id: any) => {
    setSelectedEventId(id)
    if (process.browser) {
      window.localStorage.setItem('SelectedEventIdCache', id)
    }
  }

  return (
    <Layout title="Management | RSVP SLIIT">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover grid grid-rows-1 grid-cols-1 md:grid-cols-8 gap-4 min-h-90vh"
      >
        <SideNav
          onMenuItemSelect={updateSelectedMenuOption}
          selectedMenuOption={selectedMenuOption}
        />
        {selectedMenuOption != '' ? (
          <section className="md:col-span-6 py-10 px-4 sm:px-6 mb-10 md:mb-0">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              {selectedMenuOption === 'Users' ? (
                <AdminUsers />
              ) : selectedMenuOption === 'Events' ? (
                <AdminEvents
                  setSelectedModule={updateSelectedMenuOption}
                  setSelectedEventId={updateSelectedEventId}
                />
              ) : selectedMenuOption === 'Account' ? (
                <AdminAccount />
              ) : selectedMenuOption === 'Attendees' ? (
                <AdminAttendees selectedEventId={selectedEventId} />
              ) : (
                <AdminAddEvent
                  setSelectedModule={updateSelectedMenuOption}
                  selectedEventId={selectedEventId}
                />
              )}
            </div>
          </section>
        ) : (
          <div></div>
        )}
        <BottomBar
          onMenuItemSelect={updateSelectedMenuOption}
          selectedMenuOption={selectedMenuOption}
        />
      </section>
    </Layout>
  )
}

export default Admin
