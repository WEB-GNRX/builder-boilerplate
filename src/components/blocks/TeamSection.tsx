'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Globe } from 'lucide-react'

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  website: Globe,
}

interface Social {
  platform?: 'linkedin' | 'twitter' | 'github' | 'website' | null
  url?: string | null
}

interface Member {
  name: string
  role: string
  bio?: string | null
  avatar?: { url?: string; alt?: string } | null
  socials?: Social[] | null
}

interface TeamProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  members?: Member[] | null
}

export function TeamSection({ eyebrow, heading, description, members }: TeamProps) {
  if (!members?.length) return null

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && <span className="text-caption uppercase tracking-widest text-primary-400 mb-4 block">{eyebrow}</span>}
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden glass"
            >
              {/* Avatar */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {member.avatar?.url ? (
                  <img
                    src={member.avatar.url}
                    alt={member.avatar.alt || member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <span className="text-display-lg font-display text-white/30">{member.name[0]}</span>
                  </div>
                )}

                {/* Hover overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  {member.bio && (
                    <p className="text-body-sm text-neutral-300 mb-4 line-clamp-3">{member.bio}</p>
                  )}
                  {member.socials && member.socials.length > 0 && (
                    <div className="flex gap-3">
                      {member.socials.map((social, j) => {
                        if (!social.platform || !social.url) return null
                        const Icon = socialIcons[social.platform]
                        return (
                          <a
                            key={j}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-white">{member.name}</h3>
                <p className="text-body-sm text-neutral-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
