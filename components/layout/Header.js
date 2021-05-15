import React from "react";
import Buscador from "../ui/Buscador";
import Link from "next/link";
import Navegacion from "./Navegacion";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscador />
          <Navegacion />
        </div>
        <div>
          <p>Hola: Nelson</p>
          <button type="button">Cerrar Sesion</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear Cuenta</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
