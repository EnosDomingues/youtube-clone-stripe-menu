import React from 'react';
 
export function DropdownOption({ name, content: Content }) {
  return (
    <button class="dropdown-option">{name}</button>
  )
}