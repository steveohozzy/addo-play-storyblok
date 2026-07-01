import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import { resolveLink } from "@/lib/storyblok";

export default function HomeHero({ blok }) {
  const isVideo = blok.Media === "video";
  const videoId = blok.videoURL;

  return (
    <section
      {...storyblokEditable(blok)}
      id="top"
      className="relative overflow-hidden bg-muted"
    >

    <div
      className="pointer-events-none absolute -left-10 top-84 size-40 rotate-45 rounded-3xl bg-primary/60"
      aria-hidden
    />

    <div
      className="pointer-events-none absolute right-10 top-10 size-24 rounded-2xl bg-secondary/40"
      style={{ transform: 'rotate(57deg)' }} 
      aria-hidden
    />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="relative z-10">
          {blok.Tagline &&
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            {blok.Tagline || "tagline"}
          </span>
          }

          <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {blok.Title || "hero text"}{" "}
              {blok.TitleAccent &&
              <span className="text-primary">
                {blok.TitleAccent || "hero accent"}
              </span>
              }
          </h1>

          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            {blok.Subtitle || "subtitle"}
          </p>

          {blok.CtaPrimaryText && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={resolveLink(blok.CtaPrimaryLink)}
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {blok.CtaPrimaryText}
              </Link>

              {blok.CtaSecondaryText && (
                <Link
                  href={resolveLink(blok.CtaSecondaryLink)}
                  className="rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {blok.CtaSecondaryText}
                </Link>
              )}
            </div>
          )}

          {blok.Stats?.length ? (
            <dl className="mt-10 flex flex-wrap gap-8">
              {blok.Stats.map((stat, i) => (
                <div key={i}>
                  <dt className="font-heading text-3xl font-semibold text-foreground">
                    {stat.Value}
                  </dt>

                  <dd className="text-sm text-muted-foreground">
                    {stat.Label}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className="relative z-10">
          <div className={`relative overflow-hidden rounded-[2rem] border border-border shadow-xl ${isVideo ? "aspect-[11/10] lg:aspect-[6/5]" : "aspect-[9/10] lg:aspect-[4/5]"}`}>

            {isVideo && videoId ? (
              <video
                src={videoId}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={
                  blok.BackgroundImage?.filename
                }
                alt={
                  blok.BackgroundImage?.alt ||
                  "Hero image"
                }
                fill
                priority
                quality={85}
                sizes="(max-width:640px) 50vw,
                      (max-width:1024px) 420px,
                      420px"
                className="object-cover"
              />
            )}
            
          </div>

          {blok.ImageStampTitle && (
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-accent px-5 py-4 shadow-lg sm:block">
              <p className="font-heading text-xl font-semibold text-accent-foreground">
                {blok.ImageStampTitle}
              </p>

              <p className="text-sm text-accent-foreground">
                {blok.ImageStampText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}