import Wrapper from '../assets/wrappers/CocktailList'
import CockTailCard from './CockTailCard'
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4>No Matching Drink Found</h4>
  }
  const formattedDrink = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <Wrapper>
      {formattedDrink.map((item) => {
        return <CockTailCard {...item} key={item.id} />
      })}
    </Wrapper>
  )
}
export default CocktailList
