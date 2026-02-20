"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 top-1/2 h-60 w-60 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-warm/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <Heart className="h-3.5 w-3.5" />
              <span>전문 심리상담센터</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              당신의 마음에
              <br />
              <span className="text-primary">평온한 숲길</span>을
              <br />
              만들어드립니다
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              마음숲 심리상담센터는 전문 심리상담사와 함께 안전하고 따뜻한 치유의
              공간을 제공합니다. 당신의 이야기에 귀 기울이며, 함께 성장해 나가는
              여정을 시작하세요.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="gap-2 text-base">
                <Link href="/contact">
                  상담 예약하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 text-base"
              >
                <Link href="/programs">
                  프로그램 안내
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>전화 상담: </span>
              <span className="font-semibold text-foreground">02-1234-5678</span>
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-sage/10 to-warm/10 p-8 sm:p-12">
              <div className="absolute inset-0 rounded-3xl bg-card/50 backdrop-blur-sm" />
              <div className="relative space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "15년+", label: "상담 경력", icon: Shield },
                    { number: "10,000+", label: "상담 사례", icon: Users },
                    { number: "98%", label: "만족도", icon: Heart },
                    { number: "12명", label: "전문 상담사", icon: Users },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/50 bg-card/80 p-4 text-center backdrop-blur-sm transition-shadow hover:shadow-md"
                    >
                      <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                      <p className="text-2xl font-bold text-foreground">
                        {stat.number}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="rounded-2xl bg-primary/5 p-6">
                  <blockquote className="text-center text-sm italic leading-relaxed text-foreground/80">
                    &ldquo;모든 사람의 마음에는 치유의 힘이 있습니다.
                    <br />
                    우리는 그 힘을 발견하도록 돕는 안내자입니다.&rdquo;
                  </blockquote>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    — 마음숲 심리상담센터
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
