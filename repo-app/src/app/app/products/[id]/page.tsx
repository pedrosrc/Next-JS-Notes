interface ProductsProps{
    params: {
        id: string
    }
}

export default function Products({params}:ProductsProps){
  return(
    <div>
        Produto: {params.id}
    </div>
  )
}