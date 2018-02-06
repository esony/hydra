import React from 'react'
import css from './Main.css'
import './Main.css'
import swal from 'sweetalert2'

const Header = () => {
  const logoClick = () => {
    console.log('Logo Click!')

    swal({
      customClass: css.swal,
      title: 'Do you want to quit?',
      type: 'error',
      showCancelButton: true,
      confirmButtonText: 'Quit',
    }).then(confirm => {
      if (confirm.value) {
        console.log('awddas')
      }
    })
  }

  return (
    <div className={css.header}>
      <div className={css.logo} onClick={() => logoClick()}>
        <div className={css.icon}>
          <i className="material-icons">power_settings_new</i>
        </div>
        <h3>HYDRA</h3>
      </div>
      <div className={css.menu}>
        <i className="material-icons">menu</i>
      </div>
    </div>
  )
}

export default Header
