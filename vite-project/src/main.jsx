import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import ProductListing from './product_listing.jsx'

createRoot(document.getElementById('root')).render(
    <>
      
      <ProductListing/>
    </>,
)
