"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  BarChart3,
  Search,
  Heart,
  RefreshCw,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Youtube,
  MessageCircle,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InflistLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("tiktok")

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const platforms = [
    { id: "tiktok", name: "TikTok", icon: "🎵", color: "bg-black" },
    { id: "youtube", name: "YouTube", icon: <Youtube className="w-4 h-4" />, color: "bg-red-600" },
    {
      id: "instagram",
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    { id: "blog", name: "Blog", icon: <Globe className="w-4 h-4" />, color: "bg-blue-600" },
  ]

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "실시간 데이터 분석",
      description: "팔로워 수, 참여율, 평균 조회수 등 핵심 메트릭을 실시간으로 확인하세요.",
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: "스마트 검색 & 필터",
      description: "카테고리별 분류와 플랫폼 필터로 원하는 인플루언서를 빠르게 찾아보세요.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      title: "자동 업데이트",
      description: "하루 1회 자동 업데이트로 항상 최신 데이터를 제공합니다.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "즐겨찾기 관리",
      description: "관심 있는 인플루언서를 즐겨찾기에 추가하고 쉽게 관리하세요.",
    },
  ]

  const testimonials = [
    {
      name: "김마케터",
      role: "디지털 마케팅 매니저",
      company: "스타트업 A",
      content: "인플리스트 덕분에 캠페인 ROI가 300% 향상되었습니다. 데이터 기반 의사결정이 이렇게 쉬울 줄 몰랐어요!",
      rating: 5,
    },
    {
      name: "박에이전시",
      role: "마케팅 에이전시 대표",
      company: "크리에이티브 랩",
      content: "다양한 플랫폼의 인플루언서를 한 곳에서 비교할 수 있어서 업무 효율이 크게 개선되었습니다.",
      rating: 5,
    },
    {
      name: "이브랜드",
      role: "브랜드 마케터",
      company: "패션 브랜드 B",
      content: "진성 팔로워와 가짜 팔로워를 구분해주는 기능이 정말 유용해요. 예산 낭비를 막을 수 있었습니다.",
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "무료",
      period: "",
      description: "개인 사용자를 위한 기본 플랜",
      features: ["기본 인플루언서 검색 & 필터", "월 50회 조회 제한", "내 소셜미디어 분석 기능", "기본 메트릭 확인"],
      cta: "무료 시작하기",
      popular: false,
    },
    {
      name: "Pro",
      price: "29,000원",
      period: "/월",
      description: "마케터와 에이전시를 위한 전문 플랜",
      features: [
        "무제한 조회",
        "CSV 데이터 다운로드",
        "고급 필터 & 검색",
        "마케터 대상 대시보드",
        "인플루언서 다이렉트 연락",
        "진성/가짜 팔로워 분석",
      ],
      cta: "Pro 시작하기",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "5,000,000원",
      period: "/년",
      description: "대기업을 위한 맞춤형 솔루션",
      features: [
        "Pro 플랜의 모든 기능",
        "API 연동 지원",
        "전담 고객 지원",
        "커스텀 대시보드",
        "팀 협업 도구",
        "우선 기술 지원",
      ],
      cta: "문의하기",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">인플리스트</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">
                기능
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-500 transition-colors">
                요금제
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">
                후기
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                문의
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                로그인
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">무료 시작하기</Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#features" className="text-gray-600">
                  기능
                </Link>
                <Link href="#pricing" className="text-gray-600">
                  요금제
                </Link>
                <Link href="#testimonials" className="text-gray-600">
                  후기
                </Link>
                <Link href="#contact" className="text-gray-600">
                  문의
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="justify-start">
                    로그인
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white justify-start">무료 시작하기</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                🚀 인플루언서 마케팅의 새로운 기준
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                데이터로 검증된
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                  인플루언서
                </span>
                를<br />
                찾아보세요
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TikTok, YouTube, Instagram, Blog의 인기 인플루언서를 한눈에 비교하고, 데이터 기반으로 최적의 파트너를
                선택하세요. 캠페인 효율을 극대화하는 스마트한 방법입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                  무료로 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-300 bg-transparent">
                  데모 보기
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  신용카드 불필요
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  5분 내 설정 완료
                </div>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  {/* Platform Tabs */}
                  <div className="flex space-x-2 mb-6 bg-gray-50 p-1 rounded-lg">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setActiveTab(platform.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          activeTab === platform.id
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span className="text-base">{platform.icon}</span>
                        <span>{platform.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Mock Influencer Cards */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                          {i}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">인플루언서 {i}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {(Math.random() * 1000 + 100).toFixed(0)}K
                            </span>
                            <span className="flex items-center">
                              <BarChart3 className="w-4 h-4 mr-1" />
                              {(Math.random() * 10 + 5).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          패션
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-blue-500">10M+</div>
                  <div className="text-sm text-gray-600">인플루언서 데이터</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-green-500">99.9%</div>
                  <div className="text-sm text-gray-600">데이터 정확도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">핵심 기능</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              인플루언서 마케팅을 위한
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                완벽한 도구
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터 기반 의사결정으로 캠페인 효율을 극대화하고, 직관적인 UI로 시간을 절약하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="fade-in border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Highlight */}
          <div className="mt-20 fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">무료 vs 유료 기능 비교</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                        무료 기능
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          기본 인플루언서 데이터 (평균 타겟 연령층, 댓글수, 뷰수)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          카테고리별 Top100 (패션, 뷰티, 홈인테리어, 펫 등)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />내 소셜미디어 분석 기능
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        유료 기능 (Pro/Enterprise)
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          진성/가짜 팔로워 분석
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          마케터 대상 전용 대시보드
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          인플루언서 다이렉트 연락/문의
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Dashboard Preview"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">고객 후기</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              성공한 마케터들의
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                생생한 후기
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in bg-white border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">요금제</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              모든 규모의 비즈니스를 위한
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                맞춤형 요금제
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              무료로 시작해서 비즈니스가 성장함에 따라 업그레이드하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`fade-in relative border-gray-100 hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "border-2 border-blue-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">가장 인기</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <p className="text-gray-600 mb-4">모든 요금제에 포함:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                24/7 고객 지원
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                데이터 보안 보장
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                언제든 취소 가능
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              지금 시작해서 캠페인 효율을
              <br />
              극대화하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              수천 명의 마케터가 이미 인플리스트로 성공적인 캠페인을 진행하고 있습니다.
              <br />
              당신도 지금 시작해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                무료로 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                영업팀과 상담하기
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                무료 체험 14일
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                설정비 없음
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                언제든 취소
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">인플리스트</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                데이터 기반 인플루언서 마케팅 플랫폼으로 캠페인 효율을 극대화하세요.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">제품</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    기능
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    요금제
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    통합
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    도움말 센터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    개발자 문서
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    상태 페이지
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 인플리스트. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                쿠키 정책
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
