"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      counselingType: formData.get("counselingType"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("예약 중 오류가 발생했습니다. 전화로 문의해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium text-primary">Contact</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            상담 예약 및 문의
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            아래 양식을 작성해 주시면 빠른 시일 내에 연락드리겠습니다.
            <br />
            전화 상담도 가능합니다.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "전화 상담",
                content: "02-1234-5678",
                sub: "평일 09:00 - 20:00",
              },
              {
                icon: Mail,
                title: "이메일",
                content: "counsel@maumsup.kr",
                sub: "24시간 접수 가능",
              },
              {
                icon: MapPin,
                title: "오시는 길",
                content: "서울특별시 강남구 테헤란로 123",
                sub: "마음숲 빌딩 5층 (강남역 3번 출구 도보 5분)",
              },
              {
                icon: Clock,
                title: "운영시간",
                content: "평일 09:00 - 20:00",
                sub: "토요일 10:00 - 17:00 / 일·공휴일 휴무",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {item.content}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center"
              >
                <CheckCircle className="h-16 w-16 text-primary" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  예약이 접수되었습니다
                </h3>
                <p className="mt-2 text-muted-foreground">
                  빠른 시일 내에 확인 후 연락드리겠습니다.
                  <br />
                  긴급한 문의는 전화로 연락 부탁드립니다.
                </p>
                <Button onClick={() => setSubmitted(false)} className="mt-6">
                  다시 예약하기
                </Button>
              </motion.div>
            ) : (
              <Card className="border-border/50">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-foreground">상담 예약</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    아래 양식을 작성해 주세요. * 표시는 필수 항목입니다.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">이름 *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="홍길동"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">연락처 *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="010-0000-0000"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="counselingType">상담 유형 *</Label>
                      <Select name="counselingType" required>
                        <SelectTrigger>
                          <SelectValue placeholder="상담 유형을 선택해 주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">개인상담</SelectItem>
                          <SelectItem value="couple">부부·커플 상담</SelectItem>
                          <SelectItem value="child">아동·청소년 상담</SelectItem>
                          <SelectItem value="family">가족상담</SelectItem>
                          <SelectItem value="trauma">트라우마 치료</SelectItem>
                          <SelectItem value="group">집단상담</SelectItem>
                          <SelectItem value="art">예술치료</SelectItem>
                          <SelectItem value="test">심리검사</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">희망 날짜 *</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">희망 시간 *</Label>
                        <Select name="preferredTime" required>
                          <SelectTrigger>
                            <SelectValue placeholder="시간 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="13:00">13:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="17:00">17:00</SelectItem>
                            <SelectItem value="18:00">18:00</SelectItem>
                            <SelectItem value="19:00">19:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">상담 내용 및 문의사항</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="상담 받고 싶은 내용이나 문의사항을 자유롭게 작성해 주세요."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        "접수 중..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          상담 예약하기
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      * 예약 접수 후 상담사 확인을 거쳐 확정 연락을 드립니다.
                      <br />* 개인정보는 상담 목적으로만 사용되며, 철저히 보호됩니다.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-border/50">
          <div className="flex h-[400px] items-center justify-center bg-muted/50">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium text-muted-foreground">
                서울특별시 강남구 테헤란로 123
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                마음숲 빌딩 5층 | 강남역 3번 출구 도보 5분
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
