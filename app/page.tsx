import SocialIcon from '@/components/social-icons'
import NextImage from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-geist-mono',
  subsets: ['cyrillic'],
})

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Немного обо мне
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <NextImage
              src="avatar.png"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
              Магомед Гасанов
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Фронтенд разработчик</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href="mailto:mxmxmmgg25@gmail.com" />
              <SocialIcon kind="github" href={`https://github.com/mxmxmmgg`} />
              <SocialIcon kind="telegram" href={`https://t.me/kkkkkm25`} />
            </div>
          </div>
          <div className={`${inter.variable} prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2`}>
            <p>
              Фронтенд-разработчик с опытом работы в высоконагруженных проектах, включая сервисы
              уровня магазинов электроники и доставки продуктов. Увлечен изучением и созданием инструментов для
              автоматизации задач в различных отраслях деятельности.
            </p>
            <br />
            <p>
              Развиваюсь в области архитектуры и оптимизации приложений, также участвую в
              opensource-проектах, решая реальные проблемы и анализируя лучшие практики и подходы в
              разработке.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
