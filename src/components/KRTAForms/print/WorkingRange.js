import React from "react";
import styles from "@/components/KRTAForms/print/printPages.module.scss";
import Image from "next/image";

// 작업반경

const WorkingRange = ({ values }) => {
  return (
        <div className={styles.pages}>
      
          <table className={styles.borderTable}>
      <thead>
        <tr >
          <th>작업반경</th>
        </tr>

      </thead>
      <tbody>


        <tr style={{margin: "auto"}}>
          <td >
            <img src={"/images/workingRange_HX.png"} alt="workingRange" srcSet="" height="60%" layout="fill" objectFit="position" />
            <table style={{width:"50%", height:"30%", margin: "auto"}} >
              <thead></thead>
              <tbody>
              <tr>
                  <td></td>
                  <td>퀵 커플러 장착</td>
                  <td>퀵 커플러 미장착</td>
                </tr>
                <tr>
                  <td>최대덤프높이 E </td>
                  <td id="">{values.attachments?.loading_height}</td>
                  <td id="">{values.attachments?.loading_height_woqc}</td>
                </tr>
                <tr>
                  <td>최대굴착반지름 A </td>
                  <td id="">{values.attachments?.digging_reach}</td>
                  <td id="">{values.attachments?.digging_reach_woqc}</td>
                </tr>
                <tr>
                  <td>최대굴착깊이 B </td>
                  <td id="">{values.attachments?.digging_depth}</td>
                  <td id="">{values.attachments?.digging_depth_woqc}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkingRange;
