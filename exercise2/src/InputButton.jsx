import { useState } from "react";

export default function InputButton(props) {
  let cssClass = 'input-default';

  const { isRecommended, isValid, inputConfig, textImportant } = props;

  if (isRecommended) {
    cssClass = ['input-recommended', cssClass].join(' ');
      }
      

  if (!isValid) {
    cssClass = ['input-invalid', cssClass].join(' ');
  }

  if (textImportant) {
    cssClass = [cssClass, 'text-important'].join(' ');
  }
  

  return (
    <input className={cssClass} {...inputConfig} />
  );
}
