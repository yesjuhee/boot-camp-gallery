
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Clock, Users } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  bootcamp: string;
  techStack: string[];
  likes: number;
  views: number;
  teamSize: number;
  timeAgo: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  bootcamp,
  techStack,
  likes,
  views,
  teamSize,
  timeAgo,
  featured = false
}) => {
  return (
    <Link to={`/project/${id}`}>
      <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
            {bootcamp}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {techStack.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                +{techStack.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{teamSize}명</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
