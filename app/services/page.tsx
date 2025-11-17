"use client";

import { EXTENDED_YOKE_DATA } from "../../data/maindata";
import Link from "next/link";

export default function ServicesPage() {
  const services = EXTENDED_YOKE_DATA.services;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#B54530] mb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="border rounded-xl p-5 shadow hover:shadow-lg transition"
          >
            {/* Placeholder Image Div */}
            <div
              className="rounded-xl bg-gray-100 mb-4"
              style={{ height: 180 }}
            ></div>

            <h3 className="text-xl font-semibold text-[#B54530]">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {service.description.substring(0, 80)}…
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
