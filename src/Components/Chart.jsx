import React, { useEffect, useState } from "react";
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
import { userProvidedData } from "../Data/Results";

export default function Chart({ providedLabels, labelData }) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: providedLabels,
    datasets: [
      {
        label: "Score",
        data: labelData,
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
