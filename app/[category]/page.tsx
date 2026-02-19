import NavBar from "../components/navBar"
import Footer from "../components/footer"
import CatBox from "../components/catBox"

type Props = {
    params: string;
}

export default function CategoryPage({ params }: Props) {
    return(
        <main className="min-h-screen">
        <div className="m-8">
        <NavBar />
        <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
                <CatBox></CatBox>
            
            </div>

        
            </div>
       
            <Footer />
            
        
        </main>
        
    )
}