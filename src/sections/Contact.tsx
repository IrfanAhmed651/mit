"use client";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    // Honeypot: if filled, silently succeed
    if ((data.get("company_website") as string) !== "") {
      setStatus("ok");
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      // TODO: hook to real endpoint
      await new Promise((r) => setTimeout(r, 800));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              Let’s talk about your project
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Tell us what you’re building and we’ll get back within one
              business day.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@yourstudio.com
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +880 1XXX‑XXXXXX
              </p>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form className="grid gap-4" onSubmit={onSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      Full name
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Full name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company (optional)"
                  />
                </div>
                {/* Honeypot (spam trap) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company website</label>
                  <Input
                    id="company_website"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your idea"
                    rows={5}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-gray-500">
                    We’ll reply in ~24 hours.
                  </p>
                </div>
                {status === "ok" && (
                  <p role="status" className="text-sm text-green-600">
                    Thanks! We received your message.
                  </p>
                )}
                {status === "err" && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
