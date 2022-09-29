import { Routes, Route, Link } from "react-router-dom";

import {Home} from "../Home/Home.js"
import{Historias} from "../Historia/Historia.js"
import{Integrantes} from "../Integrantes/Integrantes.js"
import{Albumes} from "../Albumes/Albumes.js"
import { Menu } from "../Menu/Menu.js"

export function Rutas() {
    return (
      <div>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historias />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="albumes" element={<Albumes/>} />
        </Routes>
      </div>
    );
  }