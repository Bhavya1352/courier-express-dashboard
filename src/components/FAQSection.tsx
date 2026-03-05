import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I track my package in real time?",
    a: "Once your package is dispatched, you'll receive a tracking link via SMS and email. Our dashboard shows live GPS location, estimated arrival, and delivery status updates every 30 seconds.",
  },
  {
    q: "Do you offer same-day delivery?",
    a: "Yes! Our Express tier supports same-day delivery in 500+ cities. Orders placed before 12 PM are guaranteed for same-day delivery within city limits.",
  },
  {
    q: "Can I integrate SwiftFleet with my existing systems?",
    a: "Absolutely. We provide REST APIs, webhooks, and pre-built plugins for Shopify, WooCommerce, and all major e-commerce platforms.",
  },
  {
    q: "What happens if a delivery is delayed?",
    a: "Our AI predicts delays before they happen. If any delay occurs, you're notified instantly with a revised ETA. SLA-backed plans include service credits for missed windows.",
  },
  {
    q: "Do you handle fragile or temperature-sensitive items?",
    a: "Yes. Our cold-chain and fragile-handling services include IoT temperature monitoring and shock-resistant packaging with real-time alerts.",
  },
];

const FAQSection = () => (
  <section className="py-24">
    <div className="container max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
        Frequently Asked
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Common questions from our logistics partners.
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="glass rounded-xl px-6 border-none"
          >
            <AccordionTrigger className="text-foreground font-display font-medium text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
