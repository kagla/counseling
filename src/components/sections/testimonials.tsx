"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content:
      "오랫동안 우울감에 시달렸는데, 마음숲 상담을 통해 조금씩 변화하고 있습니다. 상담사님이 진심으로 경청해주시는 느낌이 들어 마음이 편안합니다.",
    author: "김○○",
    info: "개인상담 · 30대",
    rating: 5,
  },
  {
    content:
      "부부 사이의 소통 문제로 찾아왔는데, 서로를 이해하는 방법을 배울 수 있었어요. 지금은 훨씬 더 건강한 관계를 유지하고 있습니다.",
    author: "이○○",
    info: "부부상담 · 40대",
    rating: 5,
  },
  {
    content:
      "아이의 학교 부적응으로 걱정이 많았는데, 놀이치료와 부모상담을 병행하니 아이가 눈에 띄게 밝아졌어요. 정말 감사합니다.",
    author: "박○○",
    info: "아동상담 · 학부모",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            내담자 후기
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            마음숲과 함께 변화를 경험하신 분들의 이야기입니다.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="flex flex-col gap-4 p-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {testimonial.content}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.info}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
