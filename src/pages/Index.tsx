
import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import BootcampRanking from '@/components/BootcampRanking';
import RecentProjects from '@/components/RecentProjects';
import { TrendingUp, Sparkles, Coffee } from 'lucide-react';

const Index = () => {
  // 샘플 데이터
  const featuredProjects = [
    {
      id: "1",
      title: "AI 챗봇 기반 고객 서비스 플랫폼",
      description: "자연어 처리를 활용한 스마트 고객 상담 시스템으로, 24시간 실시간 응답이 가능합니다.",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      bootcamp: "코드스테이츠",
      techStack: ["React", "Node.js", "OpenAI", "MongoDB"],
      likes: 234,
      views: 1520,
      teamSize: 4,
      timeAgo: "2일 전"
    },
    {
      id: "2", 
      title: "실시간 협업 코딩 에디터",
      description: "개발자들이 실시간으로 협업할 수 있는 온라인 코드 에디터입니다.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      bootcamp: "엘리스",
      techStack: ["Vue.js", "Socket.io", "Express", "Redis"],
      likes: 189,
      views: 892,
      teamSize: 3,
      timeAgo: "1일 전"
    },
    {
      id: "3",
      title: "모바일 헬스케어 트래킹 앱",
      description: "운동, 식단, 수면 패턴을 종합적으로 관리하는 건강 관리 앱입니다.",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      bootcamp: "패스트캠퍼스",
      techStack: ["Flutter", "Firebase", "Dart", "ML Kit"],
      likes: 156,
      views: 734,
      teamSize: 2,
      timeAgo: "3일 전"
    },
    {
      id: "4",
      title: "블록체인 기반 NFT 마켓플레이스",
      description: "아티스트와 컬렉터를 위한 안전하고 투명한 NFT 거래 플랫폼입니다.",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      bootcamp: "스파르타코딩클럽",
      techStack: ["React", "Solidity", "Web3.js", "IPFS"],
      likes: 298,
      views: 1834,
      teamSize: 5,
      timeAgo: "1주 전"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            부트캠프 수료생들의
            <br />
            <span className="text-yellow-300">프로젝트 아카이브</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            동료들의 프로젝트를 탐색하고, 영감을 얻고, 함께 성장하세요.
            <br />
            당신의 포트폴리오도 여기서 빛을 발할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              프로젝트 둘러보기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              내 프로젝트 등록하기
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Projects Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">이번 주 인기 프로젝트</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              전체 보기 →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} featured={true} />
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bootcamp Ranking */}
          <div className="lg:col-span-1">
            <BootcampRanking />
          </div>

          {/* Right Column - Recent Projects */}
          <div className="lg:col-span-2">
            <RecentProjects />
          </div>
        </div>

        {/* Stats Section */}
        <section className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">DevArchive와 함께하는 성장</h2>
            <p className="text-gray-600">개발자들의 학습과 성장을 돕는 플랫폼</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2,847</h3>
              <p className="text-gray-600">등록된 프로젝트</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,203</h3>
              <p className="text-gray-600">활발한 개발자</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">47</h3>
              <p className="text-gray-600">연결된 부트캠프</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevArchive</span>
            </div>
            <p className="text-gray-400">
              © 2024 DevArchive. 부트캠프 수료생들의 성장을 응원합니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
