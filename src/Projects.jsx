import React, { useState } from 'react';
import { Heart, Tag, Link as LinkIcon, X } from 'lucide-react';

const dummyProjects = [
  {
    id: 1,
    company: 'Hari',
    title: 'Construction website',
    budget: '2025 ',
    tags: ['REACT', 'TAILWIND', 'GSAP'],
    posted: 'POSTED 7 DAY AGO',
    color: 'bg-[#faebd7]', // antique white / peach
    textColor: 'text-[#d4b08c]',
    rotation: -8,
    xOffset: -240,
    yOffset: -100,
    zIndex: 1,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/framer-1.svg',
    image: 'https://www.jiomart.com/images/product/original/rvfqyqhev2/blue-nexus-the-iron-man-wall-poster-with-wall-frame-room-art-painting-collection-a4-size-10x13-_fbnwpc109-product-images-orvfqyqhev2-p598836349-0-202302261640.jpg?im=Resize=(420,420)',
    type: 'Vastu Reality ',
    detailLink: 'https://monu-bhaiya-buss-web-u5em.vercel.app/'
  },
  {
    id: 2,
    company: 'slack',
    title: 'Senior UI Designer',
    budget: '$3,500-5,500 net',
    tags: ['PROJECT BASED', 'REMOTE'],
    posted: 'POSTED 2 DAY AGO',
    color: 'bg-[#ffedeb]', // reddish pink
    textColor: 'text-[#f0aba4]',
    rotation: -3,
    xOffset: -100,
    yOffset: -180,
    zIndex: 3,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200',
    type: 'Team Collaboration',
    detailLink: 'https://slack.com'
  },
  {
    id: 3,
    company: 'slack',
    title: 'Lead Product Designer',
    budget: '$3,500-5,500 net',
    tags: ['FULL TIME', 'REMOTE', 'FULL-TIME'],
    posted: 'POSTED YESTERDAY',
    color: 'bg-[#fff4d1]', // light yellow
    textColor: 'text-[#d6b96e]',
    rotation: 6,
    xOffset: 160,
    yOffset: -130,
    zIndex: 2,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1200',
    type: 'Brand Identity',
    detailLink: 'https://slack.com'
  },
  {
    id: 4,
    company: 'loom',
    title: 'Product Designer',
    budget: '$3,000-3,500 net',
    tags: ['FULL TIME', 'US BASED'],
    posted: 'POSTED YESTERDAY',
    color: 'bg-[#e9e3ff]', // soft purple
    textColor: 'text-[#9e8fdb]',
    rotation: -4,
    xOffset: -70,
    yOffset: -10,
    zIndex: 4,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/loom-1.svg',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    type: 'Video Platform',
    detailLink: 'https://loom.com'
  },
  {
    id: 5,
    company: 'Google',
    title: 'Senior UI Designer',
    budget: '$3,800-5,000 net',
    tags: ['FULL TIME', 'REMOTE', 'FULL-TIME'],
    posted: 'POSTED 1 MONTH AGO',
    color: 'bg-[#eef0ff]', // light indigo
    textColor: 'text-[#9b9bcc]',
    rotation: 9,
    xOffset: -250,
    yOffset: 130,
    zIndex: 2,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200',
    type: 'Search Initiative',
    detailLink: 'https://google.com'
  },
  {
    id: 6,
    company: 'hopin',
    title: 'Lead Designer',
    budget: '$4,500-5,500 net',
    tags: ['PROJECT BASED', 'REMOTE', 'FULL-TIME'],
    posted: 'POSTED 3 DAY AGO',
    color: 'bg-[#faebd7]', // peach
    textColor: 'text-[#d4b08c]',
    rotation: -5,
    xOffset: 170,
    yOffset: 40,
    zIndex: 5,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/hopin-1.svg',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1200',
    type: 'Virtual Events',
    detailLink: 'https://hopin.com'
  },
  {
    id: 7,
    company: 'slack',
    title: 'Senior UI Designer',
    budget: '$3,500-5,500 net',
    tags: ['PART TIME', 'REMOTE'],
    posted: 'POSTED 2 DAY AGO',
    color: 'bg-[#ffedeb]', 
    textColor: 'text-[#f0aba4]',
    rotation: 7,
    xOffset: 30,
    yOffset: 190,
    zIndex: 6,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200',
    type: 'Developer Tools',
    detailLink: 'https://slack.com'
  }
];

