import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  
  return (
    <aside 
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-red-500 cursor-pointer hover:bg-red-500 rounded-full hover:text-white '/>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll'>
      {
        context.cartProducts.map(product => (
          <OrderCard 
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))
      }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu