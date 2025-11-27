import { Search, Bell, Menu, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-40 px-6 py-4 border-b border-cyber-primary/20">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-cyber-primary/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-cyber-primary" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search modules, labs, tools..."
              className="cyber-input pl-10 w-80"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-cyber-primary/10 transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-danger rounded-full" />
          </button>

          {/* User Menu */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-secondary 
                          flex items-center justify-center">
              <User className="w-5 h-5 text-cyber-darker" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
