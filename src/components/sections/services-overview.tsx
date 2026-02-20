"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Users,
  Baby,
  Brain,
  HeartHandshake,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: User,
    title: "개인상담",
    description: "우울, 불안, 스트레스, 자존감 등 개인의 심리적 어려움을 전문 상담사와 함께 해결합니다.",
    href: "/programs#individual",
  },
  {
    icon: HeartHandshake,
    title: "부부·커플 상담",
    description: "관계의 갈등과 소통 문제를 함께 풀어가며 건강한 관계를 회복합니다.",
    href: "/programs#couple",
  },
  {
    icon: Baby,
    title: "아동·청소년 상담",
    description: "성장기 아이들의 정서적 어려움과 행동 문제를 전문적으로 지원합니다.",
    href: "/programs#child",
  },
  {
    icon: Users,
    title: "가족상담",
    description: "가족 구성원 간의 이해와 소통을 돕고 건강한 가족관계를 만들어갑니다.",
    href: "/programs#family",
  },
  {
    icon: Brain,
    title: "심리검사",
    description: "종합 심리검사, 성격검사, 지능검사 등 전문적인 심리평가를 진행합니다.",
    href: "/tests",
  },
  {
    icon: Stethoscope,
    title: "트라우마 치료",
    description: "EMDR, 인지행동치료 등 과학적으로 검증된 방법으로 트라우마를 치유합니다.",
    href: "/programs#trauma",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              맞춤형 상담 프로그램
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              다양한 심리적 어려움에 대한 전문적인 상담 프로그램을 운영하고 있습니다.
              당신에게 꼭 맞는 프로그램을 찾아보세요.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link href={service.href}>
                <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      자세히 보기
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
