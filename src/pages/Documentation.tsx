import { FileText, ChevronRight, Shield, AlertTriangle, CheckCircle, Book } from 'lucide-react'
import Terminal from '../components/Terminal'

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    articles: [
      'Platform Overview',
      'Setting Up Your Account',
      'Navigating the Dashboard',
      'Your First Module'
    ]
  },
  {
    id: 'ethical-guidelines',
    title: 'Ethical Guidelines',
    icon: Shield,
    articles: [
      'Code of Conduct',
      'Legal Considerations',
      'Responsible Disclosure',
      'Authorization Requirements'
    ]
  },
  {
    id: 'lab-environments',
    title: 'Lab Environments',
    icon: FileText,
    articles: [
      'Virtual Lab Setup',
      'Network Configuration',
      'Tool Installation',
      'Troubleshooting Common Issues'
    ]
  }
]

export default function Documentation() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold cyber-text">Documentation</h1>
        <p className="text-gray-400 mt-1">Learn about ethical pentesting and platform usage</p>
      </div>

      {/* Important Legal Notice */}
      <div className="cyber-card bg-red-500/5 border-red-500/30">
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-red-500 font-semibold mb-2">⚠️ Legal Disclaimer</h3>
            <p className="text-gray-400 text-sm mb-4">
              This platform is designed for <strong>educational purposes only</strong>. All security testing 
              techniques taught here must only be used on systems you own or have explicit written 
              authorization to test. Unauthorized access to computer systems is a federal crime under 
              laws such as the Computer Fraud and Abuse Act (CFAA).
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Always obtain written permission before testing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Use isolated lab environments for practice
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Report vulnerabilities through proper channels
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                Never use skills to cause harm or steal data
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {docSections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.id} className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyber-primary/10">
                  <Icon className="text-cyber-primary" size={24} />
                </div>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.articles.map((article) => (
                  <li key={article}>
                    <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-cyber-primary/10 transition-colors text-left">
                      <span className="text-gray-400 text-sm">{article}</span>
                      <ChevronRight className="text-gray-500" size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Ethical Pentesting Methodology */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4">Ethical Pentesting Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: 'Planning', desc: 'Define scope and get authorization' },
            { step: 2, title: 'Reconnaissance', desc: 'Gather information about the target' },
            { step: 3, title: 'Scanning', desc: 'Identify vulnerabilities' },
            { step: 4, title: 'Exploitation', desc: 'Verify vulnerabilities (carefully)' },
            { step: 5, title: 'Reporting', desc: 'Document findings and remediation' },
          ].map((phase) => (
            <div key={phase.step} className="text-center p-4 rounded-lg border border-cyber-primary/20">
              <div className="w-10 h-10 rounded-full bg-cyber-primary/20 text-cyber-primary flex items-center justify-center mx-auto mb-3 font-bold">
                {phase.step}
              </div>
              <h3 className="text-white font-semibold mb-1">{phase.title}</h3>
              <p className="text-gray-500 text-xs">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Authorization Template */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4">Authorization Template</h2>
        <p className="text-gray-400 text-sm mb-4">
          Always use a formal authorization document before conducting any security testing. Here's a template:
        </p>
        <Terminal title="authorization-template.txt">
          <div className="space-y-2 text-xs">
            <p className="text-gray-500">=========================================</p>
            <p className="text-white">PENETRATION TESTING AUTHORIZATION FORM</p>
            <p className="text-gray-500">=========================================</p>
            <p></p>
            <p className="text-gray-400">Date: _______________</p>
            <p className="text-gray-400">Client Name: _______________</p>
            <p className="text-gray-400">Testing Organization: _______________</p>
            <p></p>
            <p className="text-white">SCOPE OF TESTING:</p>
            <p className="text-gray-400">- Target Systems: _______________</p>
            <p className="text-gray-400">- IP Ranges: _______________</p>
            <p className="text-gray-400">- Testing Window: _______________</p>
            <p></p>
            <p className="text-white">AUTHORIZATION:</p>
            <p className="text-gray-400">I hereby authorize the above-named</p>
            <p className="text-gray-400">organization to perform security testing</p>
            <p className="text-gray-400">on the specified systems...</p>
            <p></p>
            <p className="text-gray-400">Signature: _______________</p>
          </div>
        </Terminal>
      </div>

      {/* Best Practices */}
      <div className="cyber-card">
        <h2 className="text-xl font-semibold text-white mb-4">Security Testing Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-cyber-primary font-semibold mb-3">✅ Do</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                Always get written authorization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                Define clear scope and rules of engagement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                Document everything you do
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                Report vulnerabilities responsibly
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                Practice in isolated lab environments
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-400 font-semibold mb-3">❌ Don't</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
                Test systems without authorization
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
                Share or exploit discovered vulnerabilities
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
                Access or modify production data
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
                Exceed the agreed scope
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
                Cause denial of service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
