import React from 'react'

const PizzaError: React.FC = () => {
  return (
    <div className='pizza-error'>
        <h2 className='pizza-error__title'>Произошла неизвестная ошибка</h2>
        <p className='pizza-error__descr'>
           К сожалению не получилось получить питсы
        </p>
        <p className='pizza-error__descr'>Повторите попытку позже</p>
    </div>
  )
}

export default PizzaError;