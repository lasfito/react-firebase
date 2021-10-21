import React from "react";
//Importamos la aplicación/credenciales
import firebaseApp from "./firebase/credenciales";

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

/* import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); */

function App() {
  return (
    <div>
      <p style={{ color: "black" }}>Hola</p>
      <button> ¡Buenas!</button>
    </div>
  );
}

export default App;
