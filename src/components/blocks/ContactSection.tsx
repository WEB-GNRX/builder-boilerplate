'use client'

import { ScrollReveal, StaggerChildren, fadeInUp } from '../motion'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = { mail: Mail, phone: Phone, location: MapPin }

interface ContactInfo {
  icon?: string | null
  label: string
  value: string
  url?: string | null
}

interface FormField {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | null
  required?: boolean | null
  placeholder?: string | null
}

interface ContactProps {
  heading?: string | null
  description?: string | null
  contactInfo?: ContactInfo[] | null
  formFields?: FormField[] | null
  submitLabel?: string | null
}

export function ContactSection({ heading, description, contactInfo, formFields, submitLabel = 'Send Message' }: ContactProps) {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          {heading && <h2 className="text-display-lg font-display mb-4">{heading}</h2>}
          {description && <p className="text-body-lg text-neutral-400">{description}</p>}
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          {contactInfo && contactInfo.length > 0 && (
            <StaggerChildren className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon ? iconMap[info.icon] || Mail : Mail
                return (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-body-sm text-neutral-500 mb-1">{info.label}</div>
                      {info.url ? (
                        <a href={info.url} className="text-body-md text-white hover:text-primary-400 transition-colors">{info.value}</a>
                      ) : (
                        <div className="text-body-md text-white">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </StaggerChildren>
          )}

          {/* Form */}
          <ScrollReveal className={contactInfo?.length ? 'lg:col-span-3' : 'lg:col-span-5 max-w-2xl mx-auto'}>
            <form className="space-y-6 glass rounded-2xl p-8">
              {formFields?.map((field, i) => (
                <div key={i}>
                  <label className="block text-body-sm text-neutral-400 mb-2">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder || ''}
                      required={field.required || false}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600
                                 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10
                                 transition-all duration-300 resize-none"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      placeholder={field.placeholder || ''}
                      required={field.required || false}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600
                                 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10
                                 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                {submitLabel}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
