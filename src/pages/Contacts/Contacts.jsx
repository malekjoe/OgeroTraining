import { Box } from "@mui/material";
import Header from "../../Components/Header.jsx";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data.js";

const Contacts = () => {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
