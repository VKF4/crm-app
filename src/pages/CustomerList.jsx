import { Box, Button, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../components/DataTable";

const CustomerList = () => {
  const columns = [
    { field: "id", headerName: "N°" },
    { field: "firstName", headerName: "Prénom" },
    { field: "lastName", headerName: "Nom" },
    { field: "telephone", headerName: "Téléphone" },
    { field: "email", headerName: "Email" },
    { field: "poste", headerName: "Poste occupé" },
    {
      field: "age",
      headerName: "Âge",
      type: "number",
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row.id)}
            size="small"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.id)}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
      <Typography variant="h4">Gestion des clients</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: 2,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{ borderColor: "#658092", color: "#658092" }}
          variant="outlined"
        >
          Ajouter
        </Button>
      </Box>

      <DataTable
        columns={columns}
        rows={rows}
        paginationModel={paginationModel}
      />
    </>
  );
};

export default CustomerList;
