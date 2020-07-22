import React from 'react';

import { Products, Developers, Company } from '../Content'
import { Container, DropDownStyles } from './styles';
import { DropdownOption } from '../Dropdown';


function Navbar() {
  return (
    <DropDownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption 
                name="Produtos"
                content={Products}
            />
          </li>
          <li>
            <DropdownOption 
                name="Desenvolvedores"
                content={Developers}
            />
          </li>
          <li>
            <DropdownOption 
                name="Empresa"
                content={Company}
            />
          </li>
        </ul>
      </Container>
   </DropDownStyles>
  )
}

export default Navbar;