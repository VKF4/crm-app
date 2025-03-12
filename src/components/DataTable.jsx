import * as React from "react";
import { DataGrid, DEFAULT_GRID_AUTOSIZE_OPTIONS } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { frFR } from "@mui/x-data-grid/locales";

const DataTable = ({ rows, columns, paginationModel }) => {
  return (
    <Paper sx={{ height: "80%", width: "100%", marginTop: 2, boxShadow: 20 }}>
      <DataGrid
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel },
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
        autosizeOptions={DEFAULT_GRID_AUTOSIZE_OPTIONS.expand}
        sx={{
          border: 0,
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "#323232",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#658092",
            color: "white",
            "& .MuiCheckbox-root": {
              color: "white",
            },
            "& .MuiIconButton-root": {
              color: "white",
            },
          },
          "& .MuiCheckbox-root": {
            color: "#658092",
          },
          "& .MuiDataGrid-columnHeaderCheckbox": {
            color: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#323232",
            color: "white",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiIconButton-root": {
            color: "#658092",
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
