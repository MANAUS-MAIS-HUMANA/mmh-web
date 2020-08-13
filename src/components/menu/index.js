import React from 'react';

import { Container, MenuHeader, MenuButtons, MenuFooter } from './styles';

import mmh_logo from '../../assets/mmh_logo.svg'
import home_icon from '../../assets/home_icon.svg'
import profile_icon from '../../assets/profile_icon.svg'
import settings_icon from '../../assets/settings_icon.svg'
import info_icon from '../../assets/info_icon.svg'
import exit_icon from '../../assets/exit_icon.svg'

import { NavLink, useHistory } from 'react-router-dom';

import MenuToolTip from './tooltip'

import {logout} from '../../services/auth'
import api from "../../services/api";

const Menu = () => {

  const history = useHistory();

  async function handleLogout (e) {
    try {
      // eslint-disable-next-line
      const response = await api.post("/auth/logout");
      logout();
      history.push("/");
    } catch (err) {
      console.log(err);
    }

  };

  const menu_icons = [
    {
      page: 'Home',
      to: '/dashboard',
      icon: home_icon,
    },
    {
      page: 'Beneficiários',
      to: '/profile',
      icon: profile_icon,
    },
    {
      page: 'Configurações',
      to: '/settings',
      icon: settings_icon,
    },
    {
      page: 'Informações',
      to: '/info',
      icon: info_icon,
    },
  ]

  return (
    <Container>
      <MenuHeader>
        <img src={mmh_logo} alt='Manaus Mais Humana' />
      </MenuHeader>
      <MenuButtons>
        {
          menu_icons.map(item => (
            <div key={menu_icons.indexOf(item)}>
              <NavLink
                to={item.to}
                key={item.to}
                className='item'
                activeClassName='item active'
              >
                <MenuToolTip title={item.page} placement='right-start'>
                  <div>
                    <img src={item.icon} alt='Menu Icon' />
                  </div>
                </MenuToolTip>
              </NavLink>
            </div>
          ))
        }
      </MenuButtons>
      <MenuFooter>
        <NavLink
          to={'/'}
          key={'Sair'}
        >
          <MenuToolTip onClick={handleLogout} title={'Sair'} placement='right-start'>
            <div>
              <img src={exit_icon} alt='Sair' />
            </div>
          </MenuToolTip>
        </NavLink>
      </MenuFooter>
    </Container>
  )
}

export default Menu;
