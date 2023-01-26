import { Button, Card,  Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from 'next/link';


// components
import Layout from '../../../../layouts';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
import Iconify from '../../../../components/Iconify';

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


CreateHEX.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function CreateHEX() {


    return (
        <Grid
      
    >
      New
    </Grid>
    )
}

