import React from 'react'
import Cart from './componantes/Card'

const App = () => {
  return (
    <div className='p-4 flex flex-wrap gap-4'>
      <Cart username="Rahul Gupta" img="https://images.unsplash.com/photo-1601933552254-7167f80a6004?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" Text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo quidem doloremque eius natus eligendi."/>
      <Cart username="Ajay Mishra" img="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" Text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo quidem doloremque eius natus eligendi."/>
      <Cart username="Vijay rajpoot" img="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" Text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo quidem doloremque eius natus eligendi."/>
       <Cart username="Sunil rajpoot" img="https://plus.unsplash.com/premium_photo-1661632826973-64b80d95cf6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" Text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo quidem doloremque eius natus eligendi."/>
    </div>
  )
}

export default App
