"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Users,
  TrendingUp,
  RefreshCw,
  Download,
  Instagram,
  Youtube,
  MessageCircle,
  FileText,
  ArrowRight,
  Check,
  Filter,
} from "lucide-react"

export default function InflistLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [activeFilter, setActiveFilter] = useState("다이소 뷰티 제품 리뷰 Top30")
  const [activeTab, setActiveTab] = useState("instagram")

  // 애니메이션을 위한 카운터 상태
  const [counters, setCounters] = useState({
    influencers: 0,
    engagement: 0,
    followers: 0,
  })

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHome = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요"
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요"
    }

    if (!formData.type) {
      newErrors.type = "유형을 선택해주세요"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
    }
  }

  // 탭 변경 시 카운터 애니메이션
  useEffect(() => {
    const targetValues = {
      instagram: { influencers: 2847, engagement: 4.2, followers: 1.2 },
      tiktok: { influencers: 1923, engagement: 8.7, followers: 3.4 },
      youtube: { influencers: 1456, engagement: 3.1, followers: 0.89 },
      blog: { influencers: 3201, engagement: 2.8, followers: 0.045 },
    }

    const target = targetValues[activeTab as keyof typeof targetValues]

    const duration = 1000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounters({
        influencers: Math.floor(target.influencers * progress),
        engagement: Number((target.engagement * progress).toFixed(1)),
        followers: Number((target.followers * progress).toFixed(2)),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [activeTab])

  const platformData = {
    instagram: {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      color: "from-purple-500 to-pink-500",
    },
    tiktok: {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "TikTok",
      color: "from-gray-900 to-gray-700",
    },
    youtube: {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      color: "from-red-600 to-red-500",
    },
    blog: {
      icon: <FileText className="w-6 h-6" />,
      name: "Blog",
      color: "from-green-600 to-green-500",
    },
  }

  const filterOptions = [
    "다이소 뷰티 제품 리뷰 Top30",
    "올리브영 뷰티 리뷰 Top30",
    "국내 느좋 패션 인플루언서",
    "국내 핀터 느낌 패션 인플루언서",
  ]

  const dummyInfluencers = [
    {
      id: 1,
      name: "김뷰티",
      handle: "@kim_beauty",
      followers: "1.2M",
      engagement: "4.5%",
      platform: "instagram",
      avatar: "🧴",
    },
    {
      id: 2,
      name: "박패션",
      handle: "@park_fashion",
      followers: "890K",
      engagement: "6.2%",
      platform: "tiktok",
      avatar: "👗",
    },
    {
      id: 3,
      name: "이메이크업",
      handle: "@lee_makeup",
      followers: "650K",
      engagement: "3.8%",
      platform: "youtube",
      avatar: "💄",
    },
    {
      id: 4,
      name: "최스타일",
      handle: "@choi_style",
      followers: "45K",
      engagement: "7.1%",
      platform: "blog",
      avatar: "✨",
    },
    {
      id: 5,
      name: "정뷰티",
      handle: "@jung_beauty",
      followers: "320K",
      engagement: "5.3%",
      platform: "instagram",
      avatar: "🌸",
    },
    {
      id: 6,
      name: "한패션",
      handle: "@han_fashion",
      followers: "780K",
      engagement: "4.9%",
      platform: "tiktok",
      avatar: "👠",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* 배경 글래스 효과 */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/20 via-blue-100/10 to-purple-100/20 backdrop-blur-3xl"></div>

      {/* Hero 섹션 */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>

        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full p-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            한눈에 보는 K-인플루언서, Inflist
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed font-light">
            TikTok·YouTube·Instagram·Blog 인기 인플루언서를
            <br />
            심플하게 비교하세요
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 backdrop-blur-lg border border-[#1DA1F2]/30 text-[#1DA1F2] px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
          >
            웨이팅 리스트 등록
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* 플랫폼 탭 & 주요 기능 요약 섹션 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              플랫폼별 인플루언서 현황
            </h2>
            <p className="text-xl text-gray-600">실시간으로 업데이트되는 인플루언서 데이터를 확인하세요</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2">
              {Object.entries(platformData).map(([key, platform]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-3 py-4 px-6 rounded-xl data-[state=active]:bg-white/20 data-[state=active]:backdrop-blur-lg transition-all duration-300"
                >
                  {platform.icon}
                  <span className="font-medium">{platform.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(platformData).map(([key, platform]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl hover:bg-white/15 transition-all duration-500">
                    <CardHeader className="pb-8">
                      <div className={`bg-gradient-to-r ${platform.color} text-white p-8 rounded-2xl mb-6`}>
                        <div className="flex items-center gap-4 mb-6">
                          {platform.icon}
                          <h3 className="text-3xl font-bold">{platform.name} 현황</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-3xl font-bold">{counters.influencers.toLocaleString()}</div>
                            <div className="text-sm opacity-90 mt-1">등록 인플루언서</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{counters.engagement}%</div>
                            <div className="text-sm opacity-90 mt-1">평균 참여율</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{counters.followers}M</div>
                            <div className="text-sm opacity-90 mt-1">최고 팔로워</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <div className="space-y-6">
                    {[
                      { icon: <Users className="w-8 h-8 text-blue-500" />, text: "팔로워 수 순위 정렬" },
                      { icon: <TrendingUp className="w-8 h-8 text-green-500" />, text: "참여율·평균 조회수 표시" },
                      { icon: <RefreshCw className="w-8 h-8 text-purple-500" />, text: "하루 1회 자동 업데이트" },
                      { icon: <Download className="w-8 h-8 text-orange-500" />, text: "CSV 다운로드 지원" },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        {feature.icon}
                        <span className="text-lg font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 크롤링 인플루언서 리스트 섹션 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-xl"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              실시간 인플루언서 리스트
            </h2>
            <p className="text-xl text-gray-600">최신 크롤링 데이터 기반 실시간 업데이트</p>
          </div>

          {/* 필터 바 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-6 h-6 text-gray-600" />
              <span className="text-lg font-medium text-gray-700">필터 선택:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* 인플루언서 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyInfluencers.map((influencer) => (
              <Card
                key={influencer.id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl hover:bg-white/15 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{influencer.avatar}</div>
                  <CardTitle className="text-xl font-bold">{influencer.name}</CardTitle>
                  <CardDescription className="text-gray-600">{influencer.handle}</CardDescription>
                  <Badge
                    className={`w-fit mx-auto mt-2 ${
                      influencer.platform === "instagram"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : influencer.platform === "tiktok"
                          ? "bg-black"
                          : influencer.platform === "youtube"
                            ? "bg-red-600"
                            : "bg-green-600"
                    }`}
                  >
                    {platformData[influencer.platform as keyof typeof platformData].name}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="text-gray-600">팔로워</span>
                    <span className="font-bold text-lg">{influencer.followers}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="text-gray-600">참여율</span>
                    <span className="font-bold text-lg text-green-600">{influencer.engagement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 사용 시나리오 예시 섹션 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              사용 시나리오
            </h2>
            <p className="text-xl text-gray-600">마케터들이 Inflist를 어떻게 활용하는지 확인해보세요</p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8">
            {[
              {
                step: 1,
                title: "플랫폼 선택",
                description: "원하는 플랫폼 탭을 클릭하여 해당 플랫폼의 인플루언서 목록을 확인합니다.",
                emoji: "📱",
              },
              {
                step: 2,
                title: "필터 적용",
                description: "필터 바에서 '다이소 뷰티 제품 리뷰 Top30' 등을 선택하여 리스트를 갱신합니다.",
                emoji: "🔍",
              },
              {
                step: 3,
                title: "인플루언서 비교",
                description: "비주얼 카드로 인플루언서들의 주요 메트릭을 직관적으로 비교할 수 있습니다.",
                emoji: "📊",
              },
              {
                step: 4,
                title: "데이터 다운로드",
                description: "CSV 형태로 데이터를 다운로드하여 더 자세한 분석을 진행할 수 있습니다.",
                emoji: "💾",
              },
            ].map((scenario) => (
              <Card
                key={scenario.step}
                className="min-w-[350px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl hover:bg-white/15 transition-all duration-500"
              >
                <CardHeader className="text-center pb-6">
                  <div className="text-6xl mb-6">{scenario.emoji}</div>
                  <Badge variant="outline" className="w-fit mx-auto mb-4 bg-white/20 backdrop-blur-lg">
                    Step {scenario.step}
                  </Badge>
                  <CardTitle className="text-2xl font-bold">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg leading-relaxed">
                    {scenario.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 가격 정책 섹션 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 backdrop-blur-xl"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              가격 정책
            </h2>
            <p className="text-xl text-gray-600">필요에 맞는 플랜을 선택하세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "무료",
                description: "개인 사용자를 위한 기본 플랜",
                features: ["월 10회 검색", "기본 필터링", "팔로워 수 정렬", "커뮤니티 지원"],
                cta: "시작하기",
                popular: false,
              },
              {
                name: "Pro",
                price: "월 29,000원",
                description: "마케터와 소규모 팀을 위한 플랜",
                features: ["무제한 검색", "고급 필터링", "CSV 다운로드", "참여율 분석", "이메일 지원"],
                cta: "지금 시작하기",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "문의",
                description: "대기업과 에이전시를 위한 플랜",
                features: ["모든 Pro 기능", "API 접근", "맞춤 리포트", "전담 매니저", "24/7 지원"],
                cta: "문의하기",
                popular: false,
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl hover:bg-white/15 transition-all duration-500 ${plan.popular ? "border-[#1DA1F2]/50 shadow-2xl" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1DA1F2] to-blue-600 text-white px-6 py-2 rounded-full">
                    인기
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold mb-4">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#1DA1F2] mb-4">{plan.price}</div>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToForm}
                    className={`w-full py-4 text-lg rounded-2xl transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#1DA1F2] to-blue-600 hover:from-[#1a91da] hover:to-blue-700 text-white shadow-lg"
                        : "bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 웨이팅 리스트 등록 폼 */}
      <section id="waitlist-form" className="py-24 relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            {!isSubmitted ? (
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold mb-4">웨이팅 리스트 등록</CardTitle>
                  <CardDescription className="text-lg">출시 소식을 가장 먼저 받아보세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="이름"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-4 px-6 text-lg ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="이메일"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-4 px-6 text-lg ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                    </div>

                    <div>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger
                          className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-4 px-6 text-lg ${errors.type ? "border-red-500" : ""}`}
                        >
                          <SelectValue placeholder="유형을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl">
                          <SelectItem value="marketer">마케터</SelectItem>
                          <SelectItem value="individual">개인</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.type && <p className="text-red-500 text-sm mt-2">{errors.type}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1DA1F2] to-blue-600 hover:from-[#1a91da] hover:to-blue-700 text-white py-4 text-lg rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
                      disabled={!formData.name || !formData.email || !formData.type}
                    >
                      등록하기
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl">
                <CardContent className="text-center py-16">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
                  <h3 className="text-3xl font-bold mb-6">🎉 웨이팅 리스트 등록 완료!</h3>
                  <p className="text-xl text-gray-600 mb-8">출시되면 가장 먼저 알려드릴게요.</p>
                  <Button
                    onClick={scrollToHome}
                    className="bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 px-8 py-4 text-lg rounded-2xl transition-all duration-300"
                  >
                    홈으로 돌아가기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Inflist
            </h3>
            <p className="text-lg text-gray-600 mb-8">한눈에 보는 K-인플루언서 플랫폼</p>
            <div className="flex justify-center gap-6 mb-8">
              {[Instagram, Youtube, MessageCircle].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center opacity-50 hover:opacity-75 transition-opacity"
                >
                  <Icon className="w-6 h-6" />
                </div>
              ))}
            </div>
            <p className="text-gray-500">© 2025 Inflist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
