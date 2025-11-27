import { BookOpen, Clock, Award, ChevronRight, Search, Filter } from 'lucide-react'

const modules = [
  {
    id: 1,
    category: 'Web Security',
    title: 'OWASP Top 10 Vulnerabilities',
    description: 'Learn about the most critical security risks to web applications and how to identify them.',
    lessons: 12,
    duration: '4 hours',
    difficulty: 'Intermediate',
    progress: 85,
    tags: ['SQL Injection', 'XSS', 'CSRF', 'Authentication'],
    icon: '🌐'
  },
  {
    id: 2,
    category: 'Network Security',
    title: 'Network Reconnaissance Fundamentals',
    description: 'Master the art of information gathering and network mapping for security assessments.',
    lessons: 8,
    duration: '3 hours',
    difficulty: 'Beginner',
    progress: 100,
    tags: ['Nmap', 'DNS', 'Port Scanning', 'Enumeration'],
    icon: '🔍'
  },
  {
    id: 3,
    category: 'Cryptography',
    title: 'Cryptography & Encryption Basics',
    description: 'Understand encryption algorithms, hashing, and secure communication protocols.',
    lessons: 10,
    duration: '5 hours',
    difficulty: 'Advanced',
    progress: 45,
    tags: ['AES', 'RSA', 'Hashing', 'TLS'],
    icon: '🔐'
  },
  {
    id: 4,
    category: 'Malware Analysis',
    title: 'Introduction to Malware Analysis',
    description: 'Learn static and dynamic analysis techniques to understand malicious software.',
    lessons: 15,
    duration: '6 hours',
    difficulty: 'Advanced',
    progress: 20,
    tags: ['Reverse Engineering', 'Sandbox', 'Static Analysis'],
    icon: '🦠'
  },
  {
    id: 5,
    category: 'Social Engineering',
    title: 'Social Engineering Defense',
    description: 'Recognize and defend against phishing, pretexting, and other manipulation techniques.',
    lessons: 6,
    duration: '2 hours',
    difficulty: 'Beginner',
    progress: 0,
    tags: ['Phishing', 'Awareness', 'Human Factor'],
    icon: '🎭'
  },
  {
    id: 6,
    category: 'Incident Response',
    title: 'Incident Response Procedures',
    description: 'Learn how to detect, respond to, and recover from security incidents effectively.',
    lessons: 9,
    duration: '4 hours',
    difficulty: 'Intermediate',
    progress: 60,
    tags: ['SIEM', 'Forensics', 'Recovery', 'Documentation'],
    icon: '🚨'
  },
]

export default function Modules() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Learning Modules</h1>
          <p className="text-gray-400 mt-1">Comprehensive security education courses</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search modules..."
              className="cyber-input pl-10 w-64"
            />
          </div>
          <button className="cyber-btn flex items-center gap-2">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="cyber-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Your Progress</h2>
          <span className="text-cyber-primary font-mono">4/6 modules started</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold cyber-text">24</p>
            <p className="text-gray-400 text-sm">Lessons Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold cyber-text">18h</p>
            <p className="text-gray-400 text-sm">Time Invested</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold cyber-text">3</p>
            <p className="text-gray-400 text-sm">Certificates Earned</p>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="cyber-card group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{module.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-cyber-secondary font-medium uppercase tracking-wider">
                    {module.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    module.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                    module.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {module.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {module.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-cyber-primary/10 text-cyber-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {module.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-gray-700/50 text-gray-400">
                      +{module.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {module.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {module.duration}
                  </span>
                  {module.progress === 100 && (
                    <span className="flex items-center gap-1 text-cyber-primary">
                      <Award size={14} />
                      Completed
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 progress-bar">
                    <div className="progress-fill" style={{ width: `${module.progress}%` }} />
                  </div>
                  <span className="text-sm text-gray-400 font-mono">{module.progress}%</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-4 pt-4 border-t border-cyber-primary/10 flex justify-end">
              <button className="cyber-btn text-sm flex items-center gap-2">
                {module.progress === 0 ? 'Start Module' : 
                 module.progress === 100 ? 'Review Module' : 'Continue'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
