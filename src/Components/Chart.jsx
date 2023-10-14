import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

export default function Chart() {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: [
      "Thing 1",
      "Thing 2",
      "Thing 3",
      "Thing 4",
      "Thing 5",
      "Thing 6",
      "Thing 7",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(1, 3, 60, 0.7)",
        borderColor: "rgba(1, 3, 60, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    elements: {
      line: {
        borderWidth: 10,
      },
    },
  };

  return (
    <Box mt="2rem" p="2rem" boxShadow="xl" w="70vh" h="70vh">
      <Radar data={data} options={options} />
    </Box>
  );
}
