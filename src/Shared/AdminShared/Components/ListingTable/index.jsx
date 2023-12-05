import React from "react";
import { useState } from "react";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import ToggleSwitch from "../../../ToggleSwitch";
import { FaRegEdit, FaRegTrashAlt, FaRegEye } from "react-icons/fa";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const ListingTable = (props) => {
  const [checked, setChecked] = useState(true);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <Table className={`${Styles.stripedTable}`}>
      <Thead>
        <Tr>
          <Th>User Name</Th>
          <Th className="text-center">Subscribe Status</Th>
          <Th className="text-center">Email ID</Th>
          <Th className="text-center">Phone#</Th>
          <Th className="text-center">Status</Th>
          <Th className="text-center">Unblock / Block</Th>
          <Th className="text-center">Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  backgroundImage: `url(${Images.PROFILE1_IMG})`,
                  width: "40px",
                  height: "40px",
                }}
              ></div>
              <span>John</span>
            </div>
          </Td>
          <Td className="text-center">Trainer</Td>
          <Td className="text-center">xyz@gmail.com</Td>
          <Td className="text-center">+966-45-3456715</Td>
          <Td className="text-center">
            <Badge className="parrot-green" color="custom" pill>
              Active
            </Badge>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center ">
              <ToggleSwitch isOn={checked} handleToggle={handleToggle} />
            </div>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`${Styles.iconBadge} me-2  bg-white`}>
                <Link to="#0">
                  <FaRegEdit className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2  bg-white `}>
                <Link to="#0">
                  <FaRegTrashAlt className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2 bg-white`}>
                <Link to="#0">
                  <FaRegEye className="text-dark mb-1" />
                </Link>
              </span>
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  backgroundImage: `url(${Images.PROFILE2_IMG})`,
                  width: "40px",
                  height: "40px",
                }}
              ></div>
              <span>Retired John</span>
            </div>
          </Td>
          <Td className="text-center">Trainer</Td>
          <Td className="text-center">xyz@gmail.com</Td>
          <Td className="text-center">+966-45-3456715</Td>
          <Td className="text-center">
            <Badge className="bg-secondary" color="custom" pill>
              InActive
            </Badge>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center">
              <ToggleSwitch isOn={checked} handleToggle={handleToggle} />
            </div>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`${Styles.iconBadge} me-2  bg-white`}>
                <Link to="#0">
                  <FaRegEdit className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2  bg-white `}>
                <Link to="#0">
                  <FaRegTrashAlt className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2 bg-white`}>
                <Link to="#0">
                  <FaRegEye className="text-dark mb-1" />
                </Link>
              </span>
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div className="d-flex align-items-center">
              <div
                className="bgProperties rounded-circle me-2"
                style={{
                  backgroundImage: `url(${Images.PROFILE3_IMG})`,
                  width: "40px",
                  height: "40px",
                }}
              ></div>
              <span>Jeffery Hokson</span>
            </div>
          </Td>
          <Td className="text-center">Trainer</Td>
          <Td className="text-center">xyz@gmail.com</Td>
          <Td className="text-center">+966-45-3456715</Td>
          <Td className="text-center">
            <Badge className="parrot-green" color="custom" pill>
              Active
            </Badge>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center">
              <ToggleSwitch isOn={checked} handleToggle={handleToggle} />
            </div>
          </Td>
          <Td className="text-center">
            <div className="d-flex align-items-center justify-content-md-center">
              <span className={`${Styles.iconBadge} me-2`}>
                <Link to="#0">
                  <FaRegEdit className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2`}>
                <Link to="#0">
                  <FaRegTrashAlt className="text-dark mb-1" />
                </Link>
              </span>
              <span className={`${Styles.iconBadge} me-2`}>
                <Link to="#0">
                  <FaRegEye className="text-dark mb-1" />
                </Link>
              </span>
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
export default ListingTable;
