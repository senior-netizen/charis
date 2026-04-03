"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-brand/20 transition focus:ring"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-brand/20 transition focus:ring"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-brand/20 transition focus:ring"
        />
      </div>
      <button
        disabled={status === "sending"}
        className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-[#186451] disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status === "success" ? <p className="text-sm text-brand">Thanks. We will contact you within one business day.</p> : null}
      {status === "error" ? <p className="text-sm text-red-600">Unable to submit right now. Please try WhatsApp instead.</p> : null}
    </form>
  );
}
