'use client'

interface FooterColumn {
  title: string
  links?: Array<{ label: string; url: string; newTab?: boolean | null }> | null
}

interface FooterProps {
  siteName?: string
  columns?: FooterColumn[] | null
  copyright?: string | null
  bottomLinks?: Array<{ label: string; url: string }> | null
}

export function FooterLayout({ siteName = 'Builder', columns, copyright, bottomLinks }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-neutral-950">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <a href="/" className="text-display-xs font-display gradient-text mb-4 block">
              {siteName}
            </a>
            <p className="text-body-sm text-neutral-500 max-w-xs">
              Building exceptional digital experiences with modern technology and beautiful design.
            </p>
          </div>

          {/* Columns */}
          {columns?.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-white mb-4 text-body-sm">{col.title}</h4>
              <ul className="space-y-3">
                {col.links?.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.url}
                      target={link.newTab ? '_blank' : undefined}
                      rel={link.newTab ? 'noopener noreferrer' : undefined}
                      className="text-body-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-body-xs text-neutral-600">
            {copyright || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`}
          </p>
          {bottomLinks && bottomLinks.length > 0 && (
            <div className="flex gap-6">
              {bottomLinks.map((link, i) => (
                <a key={i} href={link.url} className="text-body-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
