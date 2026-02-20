"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Target, Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "공감과 존중",
    description: "모든 내담자를 있는 그대로 수용하며, 진심 어린 공감으로 함께합니다.",
  },
  {
    icon: Eye,
    title: "전문성과 윤리",
    description: "상담 윤리를 철저히 준수하며, 끊임없는 수련과 교육을 통해 전문성을 높입니다.",
  },
  {
    icon: Target,
    title: "개인 맞춤",
    description: "획일적인 접근이 아닌, 개인의 특성과 상황에 맞는 맞춤형 상담을 제공합니다.",
  },
];

const history = [
  { year: "2010", event: "마음숲 심리상담센터 개원" },
  { year: "2013", event: "아동·청소년 전문 상담실 개설" },
  { year: "2015", event: "한국상담심리학회 인증 전문기관 획득" },
  { year: "2018", event: "심리검사 전문센터 확장" },
  { year: "2020", event: "온라인 비대면 상담 시작" },
  { year: "2023", event: "강남센터 신규 오픈" },
  { year: "2025", event: "누적 상담 10,000사례 달성" },
];

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            마음숲 심리상담센터를
            <br />
            소개합니다
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            마음숲 심리상담센터는 2010년 개원 이래, &ldquo;모든 사람의 마음에는 치유의 힘이
            있다&rdquo;는 철학을 바탕으로 전문적이고 따뜻한 심리상담 서비스를 제공하고
            있습니다.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="mt-20 bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground">
                따뜻한 전문성으로
                <br />
                마음을 치유합니다
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  마음숲 심리상담센터는 석·박사급 전문 상담사들이 모여 설립한 심리상담
                  전문기관입니다. 우리는 과학적으로 검증된 상담 이론과 기법을 바탕으로,
                  내담자 개개인의 특성에 맞는 맞춤형 상담을 진행합니다.
                </p>
                <p>
                  개인상담, 부부상담, 가족상담, 아동·청소년상담, 집단상담 등 다양한
                  상담 프로그램과 종합 심리검사를 운영하며, 내담자분들이 자신의 내면을
                  탐색하고 성장할 수 있도록 돕고 있습니다.
                </p>
                <p>
                  모든 상담은 철저한 비밀보장 하에 진행되며, 편안하고 안전한 환경에서
                  자유롭게 이야기를 나눌 수 있습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, number: "15년+", label: "상담 경력" },
                { icon: Users, number: "10,000+", label: "누적 상담" },
                { icon: BookOpen, number: "12명", label: "전문 상담사" },
                { icon: Heart, number: "98%", label: "내담자 만족도" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-2xl bg-card p-6 text-center shadow-sm"
                >
                  <stat.icon className="mb-3 h-8 w-8 text-primary" />
                  <p className="text-3xl font-bold text-foreground">{stat.number}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-primary">Our Values</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            마음숲의 핵심 가치
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 text-center">
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-medium text-primary">History</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              마음숲의 발자취
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative border-l-2 border-primary/30 pl-8">
              {history.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <p className="mt-1 text-foreground">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
