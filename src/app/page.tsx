'use client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/User";
import { useState } from "react";

const Home = ()  => {
    const [nameUser, setNameUser] = useState("Carmona");

    return (
        <div>
            <Menu /><br />

            <User name={nameUser}>
                <p>Conteúdo extra com children.</p>
            </User><br />

            <button onClick={() => setNameUser("Carla")}>Alterar</button><br />

            <h2>Bem-vindo Andre</h2><br />
            <Footer />
        </div>
    );
}

export default Home;