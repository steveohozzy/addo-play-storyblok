import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export default function Blog({
  blok,
}) {
  const panels =
    blok.BlogPosts ?? [];

  return (
    <section
      {...storyblokEditable(blok)}
      id="blog"
      className="bg-muted/60"
    >
      <div className={`mx-auto max-w-7xl px-4 ${blok.Title ? "py-20" : "py-10"} md:px-8 ${blok.Title ? "lg:py-28" : "lg:pb-12 lg:pt-4"}`}>
      {blok.Title && (
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {blok.Tagline}
          </span>

          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {blok.Title}
          </h2>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Read the journal

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {panels.map((p) => (
          <article
            key={p._uid}
            className="group overflow-hidden rounded-[2rem] border border-border bg-card transition-shadow hover:shadow-xl"
          >
            <Link
              href={`/blog/${p.Slug}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={
                    p.Image
                      ?.filename ||
                    "/images/heritage.png"
                  }
                  alt={
                    p.Title ||
                    "Blog image"
                  }
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {p.Tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {p.Tag}
                  </span>
                )}
              </div>

              <div className="flex flex-col p-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {p.Title}
                  </h3>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">
                    {p.ReadLength} read
                  </span>

                  <span className="flex size-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}