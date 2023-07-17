import { D1e297article, D1e297history } from './ANNEXIII_EHSR';
import { D1E1002article } from './ANNEX_III/D1E1002combined';
import { D1E1015article } from './ANNEX_III/D1E1015variousCondition';
import { D1E1026article, D1E1026history } from './ANNEX_III/D1E1026movingParts';
import { D1E1056article } from './ANNEX_III/D1E1056movingPartsProtection';
import { D1E1144article } from './ANNEX_III/D1E1144uncontrolled';
import { D1E1164article } from './ANNEX_III/D1E1164guardsProtect';
import { D1E1220article } from './ANNEX_III/D1E1220specialGuards';
import { D1E1324article } from './ANNEX_III/D1E1324specialProtective';
import {
  D1E13651378article,
  D1E13891400article,
  D1E14151439article,
  D1E14521465article,
  D1E1478article,
  D1E1535article,
  D1E1550article,
  D1E1561article,
  D1E1574article,
} from './ANNEX_III/D1E1365otherRisk';
import { D1E137article, D1E137history, D1E4444article } from './ANNEX_III/D1E137general';
import {
  D1E1585article,
  D1E1611article,
  D1E1611history,
  D1E1624article,
  D1E1641article,
  D1E1652article,
} from './ANNEX_III/D1E1585maintenance';
import {
  D1E1672article,
  D1E1672history,
  D1E1713article,
  D1E1724article,
  D1E1724history,
  D1E1743article,
  D1E1743history,
  D1E1996article,
} from './ANNEX_III/D1E1672information';
import { D1E2007article, D1E2284article, D1E2320article } from './ANNEX_III/D1E2007CertainCategories';

import { D1E224article, D1E224history } from './ANNEX_III/D1E224Applicability';
import { D1E237article, D1E237history } from './ANNEX_III/D1E237safetyIntegration';
import { D1E2604article, D1E2604history, D1E2688article, D1E2703article, D1E2703history, D1E2731article, D1E2744article, D1E2744history, D1E2761article, D1E2761history, D1E2793article, D1E2814article, D1E2814history, D1E2835article, D1E2835history, D1E2896article, D1E2925article, D1E2925history, D1E2947article, D1E2958article, D1E2969article, D1E2984article, D1E2999article, D1E3010article, D1E3023article, D1E3057article, D1E3057history, D1E3072article, D1E3096article, D1E3096history, D1E3109article, D1E3109history, D1E3131article, D1E3169article, D1E3216article, D1E3216history } from './ANNEX_III/D1E2604mobility';
import { D1E308article, D1E308history } from './ANNEX_III/D1E308lighting';
import { D1E323article, D1E323history } from './ANNEX_III/D1E323handling';
import { D1E3308article, D1E3387article, D1E3387history, D1E3656article, D1E3680article, D1E3691article, D1E3721article, D1E3741article, D1E3805article, D1E3833article, D1E3848article } from './ANNEX_III/D1E3308lifting';
import { D1E387article, D1E387history } from './ANNEX_III/D1E387ergonomics';
import { D1E3955article } from './ANNEX_III/D1E3955underground';
import { D1E4038article } from './ANNEX_III/D1E4038personLifting';
import { D1E441article, D1E441history } from './ANNEX_III/D1E441operatingPosition';
import { D1E456article, D1E456history } from './ANNEX_III/D1E456seating';
import { D1E473article, D1E473history } from './ANNEX_III/D1E473protectCorruption';
import { D1E492article, D1E492history } from './ANNEX_III/D1E492controlSystems';
import { D1E625article } from './ANNEX_III/D1E625controlDevice';
import { D1E695article } from './ANNEX_III/D1E695starting';
import { D1E727article } from './ANNEX_III/D1E727stopping';
import { D1E828article } from './ANNEX_III/D1E828modeSelect';
import { D1E874article, D1E874history } from './ANNEX_III/D1E874connectionFailure';
import { D1E933article } from './ANNEX_III/D1E933stabilityLoss';
import { D1E946article } from './ANNEX_III/D1E946breakup';
import { D1E980article } from './ANNEX_III/D1E980ejectedSurface';
import { D1E991article } from './ANNEX_III/D1E991surfaces';

