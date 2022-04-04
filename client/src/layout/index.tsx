import { Header } from "../views/header"
import { Footer } from "../views/footer"

const Layout = (props: any) => {
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