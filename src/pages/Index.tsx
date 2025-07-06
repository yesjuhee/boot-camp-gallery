
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, BookOpen, Star, Github, ExternalLink, Upload } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import RecentProjects from '@/components/RecentProjects';
import BootcampRanking from '@/components/BootcampRanking';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            개발자들의 프로젝트
            <span className="block text-blue-600">아카이브</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            부트캠프, 동아리, 개인 프로젝트까지. 
            <br />개발자들의 실제 프로젝트를 탐색하고 학습하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/explore">
              <Button size="lg" className="px-8 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700">
                <Search className="w-5 h-5 mr-2" />
                프로젝트 탐색하기
              </Button>
            </Link>
            <Link to="/project/register">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-medium border-blue-600 text-blue-600 hover:bg-blue-50">
                <Upload className="w-5 h-5 mr-2" />
                내 프로젝트 등록하기
              </Button>
            </Link>
          </div>

          {/* 통계 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">등록된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <div className="text-gray-600">참여 기관</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3,892</div>
              <div className="text-gray-600">활성 개발자</div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 소개 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 DevArchive인가요?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              단순한 프로젝트 목록이 아닌, 개발자들의 성장 스토리를 담은 아카이브입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900">탐색가를 위한</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  부트캠프별 프로젝트 비교 분석으로 나에게 맞는 교육 기관을 찾아보세요.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900">포트폴리오 빌더를 위한</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  팀 프로젝트에서의 개인 기여도와 활동을 효과적으로 어필하세요.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900">학습자를 위한</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  다른 개발자들의 프로젝트에서 새로운 기술과 해결책을 발견하세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 최근 프로젝트 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">최근 프로젝트</h2>
            <Link to="/explore">
              <Button variant="outline">
                모든 프로젝트 보기
                <TrendingUp className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <RecentProjects />
        </div>
      </section>

      {/* 부트캠프 랭킹 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">인기 부트캠프</h2>
            <Button variant="outline">
              전체 순위 보기
              <Star className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <BootcampRanking />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            1분 만에 프로젝트를 등록하고, 개발자 커뮤니티와 연결되세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/project/register">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-medium">
                <Upload className="w-5 h-5 mr-2" />
                프로젝트 등록하기
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-medium border-white text-white hover:bg-white/10">
                <Search className="w-5 h-5 mr-2" />
                프로젝트 둘러보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DevArchive</span>
              </div>
              <p className="text-gray-400 mb-4">
                개발자들의 프로젝트 아카이브. 
                <br />함께 성장하는 개발자 커뮤니티를 만들어갑니다.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">탐색</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/explore" className="hover:text-white">프로젝트 탐색</Link></li>
                <li><Link to="/bootcamp/ssafy" className="hover:text-white">부트캠프</Link></li>
                <li><a href="#" className="hover:text-white">인기 프로젝트</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/project/register" className="hover:text-white">프로젝트 등록</Link></li>
                <li><a href="#" className="hover:text-white">개발자 가이드</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevArchive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
