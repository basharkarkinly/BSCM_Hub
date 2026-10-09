/* بنك الامتحان النهائي الشامل — دمج كل بنوك أسئلة الفصول الستة. */
const FINAL_POOL = [
  ...(typeof CH1_POOL !== "undefined" ? CH1_POOL : []),
  ...(typeof CH2_POOL !== "undefined" ? CH2_POOL : []),
  ...(typeof CH3_POOL !== "undefined" ? CH3_POOL : []),
  ...(typeof CH4_POOL !== "undefined" ? CH4_POOL : []),
  ...(typeof CH5_POOL !== "undefined" ? CH5_POOL : []),
  ...(typeof CH6_POOL !== "undefined" ? CH6_POOL : []),
];
