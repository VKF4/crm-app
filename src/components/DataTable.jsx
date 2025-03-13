import * as React from "react";
import { DataGrid, DEFAULT_GRID_AUTOSIZE_OPTIONS } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { frFR } from "@mui/x-data-grid/locales";

const DataTable = ({ rows, columns, paginationModel }) => {
  return (
    <Paper sx={{ height: "85%", width: "100%", marginTop: 2, boxShadow: 20 }}>
      <DataGrid
        autoWidth
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
        autosizeOptions={{}}
        sx={{
          border: 0,
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell.MuiDataGrid-cell--selected": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "#323232",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiCheckbox-root": {
            color: "#658092",
            "&.Mui-checked": {
              color: "#658092",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#658092",
            color: "#323232",
            "& .MuiCheckbox-root": {
              color: "#323232",
            },
            "& .MuiIconButton-root": {
              color: "#323232",
            },
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
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-cell.MuiDataGrid-cell--editing": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-actionsCell": {
            "& .MuiDataGrid-cell--selected": {
              backgroundColor: "transparent !important",
            },
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
