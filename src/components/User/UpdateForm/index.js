import React, { useEffect, useState } from 'react'
import { Field, reduxForm } from 'redux-form'
//import { useDispatch } from 'react-redux'

const testInfo = {
  user: {
    firstName: 'John',
    email: 'email@email.com',
    lastName: 'Doe',
    phone: 56900000000,
  },
  car: {
    plate: 'HS9201',
    color: 'White',
    brand: 'Toyota',
    model: 'Yaris',
  },
}

const UpdateForm = () => {
  // Podemos recibir la id del usuario a actualizar mediante un parametro o trayendola desde algun reducer
  // Si es mediante parametro podriamos despachar una accion para traer los datos de esa id en especifico, y setearlas como initialValues en este reduxForm
  // Si es mediante un reducer tambien se debe setear como initialValues

  const [isLoading, setIsLoading] = useState(true)
  const [hasCar, setHasCar] = useState(false)

  //const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return 'Loading..'

  const updateUser = e => {
    e.preventDefault()
    // Aqui despachamos la accion que realiza la peticion
    // Los datos del formulario llegan desde redux-form, desde el formulario updateForm
    // state.form.updateUser.values ó getState().form.updateUser.values

    // dispatch(updateUserAction())
  }

  const tengoAuto = () => {
    if (hasCar) {
      setHasCar(false)
    } else {
      setHasCar(true)
    }
  }

  return (
    <form>
      <div className="field">
        <label className="label">Nombre</label>
        <div className="control">
          <Field
            name="name"
            className="input"
            component="input"
            type="text"
            value={testInfo.user.firstName}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Apellido</label>
        <div className="control">
          <Field
            name="lastName"
            className="input"
            component="input"
            type="text"
            value={testInfo.user.lastName}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <Field
            name="email"
            className="input"
            component="input"
            type="text"
            value={testInfo.user.firstName}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Numero</label>
        <div className="control">
          <Field
            name="phone"
            className="input"
            component="input"
            type="text"
            value={testInfo.user.phone}
          />
        </div>
      </div>
      <div className="field">
        <label className="checkbox">
          <input type="checkbox" onClick={() => tengoAuto()} />
          Tengo auto
        </label>
      </div>

      {hasCar && (
        <>
          <div className="field">
            <label className="label">Patente</label>
            <div className="control">
              <Field
                name="plate"
                className="input"
                component="input"
                type="text"
                value={testInfo.car.plate}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Color</label>
            <div className="control">
              <Field
                name="color"
                className="input"
                component="input"
                type="text"
                value={testInfo.car.color}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Marca</label>
            <div className="control">
              <Field
                name="brand"
                className="input"
                component="input"
                type="text"
                value={testInfo.car.brand}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Modelo</label>
            <div className="control">
              <Field
                name="model"
                className="input"
                component="input"
                type="text"
                value={testInfo.car.model}
              />
            </div>
          </div>
        </>
      )}

      <button className="button is-link" onClick={e => updateUser(e)}>
        Actualizar
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'updateUser',
  initialValues: {
    name: testInfo.user.firstName,
    email: testInfo.user.email,
    lastName: testInfo.user.lastName,
    phone: testInfo.user.phone,
    plate: testInfo.car.plate,
    color: testInfo.car.color,
    brand: testInfo.car.brand,
    model: testInfo.car.model,
  },
})(UpdateForm)
