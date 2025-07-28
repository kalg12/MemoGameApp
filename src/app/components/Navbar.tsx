import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#169dd9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl mr-3">🧠</div>
              <h1 className="text-white text-xl font-bold">Memorama</h1>
            </div>
          </div>

          {/* Menú principal */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-[#f49920] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                🎮 Jugar
              </Link>
              <Link href="/puntuaciones" className="text-white hover:bg-[#f49920] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                🏆 Puntuaciones
              </Link>
              <Link href="/configuracion" className="text-white hover:bg-[#f49920] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                ⚙️ Configuración
              </Link>
              <Link href="/acerca-de" className="text-white hover:bg-[#f49920] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                📖 Reglas
              </Link>
            </div>
          </div>

          {/* Estadísticas del jugador */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-white text-sm">
              <span className="bg-[#f49920] bg-opacity-90 px-3 py-1 rounded-full">
                ⭐ Nivel: 1
              </span>
            </div>
            <div className="text-white text-sm">
              <span className="bg-[#f49920] bg-opacity-90 px-3 py-1 rounded-full">
                🔥 Racha: 0
              </span>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-white hover:bg-[#f49920] hover:text-white p-2 rounded-md">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil expandido (oculto por defecto) */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#169dd9] bg-opacity-95">
          <Link href="/" className="text-white hover:bg-[#f49920] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            🎮 Jugar
          </Link>
          <Link href="/puntuaciones" className="text-white hover:bg-[#f49920] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            🏆 Puntuaciones
          </Link>
          <Link href="/configuracion" className="text-white hover:bg-[#f49920] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            ⚙️ Configuración
          </Link>
          <Link href="/acerca-de" className="text-white hover:bg-[#f49920] hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            📖 Reglas
          </Link>
          <div className="pt-2 border-t border-[#f49920] border-opacity-50">
            <div className="text-white text-sm px-3 py-1">
              <span className="bg-[#f49920] bg-opacity-90 px-2 py-1 rounded-full">⭐ Nivel: 1</span> <span className="bg-[#f49920] bg-opacity-90 px-2 py-1 rounded-full">🔥 Racha: 0</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
