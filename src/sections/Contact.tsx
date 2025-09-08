import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export function Contact() {
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
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full name" required />
                  <Input placeholder="Email" type="email" required />
                </div>
                <Input placeholder="Company (optional)" />
                <Textarea placeholder="Tell us about your idea" rows={5} />
                <div className="flex items-center gap-3">
                  <Button type="submit">Send Message</Button>
                  <p className="text-xs text-gray-500">
                    We’ll reply in ~24 hours.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
