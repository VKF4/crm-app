import { Typography } from "@mui/material";
import DataTable from "../components/DataTable";

const CustomerList = () => {
  const columns = [
    { field: "id", headerName: "N°", width: 70 },
    { field: "firstName", headerName: "Prénom", width: 130 },
    { field: "lastName", headerName: "Nom", width: 130 },
    {
      field: "age",
      headerName: "Âge",
      type: "number",
      width: 90,
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
      <DataTable
        columns={columns}
        rows={rows}
        paginationModel={paginationModel}
      />
    </>
  );
};

export default CustomerList;
