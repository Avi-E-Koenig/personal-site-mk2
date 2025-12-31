'use client'

import { useTranslations } from 'next-intl'
import { Code, Database, Briefcase, Target } from 'lucide-react'

interface TechItem {
  label: string
  category: 'backend' | 'database' | 'domain' | 'strength'
  icon: React.ComponentType<{ className?: string }>
}

export default function TechStack() {
  const t = useTranslations('home.snapshot')

  const techItems: TechItem[] = [
    { label: t('item1'), category: 'backend', icon: Code },
    { label: t('item2'), category: 'database', icon: Database },
    { label: t('item3'), category: 'domain', icon: Briefcase },
    { label: t('item4'), category: 'strength', icon: Target },
  ]

  const categoryConfig = {
    backend: {
      label: 'Backend',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      iconColor: 'text-accent-600',
    },
    database: {
      label: 'Database',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
    },
    domain: {
      label: 'Domain',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
    },
    strength: {
      label: 'Core Strength',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600',
    },
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {techItems.map((item, idx) => {
        const config = categoryConfig[item.category]
        const Icon = item.icon
        return (
          <div
            key={idx}
            className={`
              ${config.bgColor} ${config.borderColor}
              border rounded-lg p-5
              transition-all duration-200
              hover:shadow-md hover:scale-[1.02]
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                ${config.iconColor}
                p-2 rounded-lg bg-background-paper
                flex-shrink-0
              `}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
                  {config.label}
                </p>
                <p className="text-base text-text-primary leading-relaxed">
                  {item.label}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
