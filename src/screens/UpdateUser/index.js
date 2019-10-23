import React from 'react'
import UpdateUserForm from '../../components/User/UpdateForm'

const UpdateUser = () => {
  return (
    <div className="container has-margin-top-70">
      <div className="columns">
        <div className="column is-6">
          <h1 className="subtitle is-4"> Actualizar informacion de usuario </h1>
          <UpdateUserForm />
        </div>
      </div>
    </div>
  )
}

export default UpdateUser
