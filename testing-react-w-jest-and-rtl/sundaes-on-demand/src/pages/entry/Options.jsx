import { useState, useEffect } from 'react'
import axios from 'axios'
import ScoopOption from './ScoopOption'

function Options({ optionType }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3030/' + optionType)
      .then(response => setItems(response.data))
      .catch(e => console.log(e))
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null

  return items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))
}

export default Options