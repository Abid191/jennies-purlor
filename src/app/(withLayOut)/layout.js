import React from 'react'
import Navbar from '../components/Shared/Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}
