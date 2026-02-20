"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const counselors = [
  {
    name: "김지현",
    title: "센터장 · 수석 상담사",
    degree: "상담심리학 박사",
    specialization: ["개인상담", "트라우마치료", "EMDR"],
    certifications: ["한국상담심리학회 상담심리전문가 1급", "EMDR 국제 공인 치료사"],
    introduction:
      "15년간의 임상 경험을 바탕으로, 내담자분들이 자신만의 치유의 힘을 발견할 수 있도록 돕고 있습니다.",
    initial: "김",
  },
  {
    name: "이수진",
    title: "부부·가족 상담 전문",
    degree: "가족치료학 박사",
    specialization: ["부부상담", "가족상담", "이혼상담"],
    certifications: ["한국가족치료학회 가족치료전문가", "Gottman Method 공인 치료사"],
    introduction:
      "부부와 가족이 서로를 이해하고 건강한 관계를 회복할 수 있도록 전문적으로 돕고 있습니다.",
    initial: "이",
  },
  {
    name: "박민호",
    title: "아동·청소년 상담 전문",
    degree: "발달심리학 석사",
    specialization: ["아동상담", "놀이치료", "청소년상담"],
    certifications: ["한국놀이치료학회 놀이치료전문가", "아동상담사 1급"],
    introduction:
      "아이들의 눈높이에서 함께하며, 건강한 성장과 발달을 위한 따뜻한 동반자가 되고자 합니다.",
    initial: "박",
  },
  {
    name: "정하은",
    title: "인지행동치료 전문",
    degree: "임상심리학 석사",
    specialization: ["우울증", "불안장애", "강박증"],
    certifications: ["임상심리전문가", "인지행동치료 전문가"],
    introduction:
      "과학적으로 검증된 인지행동치료를 통해 우울, 불안 등의 정서적 어려움을 극복할 수 있도록 돕고 있습니다.",
    initial: "정",
  },
  {
    name: "최서윤",
    title: "예술치료 전문",
    degree: "미술치료학 석사",
    specialization: ["미술치료", "모래놀이치료", "아동상담"],
    certifications: ["미술치료전문가 1급", "모래놀이치료 전문가"],
    introduction:
      "예술이라는 매체를 통해 말로 다 표현할 수 없는 내면의 감정을 안전하게 탐색하도록 돕습니다.",
    initial: "최",
  },
  {
    name: "한도윤",
    title: "심리검사 · 진로상담 전문",
    degree: "상담심리학 석사",
    specialization: ["심리검사", "진로상담", "성인상담"],
    certifications: ["한국상담심리학회 상담심리전문가 2급", "직업상담사"],
    introduction:
      "전문적인 심리검사와 상담을 통해 자기이해를 돕고, 삶의 방향을 함께 찾아갑니다.",
    initial: "한",
  },
];

export default function CounselorsPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">Our Counselors</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            상담사 소개
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            석·박사 학위 소지, 풍부한 임상 경험을 갖춘 전문 상담사가
            <br />
            당신의 마음 건강을 함께합니다.
          </p>
        </motion.div>
      </section>

      {/* Counselors Grid */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {counselors.map((counselor, index) => (
            <motion.div
              key={counselor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 bg-primary/10 text-primary">
                      <AvatarFallback className="bg-primary/10 text-lg font-bold text-primary">
                        {counselor.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {counselor.name}
                      </h3>
                      <p className="text-sm text-primary">{counselor.title}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    {counselor.degree}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {counselor.introduction}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {counselor.specialization.map((spec) => (
                      <Badge
                        key={spec}
                        variant="secondary"
                        className="bg-primary/10 text-xs text-primary"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1.5 border-t border-border pt-4">
                    {counselor.certifications.map((cert) => (
                      <div
                        key={cert}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Award className="h-3 w-3 shrink-0 text-primary" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
