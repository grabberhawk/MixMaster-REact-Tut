import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPAgeLoading = navigation.state === 'loading'
  return (
    <section>
      {/* <nav>navbar</nav> */}
      <Navbar />
      {/* the content will be followed by all the children */}
      <section className="page">
        {isPAgeLoading ? (
          <div
            className="loading"
            style={{ margin: 'auto', marginTop: '200px' }}
          />
        ) : (
          <Outlet />
        )}
      </section>
    </section>
  )
}
export default HomeLayout
