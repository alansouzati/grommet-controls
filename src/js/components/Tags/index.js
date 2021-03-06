import React from 'react';
import { Tags } from './Tags';

export const TagsSelect = (props) => {
  const { tagProps, ...rest } = props || {};
  return ({ placeholder, value, onChange }) => (
    <Tags
      focusable={false}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      tagProps={{ ...tagProps, onClick: (e) => { e.stopPropagation(); } }}
      {...rest}
    />);
};

export { Tags };
