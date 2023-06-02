import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDownBtn = (props) => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {props.content.map((options) => {
          return (
            <div>
              <Dropdown.Item key={options.id} href="#/action-1">
                {options.name}
              </Dropdown.Item>
            </div>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default DropDownBtn;
