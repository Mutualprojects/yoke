"use client";

import { EXTENDED_YOKE_DATA } from "../../data/maindata";
import Link from "next/link";

export default function ProductsPage() {
  const products = EXTENDED_YOKE_DATA.products.flatMap((c) => c.items);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#B54530] mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <Link
            key={item.slug}
            href={`/products/${item.slug}`}
            className="border rounded-xl p-5 shadow hover:shadow-lg transition"
          >
            <div
              className="rounded-xl bg-gray-100 mb-4"
              style={{ height: 180 }}
            />

            <h3 className="text-xl font-semibold text-[#B54530]">
              {item.name}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {item.description.substring(0, 80)}…
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
