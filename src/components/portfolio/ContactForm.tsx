import { useState, type FormEvent } from "react";
import { PROFILE } from "./data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        placeholder="Name"
        className="w-full rounded-lg border border-border bg-foreground/5 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none"
      />
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="w-full rounded-lg border border-border bg-foreground/5 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none"
      />
      <label className="sr-only" htmlFor="message">
        Project details
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        placeholder="Project Details"
        className="w-full rounded-lg border border-border bg-foreground/5 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-foreground py-4 font-bold text-background transition-colors hover:bg-foreground/90"
      >
        Send Message
      </button>
      {sent && (
        <p className="font-mono text-xs text-accent">
          Opening your mail app — thanks for reaching out.
        </p>
      )}
    </form>
  );
}
