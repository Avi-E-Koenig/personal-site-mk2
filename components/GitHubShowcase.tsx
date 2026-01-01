'use client'

import { Code, ExternalLink, Star } from 'lucide-react'

interface Repo {
  name: string
  description: string
  url: string
  stars?: number
  language?: string
}

export default function GitHubShowcase() {

  // Static repository highlights - can be replaced with API calls later
  const repos: Repo[] = [
    {
      name: 'personal-site-mk2',
      description: 'This portfolio website built with Next.js, TypeScript, and Tailwind CSS',
      url: 'https://github.com/Avi-E-Koenig/personal-site-mk2',
      language: 'TypeScript',
    },
    {
      name: 'Check GitHub',
      description: 'Explore more repositories and code examples on my GitHub profile',
      url: 'https://github.com/Avi-E-Koenig',
      language: 'Various',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {repos.map((repo, idx) => (
        <a
          key={idx}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-background-paper border border-border-default
            rounded-lg p-6
            transition-all duration-200
            hover:shadow-lg hover:border-accent-300 hover:scale-[1.02]
            group
          "
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-text-secondary" />
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-600 transition-colors">
                {repo.name}
              </h3>
            </div>
            <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-600 transition-colors" />
          </div>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            {repo.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-accent-500"></span>
                {repo.language}
              </span>
            )}
            {repo.stars !== undefined && (
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stars}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
