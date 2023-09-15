// 'use client';
// //
import React from 'react';
import { TextArea } from '@/_components/admin/atoms/TextArea';
import { Label } from '@/_components/admin/atoms/Label';

export const TextareaGroup = ({ name, placeholder, value, type, id, required, label }) => {
  return (
    <div aria-label="input-group">
      <Label htmlFor="hs-trailing-icon" class="block text-sm font-medium mb-2 dark:text-white">
        {label}
      </Label>
      <div>
        <TextArea name={name} placeholder={placeholder} value={value} id={id} required={required} />
      </div>
    </div>
  );
};
