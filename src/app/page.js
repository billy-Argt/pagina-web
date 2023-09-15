"use client"
import Clientes from '@/components/Clientes'
import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Nabvar'
import Productos from '@/components/Productos'

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Clientes />
      <Productos />
    </>
  )
}