export const AnnexIII = [
  /* {
    id: 'd1e695',
    title: '1.2.3.   Starting',
    category: ['elec', 'control'],
    component: (
      <>
        <D1e695Starting />
      </>
    ),
  },
  {
    id: 'd1e727',
    title: '1.2.4.   Starting',
    category: [ 'control'],
    component: (
      <>
        <D1e727Stopping />
      </>
    ),
  }, */
  {
    id: 'd1e137',
    title: 'PART A Definition',
    category: [],
    component: <D1E4444article />,
    // history: <D1E137history />,
  },
  {
    id: 'd1e137',
    title: 'PART B General principles',
    category: ['Common', 'AI'],
    component: <D1E137article />,
    history: <D1E137history />,
  },
  {
    id: 'd1e224',
    title: '1.1.1. Applicability',
    category: ['PCM'],
    component: <D1E224article />,
    history: <D1E224history />,
  },
  {
    id: 'd1e237',
    title: '1.1.2.   Principles of safety integration',
    category: ['Common'],
    component: <D1E237article />,
    history: <D1E237history />,
  },
  {
    id: 'd1e297',
    title: '1.1.3.   Materials and products',
    category: ['Station', 'Environment'],
    component: (
      <>
        <D1e297article />
      </>
    ),
    // history: <D1e297history />,
  },
  {
    id: 'd1e308',
    title: '1.1.4.   Lighting',
    category: ['Elec'],
    component: <D1E308article />,
    // history: "equivalent",
  },
  {
    id: 'd1e323',
    title: '1.1.5. Design of machinery or a related product to facilitate its handling',
    category: ['PKG'],
    component: <D1E323article />,
    // history: <D1E323history />,
  },
  {
    id: 'd1e387',
    title: '1.1.6. Ergonomics',
    category: ['Station', 'AI'],
    component: <D1E387article />,
    history: <D1E387history />,
  },
  {
    id: 'd1e441',
    title: '1.1.7.   Operating positions',
    category: ['Station', 'Elec'],
    component: <D1E441article />,
    // history: <D1E441history />,
  },
  {
    id: 'd1e456',
    title: '1.1.8.   Seating',
    category: ['Station'],
    component: <D1E456article />,
    // history: <D1E456history />,
  },
  {
    id: 'd1e473',
    title: '1.1.9.   Protection against corruption',
    category: ['Cybersecurity', 'Connected'],
    component: <D1E473article />,
    history: <D1E473history />,
  },
  
  {
    id: 'd1e492',
    title: '1.2.   Control systems',
    category: ['Control', 'AI'],
    component: <D1E492article />,
    history: <D1E492history />,
  },
  {
    id: 'd1e625',
    title: '1.2.2. Control devices',
    category: ['Station', 'Control'],
    component: <D1E625article />,
    // history: <D1E625history />,
  },
  {
    id: 'd1e695',
    title: '1.2.3. Starting ',
    category: ['Station', 'Control'],
    component: <D1E695article />,
    // history: <D1E695history />,
  },
  {
    id: 'd1e727',
    title: '1.2.4. Stopping',
    category: ['Station', 'Control'],
    component: <D1E727article />,
    // history: <D1E727history />,
  },
  {
    id: 'd1e828',
    title: '1.2.5. Selection of control or operating modes ',
    category: ['Station', 'Control'],
    component: <D1E828article />,
    // history: <D1E828history />,
  },
  {
    id: 'd1e874',
    title: '1.2.6. Failure of the power supply or communication network connection',
    category: ['Connected'],
    component: <D1E874article />,
    // history: <D1E874history />,
  },
  {
    id: 'd1e933',
    title: '1.3.   Protection against mechanical risks',
    category: ['PKG'],
    component: <D1E933article />,
    // history: D1E933history,
  },
  {
    id: 'd1e946',
    title: '1.3.2. Risk of break-up during operation',
    category: ['Structure', 'Hydraulics'],
    component: <D1E946article />,
    // history: <D1E946history />,
  },
  {
    id: 'd1e980',
    title: '1.3.3.   Risks due to falling or ejected objects',
    category: ['Station'],
    component: <D1E980article />,
    // history: <D1E980history />,
  },
  {
    id: 'd1e991',
    title: '1.3.4.   Risks due to surfaces, edges or angles',
    category: ['Station'],
    component: <D1E991article />,
    // history: <D1E991history />,
  },
  {
    id: 'd1e1002',
    title: '1.3.5.   Risks related to a combined machinery or related product',
    category: ['Attachment', 'Control'],
    component: <D1E1002article />,
    // history: <D1E1002history />,
  },
  {
    id: 'd1e1015',
    title: '1.3.6. Risks related to variations in operating conditions',
    category: ['Common'],
    component: <D1E1015article />,
    // history: <D1E1015history />,
  },
  {
    id: 'd1e1026',
    title: '1.3.7. Risks related to moving parts',
    category: ['Structure', 'AI'],
    component: <D1E1026article />,
    history: <D1E1026history />,
  },
  {
    id: 'd1e1056',
    title: '1.3.8. Choice of protection against risks arising from moving parts',
    category: ['Station', 'Structure'],
    component: <D1E1056article />,
    // history: <D1E1056history />,
  },
  {
    id: 'd1e1144',
    title: '1.3.9. Risks of uncontrolled movements',
    category: ['Hydraulics', 'Control'],
    component: <D1E1144article />,
    // history: <D1E1144history />,
  },
  {
    id: 'd1e1164',
    title: '1.4.   Required characteristics of guards and protective devices ',
    category: ['Station', 'Structure'],
    component: <D1E1164article />,
    // history: <D1E1164history />,
  },
  {
    id: 'd1e1220',
    title: '1.4.2. Special requirements for guards',
    category: ['Station', 'Structure'],
    component: <D1E1220article />,
    // history: <D1E1220history />,
  },
  {
    id: 'd1e1324',
    title: '1.4.3. Special requirements for protective devices',
    category: ['Control'],
    component: <D1E1324article />,
    // history: <D1E1324history />,
  },
  {
    id: 'd1e1365',
    title: '1.5. Risks due to other causes',
    category: ['Elec'],
    component: <D1E13651378article />,
    // history: <D1E1365history />,
  },
  {
    id: 'd1e1389',
    title: '1.5.3. Energy supply other than electricity, 1.5.4. Errors of fitting',
    category: ['Elec', 'Hydraulics'],
    component: <D1E13891400article />,
    // history: <D1E1389history />,
  },
  {
    id: 'd1e1415',
    title: '1.5.5. Extreme temperatures, 1.5.6. Fire, 1.5.7. Explosion',
    category: ['Station', 'Structure', 'Elec'],
    component: <D1E14151439article />,
    // history: <D1E1415history />,
  },
  {
    id: 'd1e1452',
    title: '1.5.8. Noise, 1.5.9. Vibrations',
    category: ['NVH'],
    component: <D1E14521465article />,
    // history: <D1E1452history />,
  },

  {
    id: 'd1e1478',
    title: '1.5.10. Radiation, 1.5.11.   External radiation, 1.5.12.   Laser radiation',
    category: '',
    component: <D1E1478article />,
    // history: <D1E1478history />,
  },
  {
    id: 'd1e1535',
    title: '1.5.13. Emissions of hazardous materials and substances        ',
    category: ['Environment'],
    component: <D1E1535article />,
    // history: <D1E1535history />,
  },
  {
    id: 'd1e1550',
    title: '1.5.14. Risk of being trapped in a machine',
    category: ['Station'],
    component: <D1E1550article />,
    // history: <D1E1550history />,
  },
  {
    id: 'd1e1561',
    title: '1.5.15. Risk of slipping, tripping or falling',
    category: ['Station', 'Structure'],
    component: <D1E1561article />,
    // history: <D1E1561history />,
  },
  {
    id: 'd1e1574',
    title: '1.5.16. Lightning',
    category: ['Elec'],
    component: <D1E1574article />,
    // history: <D1E1574history />,
  },
  {
    id: 'd1e1585',
    title: '1.6.1. Machinery or related product maintenance',
    category: ['Common'],
    component: <D1E1585article />,
    // history: <D1E1585history />,
  },
  {
    id: 'd1e1611',
    title: '1.6.2. Access to operating positions and servicing points',
    category: ['Station', 'Structure'],
    component: <D1E1611article />,
    history: <D1E1611history />,
  },
  {
    id: 'd1e1624',
    title: '1.6.3. Isolation of energy sources',
    category: ['Elec'],
    component: <D1E1624article />,
    // history: <D1E1624history />,
  },
  {
    id: 'd1e1641',
    title: '1.6.4. Operator intervention',
    category: ['Station', 'Control'],
    component: <D1E1641article />,
    // history: <D1E1641history />,
  },
  {
    id: 'd1e1652',
    title: '1.6.5. Cleaning of internal parts',
    category: ['Common'],
    component: <D1E1652article />,
    // history: <D1E1652history />,
  },
  {
    id: 'd1e1672',
    title: '1.7.1. Information and warnings on the machinery or related product',
    category: ['Manual'],
    component: <D1E1672article />,
    history: <D1E1672history />,
  },
  {
    id: 'd1e1713',
    title: '1.7.2. Warning of residual risks',
    category: ['Manual'],
    component: <D1E1713article />,
  },
  {
    id: 'd1e1724',
    title: '1.7.3. Marking of machinery or related products',
    category: ['Manual'],
    component: <D1E1724article />,
    history: <D1E1724history />,
  },
  {
    id: 'd1e1743',
    title: '1.7.4. Instructions for use        ',
    category: ['Manual', 'Environment'],
    component: <D1E1743article />,
    history: <D1E1743history />,
  },
  {
    id: 'd1e1996',
    title: '1.7.5.   Sales literature',
    category: ['Manual'],
    component: <D1E1996article />,
    // history: <D1E1996history /> />,
  },
  {
    id: 'd1e2007',
    title:
      '2.   SUPPLEMENTARY ESSENTIAL HEALTH AND SAFETY REQUIREMENTS FOR CERTAIN CATEGORIES OF MACHINERY AND RELATED PRODUCTS',
    category: '',
    component: <D1E2007article />,
    // history: <D1E2007history />,
  },
  {
    id: 'd1e2284',
    title: '2.3.   Machinery or related products for working wood and material with similar physical characteristics',
    category: ["Forestry"],
    component: <D1E2284article />,
    // history: <D1E2284history />,
  },
  {
    id: 'd1e2320',
    title: '2.4.   Machinery or related products for plant protection products application',
    category: '',
    component: <D1E2320article />,
  },
  {
    id: 'd1e2604',
    title: '3.   SUPPLEMENTARY ESSENTIAL HEALTH AND SAFETY REQUIREMENTS TO OFFSET RISKS DUE TO THE MOBILITY OF MACHINERY OR RELATED PRODUCTS',
    category: ["Common", "AI"],
    component: <D1E2604article />,
    history: <D1E2604history />,
  },

  {
    id: 'd1e2688',
    title: '3.2.   Work positions',
    category: ["Station"],
    component: <D1E2688article />,
    // history: <D1E2688history />,
  },
  {
    id: 'd1e2703',
    title: '3.2.2. Seating',
    category: ["Station"],
    component: <D1E2703article />,
    history: <D1E2703history />,
  },
  {
    id: 'd1e2731',
    title: '3.2.3.   Positions for other persons',
    category: ["Station"],
    component: <D1E2731article />,
  },
  {
    id: 'd1e2744',
    title: '3.2.4.   Supervisory function',
    category: ["Control","AI"],
    component: <D1E2744article />,
    history: <D1E2744history />,
  },
  {
    id: 'd1e2761',
    title: '3.3. Control systems        ',
    category: ["Control","AI"],
    component: <D1E2761article />,
    history: <D1E2761history />,
  },
  {
    id: 'd1e2793',
    title: '3.3.1.   Control devices',
    category: ["Control"],
    component: <D1E2793article />,
  },
  {
    id: 'd1e2814',
    title: '3.3.2.   Starting/moving',
    category: ["Control","AI"],
    component: <D1E2814article />,
    history: <D1E2814history />,
  },
  {
    id: 'd1e2835',
    title: '3.3.3. Travelling function                ',
    category: ["PowerTrain", "AI"],
    component: <D1E2835article />,
    history: <D1E2835history />,
  },
  {
    id: 'd1e2896',
    title: '3.3.4. Movement of pedestrian-controlled machinery',
    category: '',
    component: <D1E2896article />,
  },
  {
    id: 'd1e2925',
    title: '3.3.5.   Control circuit failure',
    category: ["PowerTrain","AI"],
    component: <D1E2925article />,
    history: <D1E2925history />,
  },
  {
    id: 'd1e2947',
    title: '3.4.1.   Uncontrolled movements',
    category: ["Control"],
    component: <D1E2947article />,
  },
  {
    id: 'd1e2958',
    title: '3.4.2.   Moving transmission parts',
    category: ["PowerTrain"],
    component: <D1E2958article />,
  },
  {
    id: 'd1e2969',
    title: '3.4.3.   Roll-over and tip-over',
    category: ["Station"],
    component: <D1E2969article />,
  },
  {
    id: 'd1e2984',
    title: '3.4.4.   Falling objects',
    category: ["Station"],
    component: <D1E2984article />,
  },
  {
    id: 'd1e2999',
    title: '3.4.5.   Means of access',
    category: ["Station", "Structure"],
    component: <D1E2999article />,
  },
  {
    id: 'd1e3010',
    title: '3.4.6.   Towing devices',
    category: ["Structure"],
    component: <D1E3010article />,
  },
  {
    id: 'd1e3023',
    title: '3.4.7.   Transmission of power between self-propelled machinery (or a tractor) and recipient machinery',
    category: ["PowerTrain", "Structure"],
    component: <D1E3023article />,
  },
  {
    id: 'd1e3057',
    title: '3.5.1.   Batteries',
    category: ["Elec", "AI"],
    component: <D1E3057article />,
    history: <D1E3057history />,
  },
  {
    id: 'd1e3072',
    title: '3.5.2. Fire        ',
    category: ["Station"],
    component: <D1E3072article />,
  },
  {
    id: 'd1e3096',
    title: '3.5.3.   Emissions of hazardous substances',
    category: ["Environment"],
    component: <D1E3096article />,
    history: <D1E3096history />,
  },
  {
    id: 'd1e3109',
    title: '3.5.4.   Risk of contact with live overhead power lines',
    category: ["PKG", "Structure"],
    component: <D1E3109article />,
    history: <D1E3109history />,
  },
  {
    id: 'd1e3131',
    title: '3.6.1. Signs, signals and warnings        ',
    category: ["Station"],
    component: <D1E3131article />,
  },
  {
    id: 'd1e3169',
    title: '3.6.2.   Marking',
    category: ["Station"],
    component: <D1E3169article />,
  },
  {
    id: 'd1e3216',
    title: '3.6.3.   Instructions for use',
    category: ["Manual", "AI"],
    component: <D1E3216article />,
    history: <D1E3216history />,
  },
  {
    id: "d1e3308",
    title:
      "4.   SUPPLEMENTARY ESSENTIAL HEALTH AND SAFETY REQUIREMENTS TO OFFSET RISKS DUE TO LIFTING OPERATIONS",
    category: ["Structure", "PKG", "Attachment"],
    component: <D1E3308article />,
  },
  {
    id: "d1e3387",
    title: "4.1.2.   Protection against mechanical risks",
    category: ["Structure", "PKG", "Attachment"],
    component: <D1E3387article />,
    history: <D1E3387history />,
  },
  {
    id: "d1e3656",
    title: "4.1.3. Fitness for purpose ",
    category: ["Attachment", "Hydraulics"],
    component: <D1E3656article />,
  },
  {
    id: "d1e3680",
    title:
      "4.2. Requirements for machinery or related products whose power source is other than manual effort ",
    category: ["Control"],
    component: <D1E3680article />,
  },
  {
    id: "d1e3691",
    title: "4.2.2. Loading control",
    category: ["Attachment", "Control"],
    component: <D1E3691article />,
  },
  {
    id: "d1e3721",
    title: "4.2.3. Installations guided by ropes ",
    category: "",
    component: <D1E3721article />,
  },
  {
    id: "d1e3741",
    title: "4.3.1. Chains, ropes and webbing  ",
    category: "",
    component: <D1E3741article />,
  },
  {
    id: "d1e3805",
    title: "4.3.2. Lifting accessories        ",
    category: ["Attachment", "PKG"],
    component: <D1E3805article />,
  },
  {
    id: "d1e3833",
    title: "4.3.3. Lifting machinery or related products  ",
    category: ["Station", "Control"],
    component: <D1E3833article />,
  },
  {
    id: "d1e3848",
    title: "4.4. Instructions for use ",
    category: ["Manual"],
    component: <D1E3848article />,
  },
  {
    id: "d1e3955",
    title:
      "5.   SUPPLEMENTARY ESSENTIAL HEALTH AND SAFETY REQUIREMENTS FOR MACHINERY OR RELATED PRODUCTS INTENDED FOR UNDERGROUND WORK",
    category: "",
    component: <D1E3955article />,
  },
  {
    id: "d1e4038",
    title:
      "6.   SUPPLEMENTARY ESSENTIAL HEALTH AND SAFETY REQUIREMENTS FOR MACHINERY OR RELATED PRODUCTS PRESENTING PARTICULAR RISKS DUE TO THE LIFTING OF PERSONS",
    category: "",
    component: <D1E4038article />,
  },
];