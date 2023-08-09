// 'use client';
// //
import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '@/_components/admin/atoms/Button';

export const InputGroup = ({ name, placeholder, icon, value, type, id, required }) => {
  return (
    <Form.Field aria-label="input-group" name={name}>
      <Form.Label htmlFor={name}>{name}</Form.Label>
      <div className="relative">
        <Form.Control asChild>
          <input type={type} name={name} value={value} placeholder={placeholder} id={id} required={required} />
        </Form.Control>

        <Button type="button">{icon}</Button>
      </div>
      <Form.Message className="FormMessage" match="valueMissing">
        Please enter your {name}
      </Form.Message>
      <Form.Message className="FormMessage" match="typeMismatch">
        Please provide a valid {name}
      </Form.Message>
    </Form.Field>
  );
};
