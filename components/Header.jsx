import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'

const name = 'Lucas Solares'

const Header = () => (
    <div className="container flex px-4 py-4 items-center">
        <AiOutlineMenu className="text-2xl" />
        <h1 className="flex-1 text-xl ml-4 font-medium uppercase text-blue-500">Health Explore</h1>
        <Avatar content={name} notifications={2} />
    </div>
)

export default Header