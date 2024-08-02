"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/components/common/Header'
import DashboardCards from '@/components/dashboard/DashboardCards'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {
  const { user, loading } = useAuth({middleware: 'auth'})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if(!loading) {
      setIsAuthenticated(!!user)
    }
  }, [user, loading])

  if(loading) {
    return <div className="h-full flex text-black justify-center items-center text-xl absolute left-0 top-0 right-0 bottom-0 bg-gray-100">Loading...</div>
  }
  return (
    <> 
    <Header minHeight="min-h-20" />
    <div className="bg-gray-200 relative px-8">
      <DashboardCards />
    </div>
    </>
  )
}

export default Dashboard