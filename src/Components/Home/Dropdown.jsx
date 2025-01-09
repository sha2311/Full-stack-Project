import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const AccDropdown = () => {
  return (
  <div>
     <Dropdown>
            <DropdownTrigger>
              <Button variant="none">
                {" "}
                <UserIcon className="w-4 h-4 text-gray-500  " /> Account
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="profile">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
            </DropdownMenu>
          </Dropdown>
  </div>
  )
}

export default AccDropdown