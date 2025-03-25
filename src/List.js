import React, { useState } from 'react';
import './List.css'; // Import List-specific CSS
const products = [
{ id: 1, name: "Product 1", description: "Description for product 1", image:
"./a.jpg" },
{ id: 2, name: "Product 2", description: "Description for product 2", image:
"./b.jpg" },
{ id: 3, name: "Product 3", description: "Description for product 3", image:
"./c.jpg" },
];
const List = () => {
const [search, setSearch] = useState('');
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(search.toLowerCase())
);
return (
<section className="list">
<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
<ul>
{filteredProducts.map(product => (
<li key={product.id}>
<img src={product.image} alt={product.name} />
<h2>{product.name}</h2>
<p>{product.description}</p>
</li>
))}
</ul>
</section>
);
};
export default List;
