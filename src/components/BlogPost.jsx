import Image from "next/image";
import Link from "next/link";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function BlogPost({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="pb-24"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-accent">
        <div className="absolute inset-0 opacity-10">
          {blok.featuredImage?.filename && (
            <Image
              src={blok.featuredImage.filename}
              alt={blok.title || "Article image"}
              fill
              priority
              className="object-cover"
            />
          )}
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-8">
          {blok.category?.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {blok.category.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="
                    rounded-full
                    bg-white/15
                    px-4
                    py-1.5
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur
                    transition-all
                    hover:bg-white
                    hover:text-primary
                  "
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          <h1 className="max-w-4xl text-5xl font-heading font-semibold leading-tight text-white md:text-7xl">
            {blok.title}
          </h1>

          {blok.excerpt && (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
              {blok.excerpt}
            </p>
          )}

          {/* Article meta */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80">

            {blok.author && (
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                  👤
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider">
                    Author
                  </p>

                  <p className="font-medium">
                    {blok.author}
                  </p>
                </div>
              </div>
            )}

            {blok.date && (
              <div>
                <p className="text-xs uppercase tracking-wider">
                  Published
                </p>

                <p>
                  {new Date(
                    blok.date
                  ).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            )}

            {blok.readTime && (
              <div>
                <p className="text-xs uppercase tracking-wider">
                  Read time
                </p>

                <p>{blok.readTime}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto">
          {blok.articleBlocks?.map((nested) => (
            <StoryblokServerComponent
              blok={nested}
              key={nested._uid}
            />
          ))}
      </section>
    </article>
  );
}