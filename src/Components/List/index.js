import ProductCard from "../Products"

const List = props => {
  const { data } = props
  console.log(data)
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {data.filter((item)=>{
        return item.rating.rate > 3
      }).map((item, index) => (
        <ProductCard cardData={item} />
      ))}
    </div>
  )
}

export default List