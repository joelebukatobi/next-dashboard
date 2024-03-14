'use client';
import React from 'react';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { TextareaGroup } from '@/_components/admin/molecules/TextareaGroup';

export default function EditProject() {
  return (
    <>
      <header>
        <BreadCrumb menu="project" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>
      <div aria-label="body-main">
        <form action="">
          <div aria-label="form-row">
            <InputGroup
              label="Name"
              name="name"
              type="name"
              id="name"
              placeholder="Enter project name"
              required="required"
            />
            <InputGroup
              label="Author"
              name="author"
              type="author"
              id="author"
              placeholder="Joel Onwuanaku"
              required="required"
            />
          </div>
          <div aria-label="form-row">
            <TextareaGroup
              label="Description"
              name="description"
              id="description"
              placeholder="Enter a description for this project description"
              required="required"
            />
          </div>
        </form>
      </div>
    </>
  );
}
