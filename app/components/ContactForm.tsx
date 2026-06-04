"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
}

const projectTypes = [
  "Full-Stack Application",
  "API / Backend System",
  "Frontend / Design System",
  "Infrastructure / DevOps",
  "Prototype / MVP",
  "Consulting",
  "Other",
]

const initialForm: FormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Placeholder — wire up to your backend or email service
    console.log("Form submitted:", form)
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bv-primary">
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
              className="text-bv-primary-contrast"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-6 font-display-alt text-headline-md text-bv-on-surface">
            Message sent
          </h1>
          <p className="mt-3 text-body-md text-bv-secondary">
            Thanks for reaching out. We&apos;ll get back to you within 48 hours.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-headline-display text-bv-on-surface">
          Get in touch
        </h1>
        <p className="mt-3 max-w-lg text-body-lg text-bv-secondary">
          Tell us about the system you&apos;re building. We&apos;ll review your
          message and follow up to schedule a call.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12 space-y-6"
      >
        {/* Name & Email — side by side on larger screens */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-label-sm font-medium text-bv-on-surface"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-bv-md border border-bv-border bg-bv-surface px-3.5 py-3 text-body-md text-bv-on-surface placeholder:text-bv-secondary/60 transition-colors focus:border-bv-secondary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-label-sm font-medium text-bv-on-surface"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded-bv-md border border-bv-border bg-bv-surface px-3.5 py-3 text-body-md text-bv-on-surface placeholder:text-bv-secondary/60 transition-colors focus:border-bv-secondary focus:outline-none"
            />
          </div>
        </div>

        {/* Project type */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="projectType"
            className="text-label-sm font-medium text-bv-on-surface"
          >
            What are you looking for?
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={form.projectType}
            onChange={handleChange}
            className="rounded-bv-md border border-bv-border bg-bv-surface px-3.5 py-3 text-body-md text-bv-on-surface transition-colors focus:border-bv-secondary focus:outline-none"
          >
            <option value="" disabled>
              Select a project type…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-label-sm font-medium text-bv-on-surface"
          >
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Describe the system, the problem you're solving, and any constraints or timeline you have in mind…"
            className="resize-y rounded-bv-md border border-bv-border bg-bv-surface px-3.5 py-3 text-body-md text-bv-on-surface placeholder:text-bv-secondary/60 transition-colors focus:border-bv-secondary focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-bv-md bg-bv-primary px-6 text-label-lg font-medium text-bv-primary-contrast transition-opacity hover:opacity-90"
          >
            Send message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </motion.form>
    </section>
  )
}
