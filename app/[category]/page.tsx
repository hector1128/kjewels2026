import NavBar from "../components/navBar"
import Footer from "../components/footer"

type Props = {
    params: string;
}

export default function CategoryPage({ params }: Props) {
    return(
        <main>
            <NavBar />

            <div className="grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            print
       
            <Footer />
        </main>
        
    )
}