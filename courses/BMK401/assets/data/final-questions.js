/* بنك الامتحان النهائي الشامل — دمج كل بنوك أسئلة الفصول الاثني عشر. */
const FINAL_POOL = [
  ...(typeof CH1_POOL !== "undefined" ? CH1_POOL : []),
  ...(typeof CH2_POOL !== "undefined" ? CH2_POOL : []),
  ...(typeof CH3_POOL !== "undefined" ? CH3_POOL : []),
  ...(typeof CH4_POOL !== "undefined" ? CH4_POOL : []),
  ...(typeof CH5_POOL !== "undefined" ? CH5_POOL : []),
  ...(typeof CH6_POOL !== "undefined" ? CH6_POOL : []),
  ...(typeof CH7_POOL !== "undefined" ? CH7_POOL : []),
  ...(typeof CH8_POOL !== "undefined" ? CH8_POOL : []),
  ...(typeof CH9_POOL !== "undefined" ? CH9_POOL : []),
  ...(typeof CH10_POOL !== "undefined" ? CH10_POOL : []),
  ...(typeof CH11_POOL !== "undefined" ? CH11_POOL : []),
  ...(typeof CH12_POOL !== "undefined" ? CH12_POOL : []),
];
