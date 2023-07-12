import { useRouter } from "next/router";

// next
// @mui
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompareIcon from '@mui/icons-material/Compare';
// hooks

import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Page from "@/components/Page";
import Layout from "@/layouts";
import { Fragment } from "react";
import { preFace } from "@/sections/@dashboard/blog/MR/preFace";
import TableOfContents from "@/sections/@dashboard/blog/MR/TableOfContents";

// ----------------------------------------------------------------------

MR.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function MR() {
  const router = useRouter();

  return (
    <>
      <Page title="Machinery and Related Product Regulation">
        <Grid container sx={{ p: 2 }}>
          <Grid item xs={2}>
          <TableOfContents />
            
          </Grid>
          <Grid item xs={9} style={{maxHeight: '100vh', overflow: 'auto'}} >
            <HeaderBreadcrumbs
              heading="Machinery and Related Product Regulation"
              links={[
                { name: "Dashboard" },
                { name: "Blog" },
                { name: "Posts" },
              ]}
            />
            <Box>
              <p class="oj-doc-ti" id="d1e40-1-1">
                REGULATION (EU) 2023/1230 OF THE EUROPEAN PARLIAMENT AND OF THE
                COUNCIL
              </p>
              <p class="oj-doc-ti">on machinery and repealing Directive 2006/42/EC of the European Parliament and of the Council and Council Directive 73/361/EEC</p>
              <Accordion >
              <AccordionSummary
                variant="subtitle1"
                sx={{ background: "#f2f2f2", p: 1, m: 1 }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Preface</Typography>
              </AccordionSummary>
              <AccordionDetails>

         {preFace.map((item, index) => (
            <Fragment key={item.statement}>
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
               <tbody>
               
               <tr>
                  <td valign="top" width="4%" >
                     <p class="oj-normal">({index+1})</p>
                  </td>
                  <td valign="top">
                     <p class="oj-normal">
                        {item.statement}
                     </p>
                  </td>
               </tr>
            </tbody>
              </table>
            </Fragment>
         ))}
               </AccordionDetails>
             </Accordion>
         
            </Box>

            <Box>
            <p id="d1e802-1-1" class="oj-ti-section-1">CHAPTER I</p>
         <p id="L_2023165EN.01000101-d-001" class="oj-ti-section-2">
            <span class="oj-bold">GENERAL PROVISIONS</span>
         </p>
         <div id="001">
            <p id="d1e810-1-1" class="oj-ti-art">Article 1</p>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <p class="oj-sti-art">Subject matter</p> \
            <>
            <CompareIcon />
            </>

            </Box>

            

            

            
            <p class="oj-normal">This Regulation lays down health and safety requirements for the design and construction of machinery, related products and partly completed machinery to allow them to be made available on the market or put into service while ensuring a high level of protection of the health and safety of persons, in particular consumers and professional users, and, where appropriate, of domestic animals and property, and, where applicable, of the environment. It also establishes rules on the free movement of products within the scope of this Regulation in the Union.</p>
         </div>
         <div id="002">
            <p id="d1e817-1-1" class="oj-ti-art">Article 2</p>
            <p class="oj-sti-art">Scope</p>
            <div id="002.001">
               <p class="oj-normal">1.&nbsp;&nbsp;&nbsp;This Regulation applies to machinery and the following related products:</p>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(a)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">interchangeable equipment;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(b)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">safety components;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(c)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">lifting accessories;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(d)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">chains, ropes and webbing;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(e)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">removable mechanical transmission devices.</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <p class="oj-normal">This Regulation also applies to partly completed machinery.</p>
               <p class="oj-normal">For the purposes of this Regulation, machinery, the related products listed in the first subparagraph and partly completed machinery shall together be referred to as ‘products within the scope of this Regulation’.</p>
            </div>
            <div id="002.002">
               <p class="oj-normal">2.&nbsp;&nbsp;&nbsp;This Regulation does not apply to:</p>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(a)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">safety components that are intended to be used as spare parts to replace identical components and are supplied by the manufacturer of the original machinery, related product or partly completed machinery;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(b)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">specific equipment for use in fairgrounds or amusement parks;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(c)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">machinery and related products specially designed for use within or used in a nuclear installation and whose conformity with this Regulation may undermine the nuclear safety of that installation;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(d)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">weapons, including firearms;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(e)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">means of transport by air, on water and on rail networks except for machinery mounted on those means of transport;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(f)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">aeronautical products, parts and equipment that fall within the scope of Regulation&nbsp;(EU) 2018/1139 of the European Parliament and of the Council&nbsp;<a id="ntc21-L_2023165EN.01000101-E0021" href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1230&amp;qid=1688083774446#ntr21-L_2023165EN.01000101-E0021">(<span class="oj-super oj-note-tag">21</span>)</a> and the definition of machinery under this Regulation, insofar as Regulation (EU) 2018/1139 covers the relevant essential health and safety requirements set out in this Regulation;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(g)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">motor vehicles and their trailers, as well as systems, components, separate technical units, parts and equipment designed and constructed for such vehicles, which fall within the scope of Regulation (EU) 2018/858, except for machinery mounted on those vehicles;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(h)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">two- or three-wheel vehicles and quadricycles, as well as systems, components, separate technical units, parts and equipment designed and constructed for such vehicles, that fall within the scope of Regulation (EU) No&nbsp;168/2013, except for machinery mounted on those vehicles;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(i)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">agricultural and forestry tractors, as well as systems, components, separate technical units, parts and equipment designed and constructed for such tractors, that fall within the scope of Regulation (EU) No&nbsp;167/2013, except for machinery mounted on those tractors;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(j)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">motor vehicles exclusively intended for competition;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(k)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">seagoing vessels and mobile offshore units and machinery installed on board such vessels or units;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(l)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">machinery or related products specially designed and constructed for military or police purposes;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(m)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">machinery or related products specially designed and constructed for research purposes for temporary use in laboratories;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(n)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">mine winding gear;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(o)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">machinery or related products intended to move performers during artistic performances;</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(p)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">the following electrical and electronic products, insofar as they fall within the scope of Directive 2014/35/EU or of Directive 2014/53/EU:</p>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(i)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">household appliances intended for domestic use which are not electrically operated furniture;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(ii)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">audio and video equipment;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(iii)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">information technology equipment;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(iv)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">ordinary office machinery, except additive printing machinery for producing three-dimensional products;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(v)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">low-voltage switchgear and control gear;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(vi)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">electric motors;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <colgroup><col width="4%"/>
                  <col width="96%"/>
                  </colgroup><tbody>
                     <tr>
                        <td valign="top">
                           <p class="oj-normal">(q)</p>
                        </td>
                        <td valign="top">
                           <p class="oj-normal">the following high-voltage electrical products:</p>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(i)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">switchgear and control gear;</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <colgroup><col width="4%"/>
                              <col width="96%"/>
                              </colgroup><tbody>
                                 <tr>
                                    <td valign="top">
                                       <p class="oj-normal">(ii)</p>
                                    </td>
                                    <td valign="top">
                                       <p class="oj-normal">transformers.</p>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
            </Box>
          </Grid>
        </Grid>
      </Page>
    </>
  );
}
