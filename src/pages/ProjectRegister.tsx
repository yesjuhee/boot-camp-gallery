
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Github, Link } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ProjectRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    githubUrl: '',
    affiliation: ''
  });

  const bootcamps = [
    { id: 'ssafy', name: 'SSAFY' },
    { id: 'woowacourse', name: '우아한테크코스' },
    { id: 'codestates', name: '코드스테이츠' },
    { id: 'elice', name: '엘리스' },
    { id: 'spartacodingclub', name: '스파르타코딩클럽' },
    { id: 'fastcampus', name: '패스트캠퍼스' },
    { id: 'personal', name: '개인 프로젝트' },
    { id: 'university', name: '대학교' },
    { id: 'company', name: '회사' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.githubUrl || !formData.affiliation) {
      toast({
        title: "필수 정보를 모두 입력해주세요",
        description: "프로젝트 이름, GitHub 링크, 소속을 입력해야 합니다.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // 실제로는 API 호출
    setTimeout(() => {
      const projectId = `project-${Date.now()}`;
      toast({
        title: "프로젝트가 생성되었습니다!",
        description: "상세 정보를 추가하여 더 많은 사람들에게 프로젝트를 알려보세요."
      });
      navigate(`/project/${projectId}/manage`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 뒤로가기 버튼 */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          메인으로 돌아가기
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">새 프로젝트 등록</h1>
          <p className="text-lg text-gray-600">
            1분 만에 프로젝트 포트폴리오를 만들어보세요
          </p>
        </div>

        <Card className="bg-white shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-5 h-5 text-blue-600" />
              <span>기본 정보 입력</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 프로젝트 이름 */}
              <div className="space-y-2">
                <Label htmlFor="project-name" className="text-sm font-medium text-gray-700">
                  프로젝트 이름 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="project-name"
                  type="text"
                  placeholder="예: 커뮤니티형 식물 관리 서비스 '초록일기'"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* GitHub 링크 */}
              <div className="space-y-2">
                <Label htmlFor="github-url" className="text-sm font-medium text-gray-700">
                  GitHub 저장소 링크 <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="github-url"
                    type="url"
                    placeholder="https://github.com/username/repository"
                    value={formData.githubUrl}
                    onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* 소속 */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  소속 <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange('affiliation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="소속을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {bootcamps.map((bootcamp) => (
                      <SelectItem key={bootcamp.id} value={bootcamp.id}>
                        {bootcamp.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 안내 메시지 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-900 mb-1">
                      빠른 시작을 위한 필수 정보만 입력하세요
                    </h4>
                    <p className="text-sm text-blue-700">
                      프로젝트 생성 후 기술 스택, 참여 인원, 개발 기간 등은 언제든지 추가할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 생성 버튼 */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>프로젝트 생성 중...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>프로젝트 생성하기</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectRegister;
