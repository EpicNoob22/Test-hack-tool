import { useState } from 'react'
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Bell,
  Save,
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Check,
  X
} from 'lucide-react'

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'content', label: 'Content Management', icon: BookOpen },
  { id: 'security', label: 'Security Settings', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', modules: 24 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor', status: 'Active', modules: 18 },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Student', status: 'Active', modules: 12 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Student', status: 'Inactive', modules: 5 },
]

const mockContent = [
  { id: 1, title: 'OWASP Top 10', type: 'Module', status: 'Published', views: 2456, created: '2024-01-15' },
  { id: 2, title: 'SQL Injection Lab', type: 'Lab', status: 'Published', views: 1823, created: '2024-01-20' },
  { id: 3, title: 'Network Security Basics', type: 'Module', status: 'Draft', views: 0, created: '2024-02-01' },
  { id: 4, title: 'XSS Prevention', type: 'Module', status: 'Published', views: 1567, created: '2024-02-10' },
]

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Admin Panel</h1>
          <p className="text-gray-400 mt-1">Manage your security learning platform</p>
        </div>
        <button className="cyber-btn-primary flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-cyber-primary/20 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-cyber-primary/20 text-cyber-primary border-b-2 border-cyber-primary'
                  : 'text-gray-400 hover:text-white hover:bg-cyber-primary/10'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'users' && <UsersTab users={mockUsers} />}
        {activeTab === 'content' && <ContentTab content={mockContent} />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
      </div>
    </div>
  )
}

function OverviewTab() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Active Modules', value: '24', change: '+3' },
    { label: 'Labs Completed', value: '8,567', change: '+156' },
    { label: 'Certificates Issued', value: '432', change: '+28' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="cyber-card">
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold cyber-text mt-2">{stat.value}</p>
            <p className="text-green-400 text-sm mt-2">{stat.change} this month</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="cyber-btn flex items-center justify-center gap-2 py-4">
            <Plus size={18} />
            Create New Module
          </button>
          <button className="cyber-btn flex items-center justify-center gap-2 py-4">
            <Plus size={18} />
            Add New Lab
          </button>
          <button className="cyber-btn flex items-center justify-center gap-2 py-4">
            <Users size={18} />
            Invite Users
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Platform Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New user registered', user: 'john@example.com', time: '5 min ago' },
            { action: 'Module completed', user: 'jane@example.com', time: '15 min ago' },
            { action: 'Lab submission', user: 'bob@example.com', time: '32 min ago' },
            { action: 'Certificate issued', user: 'alice@example.com', time: '1 hour ago' },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-cyber-primary/5">
              <div>
                <p className="text-white">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  modules: number
}

function UsersTab({ users }: { users: User[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">User Management</h2>
        <button className="cyber-btn-primary flex items-center gap-2">
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="cyber-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyber-primary/20">
              <th className="text-left p-4 text-gray-400 font-medium">Name</th>
              <th className="text-left p-4 text-gray-400 font-medium">Email</th>
              <th className="text-left p-4 text-gray-400 font-medium">Role</th>
              <th className="text-left p-4 text-gray-400 font-medium">Status</th>
              <th className="text-left p-4 text-gray-400 font-medium">Modules</th>
              <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-cyber-primary/10 hover:bg-cyber-primary/5">
                <td className="p-4 text-white">{user.name}</td>
                <td className="p-4 text-gray-400">{user.email}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' :
                    user.role === 'Instructor' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`flex items-center gap-1 ${
                    user.status === 'Active' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {user.status === 'Active' ? <Check size={14} /> : <X size={14} />}
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{user.modules}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded hover:bg-cyber-primary/10 text-gray-400 hover:text-cyber-primary">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 rounded hover:bg-red-500/10 text-gray-400 hover:text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface Content {
  id: number
  title: string
  type: string
  status: string
  views: number
  created: string
}

function ContentTab({ content }: { content: Content[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Content Management</h2>
        <div className="flex items-center gap-2">
          <button className="cyber-btn flex items-center gap-2">
            <Plus size={18} />
            New Module
          </button>
          <button className="cyber-btn flex items-center gap-2">
            <Plus size={18} />
            New Lab
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.map((item) => (
          <div key={item.id} className="cyber-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.type === 'Module' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2">{item.title}</h3>
              </div>
              <span className={`flex items-center gap-1 text-xs ${
                item.status === 'Published' ? 'text-green-400' : 'text-yellow-400'
              }`}>
                {item.status === 'Published' ? <Eye size={14} /> : <EyeOff size={14} />}
                {item.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{item.views.toLocaleString()} views</span>
              <span>Created: {item.created}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-cyber-primary/10 flex justify-end gap-2">
              <button className="cyber-btn text-sm flex items-center gap-2">
                <Edit size={14} />
                Edit
              </button>
              <button className="cyber-btn text-sm flex items-center gap-2 text-red-400 border-red-400/40 hover:bg-red-500/10">
                <Trash2 size={14} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SecurityTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Security Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="cyber-card">
          <h3 className="text-lg font-semibold text-white mb-4">Authentication</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Require 2FA for all admin accounts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-cyber-primary/50 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Session Timeout</p>
                <p className="text-sm text-gray-500">Auto-logout after inactivity</p>
              </div>
              <select className="cyber-input w-32 text-sm">
                <option>15 min</option>
                <option>30 min</option>
                <option>1 hour</option>
                <option>4 hours</option>
              </select>
            </div>
          </div>
        </div>

        <div className="cyber-card">
          <h3 className="text-lg font-semibold text-white mb-4">Lab Environment</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Network Isolation</p>
                <p className="text-sm text-gray-500">Isolate lab environments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-cyber-primary/50 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Lab Time Limit</p>
                <p className="text-sm text-gray-500">Maximum lab session duration</p>
              </div>
              <select className="cyber-input w-32 text-sm">
                <option>2 hours</option>
                <option>4 hours</option>
                <option>8 hours</option>
                <option>Unlimited</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotificationsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Notification Settings</h2>
      
      <div className="cyber-card">
        <h3 className="text-lg font-semibold text-white mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { label: 'New User Registration', desc: 'Get notified when new users sign up' },
            { label: 'Module Completion', desc: 'Get notified when users complete modules' },
            { label: 'Lab Submission', desc: 'Get notified when users submit lab work' },
            { label: 'Weekly Summary', desc: 'Receive weekly platform statistics' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-cyber-primary/5">
              <div>
                <p className="text-white">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-cyber-primary/50 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
