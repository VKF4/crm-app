import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { frFR } from "@mui/x-data-grid/locales";

const DataTable = ({ rows, columns, paginationModel }) => {
  return (
    <Paper sx={{ height: 400, width: "100%", marginTop: 2, boxShadow: 20 }}>
      <DataGrid
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default DataTable;
