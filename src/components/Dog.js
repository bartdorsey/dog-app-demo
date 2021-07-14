import React from 'react';

export default function Dog(props) {
  return (
    <img alt="dog"
      className={props.selected ? "selected" : ""}
      src={props.dog}
      onClick={e => props.toggleDog(e.target.src)} />
  )
}