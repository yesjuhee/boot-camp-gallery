
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit3, Plus, Users, Calendar, Code, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ProjectManage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [project, setProject] = useState({
    id: id || "1",
    name: "커뮤니티형 식물 관리 서비스 '초록일기'",
    githubUrl: "https://github.com/example/green-diary",
    affiliation: "우아한테크코스",
    description: "",
    techStack: [] as string[],
    teamSize: "",
    developmentPeriod: "",
    contributions: [] as Array<{
      id: string;
      title: string;
      url: string;
      description: string;
      image: string;
    }>,
    inviteLink: `https://devarchive.com/invite/${id}`
  });

  const [showDescriptionEditor, setShowDescriptionEditor] = useState(false);
  const [showTechStackDialog, setShowTechStackDialog] = useState(false);
  const [showContributionDialog, setShowContributionDialog] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  
  const [newTechStack, setNewTechStack] = useState('');
  const [newContributionUrl, setNewContributionUrl] = useState('');
  const [tempDescription, setTempDescription] = useState(project.description);

  const handleSaveDescription = () => {
    setProject(prev => ({ ...prev, description: tempDescription }));
    setShowDescriptionEditor(false);
    toast({
      title: "소개글이 저장되었습니다",
      description: "프로젝트 소개가 성공적으로 업데이트되었습니다."
    });
  };

  const handleAddTechStack = () => {
    if (newTechStack.trim()) {
      const techArray = newTechStack.split(',').map(tech => tech.trim()).filter(tech => tech);
      setProject(prev => ({
        ...prev,
        techStack: [...prev.techStack, ...techArray]
      }));
      setNewTechStack('');
      setShowTechStackDialog(false);
      toast({
        title: "기술 스택이 추가되었습니다",
        description: `${techArray.join(', ')}이(가) 추가되었습니다.`
      });
    }
  };

  const handleAddContribution = () => {
    if (newContributionUrl.trim()) {
      // 실제로는 URL 메타데이터를 가져오는 API 호출
      const newContribution = {
        id: Date.now().toString(),
        title: "React Query를 이용한 서버 상태 관리",
        url: newContributionUrl,
        description: "프로젝트에서 서버 상태 관리를 위해 React Query를 도입한 과정과 경험을 공유합니다.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=100&fit=crop"
      };
      
      setProject(prev => ({
        ...prev,
        contributions: [...prev.contributions, newContribution]
      }));
      setNewContributionUrl('');
      setShowContributionDialog(false);
      toast({
        title: "활동이 추가되었습니다",
        description: "새로운 기여 활동이 성공적으로 등록되었습니다."
      });
    }
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(project.inviteLink);
    toast({
      title: "초대 링크 복사됨",
      description: "팀원들과 링크를 공유하세요!"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 뒤로가기 버튼 */}
        <Link to={`/project/${id}`} className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          프로젝트 보기로 돌아가기
        </Link>

        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    GitHub 저장소
                  </a>
                </span>
                <span>소속: {project.affiliation}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">관리 모드</span>
            </div>
          </div>
        </div>

        {/* 성공 메시지 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-green-900 mb-1">
                프로젝트가 생성되었습니다!
              </h4>
              <p className="text-sm text-green-700">
                상세 정보를 추가하여 더 많은 사람들에게 프로젝트를 알려보세요.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 왼쪽 컬럼 */}
          <div className="space-y-6">
            {/* 프로젝트 소개글 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>프로젝트 소개</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTempDescription(project.description);
                      setShowDescriptionEditor(true);
                    }}
                  >
                    <Edit3 className="w-4 h-4 mr-1" />
                    {project.description ? '수정하기' : '작성하기'}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {project.description ? (
                  <div className="prose max-w-none">
                    {project.description.split('\n').map((line, index) => (
                      <p key={index} className="mb-2">{line}</p>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Edit3 className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                    <p className="mb-2">이 프로젝트를 대표하는 소개글을 작성해보세요!</p>
                    <p className="text-sm">프로젝트의 목적과 핵심 기능을 요약해주세요.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 나의 활동 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>나의 기여 활동</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowContributionDialog(true)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    활동 추가
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {project.contributions.length > 0 ? (
                  <div className="space-y-3">
                    {project.contributions.map((contribution) => (
                      <a
                        key={contribution.id}
                        href={contribution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex space-x-4">
                          <img 
                            src={contribution.image} 
                            alt={contribution.title}
                            className="w-20 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{contribution.title}</h4>
                            <p className="text-sm text-gray-600">{contribution.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Plus className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                    <p className="mb-2">기여 활동을 추가해보세요!</p>
                    <p className="text-sm">블로그 글, 발표 자료 등 관련 링크를 공유하세요.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="space-y-6">
            {/* 선택 정보 입력 영역 */}
            <Card>
              <CardHeader>
                <CardTitle>선택 정보 추가</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 기술 스택 */}
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">기술 스택</p>
                      {project.techStack.length > 0 ? (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">사용한 기술을 추가하세요</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowTechStackDialog(true)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {/* 참여 인원 */}
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">참여 인원</p>
                      <p className="text-sm text-gray-500">
                        {project.teamSize || "팀 규모를 입력하세요"}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {/* 개발 기간 */}
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">개발 기간</p>
                      <p className="text-sm text-gray-500">
                        {project.developmentPeriod || "개발 기간을 입력하세요"}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 팀원 초대 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>팀원 관리</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowInviteDialog(true)}
                  >
                    <Users className="w-4 h-4 mr-1" />
                    팀원 초대
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 text-gray-500">
                  <Users className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                  <p className="mb-2">팀원들을 초대해보세요!</p>
                  <p className="text-sm">함께 프로젝트 포트폴리오를 완성해나가세요.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 소개글 편집 다이얼로그 */}
        <Dialog open={showDescriptionEditor} onOpenChange={setShowDescriptionEditor}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>프로젝트 소개 작성</DialogTitle>
              <DialogDescription>
                마크다운 형식으로 프로젝트 소개를 작성할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Textarea
                placeholder="## 프로젝트 개요&#10;이 프로젝트는...&#10;&#10;## 주요 기능&#10;- 기능 1&#10;- 기능 2&#10;&#10;## 기술 스택&#10;- React&#10;- TypeScript"
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                rows={12}
                className="font-mono text-sm"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDescriptionEditor(false)}>
                취소
              </Button>
              <Button onClick={handleSaveDescription}>
                저장하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 기술 스택 추가 다이얼로그 */}
        <Dialog open={showTechStackDialog} onOpenChange={setShowTechStackDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기술 스택 추가</DialogTitle>
              <DialogDescription>
                사용한 기술을 쉼표로 구분하여 입력해주세요.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="예: React, TypeScript, Spring Boot, MySQL"
                value={newTechStack}
                onChange={(e) => setNewTechStack(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowTechStackDialog(false)}>
                취소
              </Button>
              <Button onClick={handleAddTechStack}>
                추가하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 기여 활동 추가 다이얼로그 */}
        <Dialog open={showContributionDialog} onOpenChange={setShowContributionDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기여 활동 추가</DialogTitle>
              <DialogDescription>
                블로그 글, 발표 자료 등의 URL을 입력하면 자동으로 정보를 가져옵니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="https://blog.example.com/my-post"
                value={newContributionUrl}
                onChange={(e) => setNewContributionUrl(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowContributionDialog(false)}>
                취소
              </Button>
              <Button onClick={handleAddContribution}>
                추가하기
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 팀원 초대 다이얼로그 */}
        <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>팀원 초대</DialogTitle>
              <DialogDescription>
                아래 링크를 팀원들과 공유하면 자동으로 프로젝트에 참여할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  value={project.inviteLink}
                  readOnly
                  className="bg-gray-50"
                />
                <Button onClick={copyInviteLink} size="sm">
                  <Copy className="w-4 h-4 mr-1" />
                  복사
                </Button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-700">
                  💡 팀원들이 이 링크를 통해 접속하면 별도 승인 없이 자동으로 프로젝트 멤버가 됩니다.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setShowInviteDialog(false)}>
                확인
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectManage;
