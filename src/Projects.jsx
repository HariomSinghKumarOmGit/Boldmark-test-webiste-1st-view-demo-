import React, { useState } from 'react';

const dummyProjects = [
  {
    id: 1,
    company: 'Framer',
    title: 'Senior UX Designer',
    budget: '$3,500-5,500 net',
    tags: ['FULL TIME', 'REMOTE', 'B2B'],
    posted: 'POSTED 7 DAY AGO',
    color: 'bg-[#faebd7]', // antique white / peach
    textColor: 'text-[#d4b08c]',
    rotation: -8,
    xOffset: -240,
    yOffset: -100,
    zIndex: 1,
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/framer-1.svg' 
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/loom-1.svg'
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg'
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/hopin-1.svg'
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
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
  }
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className='flex -py-5 -mx-15 h-8 rounded-2xl'>
        <div className="bg-black flex-1 grid rounded-2xl h-10"></div>
        <div className="bg-white flex-3 rounded-2xl grid h-15 z-10"></div>
        <div className="bg-black flex-1 grid rounded-2xl h-10"></div>
      </div>

      {/* Cluster Section bg-[#e7e1f7] */}
      <div 
        className='bg-white min-h-[140vh] w-full flex items-center justify-center relative overflow-hidden -mt-4'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full max-w-4xl h-[800px] flex items-center justify-center">
          {dummyProjects.map((project) => (
            <div
              key={project.id}
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:!z-50`}
              style={{
                transform: isHovered
                  ? `translate(${project.xOffset * 1.8}px, ${project.yOffset * 1.6}px) rotate(${project.rotation * 0.2}deg) scale(1.05)`
                  : `translate(${project.xOffset * 0.8}px, ${project.yOffset * 0.8}px) rotate(${project.rotation}deg)`,
                zIndex: isHovered ? project.zIndex + 10 : project.zIndex,
              }}
            >
              <div 
                className="relative group/card cursor-pointer transition-transform duration-300 hover:-translate-y-4 hover:scale-105"
              >
                {/* Custom Shadow for 3D effect */}
                <div className="absolute inset-0 bg-black/10 rounded-[32px] blur-xl translate-y-6 scale-[0.98] -z-20"></div>

                {/* Bottom Colored Tab */}
                <div className={`absolute inset-0 top-10 ${project.color} rounded-[32px] flex items-end justify-center pb-5 -z-10`}>
                  <span className={`text-[11px] font-bold tracking-widest uppercase ${project.textColor}`}>
                    {project.posted}
                  </span>
                </div>

                {/* Top White Card */}
                <div className="relative bg-white rounded-[32px] p-8 shadow-sm border border-black/5 w-[360px] h-[220px]">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={project.logoUrl} 
                      alt={project.company} 
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                         e.target.style.display = 'none';
                      }}
                    />
                    <span className="font-extrabold text-slate-800 text-lg tracking-wide">{project.company}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#131316] leading-tight mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-semibold text-sm mb-7">
                    {project.budget}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-indigo-800 px-3 py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest bg-white shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;