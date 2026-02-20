"use client";

import { motion } from "framer-motion";
import {
  User,
  HeartHandshake,
  Baby,
  Users,
  Brain,
  Stethoscope,
  Puzzle,
  Flower2,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    id: "individual",
    icon: User,
    title: "개인상담",
    subtitle: "Individual Counseling",
    badge: "인기",
    description:
      "우울, 불안, 스트레스, 자존감, 대인관계, 진로 등 개인이 겪는 다양한 심리적 어려움을 전문 상담사와 1:1로 함께 탐색하고 해결합니다.",
    details: [
      "우울감, 무기력",
      "불안, 공황장애",
      "대인관계 어려움",
      "자존감, 자기이해",
      "스트레스 관리",
      "진로 및 적성",
      "감정 조절",
      "삶의 의미 탐색",
    ],
    duration: "50분",
    frequency: "주 1회",
  },
  {
    id: "couple",
    icon: HeartHandshake,
    title: "부부·커플 상담",
    subtitle: "Couple Counseling",
    badge: null,
    description:
      "부부 또는 연인 간의 갈등, 소통 문제, 신뢰 회복 등을 함께 다루며 건강한 관계를 재건합니다.",
    details: [
      "부부 갈등",
      "의사소통 문제",
      "신뢰 회복",
      "외도 후 관계 회복",
      "성격 차이",
      "이혼 상담",
      "재혼 가정 적응",
      "결혼 전 상담",
    ],
    duration: "80분",
    frequency: "주 1회 또는 격주",
  },
  {
    id: "child",
    icon: Baby,
    title: "아동·청소년 상담",
    subtitle: "Child & Adolescent Counseling",
    badge: null,
    description:
      "놀이치료, 미술치료, 인지행동치료 등 다양한 접근을 통해 아이들의 건강한 성장과 발달을 돕습니다.",
    details: [
      "정서 및 행동 문제",
      "학교 부적응",
      "또래관계 어려움",
      "ADHD",
      "분리불안",
      "학습 어려움",
      "놀이치료",
      "부모상담 병행",
    ],
    duration: "50분",
    frequency: "주 1~2회",
  },
  {
    id: "family",
    icon: Users,
    title: "가족상담",
    subtitle: "Family Counseling",
    badge: null,
    description:
      "가족 구성원 간의 갈등을 해소하고, 서로에 대한 이해와 소통을 증진시켜 건강한 가족 관계를 만들어갑니다.",
    details: [
      "부모-자녀 갈등",
      "가족 간 소통 문제",
      "가족 구조 변화",
      "가정 내 폭력",
      "형제/자매 갈등",
      "다문화 가정",
    ],
    duration: "80분",
    frequency: "격주 또는 월 1회",
  },
  {
    id: "trauma",
    icon: Stethoscope,
    title: "트라우마 치료",
    subtitle: "Trauma Therapy",
    badge: "전문",
    description:
      "EMDR, 인지처리치료(CPT) 등 과학적으로 검증된 방법을 활용하여 트라우마 경험을 안전하게 치유합니다.",
    details: [
      "PTSD(외상 후 스트레스 장애)",
      "EMDR 치료",
      "복합 트라우마",
      "사고/재난 경험",
      "아동기 트라우마",
      "성폭력·가정폭력 피해",
    ],
    duration: "50~80분",
    frequency: "주 1~2회",
  },
  {
    id: "group",
    icon: Puzzle,
    title: "집단상담",
    subtitle: "Group Counseling",
    badge: null,
    description:
      "비슷한 고민을 가진 사람들이 함께 모여 서로의 경험을 나누며 치유와 성장을 경험합니다.",
    details: [
      "대인관계 능력 향상",
      "자기성장 프로그램",
      "스트레스 관리",
      "분노 조절",
      "자존감 향상",
      "마음챙김 명상",
    ],
    duration: "90분",
    frequency: "주 1회 (8~12회기)",
  },
  {
    id: "art",
    icon: Flower2,
    title: "예술치료",
    subtitle: "Art Therapy",
    badge: null,
    description:
      "미술, 음악, 모래놀이 등 예술 매체를 활용하여 언어로 표현하기 어려운 내면의 감정을 탐색하고 치유합니다.",
    details: [
      "미술치료",
      "음악치료",
      "모래놀이치료",
      "이미지 표현치료",
      "아동 예술치료",
      "성인 예술치료",
    ],
    duration: "50분",
    frequency: "주 1회",
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">Programs</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            상담 프로그램
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            다양한 심리적 어려움에 맞는 전문 상담 프로그램을 운영하고 있습니다.
            <br />
            각 프로그램은 과학적으로 검증된 상담 이론에 기반하여 진행됩니다.
          </p>
        </motion.div>
      </section>

      {/* Programs */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden border-border/50">
                <div className="grid md:grid-cols-3">
                  {/* Left: Title and Icon */}
                  <div className="flex flex-col justify-center bg-primary/5 p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <program.icon className="h-6 w-6" />
                      </div>
                      {program.badge && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {program.badge}
                        </Badge>
                      )}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-foreground">
                      {program.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {program.subtitle}
                    </p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">상담시간:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">권장빈도:</span>
                        <span className="font-medium">{program.frequency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description and Details */}
                  <div className="p-8 md:col-span-2 md:p-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-6">
                      <h3 className="mb-3 text-sm font-semibold text-foreground">
                        상담 영역
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {program.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
