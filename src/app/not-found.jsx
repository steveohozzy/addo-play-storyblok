import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#efe8df] px-6">
      
      <div className="max-w-xl text-center">

        {/* Big playful number */}
        <h1 className="font-heading text-7xl md:text-8xl text-primary">
          404
        </h1>

        {/* Fun message */}
        <h2 className="mt-6 text-2xl md:text-3xl font-heading text-gray-800">
          Oops… this page went on an adventure 🧸
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          We couldn’t find what you were looking for. It might have been moved,
          hidden in a toy box, or never existed in the first place.
        </p>

        {/* Cute illustration style circle blobs */}
        <div className="relative my-10 flex justify-center">
          <div className="absolute size-32 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -right-6 size-24 rounded-full bg-secondary/20 blur-2xl" />
          <div className="relative size-24 rounded-full bg-accent/30" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="
              rounded-full
              bg-primary
              px-6 py-3
              font-semibold
              text-white
              transition-transform
              hover:-translate-y-1
            "
          >
            🏠 Back to home
          </Link>

          <Link
            href="/blog"
            className="
              rounded-full
              border border-primary
              px-6 py-3
              font-semibold
              text-primary
              transition-transform
              hover:-translate-y-1
            "
          >
            📚 Explore blog
          </Link>

        </div>

        {/* Small helper text */}
        <p className="mt-10 text-sm text-gray-500">
          Tip: check the URL or try searching again
        </p>

      </div>

    </div>
  );
}