import { Box, Grid, Paper } from "@mui/material";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/components/KRTAForms/print/printPages.module.scss";

const CompareChangePrint = ({ specDataSet, originExterior, ECN }) => {
  console.log(ECN);

  return (
    <>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>형식 변경에 따른 변경 제원 비교</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.head_description}>
          <Paper
            elevation={1}
            sx={{
              p: 1,
              width: "80%",
            }}
          >
            <Box>주요 형식 변경 사양:</Box>
            <Box sx={{ m: 2 }}>{ECN}</Box>
          </Paper>
                


          <table style={{ width: "70%", margin: "auto" }}>
            <thead>
              <tr>
                <th width="40%">제원 항목</th>
                <th width="30%">변경 전</th>
                <th>변경 후</th>
              </tr>
            </thead>
            <tbody>
              {specDataSet.map(
                (data) =>
                  data.origin !== data.current && (
                    <tr style={{ height: "60px" }} key={data.label}>
                      <td>{data.label}</td>
                      <td>{data.origin}</td>
                      <td>{data.current}</td>
                    </tr>
                  )
              )}

              <tr height="50">
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          
          </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.pages}>
        <table className={styles.borderTable}>
          <thead>
            <tr>
              <th>외관도(최초)</th>
            </tr>
          </thead>
          <tbody>
            <tr>{parse(originExterior)}</tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompareChangePrint;
