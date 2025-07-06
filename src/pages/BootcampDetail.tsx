
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { ExternalLink, Users, Calendar, Code, Star, Award, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BootcampDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for bootcamp details
  const bootcampData = {
    ssafy: {
      name: 'SSAFY',
      fullName: '삼성 청년 SW 아카데미',
      logo: '/placeholder.svg',
      website: 'https://www.ssafy.com',
      description: '삼성에서 운영하는 청년 대상 소프트웨어 교육 프로그램으로, 1년간의 집중적인 교육을 통해 실무형 개발자를 양성합니다.',
      stats: {
        totalProjects: 847,
        mainTechs: ['Java', 'Spring', 'Vue.js', 'React'],
        activeMembers: 1250,
        period: '11개월'
      }
    },
    woowacourse: {
      name: '우아한테크코스',
      fullName: '우아한형제들 기술교육',
      logo: '/placeholder.svg',
      website: 'https://woowacourse.github.io/',
      description: '우아한형제들에서 운영하는 개발자 양성 프로그램으로, 10개월 동안 현업 개발자와 함께 실무 중심의 교육을 진행합니다.',
      stats: {
        totalProjects: 324,
        mainTechs: ['Java', 'Spring Boot', 'JavaScript', 'React'],
        activeMembers: 450,
        period: '10개월'
      }
    },
    codestates: {
      name: '코드스테이츠',
      fullName: 'Code States',
      logo: '/placeholder.svg',
      website: 'https://www.codestates.com',
      description: '개발자 부트캠프의 선두주자로, 소프트웨어 엔지니어링 부트캠프를 통해 실무 역량을 갖춘 개발자를 양성합니다.',
      stats: {
        totalProjects: 621,
        mainTechs: ['JavaScript', 'React', 'Node.js', 'Python'],
        activeMembers: 890,
        period: '6개월'
      }
    }
  };

  const currentBootcamp = bootcampData[id as keyof typeof bootcampData] || bootcampData.ssafy;

  // Mock featured projects
  const featuredProjects = [
    {
      id: '1',
      title: 'EcoTracker - 환경 보호 실천 앱',
      description: '일상 속 환경 보호 실천을 게임화하여 동기부여를 제공하는 모바일 애플리케이션',
      thumbnail: '/placeholder.svg',
      bootcamp: currentBootcamp.name,
      techStack: ['React Native', 'Node.js', 'MongoDB'],
      likes: 156,
      views: 2340,
      teamSize: 4,
      timeAgo: '2주 전',
      featured: true
    },
    {
      id: '2',
      title: 'DevMentor - 개발자 멘토링 플랫폼',
      description: '주니어 개발자와 시니어 개발자를 연결하는 1:1 멘토링 서비스',
      thumbnail: '/placeholder.svg',
      bootcamp: currentBootcamp.name,
      techStack: ['Vue.js', 'Spring Boot', 'MySQL'],
      likes: 203,
      views: 3520,
      teamSize: 5,
      timeAgo: '1개월 전',
      featured: true
    }
  ];

  // Mock active members
  const activeMembers = [
    {
      id: '1',
      name: '김개발',
      avatar: '/placeholder.svg',
      role: '풀스택 개발자',
      projects: 12,
      contributions: 45
    },
    {
      id: '2',
      name: '이코딩',
      avatar: '/placeholder.svg',
      role: '프론트엔드 개발자',
      projects: 8,
      contributions: 32
    },
    {
      id: '3',
      name: '박백엔드',
      avatar: '/placeholder.svg',
      role: '백엔드 개발자',
      projects: 15,
      contributions: 67
    }
  ];

  // Mock all projects
  const allProjects = [
    ...featuredProjects,
    {
      id: '3',
      title: 'SmartFarm IoT 관제 시스템',
      description: '농장의 온습도, 토양 상태를 실시간으로 모니터링하는 IoT 기반 스마트팜 솔루션',
      thumbnail: '/placeholder.svg',
      bootcamp: currentBootcamp.name,
      techStack: ['React', 'Python', 'Arduino', 'Firebase'],
      likes: 89,
      views: 1560,
      teamSize: 3,
      timeAgo: '3주 전'
    },
    {
      id: '4',
      title: '실시간 협업 화이트보드',
      description: '팀 프로젝트를 위한 실시간 협업 도구로 동시 편집과 음성 채팅을 지원',
      thumbnail: '/placeholder.svg',
      bootcamp: currentBootcamp.name,
      techStack: ['Next.js', 'Socket.io', 'Redis'],
      likes: 124,
      views: 2100,
      teamSize: 4,
      timeAgo: '1개월 전'
    }
  ];

  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <img src={currentBootcamp.logo} alt={currentBootcamp.name} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentBootcamp.fullName}</h1>
                <p className="text-gray-600 mb-4 max-w-2xl">{currentBootcamp.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={currentBootcamp.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    공식 홈페이지 방문
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{currentBootcamp.stats.totalProjects}</div>
              <div className="text-sm text-gray-600">총 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{currentBootcamp.stats.activeMembers}</div>
              <div className="text-sm text-gray-600">활동 멤버</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{currentBootcamp.stats.period}</div>
              <div className="text-sm text-gray-600">교육 기간</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
                <Code className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-sm text-gray-600 mb-1">주요 기술</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {currentBootcamp.stats.mainTechs.slice(0, 2).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">대표 프로젝트</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>

        {/* Active Members Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Users className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">주요 활동 멤버</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover bg-gradient-to-br from-blue-100 to-indigo-100"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>{member.projects}개 프로젝트</span>
                  <span>{member.contributions}개 기여</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-gray-900">전체 프로젝트</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">검색 결과가 없습니다</div>
              <div className="text-sm text-gray-500">다른 키워드로 검색해보세요</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BootcampDetail;
