import React from 'react';

import { Products, Developers, Company } from '../Content'
import { Container, DropDownStyles } from './styles';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';


function Navbar() {
  return (
    <DropdownProvider>
      <DropDownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption 
                  name="Produtos"
                  content={Products}
                  backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption 
                  name="Desenvolvedores"
                  content={Developers}
                  backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption 
                  name="Empresa"
                  content={Company}
                  backgroundHeight={215}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot>
          
        </DropdownRoot>
    </DropDownStyles>
    </DropdownProvider>

  )
}

export default Navbar;