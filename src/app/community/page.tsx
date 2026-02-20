"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "상담을 처음 받는데, 어떻게 시작하나요?",
    answer:
      "전화(02-1234-5678) 또는 온라인 예약을 통해 상담을 신청하시면 됩니다. 첫 상담(초기면담)에서는 현재의 어려움과 상담 목표를 함께 이야기하며, 적합한 상담 프로그램을 안내해 드립니다.",
  },
  {
    question: "상담 비용은 어떻게 되나요?",
    answer:
      "상담 유형과 시간에 따라 비용이 다릅니다. 개인상담(50분)은 10~15만원, 부부상담(80분)은 15~20만원 선입니다. 심리검사는 검사 종류에 따라 별도 안내드립니다. 자세한 비용은 전화 문의 부탁드립니다.",
  },
  {
    question: "상담 내용이 외부에 공개되나요?",
    answer:
      "절대 공개되지 않습니다. 모든 상담 내용은 「심리상담사 윤리강령」과 「개인정보보호법」에 의해 철저히 보호됩니다. 내담자의 동의 없이는 어떠한 정보도 외부에 제공하지 않습니다.",
  },
  {
    question: "상담은 보통 몇 회 정도 받아야 하나요?",
    answer:
      "상담 횟수는 개인의 상황과 목표에 따라 달라집니다. 일반적으로 단기상담은 8~12회, 장기상담은 6개월 이상 진행될 수 있습니다. 초기면담 후 상담사와 함께 상담 계획을 세우게 됩니다.",
  },
  {
    question: "예약 취소나 변경은 어떻게 하나요?",
    answer:
      "상담 예약일 하루 전(24시간 전)까지 전화 또는 카카오톡으로 취소/변경이 가능합니다. 당일 취소 시에는 상담비의 50%가 부과될 수 있으니 참고 부탁드립니다.",
  },
  {
    question: "온라인(비대면) 상담도 가능한가요?",
    answer:
      "네, 가능합니다. Zoom 등 화상통화를 통한 비대면 상담을 진행하고 있습니다. 지방이나 해외 거주자, 이동이 불편하신 분들도 편안하게 상담받으실 수 있습니다.",
  },
  {
    question: "심리검사만 받을 수도 있나요?",
    answer:
      "네, 심리검사만 따로 받으실 수 있습니다. 검사 실시 후 전문 상담사가 결과를 해석하여 자세한 설명 상담을 진행합니다. 검사 결과에 따라 상담이 필요한 경우 안내해 드립니다.",
  },
  {
    question: "어떤 상담사가 저에게 맞을지 모르겠어요.",
    answer:
      "초기 상담 시 센터에서 내담자분의 상황과 필요에 맞는 전문 상담사를 배정해 드립니다. 상담 진행 중 상담사 변경도 가능하니 부담 없이 말씀해 주세요.",
  },
];

const notices = [
  {
    id: 1,
    title: "2026년 3월 집단상담 프로그램 참여자 모집",
    date: "2026-02-15",
    badge: "모집",
    content: "자기성장을 위한 집단상담 프로그램 참여자를 모집합니다. 8주 과정으로 진행되며, 선착순 8명으로 마감됩니다.",
  },
  {
    id: 2,
    title: "설 연휴 휴무 안내 (1/27 ~ 1/30)",
    date: "2026-01-20",
    badge: "공지",
    content: "설 연휴 기간 중 센터 운영이 중단됩니다. 1/31(금)부터 정상 운영합니다.",
  },
  {
    id: 3,
    title: "마음숲 심리상담센터 강남점 이전 안내",
    date: "2026-01-10",
    badge: "안내",
    content: "강남점이 테헤란로 123 마음숲 빌딩 5층으로 이전했습니다. 더욱 쾌적한 환경에서 상담을 받으실 수 있습니다.",
  },
  {
    id: 4,
    title: "심리검사 10% 할인 이벤트 (2월 한정)",
    date: "2026-02-01",
    badge: "이벤트",
    content: "2월 한 달간 종합 심리검사 10% 할인 이벤트를 진행합니다. 자신을 깊이 이해하는 기회를 놓치지 마세요.",
  },
];

export default function CommunityPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">Community</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            커뮤니티
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            공지사항과 자주 묻는 질문을 확인하세요.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faq" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              자주 묻는 질문
            </TabsTrigger>
            <TabsTrigger value="notices" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              공지사항
            </TabsTrigger>
          </TabsList>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* Notices */}
          <TabsContent value="notices" className="mt-8">
            <div className="space-y-4">
              {notices.map((notice) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-xs text-primary"
                            >
                              {notice.badge}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {notice.date}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {notice.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {notice.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
