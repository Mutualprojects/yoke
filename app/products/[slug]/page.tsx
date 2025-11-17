"use client";

import { EXTENDED_YOKE_DATA } from "../../../data/maindata";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownCircle,
} from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = EXTENDED_YOKE_DATA.products
    .flatMap((cat) => cat.items)
    .find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="p-20 text-2xl font-bold text-red-600">
        ❌ Product Not Found — Invalid URL
      </div>
    );
  }

  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollToFeatures = () =>
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });

  // Prev / Next logic
  const productsList = EXTENDED_YOKE_DATA.products.flatMap((c) => c.items);
  const index = productsList.findIndex((p) => p.slug === slug);

  const prevProduct = productsList[index - 1] || null;
  const nextProduct = productsList[index + 1] || null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGE */}
        <motion.img
          key={product.image}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.title}
          className="rounded-xl shadow-xl w-full object-cover border border-[#e7e7e7]"
        />

        {/* RIGHT DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-[#B54530]">
            {product.title}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* EXPLORE FEATURES BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToFeatures}
            className="flex items-center gap-2 px-6 py-3 bg-[#B54530] text-white rounded-xl shadow-md hover:bg-[#993a29] transition"
          >
            <ArrowDownCircle size={22} />
            Explore Features
          </motion.button>
        </motion.div>
      </div>

      {/* ================= PREVIOUS / NEXT BUTTONS ================= */}
      <div className="mt-16 flex justify-between items-center">

        {prevProduct ? (
          <Link
            href={`/products/${prevProduct.slug}`}
            className="flex items-center gap-2 text-[#B54530] font-semibold hover:translate-x-[-4px] transition"
          >
            <ChevronLeft size={22} />
            {prevProduct.title}
          </Link>
        ) : (
          <span />
        )}

        {nextProduct ? (
          <Link
            href={`/products/${nextProduct.slug}`}
            className="flex items-center gap-2 text-[#B54530] font-semibold hover:translate-x-[4px] transition"
          >
            {nextProduct.title}
            <ChevronRight size={22} />
          </Link>
        ) : (
          <span />
        )}

      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div ref={featuresRef} className="mt-20">
        <h2 className="text-3xl font-bold text-[#B54530] mb-8">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {product.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                p-6 rounded-2xl
                bg-[#f3f3f3]
                shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff]
                hover:shadow-[inset_8px_8px_20px_#d1d1d1,inset_-8px_-8px_20px_#ffffff]
                transition
              "
            >
              <h3 className="text-xl font-semibold text-[#B54530] mb-2">
                Feature {i + 1}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
}
