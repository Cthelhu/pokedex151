import React from 'react';
import PokedexLogo from '../img/Pokédex_logo.png'
import PokedexSearch from './PokedexSearch';
import PokedexUser from './PokedexUser';


const PokedexHeader = () => {
  return (
    <div className='bg-white rounded-b-[30px]  px-20 py-5 shadow-md flex justify-between items-center '  >
        <img src={PokedexLogo} alt='Pokedex Logo' className='w-80'/>
        <div className='flex items-center'>
            <PokedexSearch/>
            <PokedexUser/>
        </div>

            
    </div>
  )
}

export default PokedexHeader;