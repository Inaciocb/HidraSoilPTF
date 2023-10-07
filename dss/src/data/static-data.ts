import { EqResult } from 'src/model/eq-result';
import { InputsT, MeasurementUnitT, StatesT } from './../model/utils';
import { Equation } from "src/model/equation";

function log (num: number) {
  return Math.log(num);
}

function ln (num: number) {
    return Math.log(num);
}

// Importante manter os parametros da função que aplica a equação em ordem alfabética de acordo com os nomes na tela inicial!!!!
// exemplo formula recebe CS -> considerar coarseSand para ordem alfabética
export const EQUATIONS: Set<Equation> = new Set([

 new Equation("Dicos2", "", [InputsT.bulkDensity, ], (bd: number, ): EqResult => {  return new EqResult( 0.46082 - 0.18014 * bd, "cm³/cm³")}, "", [StatesT.BA,], 0.13530126, "fieldCapacity", 0),

 new Equation("Rei3", "", [InputsT.sand, InputsT.coarseSand, InputsT.liquidLimits, ], (cs: number, ll: number, sand: number, ): EqResult => {  return new EqResult( 169 + 17.1 * log ((sand/10)) - 17.5 * log ((cs/10)) + 0.53 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.030885503, "fieldCapacity", 0),

 new Equation("Rei4", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.liquidLimits, ], (cs: number, ll: number, om: number, ): EqResult => {  return new EqResult( 179 + 13 * log ((om/10)) - 23.6 * log ((cs/10)) + 0.53 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.030885503, "fieldCapacity", 0),

 new Equation("BAL", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.330 * (clay/10) + 8.3, "m³/m³")}, "", [StatesT.CERRADO,], 0.018719954, "fieldCapacity", 0),

 new Equation("Vb1", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 13.96 + 0.387 * clay*100, "%")}, "", [StatesT.BR,], 0.091896481, "fieldCapacity", 0),

//  new Equation("Rei2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.037 + 90.38 * (clay * 100 + silt * 100), "kg/kg")}, "", [StatesT.RS,], 0.030885503, "fieldCapacity", 0),

 new Equation("ASS", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 39.07988535 - 0.04098682 * (sand)**1.455456594, "%")}, "", [StatesT.BR,], 0.071931887, "fieldCapacity", 0),

 new Equation("Gia1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.081 + 0.005 * silt + 0.004 * clay, "cm³/cm³")}, "", [StatesT.SC,StatesT.RS,], 0.072963752, "fieldCapacity", 0),

 new Equation("Vb2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 11.27 + 0.367 * clay*100 + 0.226 * silt*100, "%")}, "", [StatesT.BR,], 0.072618145, "fieldCapacity", 0),

 new Equation("Fer", "", [InputsT.clay, InputsT.silt, InputsT.fineSand, ], (clay: number, fs: number, silt: number, ): EqResult => {  return new EqResult( 0.00807 + 0.004291 * clay + 0.003186 * silt + 0.000506 * fs, "kg/kg")}, "", [StatesT.MG,StatesT.BA,StatesT.ES,], 0.082125727, "fieldCapacity", 0),

 new Equation("Dicos4", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 1.42937 - 0.28125 * cs - 0.46640 * bd - 1.00496 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.079419082, "fieldCapacity", 0),

 new Equation("Dicos5", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 2.84267 - 0.026601 * cs - 0.97267 * bd - 2.40257 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.074528906, "fieldCapacity", 0),

 new Equation("Dicos1", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.86625 - 0.01727 * cs - 0.21859 * bd- 0.85690 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.565503582, "fieldCapacity", 0),

 new Equation("Dicos3", "", [InputsT.bulkDensity, InputsT.coarseSand, ], (bd: number, cs: number, ): EqResult => {  return new EqResult( 0.59324 - 0.14310 * cs + 0.18177 * bd, "cm³/cm³")}, "", [StatesT.BA,], 0.357343101, "fieldCapacity", 0),

 new Equation("Ur", "", [InputsT.clay, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, ): EqResult => {  return new EqResult( 49.6557 - 0.16882 * sand + 0.21658 * clay - 12.6897 * bd, "kg/kg")}, "", [StatesT.RS,], 0.147439893, "fieldCapacity", 0),

 new Equation("Gue", "", [InputsT.clay, InputsT.microporosity, ], (clay: number, micro: number, ): EqResult => {  return new EqResult( 0.059 + 0.641 * micro + 0.001  * clay, "cm³/cm³")}, "", [StatesT.RS,], 0.037930946, "fieldCapacity", 0),

 new Equation("Rei1", "", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.organicMatter, ], (bd: number, clay: number, om: number, silt: number, ):  EqResult => {  return new EqResult( 0.268 + 0.05 * (clay*100) + 0.24 * (clay+silt*100) +0.85*om *(100)*bd, "kg/kg")}, "", [StatesT.RS,], 0.02416936, "fieldCapacity", 0),

 new Equation("Rei5", "", [InputsT.clay, InputsT.sand, InputsT.organicMatter, ], (clay: number, om: number, sand: number, ): EqResult => {  return new EqResult( 364 * 27.8 * log ((om/10)) + 0.012 * clay/10 - 0.37 * sand/10, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.225133429, "fieldCapacity", 0),

 new Equation("CO1", "Argiloso", [InputsT.silt, InputsT.bulkDensity, ], (bd: number, silt: number, ): EqResult => {  return new EqResult( 41.3580-16.6354*bd+0.4106*silt, "%")}, "", [StatesT.MG,], 0.148291032, "fieldCapacity", 0),

 new Equation("Soar8", "Francoargiloso", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (bd: number, dp: number, p: number, tp: number, ): EqResult => {  return new EqResult( 2.1696 - 1.4883 * bd + 0.6744 * dp - 3.3203 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.236297199, "fieldCapacity", 0),

 new Equation("Nob", "", [InputsT.clay, InputsT.phosphor, InputsT.ph, ], (clay: number, p: number, ph: number, ): EqResult => {  return new EqResult( 0.263 + (0.000621 * clay) -(0.0372 * ph), "cm³/cm³")}, "", [StatesT.AGRESTE,], 0.291335406, "fieldCapacity", 0),

 new Equation("Pe2", "", [InputsT.microporosity, ], (micro: number, ): EqResult => {  return new EqResult( 0.01812 + 0.26123 * micro, "cm³/cm³")}, "Latossolo Amarelo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("Soar1", "Franco Arenoso", [InputsT.densityOfParticle, InputsT.phosphor, InputsT.theta33, ], (dp: number, p: number, th33: number, ): EqResult => {  return new EqResult(  -1.6757 + 0.7199 * dp, "cm³/cm³")}, "", [StatesT.RS,], 0.202424285, "fieldCapacity", 0),

 new Equation("Soar9", "Francosiltoso", [InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, InputsT.theta33, ], (dp: number, p: number, th33: number, tp: number, ): EqResult => {  return new EqResult(   -0.6191 + 0.1983 * dp + 0.1799 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.326595577, "fieldCapacity", 0),

 new Equation("Soar15", "", [InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.6191 + 0.1983 * dp + 0.8079 * tp, "cm³/cm³")}, "", [StatesT.RS,], 1.232244387, "fieldCapacity", 0),

 new Equation("Al2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.004 * clay ** 2 - 0.312 * clay + 3.289, "cm³/cm³")}, "", [StatesT.PE,], 0.310028095, "fieldCapacity", 0),

 new Equation("NASC2", "", [InputsT.silt, InputsT.sand, ], (sand: number, silt: number, ): EqResult => {  return new EqResult( 0.418 - 0.000377 * (sand/10) - 0.000269 * (silt/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.341929423, "fieldCapacity", 0),

 new Equation("Ol4", "Muito Argiloso", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( 0.000328 * (sand/10) + 0.00571 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.279703223, "fieldCapacity", 0),

 new Equation("Sil4", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.3071 + 0.2751 * clay+ 0.0938 * silt, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.153133734, "fieldCapacity", 0),

 new Equation("Sil2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 1.946+ 0.0037 * clay + 0.2231 * silt, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.219866977, "fieldCapacity", 0),

 new Equation("Al1", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.003 * sand ** 2 - 0.911 * sand + 57.91, "(g/g)*100")}, "", [StatesT.PE,], 0.272069116, "fieldCapacity", 0),

 new Equation("Mas2", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 58.3402 - 0.5936 * (sand), "g/kg")}, "", [StatesT.PE,], 0.208431479, "fieldCapacity", 0),

 new Equation("NASC3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0525 + 0.000373 * (clay/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.24168548, "fieldCapacity", 0),

 new Equation("Silv1", "", [InputsT.clay, InputsT.sand, InputsT.totalPorosity, InputsT.microporosity, InputsT.phosphor, ], (clay: number, micro: number, p: number, sand: number, tp: number, ): EqResult => {  return new EqResult( 0.073 + 0.000415 * clay - 0.0060 * (sand/clay) - 0.00215 * tp + 0.00973 * micro, "cm³/cm³")}, "", [StatesT.BA,StatesT.GO,StatesT.MG,StatesT.RS,], 0.303890141, "fieldCapacity", 0),

 new Equation("Ol7", "", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( -0.000019 * (sand/10) + 0.000106 * (silt/10) + 0.000594*(clay/10), "kg/kg")}, "", [StatesT.PE,], 0.30536282, "fieldCapacity", 0),

 new Equation("Al3", "", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( -0.030 * silt ** 2 - 1.462 * silt + 1.987, "(g/g)*100")}, "", [StatesT.PE,], 0.355243594, "fieldCapacity", 0),

 new Equation("CO3", "Argiloso", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 42.6737 - 363.9401 / silt, "%")}, "", [StatesT.MG,], 0, "fieldCapacity", 0),

 new Equation("CO4", "Francoargiloar", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult(( 24.8766 + 2347.3300 / silt)/1000, "cm³/cm³")}, "", [StatesT.MG,], 0, "fieldCapacity", 0),

 new Equation("Pe7", "", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 0.0152 + 0.0001 * silt, "cm³/cm³")}, "", [StatesT.PB,], 0.293830586, "fieldCapacity", 0),

 new Equation("Al3", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( -0.003 * (silt+clay) ** 2 - 0.180 * (silt+clay) +3.309, "(g/g)*100")}, "", [StatesT.PE,], 0.355243594, "fieldCapacity", 0),

 new Equation("Men5", "", [InputsT.clay, InputsT.bulkDensity, InputsT.theta33, ], (bd: number, clay: number, th33: number, ): EqResult => {  return new EqResult(  -0.0556 + 0.0086 * bd + 0.0014 * clay, "cm³/cm³")}, "", [StatesT.MT,], 0.312405502, "fieldCapacity", 0),

 new Equation("NASC1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.0409 + 0.000377 * (clay/10) + 0.000108 * (silt/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.255239542, "fieldCapacity", 0),

 new Equation("Ol1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000333 * (silt/10) + 0.000387 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.30555232, "fieldCapacity", 0),

 new Equation("NASC4", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.378 - 0.000351 * (sand/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.291335406, "fieldCapacity", 0),

 new Equation("Ar", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( (3.1 - 0.629 * silt+clay - 0.0034 * silt+clay ** 2)/100, "%")}, "", [StatesT.SP,], 2.403595673, "fieldCapacity", 0),

 new Equation("Mas1", "", [InputsT.clay, InputsT.silt, InputsT.theta33, ], (clay: number, silt: number, th33: number, ): EqResult => {  return new EqResult(  (-1.5691 + 0.4289 * (silt + clay))*100, "g/kg")}, "", [StatesT.PE,], 0.102982822, "fieldCapacity", 0),

 new Equation("DosS8", "", [InputsT.clay, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, ): EqResult => {  return new EqResult( 18.15868 + 0.21328 * clay - 0.23668 * cs - 0.16258 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.088513323, "fieldCapacity", 0),

 new Equation("DosS7", "", [InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, ): EqResult => {  return new EqResult( 34.1352 - 0.3028 * cs - 0.34317 * fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.080646238, "fieldCapacity", 0),

 new Equation("Pe6", "", [InputsT.sand, InputsT.coarseSand, InputsT.fineSand, InputsT.mediumSand, InputsT.veryFineSand, ], (cs: number, ms: number, vfsand: number, ): EqResult => {  return new EqResult( 0.06177 - 0.00041281 * cs * 0.00029075 * ms - 0.00038934 * vfsand, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("Pe3", "", [InputsT.bulkDensity, InputsT.coarseSand, ], (bd: number, cs: number, ): EqResult => {  return new EqResult( 0.24907 - 0.00007519 * cs - 0.11508 * bd, "cm³/cm³")}, "Argissolo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("Men4", "", [InputsT.silt, InputsT.bulkDensity, InputsT.fineSand, InputsT.microporosity, ], (bd: number, fs: number, micro: number, silt: number, ): EqResult => {  return new EqResult( 0.1232 + 0.0408 * bd + 0.0086 * micro + 0.0006 * fs/10 + 0.0011 * silt/10, "cm³/cm³")}, "", [StatesT.GO,], 0.135421345, "fieldCapacity", 0),

 new Equation("Pe4", "", [InputsT.bulkDensity, InputsT.coarseSand, InputsT.densityOfParticle, InputsT.phosphor, ], (bd: number, cs: number, dp: number, p: number, ): EqResult => {  return new EqResult( 0.33983 - 0.00037477 * cs - 0.06527 * bd - 0.05612 * dp, "cm³/cm³")}, "Argissolo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("DosS13", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 26.18555 + 1.84737 * om  + 0.07352 * clay - 0.28332 * cs - 0.26753 * fs, "dag/kg")}, "", [StatesT.RS,], 0.06939102, "fieldCapacity", 0),

 new Equation("DosS14", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 24.88952 + 1.46274 * om - 0.24526 * cs - 0.23454 * fs, "dag/kg")}, "", [StatesT.RS,], 0.08801792, "fieldCapacity", 0),

 new Equation("DosS2", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 29.65022 + 1.06092 * om - 0.27668 * cs - 0.31970 * fs, "dag/kg")}, "Cambissolo", [StatesT.RS,], 0.080291226, "fieldCapacity", 0),

 new Equation("DosS10", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 23.40215 + 1.94753 * om + 0.10749 * clay - 0.29745 * cs - 0.22021 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.069428008, "fieldCapacity", 0),

 new Equation("DosS12", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 17.8200+5.5292*om+0.2094*clay-0.1698*cs-0.2433*fs, "dag/kg")}, "Planossolo", [StatesT.RS,], 0.134107868, "fieldCapacity", 0),

 new Equation("DosS1", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 17.1565 + 2.5169 * om - 0.1554 * cs - 0.1621 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.114654236, "fieldCapacity", 0),

 new Equation("DosS3", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 20.6977 + 1.7475 * om - 0.2127 * cs - 0.1728 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.103304659, "fieldCapacity", 0),

 new Equation("DosS4", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 30.1220 + 1.1781 * om - 0.3264 * cs - 0.2956 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.075567751, "fieldCapacity", 0),

 new Equation("DosS5", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 22.07036 + 2.37679 * om - 0.21787 * cs - 0.20096 * fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.090377464, "fieldCapacity", 0),

 new Equation("DosS6", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 21.9359 + 3.35081 * om - 0.22751 * cs - 0.19371 * fs, "dag/kg")}, "Planossolo", [StatesT.RS,], 0.088041505, "fieldCapacity", 0),

 new Equation("DosS9", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 36.46889 + 2.63862 * om - 0.44002 * cs - 0.38987 * fs, "dag/kg")}, "Cambissolo", [StatesT.RS,], 0.075523665, "fieldCapacity", 0),

 new Equation("DosS11", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 39.45134-2.47572*om-0.33157*cs-0.30641*fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.115188401, "fieldCapacity", 0),

 new Equation("Pe5", "", [InputsT.coarseSand, InputsT.densityOfParticle, InputsT.phosphor, ], (cs: number, dp: number, p: number, ): EqResult => {  return new EqResult( 0.19916 - 0.0004 * cs - 0.0396 * dp, "cm³/cm³")}, "Planossolo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("Men2", "", [InputsT.totalPorosity, InputsT.fineSand, InputsT.microporosity, InputsT.phosphor, ], (fs: number, micro: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.04314 + 0.00762 * micro - 0.00074 * tp - 0.00058 * fs/10, "cm³/cm³")}, "", [StatesT.BA,], 0.246255204, "fieldCapacity", 0),

 new Equation("Men3", "", [InputsT.clay, InputsT.bulkDensity, InputsT.theta33, ], (bd: number, clay: number, th33: number, ): EqResult => {  return new EqResult(-0.0386 + 0.0088 * bd + 0.00067 * clay, "cm³/cm³")}, "", [StatesT.MG,], 0.331378941, "fieldCapacity", 0),

 new Equation("Mar", "", [InputsT.clay, InputsT.bulkDensity, ], (bd: number, clay: number, ): EqResult => {  return new EqResult( 0.47352559 + 0.00017979 * clay - 0.12025765 * bd, "m³/m³")}, "", [StatesT.RS,], 0.083626403, "fieldCapacity", 0),

 new Equation("Ol3", "Argiloso", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000079 * (sand/10) +0.000444 *(silt/10) + 0.000484*(clay/10) - 0.069234 * bd, "kg/kg")}, "", [StatesT.PE,], 0.436198096, "fieldCapacity", 0),

 new Equation("Ol6", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000088 * (sand/10) + 0.000449 * (silt/10) + 0.000448 * (clay/10) - 0.058166 * bd, "kg/kg")}, "", [StatesT.PE,], 0.414497556, "fieldCapacity", 0),

 new Equation("Ol2", "Francoargiloarenoso", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000341 * (silt/10) + 0.000374 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.305589659, "fieldCapacity", 0),

 new Equation("Men1", "", [InputsT.clay, InputsT.bulkDensity, InputsT.microporosity, ], (bd: number, clay: number, micro: number, ): EqResult => {  return new EqResult( 0.11305 + 0.02978 * bd + 0.01037 * micro + 0.00049169 * clay/10, "m³/m³")}, "", [StatesT.RS,], 0.1614988, "fieldCapacity", 0),

 new Equation("Sou2", "", [InputsT.macroporosity, ], (macro: number, ): EqResult => {  return new EqResult( 0.08595 + 0.006102 * macro, "m³/m³")}, "", [StatesT.TAB_COSTEIROS,], 0.224176916, "fieldCapacity", 0),

 new Equation("Ros1", "", [InputsT.sand, InputsT.bulkDensity, InputsT.mesoporosity, ], (bd: number, meso: number, sand: number, ): EqResult => {  return new EqResult( 0.241249 - 0.000117723 * sand - 0.152483 * meso - 0.046851 * bd, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.225133429, "fieldCapacity", 0),

 new Equation("Sou1", "", [InputsT.clay, InputsT.microporosity, ], (clay: number, micro: number, ): EqResult => {  return new EqResult( 0.15839 + 0.00031 * clay/10 - 0.00240 * micro, "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.160016483, "fieldCapacity", 0),

 new Equation("Ros2", "", [InputsT.sand, InputsT.microporosity, ], (micro: number, sand: number, ): EqResult => {  return new EqResult( 0.057 - 0.001 * sand + 0.743 * micro, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.034763995, "fieldCapacity", 0),

 new Equation("Sil5", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 9.3274 + 0.058 * om + 0.1014 * clay, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.179564967, "fieldCapacity", 0),

 new Equation("Sil1", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 5.495 + 0.2152 * clay + 0.8054 * om, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.155861, "fieldCapacity", 0),

 new Equation("Sil3", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 1.854 + 0.2156 * clay + 0.8054 * om, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.188602683, "fieldCapacity", 0),

 new Equation("Gai", "", [InputsT.clay, InputsT.silt, InputsT.soilOrganicCarbon, ], (clay: number, silt: number, soc: number, ): EqResult => {  return new EqResult( 0.208 * soc + 0.600 * clay + 0.166 * silt, "m³/m³")}, "", [StatesT.CE,StatesT.PI,], 0.101242193, "fieldCapacity", 0),

 new Equation("Sil6", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 9.7953 - 2.6231 * om + 0.0891 * clay, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.264686872, "fieldCapacity", 0),

 new Equation("Pe1", "", [InputsT.sand, InputsT.microporosity, InputsT.densityOfParticle, InputsT.macroporosity, InputsT.phosphor, ], (dp: number, macro: number, micro: number, p: number, sand: number, ): EqResult => {  return new EqResult( 0.011429 - 0.000066799 * sand + 0.28462 * micro + 0.04162 * macro - 0.02548 * dp, "cm³/cm³")}, "", [StatesT.PB,], 0.252387441, "fieldCapacity", 0),

 new Equation("Soar4", "Argilo Siltoso", [InputsT.clay, InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (clay: number, dp: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.0432 + 0.0019 * clay + 0.0293 * dp + 0.1952 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.075435614, "fieldCapacity", 0),

 new Equation("Soar10", "", [InputsT.sand, InputsT.organicMatter, InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, om: number, p: number, sand: number, tp: number, ): EqResult => {  return new EqResult( 0.0628 - 0.0005 * sand - 0.00734 * om + 0.0398 * dp + 0.1515 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.128596956, "fieldCapacity", 0),

 new Equation("Soar5", "Argiloso", [InputsT.totalPorosity, InputsT.phosphor, ], (p: number, tp: number, ): EqResult => {  return new EqResult( 0.0746 + 0.4946 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.074989599, "fieldCapacity", 0),

 new Equation("And", "", [InputsT.clay, InputsT.bulkDensity, InputsT.mesoporosity, ], (bd: number, clay: number, meso: number, ): EqResult => {  return new EqResult( 0.256931 -0.261746 * meso/10 + 0.000104958 *  clay/10 -0.0942794 *bd, "cm³/cm³")}, "", [StatesT.PE,], 0, "fieldCapacity", 0),

 new Equation("Ram1", "", [InputsT.clay, InputsT.phosphor, InputsT.cec, ], (cec: number, clay: number, p: number, ): EqResult => {  return new EqResult( 0.122 + 0.0004*clay/10 + 0.0138* p  + 0.0049*cec, "cm³/cm³")}, "Latossolo", [StatesT.PI,], 0.293830586, "fieldCapacity", 0),

 new Equation("Ram5", "", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.645 - 0.00033 * sand/10 - 0.0002 * clay/10 - 0.0003 * silt/10, "cm³/cm³")}, "", [StatesT.PI,], 0.306330878, "fieldCapacity", 0),

 new Equation("Ram4", "", [InputsT.clay, InputsT.silt, InputsT.soilOrganicCarbon, ], (clay: number, silt: number, soc: number, ): EqResult => {  return new EqResult( 0.4098 - 0.0002*clay/10 - 0.0001*silt/10 - 0.0397*soc, "cm³/cm³")}, "Plintossolo", [StatesT.PI,], 0.122743523, "fieldCapacity", 0),

 new Equation("Ram2", "", [InputsT.clay, InputsT.fineSand, InputsT.soilOrganicCarbon, ], (clay: number, fs: number, soc: number, ): EqResult => {  return new EqResult( 0.1821 + 0.00034*fs/10 + 0.00022*clay/10 - 0.0347*soc, "cm³/cm³")}, "Argissolo", [StatesT.PI,], 0.226513822, "fieldCapacity", 0),

 new Equation("Ram3", "", [InputsT.silt, InputsT.fineSand, InputsT.soilOrganicCarbon, ], (fs: number, silt: number, soc: number, ): EqResult => {  return new EqResult( 0.0507 + 0.0004*fs/10 + 0.1039*soc - 0.0007*silt/10, "cm³/cm³")}, "Neossolo", [StatesT.PI,], 0.215371181, "fieldCapacity", 0),

 new Equation("Av8", "", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( 0.245*sand+0.607*clay, "cm³/100cm³")}, "", [StatesT.MG,], 0.103324148, "fieldCapacity", 0),

 new Equation("Av6", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.119 * sand + 0.410 * clay + 0.396 * silt + 6.242 * bd, "cm³/100cm³")}, "", [StatesT.MG,], 0.070861546, "fieldCapacity", 0),

 new Equation("Av7", "", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.208*sand+0.474*clay+0.456*silt, "cm³/100cm³")}, "", [StatesT.MG,], 0.059481889, "fieldCapacity", 0),

 new Equation("Pe4", "", [InputsT.bulkDensity, ], (bd: number, ): EqResult => {  return new EqResult( 0.16288 - 0.07336 * bd, "cm³/cm³")}, "Argissolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Dicos2", "", [InputsT.bulkDensity, ], (bd: number, ): EqResult => {  return new EqResult( 0.24049 - 0.10555 * bd, "cm³/cm³")}, "", [StatesT.BA,], 0.149469962, "permanentWiltingPoint", 0),

 new Equation("Dicos1", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.phosphor, ], (bd: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.5624 - 0.1561 * bd- 0.5720 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.187809611, "permanentWiltingPoint", 0),

//  new Equation("Ram4", "", [], (): EqResult => {  return new EqResult( 0.2682 - 0.0002*ta, "cm³/cm³")}, "Plintossolo", [StatesT.PI,], 0.1371207, "permanentWiltingPoint", 0),

 new Equation("Pe5", "", [InputsT.coarseSand, InputsT.densityOfParticle, InputsT.phosphor, InputsT.estabilidadeDeAgregados ], (cs: number, dp: number, ea: number ): EqResult => {  return new EqResult( 0.014722 - 0.0005 * cs * 0.02831 * ea - 0.098 * dp, "cm³/cm³")}, "Planossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Pe6", "", [InputsT.coarseSand, InputsT.densityOfParticle, InputsT.veryCoarseSand, InputsT.estabilidadeDeAgregados, ], ( dp: number, ea: number, vcsand: number, ): EqResult => {  return new EqResult( 0.10070 + 0.00065694 * vcsand - 0.02232 * ea - 0.03206 * dp, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Rei3", "", [InputsT.clay, InputsT.sand, InputsT.liquidLimits, ], (clay: number, ll: number, sand: number, ): EqResult => {  return new EqResult( 82 + 18.9 * log ((sand/10)) - 0.14 * clay/10 + 0.30 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0, "permanentWiltingPoint", 0),

 new Equation("Pe7", "", [InputsT.silt, InputsT.bulkDensity, InputsT.organicMatter, InputsT.agregatesStability, InputsT.agregatesStability, ], (bd: number, ea: number, om: number, silt: number, ): EqResult => {  return new EqResult( - 0.084 + 0.0001 * silt * 0.0008 * om + 0.0464 * bd - 0.026 * ea, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Sou2", "", [InputsT.macroporosity, ], (macro: number, ): EqResult => {  return new EqResult( 0.0591 + 0.00646 * macro, "m³/m³")}, "", [StatesT.TAB_COSTEIROS,], 0.184295407, "permanentWiltingPoint", 0),

 new Equation("Pe2", "", [InputsT.microporosity, ], (micro: number, ): EqResult => {  return new EqResult( 0.01321 + 0.20505 * micro, "cm³/cm³")}, "Latossolo", [StatesT.PB,], 0.156150254, "permanentWiltingPoint", 0),

 new Equation("Kl", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0003 * (clay/10) + 0.0118, "g/g")}, "", [StatesT.RS,], 0.208725098, "permanentWiltingPoint", 0),

 new Equation("NASC3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0221 + 0.000288 * (clay/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.209539865, "permanentWiltingPoint", 0),

 new Equation("Ram3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.1174 - 0.00034*clay/10, "cm³/cm³")}, "Neossolo", [StatesT.PI,], 0.1371207, "permanentWiltingPoint", 0),

 new Equation("Sil2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 2.2397 + 1.581 * clay, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.461145332, "permanentWiltingPoint", 0),

 new Equation("Sil3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 6.7168 + 0.2281 * clay, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.096789974, "permanentWiltingPoint", 0),

 new Equation("Sil4", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 8.034 + 1.581 * clay, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.509504978, "permanentWiltingPoint", 0),

 new Equation("Sil6", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 9.0821 + 0.3781 * clay, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.066745621, "permanentWiltingPoint", 0),

 new Equation("Al2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.379 * clay ** 0.905, "(g/g)*100")}, "", [StatesT.PE,], 0.224948482, "permanentWiltingPoint", 0),

 new Equation("BAL", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.287 * (clay/10) + 1.4, "%")}, "", [StatesT.CERRADO,], 1.294898614, "permanentWiltingPoint", 0),

 new Equation("Vb1", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 6.35 + 0.284 * clay*100, "%")}, "", [StatesT.BR,], 0.084239942, "permanentWiltingPoint", 0),

 new Equation("Ol4", "Muito Argiloso", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, ], (bd: number, clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000282 * silt/10 + 0.000487 * clay/10 - 0.101537 * bd, "kg/kg")}, "", [StatesT.PE,], 0.428949554, "permanentWiltingPoint", 0),

//  new Equation("Rei2", "", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( (0.236 + 0.044 * clay*100 - 0.21 * (sand*100))/1000, "kg/kg")}, "", [StatesT.RS,], 0, "permanentWiltingPoint", 0),

 new Equation("Vb2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 3.83 + 0.272 * clay*100 + 0.212 * silt*100, "%")}, "", [StatesT.BR,], 0.066539877, "permanentWiltingPoint", 0),

 new Equation("Al1", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 129.0 - 0.04 ** sand, "(g/g)*100")}, "", [StatesT.PE,], 0.116370039, "permanentWiltingPoint", 0),

 new Equation("NASC4", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.272 - 0.000269 * (sand/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.207225839, "permanentWiltingPoint", 0),

 new Equation("Soar9", "Francosiltoso", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.0826 + 0.0041 * sand, "cm³/cm³")}, "", [StatesT.RS,], 0.169922362, "permanentWiltingPoint", 0),

 new Equation("Soar15", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.0826 + 0.0041 * sand, "cm³/cm³")}, "", [StatesT.RS,], 0.169922362, "permanentWiltingPoint", 0),

 new Equation("ASS", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 26.16995195 - 0.04098682 * sand * ln(sand), "%")}, "", [StatesT.BR,], 0.065604236, "permanentWiltingPoint", 0),

 new Equation("Mas2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.2708 + 0.3468 * (clay), "g/kg")}, "", [StatesT.PE,], 0.09095579, "permanentWiltingPoint", 0),

 new Equation("Av8", "", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( 0.070 * sand +0.358 * clay, "cm³/100cm³")}, "", [StatesT.MG,], 0.093383268, "permanentWiltingPoint", 0),

 new Equation("Av7", "", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.054 * sand + 0.300 * clay + 0.196 * silt, "cm³/100cm³")}, "", [StatesT.MG,], 0.074164765, "permanentWiltingPoint", 0),

 new Equation("Ol2", "Francoargiloarenoso", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000032 * sand/10 + 0.000223 * silt/10 +0.00062 * clay/10, "kg/kg")}, "", [StatesT.PE,], 0.234075559, "permanentWiltingPoint", 0),

 new Equation("Al3", "", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 1.384 * silt ** 0.654, "(g/g)*100")}, "", [StatesT.PE,], 0.137012817, "permanentWiltingPoint", 0),

 new Equation("Gia2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.031 + 0.005 * silt + 0.003 * clay, "cm³/cm³")}, "", [StatesT.SC,StatesT.RS,], 0.070004172, "permanentWiltingPoint", 0),

 new Equation("Gia3", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.024 + 0.005 * silt + 0.003 * clay, "cm³/cm³")}, "", [], 0.067413834, "permanentWiltingPoint", 0),

 new Equation("NASC1", "", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, ], (bd: number, clay: number, silt: number, ): EqResult => {  return new EqResult( 0.0812 + 0.000279* (clay/10) + 0.0000713 * (silt/10) - 0.0457 * bd, "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.214954366, "permanentWiltingPoint", 0),

 new Equation("NASC2", "", [InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.360 - 0.000279 * (sand/10) - 0.000208 * (silt/10) - 0.0457 * bd, "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.226856981, "permanentWiltingPoint", 0),

 new Equation("Sil1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 1.946+ 0.0037 * clay + 0.2231 * silt, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.173576816, "permanentWiltingPoint", 0),

 new Equation("Al4", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.213 * (silt+clay) ** 0.990, "(g/g)*100")}, "", [StatesT.PE,], 0.221992976, "permanentWiltingPoint", 0),

 new Equation("Ar", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 398.9 * (silt+clay) / (1308.1 + silt+clay), "%")}, "", [StatesT.SP,], 0.075187529, "permanentWiltingPoint", 0),

 new Equation("Ram2", "", [InputsT.clay, InputsT.silt, InputsT.fineSand, ], (clay: number, fs: number, silt: number, ): EqResult => {  return new EqResult( 0.0858 + 0.00021*clay/10 - 0.0002*silt/10 + 0.0001*fs/10, "cm³/cm³")}, "Argissolo", [StatesT.PI,], 0.145295814, "permanentWiltingPoint", 0),

 new Equation("Fer", "", [InputsT.clay, InputsT.silt, InputsT.fineSand, ], (clay: number, fs: number, silt: number, ): EqResult => {  return new EqResult( 0.004705 + 0.00299 * clay + 0.000642 * silt - 0.000156 * fs, "cm³/cm³")}, "", [StatesT.MG,StatesT.BA,StatesT.ES,], 0.081978603, "permanentWiltingPoint", 0),

 new Equation("Dicos3", "", [InputsT.coarseSand, ], (cs: number, ): EqResult => {  return new EqResult( 0.17058 - 0.14580 * cs, "dag/kg")}, "", [StatesT.BA,], 0.041350853, "permanentWiltingPoint", 0),

 new Equation("DosS7", "", [InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, ): EqResult => {  return new EqResult( 21.5649 - 0.1932 * cs - 0.2004 * fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.067865248, "permanentWiltingPoint", 0),

 new Equation("DosS8", "", [InputsT.clay, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, ): EqResult => {  return new EqResult( 8.11431 + 0.21634 * clay - 0.13063 * cs - 0.09715 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.07139388, "permanentWiltingPoint", 0),

 new Equation("DosS10", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 7.20816 + 3.64925 * om + 0.17031 * clay - 0.15310 * cs - 0.10005 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.070907516, "permanentWiltingPoint", 0),

 new Equation("Sil5", "", [InputsT.silt, InputsT.fineSand, ], (fs: number, silt: number, ): EqResult => {  return new EqResult( 9.23 + 0.2511 * silt - 0.074 * fs, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.11447569, "permanentWiltingPoint", 0),

 new Equation("Pe3", "", [InputsT.bulkDensity, InputsT.coarseSand, ], (bd: number, cs: number, ): EqResult => {  return new EqResult( 0.19817 - 0.00007741 * cs - 0.09215 * bd, "cm³/cm³")}, "Argissolo", [StatesT.PB,], 0.149620431, "permanentWiltingPoint", 0),

 new Equation("Dicos4", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 1.24529 - 0.21743 * cs - 0.43746 * bd - 0.99032 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.061706575, "permanentWiltingPoint", 0),

 new Equation("Dicos5", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 1.30028 - 0.20449 * cs - 0.40620 * bd - 1.12476 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.057659328, "permanentWiltingPoint", 0),

 new Equation("Men3", "", [InputsT.bulkDensity, InputsT.coarseSand, InputsT.fineSand, InputsT.microporosity, ], (bd: number, cs: number, fs: number, micro: number, ): EqResult => {  return new EqResult( 0.0468 + 0.0848 * bd + 0.0030 * micro - 0.0022 * cs/10 - 0.0020 * fs/10, "cm³/cm³")}, "", [StatesT.MG,], 0.121144211, "permanentWiltingPoint", 0),

 new Equation("Men4", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.fineSand, InputsT.densityOfParticle, InputsT.macroporosity, InputsT.phosphor, ], (clay: number, dp: number, fs: number, macro: number, p: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.0048 + 0.0525 * dp - 0.0020 * macro + 0.0099 * sand/10 + 0.0016 * fs + 0.0016 * silt/10 + 0.0091 * clay/10, "cm³/cm³")}, "", [StatesT.GO,], 0.091380004, "permanentWiltingPoint", 0),

 new Equation("DosS12", "", [InputsT.clay, InputsT.organicMatter, InputsT.fineSand, ], (clay: number, fs: number, om: number, ): EqResult => {  return new EqResult( 0.82593+5.38527*om+0.29199*clay-0.16418*fs, "dag/kg")}, "Planossolo", [StatesT.RS,], 0.113792258, "permanentWiltingPoint", 0),

 new Equation("Doss13", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, ], (clay: number, cs: number, om: number, ): EqResult => {  return new EqResult( 11.50346 + 1.55563 * om + 0.14390 * clay - 0.13118 * cs - 0.16458 * clay, "dag/kg")}, "", [StatesT.RS,], 0.120681039, "permanentWiltingPoint", 0),

 new Equation("DosS5", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 17.31904 + 1.75679 * om - 0.17837 * cs - 0.21368 * fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.080537722, "permanentWiltingPoint", 0),

 new Equation("DosS3", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, ], (clay: number, cs: number, om: number, ): EqResult => {  return new EqResult( 2.57914 + 1.85627 * om + 0.1759 * clay - 0.04588 * cs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.083150194, "permanentWiltingPoint", 0),

 new Equation("CO1", "", [InputsT.bulkDensity, ], (bd: number, ): EqResult => {  return new EqResult( 6.9214 - 3.4117 * bd / ln(bd), "%")}, "", [StatesT.MG,], 0, "permanentWiltingPoint", 0),

 new Equation("DosS1", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 7.70062 + 1.91701 * om + 0.07225 * clay - 0.07730 * cs *0.09263 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.100150993, "permanentWiltingPoint", 0),

 new Equation("DosS4", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 11.7889 + 0.9991 * om + 0.1557 * clay - 0.1419 * cs -0.1361 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.056060028, "permanentWiltingPoint", 0),

 new Equation("DosS14", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 9.944674 + 1.01884 * om + 0.14405 * clay - 0.09538 * cs - 0.1052 * fs, "dag/kg")}, "", [StatesT.RS,], 0.065793849, "permanentWiltingPoint", 0),

 new Equation("DosS11", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 39.45134-2.47572*om-0.33157*cs-0.30641*fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.107097364, "permanentWiltingPoint", 0),

 new Equation("DosS9", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 27.08723 + 1.18014 * om - 0.29777 * cs - 0.35548 * fs, "dag/kg")}, "Cambissolo", [StatesT.RS,], 0.053494418, "permanentWiltingPoint", 0),

 new Equation("DosS6", "", [InputsT.organicMatter, InputsT.fineSand, ], (fs: number, om: number, ): EqResult => {  return new EqResult( 2.44219 + 5.17011 * om - 0.13334* fs, "dag/kg")}, "Planossolo", [StatesT.RS,], 0.156252694, "permanentWiltingPoint", 0),

 new Equation("Ram5", "", [InputsT.sand, InputsT.coarseSand, InputsT.soilOrganicCarbon, ], (cs: number, sand: number, soc: number, ): EqResult => {  return new EqResult( 0.074 + 0.00033 * sand/10 + 0.0382 * soc - 0.0001 * cs/10, "cm³/cm³")}, "", [StatesT.PI,], 0.135054683, "permanentWiltingPoint", 0),

 new Equation("Ol5", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000087 * silt/10  + 0.000285 * clay/10, "kg/kg")}, "", [StatesT.PE,], 0.236266319, "permanentWiltingPoint", 0),

 new Equation("Ol6", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000072 * sand/10 + 0.000195 * silt/10 + 0.000363 * clay/10  - 0.052198 * bd, "kg/kg")}, "", [StatesT.PE,], 0.331869618, "permanentWiltingPoint", 0),

 new Equation("Ol8", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000121 * silt/10 + 0.000260 * clay/10, "kg/kg")}, "", [StatesT.PE,], 0.236291028, "permanentWiltingPoint", 0),

 new Equation("Ol9", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000085 * sand + 0.000229 * silt + 0.000381 * clay - 0.062662 * bd, "kg/kg")}, "", [StatesT.PE,], 0.351957242, "permanentWiltingPoint", 0),

 new Equation("Ur", "", [InputsT.clay, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, ): EqResult => {  return new EqResult( 29.8999 - 0.15600 * sand + 0.18710 * clay - 6.7591 * bd, "kg/kg")}, "", [StatesT.RS,], 0.083005109, "permanentWiltingPoint", 0),

 new Equation("Ol1", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000038 * sand/10 + 0.000153 * silt/10 + 0.000341 * clay/10 - 0.030861 * bd, "kg/kg")}, "", [StatesT.PE,], 0.291593565, "permanentWiltingPoint", 0),

 new Equation("Ol3", "Argiloso", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, ], (bd: number, clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000282 * silt/10 + 0.000487 * clay/10 - 0.101537 * bd, "kg/kg")}, "", [StatesT.PE,], 0.428949554, "permanentWiltingPoint", 0),

 new Equation("And", "", [InputsT.sand, InputsT.bulkDensity, InputsT.mesoporosity, ], (bd: number, meso: number, sand: number, ): EqResult => {  return new EqResult( 0.241249 - 0.000117723 * sand/10 - 0.152483 * meso/10 - 0.046851 * bd, "cm³/cm³")}, "", [StatesT.PE,], 0.221992976, "permanentWiltingPoint", 0),

 new Equation("Men1", "", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.microporosity, ], (bd: number, clay: number, micro: number, silt: number, ): EqResult => {  return new EqResult( 1878 + 0.0872 * bd + 0.00374 * micro + 0.00101 * silt/10 + 0.00256 * clay/10, "cm³/cm³")}, "", [StatesT.RS,], 0.29435954, "permanentWiltingPoint", 0),

 new Equation("Mar", "", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.organicMatter, ], (bd: number, clay: number, om: number, silt: number, ): EqResult => {  return new EqResult( 0.08487488 + 0.00097697 * om +  0.00042973 * clay - 0.0002316 * silt + 0.16789394 * bd, "m³/m³")}, "", [StatesT.RS,], 0.156539921, "permanentWiltingPoint", 0),

 new Equation("Soar10", "", [InputsT.clay, InputsT.bulkDensity, InputsT.totalPorosity, InputsT.phosphor, ], (bd: number, clay: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.1531 * clay + 0.0072 * bd + 0.0240 *tp, "cm³/cm³")}, "", [StatesT.RS,], 0.061622792, "permanentWiltingPoint", 0),

 new Equation("Silv2", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.246 - 0.00174 * sand + 0.000069 * silt - 0.0402 * (silt/clay) + 0.0190 * bd, "cm³/cm³")}, "", [StatesT.BA,StatesT.GO,StatesT.MG,StatesT.RS,], 0, "permanentWiltingPoint", 0),

 new Equation("Ros2", "", [InputsT.clay, InputsT.sand, InputsT.bulkDensity, InputsT.totalPorosity, InputsT.phosphor, InputsT.soilOrganicCarbon, ], (bd: number, clay: number, p: number, sand: number, soc: number, tp: number, ): EqResult => {  return new EqResult( 0.568 - 0.003 * sand - 0.001 * clay - 0.281 * tp - 0.069 * bd + 0.005 * soc, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.069488481, "permanentWiltingPoint", 0),

 new Equation("Sou1", "", [InputsT.clay, InputsT.microporosity, ], (clay: number, micro: number, ): EqResult => {  return new EqResult( 0.15839 + 0.00031 * (clay/10) - 0.00240 * micro, "m³/m³")}, "", [StatesT.TAB_COSTEIROS,], 0.104198799, "permanentWiltingPoint", 0),

 new Equation("Ros1", "", [InputsT.sand, InputsT.microporosity, ], (micro: number, sand: number, ): EqResult => {  return new EqResult( 0.057 - 0.001 * sand + 0.743 * micro, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.063077368, "permanentWiltingPoint", 0),

 new Equation("Ram1", "", [InputsT.clay, InputsT.coarseSand, InputsT.soilOrganicCarbon, ], (clay: number, cs: number, soc: number, ): EqResult => {  return new EqResult( 0.074 + 0.00033*clay/10 + 0.0382*soc - 0.0001*cs/10, "cm³/cm³")}, "Latossolo", [StatesT.PI,], 0.133958345, "permanentWiltingPoint", 0),

 new Equation("Gai", "", [InputsT.clay, InputsT.silt, InputsT.soilOrganicCarbon, ], (clay: number, silt: number, soc: number, ): EqResult => {  return new EqResult( 0.088 * soc + 0.340 * clay + 0.057 * silt, "m³/m³")}, "", [StatesT.CE,StatesT.PI,], 0.101671038, "permanentWiltingPoint", 0),

 new Equation("DosS2", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 0.8351 + 0.5599 * om + 0.3506 * clay, "dag/kg")}, "Cambissolo", [StatesT.RS,], 0.079868842, "permanentWiltingPoint", 0),

 new Equation("Rei5", "", [InputsT.clay, InputsT.sand, InputsT.organicMatter, ], (clay: number, om: number, sand: number, ): EqResult => {  return new EqResult( 140 + 12.7 * log ((om/10)) + 0.065 * clay/10 - 0.28 * sand/10, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.115869417, "permanentWiltingPoint", 0),

 new Equation("Soar1", "Arenoso Franco", [InputsT.sand, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, p: number, sand: number, ): EqResult => {  return new EqResult( -2.8034 + 0.0127 * sand * 0.7130 * dp, "cm³/cm³")}, "", [StatesT.RS,], 0.746459363, "permanentWiltingPoint", 0),

 new Equation("Soar3", "Argilo Siltoso", [InputsT.sand, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, p: number, sand: number, ): EqResult => {  return new EqResult( -0.8519 - 0.0284 * sand * 0.5231 * dp, "cm³/cm³")}, "", [StatesT.RS,], 0.010569412, "permanentWiltingPoint", 0),

 new Equation("Pe1", "", [InputsT.sand, InputsT.microporosity, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, micro: number, p: number, sand: number, ): EqResult => {  return new EqResult( 0.09715 - 0.00048 * sand + 0.22538 * micro - 0.02314 * dp, "cm³/cm³")}, "", [StatesT.PB,], 0.12922551, "permanentWiltingPoint", 0),

 new Equation("Soar7", "Francoargiloarenoso", [InputsT.silt, InputsT.organicMatter, InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, om: number, p: number, silt: number, tp: number, ): EqResult => {  return new EqResult( 0.1571 - 0.0048 * silt - 3.8154 * om - 0.0437 * dp * 0.4512 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0, "permanentWiltingPoint", 0),

 new Equation("Soar4", "Argiloso", [InputsT.silt, InputsT.sand, InputsT.totalPorosity, InputsT.phosphor, ], (p: number, sand: number, silt: number, tp: number, ): EqResult => {  return new EqResult( 0.1818 - 0.0022 * silt - 0.0010 * sand +  0.0279 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.141458826, "permanentWiltingPoint", 0),

 new Equation("Silv1", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.totalPorosity, InputsT.microporosity, InputsT.phosphor, ], (clay: number, micro: number, p: number, sand: number, silt: number, tp: number, ): EqResult => {  return new EqResult( 0.123 - 0.00108 * sand - 0.0204 * (silt/clay) - 0.00171 * tp + 0.05710 * micro, "cm³/cm³")}, "", [StatesT.BA,StatesT.GO,StatesT.MG,StatesT.RS,], 0.158657863, "permanentWiltingPoint", 0),

 new Equation("Soar8", "Francoargiloso", [InputsT.totalPorosity, InputsT.phosphor, ], (p: number, tp: number, ): EqResult => {  return new EqResult( 0.0996 + 0.2248 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.076405195, "permanentWiltingPoint", 0),
]);

