"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            지금 바로 상담을 시작하세요
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            혼자 고민하지 마세요. 전문 상담사가 함께합니다.
            <br />
            첫 상담은 부담 없이 시작하실 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 text-base"
            >
              <Link href="/contact">
                온라인 예약하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:02-1234-5678">
                <Phone className="h-4 w-4" />
                02-1234-5678
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
