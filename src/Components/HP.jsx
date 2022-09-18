import axios from 'axios'
import React, {useState, useEffect} from 'react'
import * as S from '../Components/style'

export function HP(){

  const [characters, setCharacters]=useState([])

  useEffect(() => {
      axios.get('http://hp-api.herokuapp.com/api/characters').then((response)=>{
        setCharacters(response.data)
      })
  },[])

  return(
    <S.ConteinerMother>
      <S.ConteinerChild>
        {characters.slice(0, 24).map((item)=>(
          <ul>
            <S.Name>{item.name}</S.Name>
            <S.Img src={item.image} alt={item.name}/>
          </ul>))}
      </S.ConteinerChild>
    </S.ConteinerMother>
  )
}