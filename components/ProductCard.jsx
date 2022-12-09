import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="card m-2">
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow m-auto"
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-btn" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
