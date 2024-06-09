import React from "react";
import Link from "next/link";
import { GitGraph } from "lucide-react";
const icons = [
  {
    name: "Blog",
    url: "https://simpleicons.org/icons/blogger.svg",
  },
  {
    name: "Event",
    url: "https://simpleicons.org/icons/eventbrite.svg",
  },
  {
    name: "Travel",
    url: "https://simpleicons.org/icons/travisci.svg",
  },
  {
    name: "News",
    url: "https://simpleicons.org/icons/newyorktimes.svg",
  },
  {
    name: "Shopping",
    url: "https://simpleicons.org/icons/shoppingcart.svg",
  },
  {
    name: "Music",
    url: "https://simpleicons.org/icons/music.svg",
  },
  {
    name: "Video",
    url: "https://simpleicons.org/icons/video.svg",
  },
  {
    name: "Book",
    url: "https://simpleicons.org/icons/book.svg",
  },
  {
    name: "Game",
    url: "https://simpleicons.org/icons/gamecontroller.svg",
  },
  {
    name: "Art",
    url: "https://simpleicons.org/icons/artstation.svg",
  },
];
const page = () => {
  return (
    <main className="flex min-h-screen flex-col pb-20">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link className="hidden items-center space-x-2 md:flex" href="/">
              <GitGraph className="w-5 h-5" />
              <span className="hidden font-bold sm:inline-block">
                Root Link
              </span>
            </Link>
            <button className="flex items-center space-x-2 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-command"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
              <span className="font-bold">Menu</span>
            </button>
          </div>
          <nav>
            <Link
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-4"
              href="/root"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>
      <section className="min-h-screen pt-10">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Effortless Link Sharing with Root Link
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create your personalized website with all your social media links,
            custom links, and profile information. Preview your site live as you
            make changes.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Features
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Live Preview: See your changes in real-time as you edit your
              website.
            </li>
            <li>Custom Links: Add and manage your own links easily.</li>
            <li>Profile Setup: Update your name, bio, and profile image.</li>
            <li>
              Social Media Integration: Link to all your social media profiles.
            </li>
            <li>Demo Data: Use demo data to quickly set up your site.</li>
            <li>
              Publish Easily: Convert your data to a Base64 string and publish
              your site with a click.
            </li>
          </ul>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Demo Page
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Check out the demo page to see OneLink in action:
            <a
              href="https://your-demo-page-link"
              target="_blank"
              className="text-blue-600 underline"
            >
              Demo Page
            </a>
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Icons
          </h3>
          <div className="w-1/2">
            <div className="flex justify-between border-b-2 py-2">
              <h2 className="font-bold">Icons</h2>
              <h2 className="font-bold">Copy URL From Here</h2>
            </div>
            {icons.map((icon, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <div className="text-left">{icon.name}</div>
                <div className="flex items-center space-x-2">
                  <img src={icon.url} className="h-4 w-4" alt={icon.name} />
                  <span>{icon.url}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Note: Since the URL can become very long, its better to use a link
            shortener like{" "}
            <a
              href="https://dub.co"
              target="_blank"
              className="text-blue-600 underline"
            >
              https://dub.co
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
