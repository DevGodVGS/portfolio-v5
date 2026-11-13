/**
 * Search and social-sharing details, injected into index.html at build time.
 *
 * Set `siteUrl` to the address the site is served from (or pass SITE_URL when
 * building). The canonical link, sitemap and absolute share-image URL are only
 * emitted once it is set.
 */
export const seo = {
  siteUrl: '',
  name: 'Vishwa Gaurav Shukla',
  jobTitle: 'Full Stack Software Engineer',
  title: 'Vishwa Gaurav Shukla · Full Stack Software Engineer',
  description:
    'Vishwa Gaurav Shukla is a full-stack software engineer building scalable web applications and AI-powered products with React, Next.js, Node.js and Azure.',
  shareDescription:
    'Full-stack engineer shipping AI-powered products, single sign-on and design systems with React, Next.js, Node.js and Azure.',
  shareImage: 'og.png',
  shareImageAlt: 'Vishwa Gaurav Shukla, Full Stack Software Engineer',
  locale: 'en_US',
  email: 'shuklavishwagaurav@gmail.com',
  employer: '98thPercentile',
  profiles: ['https://www.linkedin.com/in/vgs-profile'],
  resume: 'Vishwa-Gaurav-Shukla-Resume.pdf',
  knowsAbout: [
    'Full-stack web development',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Microsoft Azure',
    'Single sign-on',
    'System design',
    'LLM integration',
    'Azure OpenAI',
    'Google Gemini',
    'AI-assisted development',
  ],
  /** Sections listed in the no-JavaScript fallback. */
  sections: [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'claude', label: 'Claude Code' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
};
