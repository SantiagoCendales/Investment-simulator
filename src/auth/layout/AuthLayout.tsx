import React from 'react'
import { Heading } from '../../components/Heading'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({children, title, subtitle}) => {
  return (
    <div
      className="
        w-[447px]
        mx-auto
        border
        rounded-md
        flex
        justify-center
        items-center
        px-14
        py-20
      ">
      <div>
        <div className="mb-6">
          <Heading
            title={title}
            subtitle={subtitle}
          />
        </div>
        {children}

      </div>
    </div>
  )
}
