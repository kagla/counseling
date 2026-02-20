"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "상담 신청",
    description: "전화, 온라인 또는 방문으로 상담을 신청합니다. 상담 유형과 원하시는 일정을 알려주세요.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "초기 면담",
    description: "현재의 어려움과 상담 목표를 함께 이야기합니다. 필요시 심리검사를 진행할 수 있습니다.",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "정기 상담",
    description: "전문 상담사와 정기적인 상담을 통해 문제를 함께 탐색하고 해결 방법을 찾아갑니다.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "성장과 변화",
    description: "상담을 통해 변화와 성장을 경험하고, 일상에서의 적응력을 높여갑니다.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-primary">Process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            상담 진행 과정
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            처음 상담을 받으시는 분도 편안하게 시작하실 수 있도록 체계적인 과정으로 진행합니다.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                  Step {step.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
