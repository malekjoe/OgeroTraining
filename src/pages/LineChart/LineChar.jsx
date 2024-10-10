import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../Components/Header";

const LineChart = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;
