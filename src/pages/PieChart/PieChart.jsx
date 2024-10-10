
import { Box,  } from "@mui/material";
import Pie from "./Pie";
import Header from "../../Components/Header.jsx";

const PieChart = () => {

  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
};

export default PieChart;
