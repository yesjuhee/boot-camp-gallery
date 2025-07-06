
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectExplore = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedAffiliations, setSelectedAffiliations] = useState<string[]>([]);
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [developmentPeriod, setDevelopmentPeriod] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // 샘플 데이터
  const sampleProjects = [
    {
      id: "1",
      title: "AI 기반 스터디 매칭 플랫폼",
      description: "개인 학습 스타일과 목표를 분석하여 최적의 스터디 그룹을 매칭해주는 서비스입니다.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      bootcamp: "코드스테이츠",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      likes: 142,
      views: 892,
      teamSize: 4,
      timeAgo: "1주 전"
    },
    {
      id: "2",
      title: "Flutter 농구 경기 기록 앱",
      description: "개인 농구 실력 향상을 위한 경기 기록 및 분석 모바일 애플리케이션입니다.",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      bootcamp: "SSAFY",
      techStack: ["Flutter", "Dart", "Firebase"],
      likes: 89,
      views: 567,
      teamSize: 3,
      timeAgo: "3일 전"
    },
    {
      id: "3",
      title: "React Native 음식 배달 앱",
      description: "지역 소상공인을 위한 배달 주문 플랫폼으로 실시간 주문 관리 기능을 제공합니다.",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      bootcamp: "엘리스",
      techStack: ["React Native", "Express", "MySQL"],
      likes: 201,
      views: 1234,
      teamSize: 5,
      timeAgo: "5일 전"
    },
    {
      id: "4",
      title: "Spring Boot 여행 계획 서비스",
      description: "AI 추천 알고리즘을 활용한 개인 맞춤형 여행 일정 생성 및 공유 플랫폼입니다.",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      bootcamp: "패스트캠퍼스",
      techStack: ["Spring Boot", "Vue.js", "PostgreSQL"],
      likes: 167,
      views: 945,
      teamSize: 4,
      timeAgo: "1주 전"
    },
    {
      id: "5",
      title: "금융 데이터 분석 대시보드",
      description: "실시간 주식 데이터를 수집하고 시각화하는 투자 분석 도구입니다.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      bootcamp: "플레이데이터",
      techStack: ["Python", "Django", "D3.js", "PostgreSQL"],
      likes: 98,
      views: 612,
      teamSize: 2,
      timeAgo: "4일 전"
    },
    {
      id: "6",
      title: "개인 프로젝트 - 독서 기록 앱",
      description: "개인 독서 습관을 추적하고 책 추천을 받을 수 있는 모바일 앱입니다.",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      bootcamp: "개인 프로젝트",
      techStack: ["Flutter", "Firebase", "Dart"],
      likes: 76,
      views: 423,
      teamSize: 1,
      timeAgo: "2일 전"
    }
  ];

  const affiliations = ['부트캠프', '개인 프로젝트', '대학교', '동아리'];
  const techStackOptions = ['React', 'Vue.js', 'Angular', 'Spring Boot', 'Node.js', 'Django', 'Flutter', 'React Native', 'Java', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'];
  const topics = ['AI', '웹개발', '모바일', '데이터분석', '블록체인', '스포츠', '여행', '음식', '교육', '금융', '헬스케어'];

  const toggleSelection = (value: string, selectedArray: string[], setFunction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedArray.includes(value)) {
      setFunction(selectedArray.filter(item => item !== value));
    } else {
      setFunction([...selectedArray, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 상단 검색 및 정렬 */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="프로젝트, 기술스택, 키워드 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="정렬 기준" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">인기순</SelectItem>
                  <SelectItem value="likes">좋아요순</SelectItem>
                  <SelectItem value="recent">최신순</SelectItem>
                  <SelectItem value="views">조회수순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 좌측 필터 사이드바 */}
          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>필터</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 소속 필터 */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">소속</h3>
                  <div className="space-y-2">
                    {affiliations.map((affiliation) => (
                      <label key={affiliation} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAffiliations.includes(affiliation)}
                          onChange={() => toggleSelection(affiliation, selectedAffiliations, setSelectedAffiliations)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{affiliation}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 기술 스택 필터 */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">기술 스택</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStackOptions.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleSelection(tech, selectedTechStack, setSelectedTechStack)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedTechStack.includes(tech)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 개발 기간 필터 */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">개발 기간</h3>
                  <RadioGroup value={developmentPeriod} onValueChange={setDevelopmentPeriod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="short" id="short" />
                      <label htmlFor="short" className="text-sm text-gray-700 cursor-pointer">1개월 미만</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <label htmlFor="medium" className="text-sm text-gray-700 cursor-pointer">1~3개월</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="long" id="long" />
                      <label htmlFor="long" className="text-sm text-gray-700 cursor-pointer">3~6개월</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="extended" id="extended" />
                      <label htmlFor="extended" className="text-sm text-gray-700 cursor-pointer">6개월 이상</label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 참여 인원 필터 */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">참여 인원</h3>
                  <RadioGroup value={teamSize} onValueChange={setTeamSize}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="solo" id="solo" />
                      <label htmlFor="solo" className="text-sm text-gray-700 cursor-pointer">1명 (개인)</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="small" id="small" />
                      <label htmlFor="small" className="text-sm text-gray-700 cursor-pointer">2~4명</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="large" />
                      <label htmlFor="large" className="text-sm text-gray-700 cursor-pointer">5명 이상</label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 주제/관심분야 필터 */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">주제/관심분야</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => toggleSelection(topic, selectedTopics, setSelectedTopics)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedTopics.includes(topic)
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 필터 초기화 버튼 */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedAffiliations([]);
                    setSelectedTechStack([]);
                    setDevelopmentPeriod('');
                    setTeamSize('');
                    setSelectedTopics([]);
                    setSearchQuery('');
                  }}
                >
                  필터 초기화
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 중앙 프로젝트 목록 */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                총 <span className="font-semibold text-gray-900">{sampleProjects.length}</span>개의 프로젝트
                {searchQuery && (
                  <span className="ml-2">
                    "<span className="font-semibold text-blue-600">{searchQuery}</span>" 검색 결과
                  </span>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sampleProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">이전</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">다음</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExplore;
