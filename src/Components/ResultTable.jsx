import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";
import React from "react";

export default function ResultTable() {
  return (
    <TableContainer mt="2rem">
      <Table w="40vw" size="lg" variant="striped" color="#01033C">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr backgroundColor="#01033C">
            <Th textAlign="center" color="white">
              To convert
            </Th>
            <Th textAlign="center" color="white">
              into
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
