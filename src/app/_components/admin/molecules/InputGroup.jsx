// 'use client';
// //
import React from 'react';
import { Input } from '@/_components/admin/atoms/Input';
import { Button } from '@/_components/admin/atoms/Button';
import { Label } from '@/_components/admin/atoms/Label';

export const InputGroup = ({ name, placeholder, icon, value, type, id, required, label }) => {
  return (
    <div aria-label="input-group">
      <Label htmlFor="hs-trailing-icon" class="block text-sm font-medium mb-2 dark:text-white">
        {label}
      </Label>
      <div>
        <Input
          name={name}
          placeholder={placeholder}
          icon={icon}
          value={value}
          type={type}
          id={id}
          required={required}
        />
        <Button>{icon}</Button>
      </div>
    </div>
  );
};
