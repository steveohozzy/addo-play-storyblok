import Image from "next/image";
import Link from "next/link";
import {
  storyblokEditable,
  renderRichText,
} from "@storyblok/react/rsc";

import { resolveLink } from "@/lib/storyblok";

export default function BrandSection({
  blok,
  index,
}) {
  const reversed = index % 2 !== 0;

  const background =
    index % 2 !== 0
      ? "bg-muted/60"
      : "bg-white";

  return (
    <section
      {...storyblokEditable(blok)}
      id={blok.BrandName
        ?.toLowerCase()
        ?.replace(/\s+/g, "-")}
      className={`
        ${background}
      `}
    >
      <div
        className={`
          mx-auto
          grid
          items-center
          gap-12
          px-6
          py-12
          md:px-10
          lg:grid-cols-2
          lg:px-14
          lg:py-16
          overflow-hidden
          mx-auto max-w-7xl
        `}
      >
        {/* Image */}

        <div
          className={
            reversed
              ? "lg:order-2"
              : ""
          }
        >
          <div
            className="
              overflow-hidden
              rounded-[2rem]
              shadow-xl
            "
          >
            <Image
              src={
                blok.BrandImage?.filename
              }
              alt={
                blok.BrandName
              }
              width={700}
              height={700}
              className="
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* Content */}

        <div
          className={
            reversed
              ? "lg:order-1"
              : ""
          }
        >
          {blok.BrandLogo?.filename && (
            <Image
              src={
                blok.BrandLogo.filename
              }
              alt={
                blok.BrandName
              }
              width={180}
              height={70}
            />
          )}

          <h2
            className="
              mt-6
              font-heading
              text-4xl
              md:text-5xl
              text-primary
            "
          >
            {blok.BrandName}
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            {blok.Intro}
          </p>

          {blok.Description && (
            <div
              className="
                mt-6
                prose
                max-w-none
              "
              dangerouslySetInnerHTML={{
                __html:
                  renderRichText(
                    blok.Description
                  ),
              }}
            />
          )}

          {blok.CtaText && (
            <Link
              href={resolveLink(
                blok.CtaLink
              )}
              className="
                mt-8
                inline-flex
                rounded-full
                bg-primary
                px-6
                py-3
                font-semibold
                text-primary-foreground
                transition-transform
                hover:-translate-y-1
              "
            >
              {blok.CtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}