import {ReactNode} from 'react'
import Header from '@/components/Header'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div>
        <main className='root-container'>
            <div className='mx-auto max-w-7xl'>
              <Header>

              </Header>
              <div className='mt-20 pb-20'>
              {children}
              </div>
            </div>

        </main>
    </div>
  )
}

export default layout