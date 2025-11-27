interface TerminalProps {
  title?: string
  children: React.ReactNode
}

export default function Terminal({ title = 'Terminal', children }: TerminalProps) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="text-gray-500 text-xs ml-2">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  )
}
