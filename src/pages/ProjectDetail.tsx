
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Bookmark, ExternalLink, Github, Users, Clock, Calendar, Building, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(234);
  const [newComment, setNewComment] = useState('');

  // 샘플 프로젝트 데이터 (실제로는 API에서 가져올 데이터)
  const project = {
    id: id || "1",
    title: "AI 챗봇 기반 고객 서비스 플랫폼",
    summary: "자연어 처리를 활용한 스마트 고객 상담 시스템으로, 24시간 실시간 응답이 가능합니다.",
    description: `# 프로젝트 개요
이 프로젝트는 OpenAI GPT-3.5를 활용하여 고객 문의를 자동으로 처리하는 챗봇 시스템입니다.

## 주요 기능
- 🤖 자연어 처리 기반 자동 응답
- 📊 고객 문의 분석 대시보드
- 🔄 실시간 채팅 인터페이스
- 📱 모바일 반응형 디자인

## 기술적 특징
- React 18의 최신 Hook 활용
- Node.js Express 서버 구축
- MongoDB를 통한 대화 이력 저장
- Socket.io로 실시간 통신 구현`,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    bootcamp: "코드스테이츠",
    techStack: ["React", "Node.js", "OpenAI", "MongoDB", "Socket.io", "Express"],
    developmentPeriod: "3개월",
    teamSize: 4,
    githubUrl: "https://github.com/example/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.vercel.app",
    createdAt: "2024-01-15"
  };

  const teamMembers = [
    {
      id: "1",
      name: "김민수",
      role: "팀 리더 / 백엔드",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      contributions: [
        {
          title: "OpenAI API 연동 구현 과정",
          url: "https://blog.example.com/openai-integration",
          description: "GPT-3.5 API를 활용한 챗봇 응답 시스템 구현 경험을 공유합니다.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=100&fit=crop"
        },
        {
          title: "Socket.io 실시간 채팅 구현기",
          url: "https://velog.io/@minsu/socket-chat",
          description: "실시간 채팅 기능 개발 중 마주한 문제들과 해결 과정",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop"
        }
      ]
    },
    {
      id: "2", 
      name: "이지은",
      role: "프론트엔드",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&h=100&fit=crop&crop=face",
      contributions: [
        {
          title: "React 챗봇 UI 컴포넌트 개발",
          url: "https://github.com/user/chatbot-ui",
          description: "재사용 가능한 챗봇 UI 컴포넌트 라이브러리 제작",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=100&fit=crop"
        }
      ]
    },
    {
      id: "3",
      name: "박준호", 
      role: "데이터 분석",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      contributions: []
    },
    {
      id: "4",
      name: "최서연",
      role: "UI/UX 디자인",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", 
      contributions: [
        {
          title: "챗봇 UX 디자인 프로세스",
          url: "https://medium.com/@seoyeon/chatbot-ux-design",
          description: "사용자 친화적인 챗봇 인터페이스 설계 과정과 인사이트",
          image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=200&h=100&fit=crop"
        }
      ]
    }
  ];

  const comments = [
    {
      id: "1",
      author: "개발새싹",
      content: "OpenAI API 사용량 제한은 어떻게 관리하셨나요?",
      createdAt: "2일 전",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      replies: [
        {
          id: "1-1",
          author: "김민수",
          content: "API 호출량을 모니터링하는 대시보드를 만들어서 일일 사용량을 추적했습니다. 또한 캐싱을 통해 동일한 질문에 대해서는 저장된 응답을 재사용하도록 구현했어요.",
          createdAt: "1일 전",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        }
      ]
    },
    {
      id: "2", 
      author: "코딩초보",
      content: "MongoDB 스키마 설계할 때 가장 어려웠던 부분이 뭐였나요?",
      createdAt: "3일 전",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
      replies: []
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // 댓글 추가 로직 (실제로는 API 호출)
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 뒒로가기 버튼 */}
        <Link to="/explore" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          프로젝트 목록으로 돌아가기
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 프로젝트 헤더 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="mb-6">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{project.summary}</p>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    variant={isLiked ? "default" : "outline"}
                    onClick={handleLike}
                    className="flex items-center space-x-2"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                    <span>{likes}</span>
                  </Button>
                  
                  <Button 
                    variant={isBookmarked ? "default" : "outline"}
                    onClick={handleBookmark}
                    className="flex items-center space-x-2"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
                    <span>북마크</span>
                  </Button>

                  <div className="flex space-x-3 ml-auto">
                    <Button asChild variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        라이브 데모
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* 프로젝트 소개 */}
            <Card>
              <CardHeader>
                <CardTitle>프로젝트 소개</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {project.description.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.slice(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-xl font-semibold mt-5 mb-3">{line.slice(3)}</h2>;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="ml-4">{line.slice(2)}</li>;
                    } else if (line.trim()) {
                      return <p key={index} className="mb-3">{line}</p>;
                    }
                    return <br key={index} />;
                  })}
                </div>
              </CardContent>
            </Card>

            {/* 팀원 및 기여 활동 */}
            <Card>
              <CardHeader>
                <CardTitle>팀원 및 기여 활동</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{member.name}</h3>
                          <p className="text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      
                      {member.contributions.length > 0 && (
                        <div className="ml-16 space-y-3">
                          {member.contributions.map((contribution, index) => (
                            <a
                              key={index}
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
                      )}
                      
                      {member.id !== teamMembers[teamMembers.length - 1].id && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 댓글 섹션 */}
            <Card>
              <CardHeader>
                <CardTitle>Q&A</CardTitle>
              </CardHeader>
              <CardContent>
                {/* 댓글 작성 */}
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="프로젝트에 대해 궁금한 점을 남겨보세요..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <Button type="submit" className="mt-3">
                    댓글 작성
                  </Button>
                </form>

                {/* 댓글 목록 */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-4">
                      <div className="flex space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar} alt={comment.author} />
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.createdAt}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                      
                      {/* 답글 */}
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="ml-14 flex space-x-4">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={reply.avatar} alt={reply.author} />
                            <AvatarFallback>{reply.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-sm">{reply.author}</span>
                              <span className="text-xs text-gray-500">{reply.createdAt}</span>
                            </div>
                            <p className="text-sm text-gray-700">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                      
                      {comment.id !== comments[comments.length - 1].id && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 핵심 정보 */}
            <Card>
              <CardHeader>
                <CardTitle>프로젝트 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">소속</p>
                    <p className="font-medium">{project.bootcamp}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">개발 기간</p>
                    <p className="font-medium">{project.developmentPeriod}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">팀 규모</p>
                    <p className="font-medium">{project.teamSize}명</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">등록일</p>
                    <p className="font-medium">{new Date(project.createdAt).toLocaleDateString('ko-KR')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 기술 스택 */}
            <Card>
              <CardHeader>
                <CardTitle>기술 스택</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
