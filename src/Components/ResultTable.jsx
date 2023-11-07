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

export default function ResultTable({ tableData, totalScore }) {
  return (
    <TableContainer mt="2rem">
      <Table w="40vw" size="lg" variant="striped" color="#01033C">
        <TableCaption>Survey Scores</TableCaption>
        <Thead>
          <Tr backgroundColor="#01033C">
            <Th textAlign="center" color="white">
              Section
            </Th>
            <Th textAlign="center" color="white">
              Score
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => {
            return (
              <Tr>
                <Td textAlign="center">{data.section}</Td>
                <Td textAlign="center">{data.score}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th textAlign="center">Total</Th>
            <Th textAlign="center">{totalScore}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
