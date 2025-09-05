import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import AboutMe from "@/features/home/AboutMe";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function AppRouter() {
    const accent = "#F43F5E";

    return(
        <BrowserRouter>
            <main className="main-h-screen text-neutral-200">
                <Header accent={accent}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer accent={accent}/>
            </main>
        </BrowserRouter>
    );
}