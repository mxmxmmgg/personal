import { Mail, Github, Linkedin, Telegram } from './icons'

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  telegram: Telegram,
}

type SocialIconProps = {
  kind: keyof typeof components
  href?: string
  size?: number
}

const SocialIcon = ({ kind, href }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className={`text-sm text-gray-500 transition hover:text-gray-600`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200`}
        width={40}
        height={40}
      />
    </a>
  )
}

export default SocialIcon
