import React from 'react';
//
import { Button } from '@/_components/admin/atoms/Button';
//
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
//
import { BellAlertIcon, CheckIcon } from '@heroicons/react/24/outline';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid';

export const DropDown = ({ children, icon, image }) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root className="dropdown">
      <DropdownMenu.Trigger asChild>
        <button className="dropdown_button">{icon ? icon : image}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown_content" sideOffset={5}>
          {children}

          {/* <DropdownMenu.Separator className="dropdown_separator" />

          <DropdownMenu.CheckboxItem
            className="dropdown_checkmark"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.Item className="dropdown_indicator">
              <CheckIcon />
            </DropdownMenu.Item>
            Show Bookmarks
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="dropdown_separator" />

          <DropdownMenu.Label className="DropdownMenuLabel dropdown_label">People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem className="dropdown_radio" value="pedro">
              <DropdownMenu.ItemIndicator className="dropdown_indicator">
                <UserIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className="dropdown_radio" value="colm">
              <DropdownMenu.ItemIndicator className="dropdown_indicator">
                <UserIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup> */}

          <DropdownMenu.Arrow className="DropdownMenuArrow dropdown_arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
