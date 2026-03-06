import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.scss"
import { Footer, Header } from "../widgets"

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}