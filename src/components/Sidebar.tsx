import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  BookOpen, 
  FlaskConical, 
  Wrench, 
  Settings, 
  FileText,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Learning Modules', path: '/modules' },
  { icon: FlaskConical, label: 'Virtual Labs', path: '/labs' },
  { icon: Wrench, label: 'Security Tools', path: '/tools' },
  { icon: FileText, label: 'Documentation', path: '/docs' },
  { icon: Settings, label: 'Admin Panel', path: '/admin' },
]

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation()

  return (
    <aside 
      className={`fixed left-0 top-0 h-full glass z-50 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-cyber-primary/20">
        <div className="relative">
          <Shield className="w-10 h-10 text-cyber-primary float-animation" />
          <div className="absolute inset-0 bg-cyber-primary/20 rounded-full blur-xl" />
        </div>
        {isOpen && (
          <div className="overflow-hidden">
            <h1 className="text-xl font-bold cyber-text">CyberEdu</h1>
            <p className="text-xs text-gray-500">Security Learning</p>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-cyber-dark border border-cyber-primary/40 
                   flex items-center justify-center text-cyber-primary hover:bg-cyber-primary/20 transition-colors"
      >
        {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
            >
              <Icon 
                size={20} 
                className={isActive ? 'text-cyber-primary' : 'text-gray-400'} 
              />
              {isOpen && (
                <span className={isActive ? 'text-cyber-primary font-medium' : 'text-gray-400'}>
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      {isOpen && (
        <div className="absolute bottom-6 left-4 right-4">
          <div className="cyber-card p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-secondary flex items-center justify-center">
                <span className="text-cyber-darker font-bold text-sm">E</span>
              </div>
              <div>
                <p className="text-sm font-medium">Ethical Hacker</p>
                <p className="text-xs text-gray-500">Pro License</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }} />
            </div>
            <p className="text-xs text-gray-500 mt-2">75% Course Progress</p>
          </div>
        </div>
      )}
    </aside>
  )
}
