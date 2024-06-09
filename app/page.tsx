import { GitGraph, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
    <main className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link className="hidden items-center space-x-2 md:flex" href="/">
              <GitGraph className="w-5 h-5" />
              <span className="hidden font-bold sm:inline-block">
                Root Link
              </span>
            </Link>
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
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex justify-center items-center space-x-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              target="_blank"
              href="https://instagram.com/kya_re_rudra"
            >
              <Instagram className="w-4 h-4" />
              <h3>Follow me on Instagram for updates</h3>
            </Link>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl ">
              Effortless Link Sharing with Root Link
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Root Link lets you create and share all your important links
              effortlessly. It s a quick, easy, and hassle-free way to manage
              and share your links.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md"
                href="/root"
              >
                Get Started
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md"
                href="https://github.com/Rdrudra99"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
    </>
  );
};

export default page;
