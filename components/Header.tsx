import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass = 'flex items-center justify-between py-10'

  return (
    <header className={headerClass}>
      <div className="flex items-center justify-between">
        <div className="mr-3">
          <img src="android-chrome-192x192.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden h-6 text-2xl mb-2.5 font-semibold sm:block">Magomed Gasanov</div>
      </div>
      <div className="space-x-4 leading-5">
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
