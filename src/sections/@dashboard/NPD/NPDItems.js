export const NPD_Access = [
  { label: "Step/Platform", name: "stepPlatform" },
  { label: "Handrail", name: "handrail" },
  { label: "Guardrail", name: "guardrail" },
  { label: "Opening", name: "opening" },
];

export const NPD_Structure = [
  { label: "Guard", name: "guard " },
  { label: "Tie Down & Lifting", name: "tieDownLifting " },
  { label: "Retrieval", name: "retrieval " },
  { label: "Tank & Cap", name: "tankNcap " },
  { label: "Articulate Frame", name: "articulateFrame" },
];

export const NPD_Station = [
  {
    label: "ROPS/OPG/TOPS/OPS",
    name: "ropsOpg ",
  },
  {
    label: "Visibility",
    name: "visibility ",
  },
  {
    label: "Fire Protection",
    name: "fireProtection ",
  },
  {
    label: "Minimum Space",
    name: "minimumSpace ",
  },
  { label: "Comport & Reach Zone", name: "comport_Reach " },
  { label: "Seat", name: "seat " },
  { label: "Control system", name: "controlSystem " },
  { label: "Pipe Hose", name: "pipeHose " },
  { label: "Instruction Storage", name: "instructionStorage" },
];

export const NPD_PowerTrain = [
  {
    label: "Hot Parts",
    name: "hotParts ",
  },
  {
    label: "Guard",
    name: "guard ",
  },
  {
    label: "Tire and Rim",
    name: "tireNrim",
  },
];

export const NPD_Electric = [
  {
    label: "Control Panel",
    name: "controlPanel ",
  },
  {
    label: "Degree of Protection ",
    name: "degreeProtection  ",
  },
  {
    label: "Electric connections",
    name: "electricConnections ",
  },
  {
    label: "Battery / Disconnection",
    name: "batteryNdisconnection ",
  },
  {
    label: "Electric socket",
    name: "electricSocket ",
  },
  {
    label: "Lighting Device",
    name: "lightingDevice ",
  },
  { label: "Quick Coupler system", name: "quickCouplerSystem " },
  { label: "EMC-E/E", name: "emcNee " },
  { label: "Travel Alarm", name: "travelAlarm" },
];

export const NPD_Hydraulic = [
  { label: "Pressurized equipment", name: "pressurizedEquipment " },
  { label: "Hydraulic Line / Hoses", name: "hydraulicLineHoses " },
  { label: "Attachment Lowering", name: "attachmentLowering " },
  { label: "Dozer Stability", name: "dozerStability" },
];

export const NPD_MarketSpecific = [
  { label: "Stage 5", name: "stage5", market: "korea " },
  { label: "형식승인", name: "koTypeApproval", market: "korea " },
  { label: "Stage V", name: "stageV", market: "europe " },
  { label: "CE Marking", name: "certeCE", market: "europe " },
  { label: "Road Homologation", name: "roadHomologation", market: "europe " },
  { label: "EMC", name: "emc", market: ["europe", "cutr", "northAmerica "] },
  { label: "Noise Emission", name: "noiseEmission", market: ["europe", "china", "korea", "brazil"], },
];
