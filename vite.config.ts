import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import { seo } from './seo.config.ts'
import {
  about,
  claude,
  education,
  experience,
  experiments,
  leadership,
  profile,
  projects,
  skills,
  work,
} from './src/data/profile.ts'

/** Adds the head tags, structured data, robots.txt and sitemap.xml from seo.config.ts. */
function seoPlugin(): Plugin {
  let base = '/'
  const siteUrl = (process.env.SITE_URL ?? seo.siteUrl).trim().replace(/\/+$/, '')
  // With no site URL yet, fall back to paths relative to the deploy base.
  const abs = (file = '') => (siteUrl ? `${siteUrl}/${file}` : `${base}${file}`)
  const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' })

  const structuredData = () => {
    const person = {
      '@type': 'Person',
      '@id': abs('#person'),
      name: seo.name,
      jobTitle: seo.jobTitle,
      description: seo.description,
      email: `mailto:${seo.email}`,
      worksFor: { '@type': 'Organization', name: seo.employer },
      sameAs: seo.profiles,
      knowsAbout: seo.knowsAbout,
      alumniOf: seo.alumniOf.map(name => ({ '@type': 'EducationalOrganization', name })),
      ...(siteUrl ? { url: abs(), image: abs(seo.shareImage) } : {}),
    }
    const graph = [
      {
        '@type': 'WebSite',
        '@id': abs('#website'),
        name: seo.name,
        description: seo.description,
        inLanguage: 'en',
        ...(siteUrl ? { url: abs() } : {}),
      },
      {
        '@type': 'ProfilePage',
        '@id': abs('#profile'),
        name: seo.title,
        isPartOf: { '@id': abs('#website') },
        mainEntity: { '@id': abs('#person') },
        ...(siteUrl ? { url: abs() } : {}),
      },
      person,
    ]
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
  }

  const esc = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const entry = (title: string, body: string, extra = '') =>
    `<li><h3>${esc(title)}</h3><p>${esc(body)}</p>${extra ? `<p>${esc(extra)}</p>` : ''}</li>`

  /** The page content as plain HTML, for crawlers and readers that do not run JavaScript. */
  const fallback = () =>
    `<div style="max-width:44rem;margin:0 auto;padding:3rem 1.25rem;line-height:1.6">` +
    `<h1>${esc(seo.name)}</h1><p><strong>${esc(seo.jobTitle)}</strong> · ${esc(profile.role)} at ${esc(profile.company)}</p>` +
    `<p>${esc(profile.heroBody)}</p>` +
    `<h2 id="about">About</h2><p>${esc(about.statement)}</p>` +
    `<ul>${about.pillars.map(item => entry(item.title, item.body)).join('')}</ul>` +
    `<h2 id="work">Work: ${esc(experience.role)}, ${esc(experience.company)} (${esc(experience.period)})</h2>` +
    `<p>${esc(experience.intro)}</p>` +
    `<ul>${work.map(item => entry(item.title, item.body, item.tags.join(', '))).join('')}` +
    `${leadership.map(item => entry(item.title, item.body)).join('')}</ul>` +
    `<h2 id="claude">AI-assisted engineering</h2><p>${esc(claude.intro)}</p>` +
    `<ul>${claude.workflows.map(item => entry(item.title, item.body)).join('')}</ul>` +
    `<h2 id="projects">Projects</h2>` +
    `<ul>${projects.map(item => entry(item.title, item.body, item.tags.join(', '))).join('')}` +
    `${experiments.map(item => entry(item.title, item.body, item.tags.join(', '))).join('')}</ul>` +
    `<h2 id="skills">Skills</h2>` +
    `<ul>${skills.map(group => `<li><strong>${esc(group.group)}:</strong> ${esc(group.items.join(', '))}</li>`).join('')}</ul>` +
    `<h2>Education</h2>` +
    `<ul>${education.map(item => `<li>${esc([item.title, item.school, item.period].filter(Boolean).join(', '))}</li>`).join('')}</ul>` +
    `<h2 id="contact">Contact</h2>` +
    `<p><a href="mailto:${seo.email}">${seo.email}</a> · ` +
    seo.profiles.map(url => `<a href="${url}">LinkedIn</a>`).join(' · ') +
    ` · <a href="${base}${seo.resume}">Résumé (PDF)</a></p></div>`

  return {
    name: 'seo',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = [
        { tag: 'title', children: seo.title, injectTo: 'head' },
        meta({ name: 'description', content: seo.description }),
        meta({ name: 'author', content: seo.name }),
        meta({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }),
        meta({ property: 'og:type', content: 'profile' }),
        meta({ property: 'og:site_name', content: seo.name }),
        meta({ property: 'og:locale', content: seo.locale }),
        meta({ property: 'og:title', content: seo.title }),
        meta({ property: 'og:description', content: seo.shareDescription }),
        meta({ property: 'og:image', content: abs(seo.shareImage) }),
        meta({ property: 'og:image:type', content: 'image/png' }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ property: 'og:image:alt', content: seo.shareImageAlt }),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:title', content: seo.title }),
        meta({ name: 'twitter:description', content: seo.shareDescription }),
        meta({ name: 'twitter:image', content: abs(seo.shareImage) }),
        meta({ name: 'twitter:image:alt', content: seo.shareImageAlt }),
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: structuredData(),
          injectTo: 'head',
        },
        { tag: 'noscript', children: fallback(), injectTo: 'body' },
      ]
      if (siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: abs() }, injectTo: 'head' },
          meta({ property: 'og:url', content: abs() })
        )
      }
      return tags
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (siteUrl) {
        robots.push('', `Sitemap: ${abs('sitemap.xml')}`)
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source:
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `  <url>\n    <loc>${abs()}</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n` +
            `</urlset>\n`,
        })
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  appType: 'mpa',
  plugins: [react(), tailwindcss(), seoPlugin()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
