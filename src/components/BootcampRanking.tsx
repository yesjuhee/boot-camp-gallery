
import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BootcampData {
  rank: number;
  name: string;
  logo: string;
  projectCount: number;
  trending: boolean;
}

const BootcampRanking = () => {
  const bootcamps: BootcampData[] = [
    { rank: 1, name: "코드스테이츠", logo: "🚀", projectCount: 1240, trending: true },
    { rank: 2, name: "엘리스", logo: "🐰", projectCount: 987, trending: true },
    { rank: 3, name: "패스트캠퍼스", logo: "⚡", projectCount: 823, trending: false },
    { rank: 4, name: "스파르타코딩클럽", logo: "⚔️", projectCount: 756, trending: true },
    { rank: 5, name: "플레이데이터", logo: "📊", projectCount: 643, trending: false },
  ];

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-400 text-white";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-500 text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">주목받는 부트캠프</h2>
        <TrendingUp className="w-5 h-5 text-blue-600" />
      </div>

      <div className="space-y-4">
        {bootcamps.map((bootcamp) => (
          <div 
            key={bootcamp.rank}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              {/* Rank Badge */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankStyle(bootcamp.rank)}`}>
                {bootcamp.rank}
              </div>

              {/* Logo & Info */}
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{bootcamp.logo}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {bootcamp.name}
                    </h3>
                    {bootcamp.trending && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">
                        HOT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    프로젝트 {bootcamp.projectCount.toLocaleString()}개
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" className="group-hover:border-blue-300 group-hover:text-blue-600">
              프로젝트 보기
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampRanking;
