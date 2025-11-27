import { FlaskConical, Play, Clock, Users, Star, Lock, Unlock } from 'lucide-react'
import Terminal from '../components/Terminal'

const labs = [
  {
    id: 1,
    title: 'SQL Injection Practice Lab',
    description: 'Practice identifying and exploiting SQL injection vulnerabilities in a safe environment.',
    difficulty: 'Beginner',
    duration: '45 min',
    participants: 1234,
    rating: 4.8,
    status: 'available',
    category: 'Web Security',
    objectives: [
      'Identify SQL injection entry points',
      'Extract database information',
      'Learn defense techniques'
    ]
  },
  {
    id: 2,
    title: 'Network Scanning & Enumeration',
    description: 'Learn to perform comprehensive network reconnaissance using industry-standard tools.',
    difficulty: 'Intermediate',
    duration: '1.5 hours',
    participants: 856,
    rating: 4.9,
    status: 'available',
    category: 'Network Security',
    objectives: [
      'Use Nmap for port scanning',
      'Enumerate services and versions',
      'Identify potential vulnerabilities'
    ]
  },
  {
    id: 3,
    title: 'Cross-Site Scripting (XSS) Lab',
    description: 'Understand and practice different types of XSS attacks and their mitigations.',
    difficulty: 'Intermediate',
    duration: '1 hour',
    participants: 967,
    rating: 4.7,
    status: 'available',
    category: 'Web Security',
    objectives: [
      'Identify reflected XSS',
      'Exploit stored XSS',
      'Implement CSP headers'
    ]
  },
  {
    id: 4,
    title: 'Buffer Overflow Exploitation',
    description: 'Advanced lab covering stack-based buffer overflow techniques and memory protection bypasses.',
    difficulty: 'Advanced',
    duration: '3 hours',
    participants: 432,
    rating: 4.9,
    status: 'locked',
    category: 'Binary Exploitation',
    objectives: [
      'Understand memory layout',
      'Craft exploit payloads',
      'Bypass ASLR and DEP'
    ]
  },
  {
    id: 5,
    title: 'Password Cracking Techniques',
    description: 'Learn ethical password recovery methods and understand authentication security.',
    difficulty: 'Intermediate',
    duration: '2 hours',
    participants: 1567,
    rating: 4.6,
    status: 'available',
    category: 'Authentication',
    objectives: [
      'Use hashcat and John',
      'Create wordlists',
      'Understand hash algorithms'
    ]
  },
  {
    id: 6,
    title: 'Wireless Network Security',
    description: 'Explore wireless network vulnerabilities and learn proper security configurations.',
    difficulty: 'Advanced',
    duration: '2.5 hours',
    participants: 678,
    rating: 4.8,
    status: 'locked',
    category: 'Network Security',
    objectives: [
      'Analyze WiFi protocols',
      'Perform WPA2 security audits',
      'Configure secure wireless'
    ]
  },
]

export default function Labs() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Virtual Security Labs</h1>
          <p className="text-gray-400 mt-1">Hands-on practice environments for security testing</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Active Labs:</span>
          <span className="px-3 py-1 rounded-full bg-cyber-primary/20 text-cyber-primary font-mono">
            4 / 6
          </span>
        </div>
      </div>

      {/* Featured Lab */}
      <div className="cyber-card cyber-glow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <span className="text-xs text-cyber-secondary font-medium uppercase tracking-wider">
              Featured Lab
            </span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">
              Complete Penetration Testing Simulation
            </h2>
            <p className="text-gray-400 mb-6">
              Experience a full-scale penetration test from reconnaissance to reporting. 
              This comprehensive lab simulates a real-world engagement with multiple target systems.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="text-cyber-primary" size={18} />
                <span className="text-gray-400">4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-cyber-primary" size={18} />
                <span className="text-gray-400">2,345 completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <span className="text-gray-400">4.9 rating</span>
              </div>
            </div>
            <button className="cyber-btn-primary flex items-center gap-2">
              <Play size={18} />
              Start Lab
            </button>
          </div>
          <div className="md:w-96">
            <Terminal title="lab@pentest-sim">
              <div className="space-y-2 text-xs">
                <p><span className="text-cyber-secondary">$</span> ./recon.sh target.lab</p>
                <p className="text-gray-500">[+] Starting reconnaissance...</p>
                <p className="text-gray-500">[+] Found 5 open ports</p>
                <p className="text-gray-500">[+] Identifying services...</p>
                <p><span className="text-cyber-secondary">$</span> _</p>
              </div>
            </Terminal>
          </div>
        </div>
      </div>

      {/* Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab) => (
          <div 
            key={lab.id} 
            className={`cyber-card relative ${lab.status === 'locked' ? 'opacity-70' : ''}`}
          >
            {/* Lock Indicator */}
            {lab.status === 'locked' && (
              <div className="absolute top-4 right-4">
                <Lock className="text-gray-500" size={20} />
              </div>
            )}
            
            {/* Category & Difficulty */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-cyber-secondary font-medium">
                {lab.category}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${
                lab.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                lab.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {lab.difficulty}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-white mb-2">{lab.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{lab.description}</p>

            {/* Objectives */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Learning Objectives:</p>
              <ul className="space-y-1">
                {lab.objectives.map((obj, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                    <FlaskConical size={12} className="text-cyber-primary" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {lab.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {lab.participants.toLocaleString()}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                {lab.rating}
              </span>
            </div>

            {/* Action Button */}
            <button 
              className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                lab.status === 'locked' 
                  ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                  : 'cyber-btn'
              }`}
              disabled={lab.status === 'locked'}
            >
              {lab.status === 'locked' ? (
                <>
                  <Lock size={16} />
                  Complete Prerequisites
                </>
              ) : (
                <>
                  <Unlock size={16} />
                  Launch Lab
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
