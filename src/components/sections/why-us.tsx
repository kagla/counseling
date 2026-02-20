"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Lock, Clock, Leaf, HeartPulse } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "전문성",
    description: "석·박사 학위 소지, 풍부한 임상 경험을 갖춘 전문 상담사가 상담합니다.",
  },
  {
    icon: Lock,
    title: "철저한 비밀보장",
    description: "상담 내용은 법적으로 보호되며, 어떠한 경우에도 외부에 공개되지 않습니다.",
  },
  {
    icon: HeartPulse,
    title: "과학적 접근",
    description: "인지행동치료, EMDR, 정신분석 등 과학적으로 검증된 상담기법을 적용합니다.",
  },
  {
    icon: Clock,
    title: "유연한 시간",
    description: "평일 저녁, 토요일 상담 등 내담자의 일정에 맞춘 유연한 상담 시간을 운영합니다.",
  },
  {
    icon: Leaf,
    title: "편안한 공간",
    description: "프라이버시가 보장된 독립 상담실에서 편안하게 상담을 받으실 수 있습니다.",
  },
  {
    icon: ShieldCheck,
    title: "체계적 관리",
    description: "초기 상담부터 종결까지 체계적인 상담 관리 시스템으로 효과적인 상담을 진행합니다.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-primary">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              마음숲을
              <br />
              선택해야 하는 이유
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              마음숲 심리상담센터는 전문성과 따뜻함을 갖춘 상담으로 내담자분들의
              마음 건강을 최우선으로 생각합니다.
            </p>
            <div className="mt-8 rounded-2xl bg-primary/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">15</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">년 이상의 경력</p>
                  <p className="text-sm text-muted-foreground">
                    심리상담 및 심리치료 전문기관
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
