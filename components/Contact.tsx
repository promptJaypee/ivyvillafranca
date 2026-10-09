"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <h2 className="mb-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Let&apos;s see if it&apos;s a fit.
          </h2>
          <p className="max-w-[40ch] text-mauve">
            Tell me a bit about what&apos;s piling up. I&apos;ll reply within
            a day with a few times for a call.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href="mailto:hello@anabeltran.co" className="flex items-center gap-3 text-[0.98rem]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0">
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              hello@anabeltran.co
            </a>
            <a href="#" className="flex items-center gap-3 text-[0.98rem]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <line x1="4" y1="10" x2="20" y2="10" />
              </svg>
              Book directly on my calendar
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-mauve">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-mauve">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-mauve">
              What&apos;s on your plate right now?
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="A sentence or two is plenty"
              className="resize-y rounded border border-line bg-blush px-4 py-3 text-[0.98rem] outline-none focus:border-pink focus:ring-2 focus:ring-pink"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="self-start rounded-full bg-plum px-6 py-3 text-sm font-medium text-blush transition hover:bg-pink-deep hover:text-plum disabled:opacity-70"
          >
            {sent ? "Message sent" : "Send message"}
          </button>
          <p className="-mt-1 text-[0.84rem] text-mauve">
            This form is a front-end preview only — wire the onSubmit handler
            to your email or CRM before going live.
          </p>
        </form>
      </div>
    </section>
  );
}
