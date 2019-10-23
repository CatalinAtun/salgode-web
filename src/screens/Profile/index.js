import React from 'react'
import { Link } from 'react-router-dom'

import './style.sass'

const Profile = () => {
  return (
    <div className="profile">
      Mi Perfil
      <Link to="/perfil/editar">
        <button> Editar Perfil </button>
      </Link>
    </div>
  )
}

export default Profile
