import Image from 'next/image'
import { Contact } from '../../components/Contact'
import Menu from '../../components/Menu'
import { ProductCard } from '../../components/ProductCard'
import { ProductGrid } from '../../components/ProductGrid'
import { products } from '../../utils/data'

export default function Catalogue() {
  return (
    <div>
        <Menu />
        <ProductGrid>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ProductGrid>
        <Contact />
    </div>
  )
}
