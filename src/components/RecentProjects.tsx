
import React from 'react';
import { Clock, Star } from 'lucide-react';

interface RecentProject {
  id: string;
  title: string;
  author: string;
  bootcamp: string;
  techStack: string[];
  timeAgo: string;
  isNew: boolean;
}

const RecentProjects = () => {
  const recentProjects: RecentProject[] = [
    {
      id: "1",
      title: "AI 기반 헬스케어 모니터링 시스템",
      author: "김개발",
      bootcamp: "코드스테이츠",
      techStack: ["React", "Node.js", "TensorFlow"],
      timeAgo: "3시간 전",
      isNew: true
    },
    {
      id: "2", 
      title: "실시간 협업 화이트보드 플랫폼",
      author: "이프론트",
      bootcamp: "엘리스",
      techStack: ["Vue.js", "Socket.io", "MongoDB"],
      timeAgo: "5시간 전",
      isNew: true
    },
    {
      id: "3",
      title: "블록체인 기반 투표 시스템",
      author: "박블록",
      bootcamp: "패스트캠퍼스",
      techStack: ["Solidity", "Web3.js", "React"],
      timeAgo: "1일 전",
      isNew: false
    },
    {
      id: "4",
      title: "커뮤니티 기반 중고거래 앱",
      author: "최모바일",
      bootcamp: "스파르타코딩클럽",
      techStack: ["Flutter", "Firebase", "Dart"],
      timeAgo: "1일 전",
      isNew: false
    },
    {
      id: "5",
      title: "데이터 시각화 대시보드",
      author: "정데이터",
      bootcamp: "플레이데이터",
      techStack: ["D3.js", "Python", "FastAPI"],
      timeAgo: "2일 전",
      isNew: false
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">방금 올라온 프로젝트</h2>
        <Clock className="w-5 h-5 text-blue-600" />
      </div>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div 
            key={project.id}
            className="flex items-start justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                  {project.title}
                </h3>
                {project.isNew && (
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                    NEW
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>{project.author}</span>
                <span>•</span>
                <span>{project.bootcamp}</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.timeAgo}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className="ml-4 p-2 text-gray-400 hover:text-yellow-500 transition-colors">
              <Star className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          더 많은 프로젝트 보기 →
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