/* ─── Shared Card UI ──────────────────────────────────────────────────── */
const ProjectCard = ({ project, onClick }) => (
  <div 
    className="relative group/card cursor-pointer transition-transform duration-300 hover:-translate-y-4 hover:scale-105"
    onClick={onClick}
  >
    {/* Custom Shadow for 3D effect */}
    <div className="absolute inset-0 bg-black/10 rounded-[28px] md:rounded-[32px] blur-xl translate-y-6 scale-[0.98] -z-20"></div>

    {/* Bottom Colored Tab */}
    <div className={`absolute inset-0 top-10 ${project.color} rounded-[28px] md:rounded-[32px] flex items-end justify-center pb-5 -z-10`}>
      <span className={`text-[10px] md:text-[11px] font-bold tracking-widest uppercase ${project.textColor}`}>
        {project.posted}
      </span>
    </div>

    {/* Top White Card */}
    <div className="relative bg-white rounded-[28px] md:rounded-[32px] p-5 md:p-8 shadow-sm border border-black/5 w-full md:w-[360px] h-[200px] md:h-[220px]">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <img 
          src={project.logoUrl} 
          alt={project.company} 
          className="w-6 h-6 md:w-7 md:h-7 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="font-extrabold text-slate-800 text-base md:text-lg tracking-wide">{project.company}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-black text-[#131316] leading-tight mb-1 tracking-tight">
        {project.title}
      </h3>
      <p className="text-slate-500 font-semibold text-xs md:text-sm mb-5 md:mb-7">
        {project.budget}
      </p>
      
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[9px] md:text-[10px] font-bold text-indigo-800 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest bg-white shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Close modal when clicking outside the modal content area
  const handleModalClose = (e) => {
    if (e.target.id === 'modal-overlay') {
      setActiveProject(null);
    }
  };

  return (
    <>
      {/* Top rounded divider — hidden on mobile */}
      <div className='hidden md:flex -py-5 -mx-15 h-8 rounded-2xl'>
        <div className="bg-black flex-1 grid rounded-2xl h-10"></div>
        <div className="bg-white flex-3 rounded-2xl grid h-15 z-10"></div>
        <div className="bg-black flex-1 grid rounded-2xl h-10"></div>
      </div>

      {/* ────────────────────── MOBILE LAYOUT (< md) ────────────────────── */}
      <div className="md:hidden bg-white py-12 px-4">
        <h2 className="text-center text-3xl font-black text-[#131316] mb-2 tracking-tight">Our Projects</h2>
        <p className="text-center text-slate-400 text-sm mb-8 font-medium">Tap a card to see details</p>
        <div className="flex flex-col items-center gap-8">
          {dummyProjects.map((project) => (
            <div key={project.id} className="w-full max-w-[340px]">
              <ProjectCard project={project} onClick={() => setActiveProject(project)} />
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────── DESKTOP LAYOUT (md+) ────────────────────── */}
      <div 
        className='hidden md:flex bg-white min-h-[140vh] w-full items-center justify-center relative overflow-hidden -mt-4'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full max-w-4xl h-[800px] flex items-center justify-center">
          {dummyProjects.map((project) => (
            <div
              key={project.id}
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-50!`}
              style={{
                transform: isHovered
                  ? `translate(${project.xOffset * 1.8}px, ${project.yOffset * 1.6}px) rotate(${project.rotation * 0.2}deg) scale(1.05)`
                  : `translate(${project.xOffset * 0.8}px, ${project.yOffset * 0.8}px) rotate(${project.rotation}deg)`,
                zIndex: isHovered ? project.zIndex + 10 : project.zIndex,
              }}
              onClick={() => setActiveProject(project)}
            >
              <ProjectCard project={project} onClick={() => setActiveProject(project)} />
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────── MODAL ────────────────────── */}
      {activeProject && (
        <div 
          id="modal-overlay"
          onClick={handleModalClose}
          className="fixed inset-0 z-[999999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
        >
          {/* Main Card Wrapper */}
          <div 
            className="relative w-full max-w-[340px] max-h-[85vh] h-[580px] rounded-[36px] md:rounded-[44px] shadow-2xl overflow-hidden shadow-black/30 border-[5px] md:border-[6px] border-white flex flex-col justify-end animate-in fade-in zoom-in-95 duration-300"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-slate-200">
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-full object-cover rounded-[30px] md:rounded-[36px]"
              />
            </div>

            {/* Back / Close button (top right, glassmorphism) */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20"
            >
              <X size={18} className="drop-shadow-sm" />
            </button>
            <button 
              className="absolute top-3 left-3 md:top-4 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20"
            >
              <Heart size={18} className="drop-shadow-sm" />
            </button>

            {/* Bottom Info Gradient Overlay & Content */}
            <div className="w-full relative z-10 pt-16 md:pt-20 pb-4 px-4 md:px-5">
              {/* Blur/Gradient Background Layer */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none rounded-b-[30px] md:rounded-b-[36px]" />
              <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[6px] pointer-events-none rounded-b-[30px] md:rounded-b-[36px]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 100%)' }} />

              <div className="relative z-20 flex flex-col gap-3 md:gap-4">
                {/* Titles */}
                <div>
                  <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight mb-1 drop-shadow-md tracking-tight">
                    {activeProject.company}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg font-medium drop-shadow-sm">
                    {activeProject.type}
                  </p>
                </div>

                {/* Tags / Info */}
                <div className="flex items-center gap-4 md:gap-5 text-white/90 font-medium">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Tag size={14} className="opacity-80" />
                    <span className="text-[13px] md:text-[15px]">from <strong className="text-white ml-0.5">{activeProject.budget.split('-')[0]}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <LinkIcon size={14} className="opacity-80" />
                    <span className="text-[13px] md:text-[15px] underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors cursor-pointer text-white">
                      View details
                    </span>
                  </div>
                </div>

                {/* Big Pill Action Button */}
                <a 
                  href={activeProject.detailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black text-[14px] md:text-[15px] font-bold py-3.5 md:py-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg mt-1"
                >
                  Demo Links
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects;