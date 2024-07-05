import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { TechNav } from "../../components/TechNav/TechNav"

const MainLayout = () => {
    return (
        <>
            <header className="dark:bg-darkgray">
                <Navbar/>
                <TechNav/>
            </header>
            <main className="">
                <Outlet/>
            </main>
            <footer className="text-center container">
                <h4>FOOTER</h4>
            </footer>
        </>
    )
}

export default MainLayout