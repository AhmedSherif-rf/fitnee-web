import React, { useState } from "react";
import Styles from "./style.module.scss";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const ListingTable = ({ users, columns }) => {
  return (
    <Table className={`${Styles.stripedTable}`}>
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th
              key={index}
              className={column.align ? `text-${column.align} small` : "small"}
            >
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user, userIndex) => (
          <Tr key={userIndex}>
            {columns.map((column, columnIndex) => (
              <Td
                key={columnIndex}
                className={column.align ? `text-${column.align}` : ""}
              >
                {column.dataKey ? user[column.dataKey] : null}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ListingTable;
