
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, BookOpen, Star, Github, ExternalLink, Upload, Heart, Eye, MessageCircle, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  // Mock data for recent projects
  const recentProjects = [
    {
      id: 1,
      title: "AI 챗봇 기반 고객 서비스 플랫폼",
      description: "자연어 처리를 활용한 스마트 고객 상담 시스템. OpenAI API를 활용하여 실시간 응답이 가능합니다.",
      author: "김개발",
      bootcamp: "코드스테이츠",
      techStack: ["React", "Node.js", "OpenAI", "+1"],
      likes: 234,
      views: 1620,
      comments: 48,
      period: "2개월"
    },
    {
      id: 2,
      title: "실시간 협업 코딩 에디터",
      description: "개발자들이 동시에 협업할 수 있는 온라인 코딩 에디터입니다.",
      author: "이코딩",
      bootcamp: "우아한테크코스",
      techStack: ["Vue.js", "Socket.io", "Express", "+1"],
      likes: 189,
      views: 892,
      comments: 33,
      period: "1개월"
    },
    {
      id: 3,
      title: "모바일 헬스케어 트래킹 앱",
      description: "운동, 식단, 수면 패턴을 종합적으로 관리하는 모바일 헬스케어 앱입니다.",
      author: "박헬스",
      bootcamp: "엘리스",
      techStack: ["Flutter", "Firebase", "Dart", "+1"],
      likes: 156,
      views: 734,
      comments: 29,
      period: "3개월"
    },
    {
      id: 4,
      title: "블록체인 기반 NFT 마켓플레이스",
      description: "이더리움 블록체인을 기반으로 구현한 NFT 거래 플랫폼입니다.",
      author: "최블록",
      bootcamp: "스파르타코딩클럽",
      techStack: ["React", "Solidity", "Web3.js", "+1"],
      likes: 298,
      views: 1834,
      comments: 56,
      period: "1주간"
    }
  ];

  // Mock data for bootcamp ranking
  const bootcampRanking = [
    { rank: 1, name: "코드스테이츠", projects: 1240, badge: "HOT" },
    { rank: 2, name: "우아한테크코스", projects: 987 },
    { rank: 3, name: "네이버 부스트캠프", projects: 623, badge: "HOT" },
    { rank: 4, name: "스파르타코딩클럽", projects: 756 },
    { rank: 5, name: "플레이데이터", projects: 643 }
  ];

  // Mock data for popular projects
  const popularProjects = [
    {
      title: "AI 기반 블로그 아티클 모니터링 시스템",
      author: "김개발",
      bootcamp: "코드스테이츠",
      period: "3개월 전",
      techStack: ["React", "Node.js", "TensorFlow"],
      isNew: true
    },
    {
      title: "실시간 협업 화이트보드 플랫폼",
      author: "이협업",
      bootcamp: "우아한테크코스", 
      period: "2개월 전",
      techStack: ["Vue.js", "Socket.io", "MongoDB"],
      isNew: true
    },
    {
      title: "블록체인 기반 투표 시스템",
      author: "박블록",
      bootcamp: "데이스쿨",
      period: "1개월 전",
      techStack: ["Solidity", "Web3.js", "React"],
      isNew: false
    },
    {
      title: "커뮤니티 기반 중고거래 앱",
      author: "최거래",
      bootcamp: "스파르타코딩클럽",
      period: "1개월 전",
      techStack: ["Flutter", "Firebase", "Dart"],
      isNew: false
    },
    {
      title: "데이터 시각화 대시보드",
      author: "김데이터",
      bootcamp: "플레이데이터",
      period: "2개월 전",
      techStack: ["D3.js", "Python", "FastAPI"],
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            부트캠프 수료생들의
            <br />
            <span className="text-yellow-300">프로젝트 아카이브</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            동료들의 프로젝트를 탐색하고, 영감을 얻고, 함께 성장하세요.
            <br />
            당신의 포트폴리오도 여기서 빛을 발할 수 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/explore">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-medium">
                프로젝트 둘러보기
              </Button>
            </Link>
            <Link to="/project/register">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-medium border-white text-white hover:bg-white/10">
                내 프로젝트 등록하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Recent Projects Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              이번 주 인기 프로젝트
            </h2>
            <Link to="/explore">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                전체 보기 →
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg relative">
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {project.bootcamp}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {project.likes}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {project.views}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {project.comments}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bootcamp Ranking */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  주목받는 부트캠프
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {bootcampRanking.map((bootcamp) => (
                  <div key={bootcamp.rank} className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 font-semibold text-sm">
                      {bootcamp.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-medium">{bootcamp.name}</span>
                        {bootcamp.badge && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            {bootcamp.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        프로젝트 {bootcamp.projects.toLocaleString()}개
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      프로젝트 보기 →
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Popular Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  많이 즐겨찾는 프로젝트
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {popularProjects.map((project, index) => (
                  <div key={index} className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm flex items-center">
                        {project.title}
                        {project.isNew && (
                          <Badge variant="outline" className="ml-2 text-xs text-green-600 border-green-600">
                            NEW
                          </Badge>
                        )}
                      </h3>
                      <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500 cursor-pointer" />
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      {project.author} · {project.bootcamp} · {project.period}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="p-4 text-center">
                  <Button variant="ghost" className="text-blue-600">
                    더 많은 프로젝트 보기 →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="mt-16 py-12 bg-white rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">DevArchive와 함께하는 성장</h2>
            <p className="text-gray-600">개발자들의 학습과 성장을 돕는 플랫폼</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,847</div>
              <div className="text-gray-600">등록된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,203</div>
              <div className="text-gray-600">활발한 개발자</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">47</div>
              <div className="text-gray-600">연결된 부트캠프</div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">DevArchive</span>
          </div>
          <p className="text-gray-400">
            © 2024 DevArchive. 부트캠프 수료생들의 성장을 응원합니다.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
