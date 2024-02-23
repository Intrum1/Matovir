import { Suspense } from "react"
import { Outlet } from "react-router"
import Header from "components/Header"
import Footer from "components/Footer"

const SharedLayout = () => {
  return <>
  <Header/>
  <main>
    <Suspense fallback='Loading'>
        <Outlet/>
    </Suspense>
  </main>
  <Footer/>
  </>
}

export default SharedLayout