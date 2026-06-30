import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import BlogFilters from "./BlogFilters";

export default async function BlogPage({ blok }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories",
    {
      starts_with: "blog/",
      content_type: "blogPost",
      version: "draft",
    }
  );

  const posts = data.stories;

  return (
    <>
    <section
      {...storyblokEditable(blok)}
      className="bg-muted"
    >
      <div className="mx-auto max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16">
        <h1 className="mb-12 text-5xl font-heading text-center text-foreground">
          {blok.title}
        </h1>

        <div className="mx-auto max-w-4xl items-center gap-10 px-4 text-center">
          {blok.intro}
        </div>
      </div>
    </section>
    <section>
       <div className="mx-auto max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16">
        <BlogFilters posts={posts} />
      </div>
    </section>
  </>
  );
}