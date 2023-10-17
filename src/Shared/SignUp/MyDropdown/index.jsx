import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class MyDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleItemClick = (item) => {
    if (this.props.onChange) {
      this.props.onChange(item);
    }
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    const { DefaultOption, Options, SelectedOption } = this.props;

    return (
      <Dropdown className="" isOpen={isOpen} toggle={this.toggleDropdown}>
        <DropdownToggle
          className="bg-transparent form-control-lg BorderRadius border text-dark w-100 text-start d-flex justify-content-between align-items-center"
          style={{ padding: "12px" }}
        >
          {SelectedOption || DefaultOption}
          <IoIosArrowDown />
        </DropdownToggle>
        <DropdownMenu>
          {Options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => this.handleItemClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default MyDropdown;
