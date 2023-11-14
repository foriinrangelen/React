import React, { useState } from 'react'
import pokemonData from '../data/pokemon.json'
import PokeNav from './PokeNav'
import PokeList from './PokeList'

const PokeBoard = () => {
  const [pokemonInfo, setPokemons] = useState(pokemonData)
  // const [pokemonInfo2, setPokemons2] = useState(pokemonData)

  console.log(pokemonInfo)
  const handleClick = (e) => {
    let menu = e.target.innerText
    let filter = []
    if (menu === 'All') {
      setPokemons(pokemonData)
      // return
    } else {
      if (menu === '1~50')
        filter = pokemonData.filter((item) => item.id >= 1 && item.id < 51)
      else if (menu === '51~100')
        filter = pokemonData.filter((item) => item.id >= 51 && item.id < 101)
      else
        filter = pokemonData.filter((item) => item.id >= 101 && item.id < 151)
      setPokemons(filter)
    }
  }
  return (
    <div>
      {/* 메뉴영역 */}
      <PokeNav onClick={handleClick} />
      {/* 포켓몬 정보를 보여주는 영역 */}
      <PokeList pokemons={pokemonInfo} />
    </div>
  )
}

export default PokeBoard
