"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, ClipboardCheck, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tests = [
  {
    title: "종합 심리검사",
    subtitle: "Full Battery",
    description:
      "지능, 성격, 정서, 인지 등을 종합적으로 평가하여 개인의 심리적 특성과 강점, 취약성을 파악합니다.",
    items: ["지능검사 (K-WAIS/K-WISC)", "성격검사 (MMPI-2)", "투사검사 (로르샤흐, TAT, HTP)", "문장완성검사 (SCT)"],
    target: "아동, 청소년, 성인",
    duration: "3~4시간",
  },
  {
    title: "성격·정서 검사",
    subtitle: "Personality Assessment",
    description:
      "개인의 성격 특성, 정서적 상태, 대인관계 패턴 등을 평가하여 자기이해를 돕습니다.",
    items: ["MMPI-2 다면적 인성검사", "MBTI 성격유형검사", "TCI 기질 및 성격검사", "PAI 성격평가"],
    target: "청소년, 성인",
    duration: "1~2시간",
  },
  {
    title: "지능·인지 검사",
    subtitle: "Intelligence Assessment",
    description:
      "인지 능력의 강점과 약점을 파악하여 학습 전략 수립이나 진로 설계에 도움을 줍니다.",
    items: ["K-WAIS (성인용 지능검사)", "K-WISC (아동용 지능검사)", "BGT 시각운동통합검사", "주의집중력 검사"],
    target: "아동, 청소년, 성인",
    duration: "2~3시간",
  },
  {
    title: "ADHD 검사",
    subtitle: "ADHD Assessment",
    description:
      "주의력결핍 과잉행동장애(ADHD)의 정확한 진단과 평가를 통해 적절한 치료 방향을 설정합니다.",
    items: ["ADS 종합주의력검사", "CAT 전산화 주의력검사", "코너스 평정척도", "행동평가척도"],
    target: "아동, 청소년, 성인",
    duration: "2~3시간",
  },
  {
    title: "정서·행동 검사",
    subtitle: "Emotional Assessment",
    description:
      "아동·청소년의 정서적 상태와 행동 특성을 평가하여 적절한 개입 방향을 설정합니다.",
    items: ["CBCL 아동행동평가", "YSR 자기보고식 검사", "정서지능검사", "사회성 검사"],
    target: "아동, 청소년",
    duration: "1~2시간",
  },
  {
    title: "부부·커플 검사",
    subtitle: "Couple Assessment",
    description:
      "부부 또는 커플의 관계 역동, 의사소통 패턴, 만족도 등을 평가하여 상담 방향을 설정합니다.",
    items: ["결혼만족도 검사", "의사소통 패턴 평가", "가족체계 평가", "애착유형 검사"],
    target: "부부, 커플",
    duration: "2시간",
  },
];

export default function TestsPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">Psychological Testing</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            심리검사 안내
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            전문 심리검사를 통해 자신을 깊이 이해하고, 상담의 효과를 높일 수 있습니다.
            <br />
            모든 검사는 전문 상담사가 직접 실시하고 해석합니다.
          </p>
        </motion.div>
      </section>

      {/* Process Info */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: ClipboardCheck,
              title: "검사 실시",
              description: "전문 상담사가 편안한 환경에서 표준화된 검사를 진행합니다.",
            },
            {
              icon: Brain,
              title: "전문 해석",
              description: "검사 결과를 종합적으로 분석하여 전문적인 해석 보고서를 작성합니다.",
            },
            {
              icon: FileText,
              title: "결과 상담",
              description: "검사 결과를 바탕으로 1:1 상담을 통해 자세한 설명과 안내를 드립니다.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Test List */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tests.map((test, index) => (
            <motion.div
              key={test.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.15 }}
            >
              <Card className="h-full border-border/50">
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-primary">{test.subtitle}</p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{test.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {test.description}
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {test.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>대상: <strong className="text-foreground">{test.target}</strong></span>
                    <span>소요시간: <strong className="text-foreground">{test.duration}</strong></span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            검사 예약 및 문의
          </h2>
          <p className="mt-3 text-muted-foreground">
            검사 종류와 일정에 대해 궁금하신 점이 있으시면 편하게 문의해 주세요.
          </p>
          <Button asChild size="lg" className="mt-6 gap-2">
            <Link href="/contact">
              검사 예약하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
