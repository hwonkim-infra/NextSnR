import { Button, Card,  Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from 'next/link';


// components
import Layout from '../../../../layouts';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
import Iconify from '../../../../components/Iconify';

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


HEXList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function HEXList({HEXs=[]}) {

    const router = useRouter();



    const columns = [
        // { field: "id", headerName: "ID", width: 70 },
        // { field: "title", headerName: "Title", width: 110 },
        // { field: "description", headerName: "description", width: 110 },
        { field: "model_name", headerName: "기종명", width: 110 },
        { field: "registration_no", headerName: "형식", width: 70 },
        { field: "weight", headerName: "중량", width: 70 },
        { field: "boom", headerName: "Boom", width: 60,},
        { field: "arm", headerName: "Arm", width: 60, },
        { field: "bucket", headerName: "버켓", width: 60,},
        { field: "height", headerName: "높이", width: 60, },
        { field: "width", headerName: "너비", width: 60, },
        { field: "shoe", headerName: "shoe", width: 60, },
        { field: "counterWeight", headerName: "CW", width: 50, },
        { field: "updated", headerName: "수정", width: 60 },    
        { field: "changeModel", headerName: "형식변경", width: 120 },
        { field: "result", headerName: "완료", width: 50 },
      ];
    
      const rows = HEXs?.map((HEX) => {
        return {
             id: HEX._id,
          model_name: HEX.model_name,
          registration_no: HEX.registration_no,
          weight: HEX.operating_weight,
          boom: HEX.attachments?.boom_length,
          arm: HEX.attachments?.arm_length,
          bucket: HEX.attachments?.bucket_heap,
          height: HEX.overall_height,
          width: HEX.overall_width,
          updated: (new Date(HEX.updatedAt)).toLocaleDateString('Ko-kr'),
          shoe: HEX.undercarriage?.shoe_width,
          changeModel: HEX.ChangeModel ? HEX.ECN+" 변경" : " ",
          counterWeight: HEX.COG?.counterWeight_weight/1000 || '',
          result: HEX.approval_result ? "완료" : " ",
          ...HEX,
        };
      });


    return (
        <div>
            <Grid container spacing={2}>
                    <Grid item xs={8} sx={{height: 900}}>
                    

<HeaderBreadcrumbs
          heading="Crawler Excavator"
          links={[
            { name: '형식승인',  },
            { name: 'HEX',  },
            
          ]}
          action={
            <NextLink href='HEX/new' >
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New File
              </Button>
            </NextLink>
          }
        />
                        <DataGrid 
                        rows={rows}
                        columns={columns}
                        disableMultipleSelection={true}
            
                        />
                    </Grid>
                    <Grid item xs={8}></Grid>
            </Grid>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/HEX/");
    const HEXs = await response.json();

    return {
        props: {
            HEXs,
        }
    }

}