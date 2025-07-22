import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg">
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
              <button className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                🎮 Jugar
              </button>
              <button className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                🏆 Puntuaciones
              </button>
              <button className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                ⚙️ Configuración
              </button>
              <button className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
                📖 Reglas
              </button>
            </div>
          </div>

          {/* Estadísticas del jugador */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-white text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                ⭐ Nivel: 1
              </span>
            </div>
            <div className="text-white text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🔥 Racha: 0
              </span>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-md">
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-20">
          <button className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            🎮 Jugar
          </button>
          <button className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            🏆 Puntuaciones
          </button>
          <button className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            ⚙️ Configuración
          </button>
          <button className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
            📖 Reglas
          </button>
          <div className="pt-2 border-t border-white border-opacity-20">
            <div className="text-white text-sm px-3 py-1">
              ⭐ Nivel: 1 | 🔥 Racha: 0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
