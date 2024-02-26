import { Layout } from './Layout'
import { NavigationLinks } from './NavigationLinks'

function NavigationBar() {
  return (
    <>
      <div className="hidden lg:block">
        <Layout>
          <NavigationLinks />
        </Layout>
      </div>
      <div className="block lg:hidden">
        <Layout isMobile>
          <NavigationLinks />
        </Layout>
      </div>
    </>
  )
}

export default NavigationBar
