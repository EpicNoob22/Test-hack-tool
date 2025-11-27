import { 
  Shield, 
  BookOpen, 
  Trophy, 
  Target, 
  TrendingUp,
  Clock,
  Zap,
  Award
} from 'lucide-react'
import StatCard from '../components/StatCard'
import Terminal from '../components/Terminal'

const recentActivities = [
  { id: 1, action: 'Completed', item: 'SQL Injection Basics', time: '2 hours ago', icon: BookOpen },
  { id: 2, action: 'Started', item: 'Network Reconnaissance Lab', time: '4 hours ago', icon: Target },
  { id: 3, action: 'Earned Badge', item: 'OWASP Top 10 Expert', time: '1 day ago', icon: Award },
  { id: 4, action: 'Completed', item: 'XSS Prevention Module', time: '2 days ago', icon: Shield },
]

const upcomingLabs = [
  { id: 1, title: 'Buffer Overflow Analysis', difficulty: 'Advanced', duration: '2h', progress: 0 },
  { id: 2, title: 'Web App Vulnerability Scan', difficulty: 'Intermediate', duration: '1.5h', progress: 30 },
  { id: 3, title: 'Network Traffic Analysis', difficulty: 'Beginner', duration: '1h', progress: 75 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Security Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back! Continue your cybersecurity journey.</p>
        </div>
        <button className="cyber-btn-primary flex items-center gap-2">
          <Zap size={18} />
          Quick Start Lab
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={BookOpen}
          label="Modules Completed"
          value={24}
          change="+3 this week"
          changeType="positive"
        />
        <StatCard 
          icon={Target}
          label="Labs Finished"
          value={18}
          change="+5 this week"
          changeType="positive"
        />
        <StatCard 
          icon={Trophy}
          label="Certifications"
          value={4}
          change="2 pending"
          changeType="neutral"
        />
        <StatCard 
          icon={TrendingUp}
          label="Skill Score"
          value="8,450"
          change="+12%"
          changeType="positive"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="text-cyber-primary" size={20} />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon
              return (
                <div 
                  key={activity.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-cyber-primary/5 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyber-primary/10">
                    <Icon className="w-5 h-5 text-cyber-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">
                      <span className="text-gray-400">{activity.action}</span>{' '}
                      {activity.item}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Terminal Preview */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="text-cyber-primary" size={20} />
            Quick Commands
          </h2>
          <Terminal title="cyberedu@terminal">
            <div className="space-y-2 text-sm">
              <p><span className="text-cyber-secondary">$</span> nmap -sV target.local</p>
              <p className="text-gray-500"># Network port scanning</p>
              <p><span className="text-cyber-secondary">$</span> nikto -h http://target</p>
              <p className="text-gray-500"># Web vulnerability scan</p>
              <p><span className="text-cyber-secondary">$</span> sqlmap -u "url" --dbs</p>
              <p className="text-gray-500"># SQL injection test</p>
            </div>
          </Terminal>
        </div>
      </div>

      {/* Upcoming Labs */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="text-cyber-primary" size={20} />
          Upcoming Labs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingLabs.map((lab) => (
            <div 
              key={lab.id}
              className="p-4 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  lab.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                  lab.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {lab.difficulty}
                </span>
                <span className="text-xs text-gray-500">{lab.duration}</span>
              </div>
              <h3 className="text-white font-medium mb-3">{lab.title}</h3>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${lab.progress}%` }} />
              </div>
              <p className="text-xs text-gray-500 mt-2">{lab.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
