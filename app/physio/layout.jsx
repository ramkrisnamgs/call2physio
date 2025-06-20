import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {
     return (
          <div className="flex flex-col min-h-screen">
               <Header />
               <h1>Physio Page</h1>
               <main className="flex-grow">{children}</main>
               <Footer />
          </div>
     )
}
