import { Wrench, ExternalLink, Download, Star, Shield, Search, Filter } from 'lucide-react'
import Terminal from '../components/Terminal'

const securityTools = [
  {
    id: 1,
    name: 'Nmap',
    category: 'Network Scanning',
    description: 'Network exploration and security auditing tool. Discovers hosts and services on a network.',
    usage: 'nmap -sV -sC target.com',
    documentation: 'https://nmap.org/docs.html',
    rating: 4.9,
    tags: ['Port Scanning', 'Service Detection', 'OS Detection'],
    icon: '🔍'
  },
  {
    id: 2,
    name: 'Burp Suite',
    category: 'Web Security Testing',
    description: 'Integrated platform for performing security testing of web applications.',
    usage: 'Configure browser proxy → Intercept → Analyze',
    documentation: 'https://portswigger.net/burp/documentation',
    rating: 4.8,
    tags: ['Proxy', 'Scanner', 'Intruder', 'Repeater'],
    icon: '🕸️'
  },
  {
    id: 3,
    name: 'Metasploit',
    category: 'Penetration Testing',
    description: 'World\'s most used penetration testing framework for finding vulnerabilities.',
    usage: 'msfconsole → use exploit → set options → exploit',
    documentation: 'https://docs.metasploit.com/',
    rating: 4.9,
    tags: ['Exploits', 'Payloads', 'Post-Exploitation'],
    icon: '⚔️'
  },
  {
    id: 4,
    name: 'Wireshark',
    category: 'Network Analysis',
    description: 'Network protocol analyzer for troubleshooting and analysis of network traffic.',
    usage: 'Capture interface → Apply filters → Analyze packets',
    documentation: 'https://www.wireshark.org/docs/',
    rating: 4.8,
    tags: ['Packet Capture', 'Protocol Analysis', 'Filtering'],
    icon: '📊'
  },
  {
    id: 5,
    name: 'SQLMap',
    category: 'Web Security Testing',
    description: 'Automatic SQL injection and database takeover tool.',
    usage: 'sqlmap -u "http://target/page?id=1" --dbs',
    documentation: 'https://sqlmap.org/',
    rating: 4.7,
    tags: ['SQL Injection', 'Database', 'Automated'],
    icon: '💉'
  },
  {
    id: 6,
    name: 'Hashcat',
    category: 'Password Security',
    description: 'Advanced password recovery utility supporting multiple attack modes.',
    usage: 'hashcat -m 0 -a 0 hash.txt wordlist.txt',
    documentation: 'https://hashcat.net/wiki/',
    rating: 4.8,
    tags: ['Hash Cracking', 'GPU', 'Wordlists'],
    icon: '🔓'
  },
  {
    id: 7,
    name: 'Nikto',
    category: 'Web Security Testing',
    description: 'Web server scanner which performs comprehensive tests against web servers.',
    usage: 'nikto -h http://target.com',
    documentation: 'https://cirt.net/Nikto2',
    rating: 4.5,
    tags: ['Web Scanner', 'Vulnerability', 'Configuration'],
    icon: '🔎'
  },
  {
    id: 8,
    name: 'John the Ripper',
    category: 'Password Security',
    description: 'Fast password cracker available for many operating systems.',
    usage: 'john --wordlist=rockyou.txt hash.txt',
    documentation: 'https://www.openwall.com/john/doc/',
    rating: 4.6,
    tags: ['Password Cracking', 'Hash', 'Wordlists'],
    icon: '🔑'
  },
]

const categories = ['All', 'Network Scanning', 'Web Security Testing', 'Penetration Testing', 'Network Analysis', 'Password Security']

export default function Tools() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Security Tools Reference</h1>
          <p className="text-gray-400 mt-1">Learn about professional security testing tools</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search tools..."
              className="cyber-input pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter size={16} className="text-gray-500" />
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              cat === 'All' 
                ? 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/40'
                : 'bg-cyber-dark/50 text-gray-400 border border-gray-700 hover:border-cyber-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Important Notice */}
      <div className="cyber-card bg-yellow-500/5 border-yellow-500/30">
        <div className="flex items-start gap-4">
          <Shield className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-yellow-500 font-semibold mb-2">⚠️ Ethical Use Only</h3>
            <p className="text-gray-400 text-sm">
              These tools are for <strong>educational purposes</strong> and <strong>authorized security testing only</strong>. 
              Always obtain proper written authorization before testing any systems. Unauthorized access to computer 
              systems is illegal and unethical.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityTools.map((tool) => (
          <div key={tool.id} className="cyber-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{tool.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-gray-400">{tool.rating}</span>
                  </span>
                </div>
                <span className="text-xs text-cyber-secondary">{tool.category}</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-cyber-primary/10 text-cyber-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Usage Example */}
            <Terminal title={`${tool.name.toLowerCase()}-example`}>
              <div className="text-xs">
                <p><span className="text-cyber-secondary">$</span> {tool.usage}</p>
              </div>
            </Terminal>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-cyber-primary/10 flex items-center justify-between">
              <a 
                href={tool.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-cyber-primary flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={14} />
                Documentation
              </a>
              <button className="cyber-btn text-sm flex items-center gap-2">
                <Wrench size={14} />
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tool Installation Guide */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Download className="text-cyber-primary" size={20} />
          Setting Up Your Lab Environment
        </h2>
        <p className="text-gray-400 mb-4">
          For safe practice, we recommend setting up a virtualized environment. Here's how to get started:
        </p>
        <Terminal title="setup@lab">
          <div className="space-y-2 text-xs">
            <p className="text-gray-500"># Download and install VirtualBox or VMware</p>
            <p className="text-gray-500"># Get Kali Linux ISO (includes all tools)</p>
            <p><span className="text-cyber-secondary">$</span> wget https://kali.download/base-images/</p>
            <p className="text-gray-500"># Create new VM with 4GB RAM, 50GB disk</p>
            <p className="text-gray-500"># Boot from ISO and install</p>
            <p><span className="text-cyber-secondary">$</span> sudo apt update && sudo apt upgrade</p>
            <p className="text-gray-500"># Set up vulnerable targets (DVWA, Metasploitable)</p>
            <p><span className="text-cyber-secondary">$</span> docker pull vulnerables/web-dvwa</p>
          </div>
        </Terminal>
      </div>
    </div>
  )
}
