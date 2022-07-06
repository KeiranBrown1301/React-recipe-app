import React from 'react'
import {useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams;

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const recipies = await data.json();
    setSearchedRecipes(recipies.results)
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>

    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched
