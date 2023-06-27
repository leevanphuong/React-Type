import React from 'react'

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
  return (
    <div>
        <button type="submit" className="btn btn-primary">{children}</button>
    </div>
  )
}

export default Button