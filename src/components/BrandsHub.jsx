"use client";

import Image from "next/image";
import {
  storyblokEditable,
} from "@storyblok/react/rsc";

import BrandSection from "./BrandSection";

export default function BrandsHub({ blok }) {

  const scrollToBrand = (brandName) => {
    const id = brandName
      .toLowerCase()
      .replace(/\s+/g, "-");

    const element =
      document.getElementById(id);

    if (element) {
      const headerHeight = 80;
      const stickyNavHeight = 52; 

      const offset =
        headerHeight + stickyNavHeight;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      {...storyblokEditable(blok)}
    >
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute -left-20 top-20 size-72 rounded-full bg-accent/50 blur-3xl" />
        <div className="absolute right-0 top-0 size-96 rounded-full bg-secondary/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
          <div className="max-w-3xl">

            <span
              className="
                rounded-full
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur
              "
            >
              Discover our toy families
            </span>

            <h1
              className="
                mt-6
                text-5xl
                font-heading
                text-white
                md:text-7xl
              "
            >
              {blok.heroTitle}
            </h1>

            <p className="mt-6 text-lg text-white/85">
              {blok.heroSubtitle}
            </p>

          </div>
        </div>
      </section>

      <section
        className="
          sticky
          top-20
          z-30
          border-b
          bg-muted/90
          backdrop-blur
        "
      >
        <div className="mx-auto max-w-7xl overflow-auto px-4 py-2">
          <div className="flex min-w-max gap-4">

            {blok.brandSections?.map((brand) => (
              <button
                key={brand._uid}
                onClick={() =>
                  scrollToBrand(
                    brand.BrandName
                  )
                }
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-card
                  px-3
                  py-1
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {brand.BrandLogo?.filename && (
                  <Image
                    src={
                      brand.BrandLogo.filename
                    }
                    alt={
                      brand.BrandName
                    }
                    width={26}
                    height={26}
                    className="
                      rounded-full
                      transition-transform
                      group-hover:scale-110
                    "
                  />
                )}

                <span className="font-medium text-sm">
                  {brand.BrandName}
                </span>
              </button>
            ))}

          </div>
        </div>
      </section>

      {blok.intro && (
        <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8">
          <p className="text-xl leading-relaxed text-muted-foreground">
            {blok.intro}
          </p>
        </section>
      )}

      <section>
        {blok.brandSections?.map((brand, index) => (
          <BrandSection
            key={brand._uid}
            blok={brand}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}