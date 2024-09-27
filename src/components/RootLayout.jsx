import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import MainHeader from "./Header/MainHeader"
import Statistics from "./Statistics/Statistics"
import Subscribe from "./Subscribe/Subscribe"

const RootLayout = () => {

    return (
        <>
            <MainHeader />
            <Outlet />
            <Statistics />
            <Subscribe />
            <Footer />

        </>
    )
}

export default RootLayout
