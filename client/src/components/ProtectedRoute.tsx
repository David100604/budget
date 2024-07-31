import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import img from '../assets/protected.png'

interface Props {
    children: JSX.Element
}

export const ProtectedRoute:FC<Props> = ({ children }) => {
    const isAuth = useAuth()
  return (
    <>
        {isAuth ? (
            children
        ) : (
            <div className="mt-20 flex flex-col items-center justify-center gar-10">
                <h1 className="text-2xl">To view this page you must be logged in.</h1>

                <img src={img} alt="Image that represent something protected" className="w-1/3" />
            </div>
        )}
    </>
  )
}
