import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-lg font-bold">마음숲 심리상담센터</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              당신의 마음에 평온한 숲길을 만들어드립니다.
              <br />
              전문 심리상담사가 함께하는 안전한 치유의 공간입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">바로가기</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                센터소개
              </Link>
              <Link href="/programs" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                상담 프로그램
              </Link>
              <Link href="/tests" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                심리검사
              </Link>
              <Link href="/counselors" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                상담사 소개
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                상담예약
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">02-1234-5678</p>
                  <p className="text-xs text-muted-foreground">상담 전화</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">counsel@maumsup.kr</p>
                  <p className="text-xs text-muted-foreground">이메일 문의</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">서울특별시 강남구 테헤란로 123</p>
                  <p className="text-xs text-muted-foreground">마음숲 빌딩 5층</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">운영시간</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">평일</span>
                    <span className="font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">토요일</span>
                    <span className="font-medium">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">일·공휴일</span>
                    <span className="font-medium text-destructive">휴무</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>&copy; 2026 마음숲 심리상담센터. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-primary">개인정보처리방침</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
