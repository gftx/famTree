import { Header } from "../components/header"
import { Footer } from "../components/footer"

const Layout = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export { Layout }