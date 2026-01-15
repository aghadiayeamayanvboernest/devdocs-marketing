"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  href,
  popular,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: popular ? 1.05 : 1.02 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${popular ? "border-2 border-primary-600 shadow-2xl" : "hover:shadow-lg transition-shadow"}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{name}</CardTitle>
            {popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Badge className="bg-primary-600 text-white">Most Popular</Badge>
              </motion.div>
            )}
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-5xl font-bold text-gray-900">{price}</span>
            {period && (
              <span className="text-lg text-gray-600 ml-2">/{period}</span>
            )}
          </motion.div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <svg
                  className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link href={href} className="w-full">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant={popular ? "default" : "outline"}
                className="w-full"
              >
                {cta}
              </Button>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
