'use client'

import { useTranslations } from 'next-intl'
import { TrendingUp, Code, Database, Users } from 'lucide-react'

interface Metric {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  color: string
}

export default function MetricsSection() {
  const t = useTranslations('home.metrics')

  const metrics: Metric[] = [
    {
      icon: TrendingUp,
      value: t('yearsExperience.value'),
      label: t('yearsExperience.label'),
      color: 'text-accent-600',
    },
    {
      icon: Code,
      value: t('systemsImproved.value'),
      label: t('systemsImproved.label'),
      color: 'text-blue-600',
    },
    {
      icon: Database,
      value: t('databaseTypes.value'),
      label: t('databaseTypes.label'),
      color: 'text-green-600',
    },
    {
      icon: Users,
      value: t('remoteReady.value'),
      label: t('remoteReady.label'),
      color: 'text-purple-600',
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        return (
          <div
            key={idx}
            className="
              bg-background-paper border border-border-default
              rounded-lg p-4 sm:p-6
              text-center
              transition-all duration-200
              hover:shadow-md hover:border-accent-300
            "
          >
            <div className="flex justify-center mb-3">
              <div className={`
                ${metric.color}
                p-2 rounded-full bg-background-secondary
              `}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-text-secondary">
              {metric.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
