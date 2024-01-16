import { memo } from "react";
import Styles from "./style.module.scss";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const ListingTable = ({ data, columns }) => {
  return (
    <>
      <Table className={`${Styles.stripedTable}`}>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th
                key={index}
                className={
                  column.align ? `text-${column.align} small` : "small"
                }
              >
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, userIndex) => (
            <Tr key={userIndex}>
              {columns.map((column, columnIndex) => (
                <Td
                  key={columnIndex}
                  className={column.align ? `text-${column.align}` : ""}
                >
                  {column.dataKey ? item[column.dataKey] : null}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {data.length <= 0 && (
        <div className="d-flex justify-content-center py-4 text-black-custom">
          No Data Found
        </div>
      )}
    </>
  );
};

export default memo(ListingTable);
