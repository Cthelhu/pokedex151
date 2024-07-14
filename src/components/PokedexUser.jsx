import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes manejar la lógica de cierre de sesión si es necesario
    navigate('/home');
  };

  return (
    <div className="relative">
      <div
        className="bg-[#72728E] hover:bg-gray-600 h-9 w-9 ml-[10px] rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Alternar estado
      >
        <p className="font-bold text-white">EP</p>
      </div>

      {isOpen && (
        <div className="w-[300px] absolute top-full right-0 bg-white shadow-2xl rounded-lg p-4 mt-2 z-10">
          <h3 className="text-gray-700 font-bold text-lg">Entrenador Pokémon</h3>
          <p className="text-gray-700">entrenador@pkmn.com</p>
          <button
            className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      )}
      
      {/* Cerrar el overlay al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PokedexUser;
