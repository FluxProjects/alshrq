import ProductCard from '../ProductCard';
import goldRing1 from '@assets/stock_images/gold_ring_jewelry_el_045cc408.jpg';

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProductCard
        id="1"
        name="Eternal Elegance Ring"
        price={2499}
        category="Rings"
        image={goldRing1}
        isNew={true}
      />
    </div>
  );
}
