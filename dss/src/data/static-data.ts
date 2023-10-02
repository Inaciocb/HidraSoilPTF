import { EqResult } from 'src/model/eq-result';
import { InputsT, MeasurementUnitT, StatesT } from './../model/utils';
import { Equation } from "src/model/equation";

function log (num: number) {
  return Math.log(num);
}

// Importante manter os parametros da função que aplica a equação em ordem alfabética de acordo com os nomes na tela inicial!!!!
// exemplo formula recebe CS -> considerar coarseSand para ordem alfabética
export const EQUATIONS: Set<Equation> = new Set([
  new Equation("Dicos2", "", [InputsT.bulkDensity, ], (bd: number, ): EqResult => {  return new EqResult( 0.46082 - 0.18014 * bd, "cm³/cm³")}, "", [StatesT.BA,], 0.13530126, "fieldCapacity", 0),

 new Equation("Rei3", "", [InputsT.sand, InputsT.coarseSand, InputsT.liquidLimits, ], (cs: number, ll: number, sand: number, ): EqResult => {  return new EqResult( 169 + 17.1 * log ((sand/10)) - 17.5 * log ((cs/10)) + 0.53 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.030885503, "fieldCapacity", 0),

 new Equation("Rei4", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.liquidLimits, ], (cs: number, ll: number, om: number, ): EqResult => {  return new EqResult( 179 + 13 * log ((om/10)) - 23.6 * log ((cs/10)) + 0.53 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.030885503, "fieldCapacity", 0),

 new Equation("BAL", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.330 * (clay/10) + 8.3, "m³/m³")}, "", [StatesT.CERRADO,], 0.018719954, "fieldCapacity", 0),

 new Equation("Vb1", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 13.96 + 0.387 * clay*100, "not_found")}, "", [StatesT.BR,], 0.091896481, "fieldCapacity", 0),

 new Equation("Rei2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.037 + 90.38 * (clay + silt)* 100, "kg/kg")}, "", [StatesT.RS,], 0.030885503, "fieldCapacity", 0),

 new Equation("ASS", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 39.07988535 - 0.04098682 * (sand)**1.455456594, "%")}, "", [StatesT.BR,], 0.071931887, "fieldCapacity", 0),

 new Equation("Gia1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.081 + 0.005 * silt + 0.004 * clay, "cm³/cm³")}, "", [StatesT.SC,StatesT.RS,], 0.072963752, "fieldCapacity", 0),

 new Equation("Vb2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 11.27 + 0.367 * clay*100 + 0.226 * silt*100, "not_found")}, "", [StatesT.BR,], 0.072618145, "fieldCapacity", 0),

 new Equation("Fer", "", [InputsT.clay, InputsT.silt, InputsT.fineSand, ], (clay: number, fs: number, silt: number, ): EqResult => {  return new EqResult( 0.00807 + 0.004291 * clay + 0.003186 * silt + 0.000506 * fs, "kg/kg")}, "", [StatesT.MG,StatesT.BA,StatesT.ES,], 0.082125727, "fieldCapacity", 0),

 new Equation("Dicos4", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 1.42937 - 0.28125 * cs - 0.46640 * bd - 1.00496 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.079419082, "fieldCapacity", 0),

 new Equation("Dicos5", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 2.84267 - 0.026601 * cs - 0.97267 * bd - 2.40257 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.074528906, "fieldCapacity", 0),

 new Equation("Dicos1", "", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.coarseSand, InputsT.phosphor, ], (bd: number, cs: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.86625 - 0.01727 * cs - 0.21859 * bd- 0.85690 * tp, "cm³/cm³")}, "", [StatesT.BA,], 0.565503582, "fieldCapacity", 0),

 new Equation("Dicos3", "", [InputsT.bulkDensity, InputsT.coarseSand, ], (bd: number, cs: number, ): EqResult => {  return new EqResult( 0.59324 - 0.14310 * cs + 0.18177 * bd, "cm³/cm³")}, "", [StatesT.BA,], 0.357343101, "fieldCapacity", 0),

 new Equation("Ur", "", [InputsT.clay, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, ): EqResult => {  return new EqResult( 49.6557 - 0.16882 * sand + 0.21658 * clay - 12.6897 * bd, "kg/kg")}, "", [StatesT.RS,], 0.147439893, "fieldCapacity", 0),

 new Equation("Gue", "", [InputsT.clay, InputsT.microporosity, ], (clay: number, micro: number, ): EqResult => {  return new EqResult( 0.059 + 0.641 * micro + 0.001  * clay, "cm³/cm³")}, "", [StatesT.RS,], 0.037930946, "fieldCapacity", 0),

 new Equation("Rei1", "", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.organicMatter, ], (bd: number, clay: number, om: number, silt: number, ): EqResult => {  return new EqResult( 0.268 + 0.05 * (clay*100) + 0.24 * (clay+silt*100) +?0.85?*?om?*?bd, "kg/kg")}, "", [StatesT.RS,], 0.02416936, "fieldCapacity", 0),

 new Equation("Rei5", "", [InputsT.clay, InputsT.sand, InputsT.organicMatter, ], (clay: number, om: number, sand: number, ): EqResult => {  return new EqResult( 364 * 27.8 * log ((om/10)) + 0.012 * clay/10 - 0.37 * sand/10, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0.225133429, "fieldCapacity", 0),

 new Equation("CO1", "Argiloso", [InputsT.silt, InputsT.bulkDensity, ], (bd: number, silt: number, ): EqResult => {  return new EqResult( 41.3580-16.6354*bd+0.4106*silt, "%")}, "", [StatesT.MG,], 0.148291032, "fieldCapacity", 0),

 new Equation("Soar8", "Francoargiloso", [InputsT.bulkDensity, InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (bd: number, dp: number, p: number, tp: number, ): EqResult => {  return new EqResult( 2.1696 - 1.4883 * bd + 0.6744 * dp - 3.3203 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.236297199, "fieldCapacity", 0),

 new Equation("Nob", "", [InputsT.clay, InputsT.phosphor, InputsT.ph, ], (clay: number, p: number, ph: number, ): EqResult => {  return new EqResult( 0.263 + (0.000621 * clay) -(0.0372 * ph), "cm³/cm³")}, "", [StatesT.AGRESTE,], 0.291335406, "fieldCapacity", 0),

 new Equation("Pe2", "", [InputsT.microporosity, ], (micro: number, ): EqResult => {  return new EqResult( 0.01812 + 0.26123 * micro, "cm³/cm³")}, "Latossolo Amarelo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

 new Equation("Soar1", "Franco Arenoso", [InputsT.densityOfParticle, InputsT.phosphor, InputsT.theta33, ], (dp: number, p: number, th33: number, ): EqResult => {  return new EqResult( fcth33 = -1.6757 + 0.7199 * dp, "cm³/cm³")}, "", [StatesT.RS,], 0.202424285, "fieldCapacity", 0),

 new Equation("Soar9", "Francosiltoso", [InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, InputsT.theta33, ], (dp: number, p: number, th33: number, tp: number, ): EqResult => {  return new EqResult( fcth33 =  -0.6191 + 0.1983 * dp + 0.1799 * tp, "cm³/cm³")}, "", [StatesT.RS,], 0.326595577, "fieldCapacity", 0),

 new Equation("Soar15", "", [InputsT.totalPorosity, InputsT.densityOfParticle, InputsT.phosphor, ], (dp: number, p: number, tp: number, ): EqResult => {  return new EqResult( 0.6191 + 0.1983 * dp + 0.8079 * tp, "cm³/cm³")}, "", [StatesT.RS,], 1.232.244.387, "fieldCapacity", 0),

 new Equation("Al2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.004 * clay ** 2 - 0.312 * clay + 3.289, "cm³/cm³")}, "", [StatesT.PE,], 0.310028095, "fieldCapacity", 0),

 new Equation("NASC2", "", [InputsT.silt, InputsT.sand, ], (sand: number, silt: number, ): EqResult => {  return new EqResult( 0.418 - 0.000377 * (sand/10) - 0.000269 * (silt/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.341929423, "fieldCapacity", 0),

 new Equation("Ol4", "Muito Argiloso", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( 0.000328s * (sand/10) + 0.00571 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.279703223, "fieldCapacity", 0),

 new Equation("Sil4", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.3071 + 0.2751 * clay+ 0.0938 * silt, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.153133734, "fieldCapacity", 0),

 new Equation("Sil2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 1.946+ 0.0037 * clay + 0.2231 * silt, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.219866977, "fieldCapacity", 0),

 new Equation("Al1", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.003 * sand ** 2 - 0.911 * sand + 57.91, "(g/g)*100")}, "", [StatesT.PE,], 0.272069116, "fieldCapacity", 0),

 new Equation("Mas2", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 58.3402 - 0.5936 * (sand), "g/kg")}, "", [StatesT.PE,], 0.208431479, "fieldCapacity", 0),

 new Equation("NASC3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0525 + 0.000373 * (clay/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.24168548, "fieldCapacity", 0),

 new Equation("Silv1", "", [InputsT.clay, InputsT.sand, InputsT.totalPorosity, InputsT.microporosity, InputsT.phosphor, ], (clay: number, micro: number, p: number, sand: number, tp: number, ): EqResult => {  return new EqResult( 0.073 + 0.000415 * clay - 0.0060 * (sand/clay) - 0.00215 * tp + 0.00973 * micro, "cm³/cm³")}, "", [StatesT.BA,StatesT.GO,StatesT.MG,StatesT.RS,], 0.303890141, "fieldCapacity", 0),

 new Equation("Ol7", "", [InputsT.clay, InputsT.silt, InputsT.sand, ], (clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( -0.000019 * (sand/10) + 0.000106 * (silt/10) + 0.000594 (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.30536282, "fieldCapacity", 0),

 new Equation("Al3", "", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( -0.030 * silt ** 2 - 1.462 * silt + 1.987, "(g/g)*100")}, "", [StatesT.PE,], 0.355243594, "fieldCapacity", 0),

 new Equation("CO3", "Argiloso", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 42.6737 - 363.9401 / silt, "%")}, "", [StatesT.MG,], 0, "fieldCapacity", 0),

 new Equation("CO4", "Francoargiloar", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 24.8766 + 2347.3300 / silt, "%")}, "", [StatesT.MG,], 0, "fieldCapacity", 0),

 new Equation("Pe7", "", [InputsT.silt, ], (silt: number, ): EqResult => {  return new EqResult( 0.0152 + 0.0001 * silt, "cm³/cm³")}, "", [StatesT.PB,], 0.293830586, "fieldCapacity", 0),

 new Equation("Al3", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( -0.003 * (silt+clay) ** 2 - 0.180 * (silt+clay) +3.309, "(g/g)*100")}, "", [StatesT.PE,], 0.355243594, "fieldCapacity", 0),

 new Equation("Men5", "", [InputsT.clay, InputsT.bulkDensity, InputsT.theta33, ], (bd: number, clay: number, th33: number, ): EqResult => {  return new EqResult( fcth33 = -0.0556 + 0.0086 * bd + 0.0014 * clay, "cm³/cm³")}, "", [StatesT.MT,], 0.312405502, "fieldCapacity", 0),

 new Equation("NASC1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.0409 + 0.000377 * (clay/10) + 0.000108 * (silt/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.255239542, "fieldCapacity", 0),

 new Equation("Ol1", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000333 * (silt/10) + 0.000387 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.30555232, "fieldCapacity", 0),

 new Equation("NASC4", "", [InputsT.sand, ], (sand: number, ): EqResult => {  return new EqResult( 0.378 - 0.000351 * (sand/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.291335406, "fieldCapacity", 0),

 new Equation("Ar", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 3.1 - 0.629 * silt+clay - 0.0034 * silt+clay ** 2, "%")}, "", [StatesT.SP,], 2.403.595.673, "fieldCapacity", 0),

 new Equation("Mas1", "", [InputsT.clay, InputsT.silt, InputsT.theta33, ], (clay: number, silt: number, th33: number, ): EqResult => {  return new EqResult( fcth33 = -1.5691 + 0.4289 * (silt + clay), "g/kg")}, "", [StatesT.PE,], 0.102982822, "fieldCapacity", 0),

 new Equation("DosS8", "", [InputsT.clay, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, ): EqResult => {  return new EqResult( 18.15868 + 0.21328 * clay - 0.23668 * cs - 0.16258 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.088513323, "fieldCapacity", 0),

 new Equation("DosS7", "", [InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, ): EqResult => {  return new EqResult( 34.1352 - 0.3028 * cs - 0.34317 * fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.080646238, "fieldCapacity", 0),

 new Equation("Pe6", "", [InputsT.sand, InputsT.coarseSand, InputsT.fineSand, InputsT.mediumSand, InputsT.veryFineSand, ], (cs: number, fs: number, ms: number, sand: number, vfs: number, ): EqResult => {  return new EqResult( 0.06177 - 0.00041281 * cs * 0.00029075 * ms - 0.00038934 * vfsand, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.195914602, "fieldCapacity", 0),

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

 new Equation("Men3", "", [InputsT.clay, InputsT.bulkDensity, InputsT.theta33, ], (bd: number, clay: number, th33: number, ): EqResult => {  return new EqResult( fcth33_men3   -0.0386 + 0.0088 * bd + 0.00067 * clay, "cm³/cm³")}, "", [StatesT.MG,], 0.331378941, "fieldCapacity", 0),

 new Equation("Mar", "", [InputsT.clay, InputsT.bulkDensity, ], (bd: number, clay: number, ): EqResult => {  return new EqResult( 0.47352559 + 0.00017979 * clay - 0.12025765 * bd, "not_found")}, "", [StatesT.RS,], 0.083626403, "fieldCapacity", 0),

 new Equation("Ol3", "Argiloso", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000079 * (sand/10) +0.000444 *(silt/10) + 0.000484*(clay/10) - 0.069234 * bd, "kg/kg")}, "", [StatesT.PE,], 0.436198096, "fieldCapacity", 0),

 new Equation("Ol6", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000088 * (sand/10) + 0.000449 * (silt/10) + 0.000448 * (clay/10) - 0.058166 * bd, "kg/kg")}, "", [StatesT.PE,], 0.414497556, "fieldCapacity", 0),

 new Equation("Ol2", "Francoargiloarenoso", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000341 * (silt/10) + 0.000374 * (clay/10), "kg/kg")}, "", [StatesT.PE,], 0.305589659, "fieldCapacity", 0),

 new Equation("Men1", "", [InputsT.clay, InputsT.bulkDensity, InputsT.microporosity, ], (bd: number, clay: number, micro: number, ): EqResult => {  return new EqResult( 0.11305 + 0.02978 * bd + 0.01037 * micro + 0.00049169 * clay/10, "not_found")}, "", [StatesT.RS,], 0.1614988, "fieldCapacity", 0),

 new Equation("Sou2", "", [InputsT.macroporosity, ], (macro: number, ): EqResult => {  return new EqResult( 0.08595 + 0.006102 * macro, "not_found")}, "", [StatesT.TAB_COSTEIROS,], 0.224176916, "fieldCapacity", 0),

 new Equation("Ros1", "", [InputsT.sand, InputsT.bulkDensity, InputsT.mesoporosity, ], (bd: number, meso: number, sand: number, ): EqResult => {  return new EqResult( 0.241249 - 0.000117723 * sand - 0.152483 * meso - 0.046851 * bd, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.225133429, "fieldCapacity", 0),

 new Equation("Sou1", "", [InputsT.clay, InputsT.microporosity, ], (clay: number, micro: number, ): EqResult => {  return new EqResult( 0.15839 + 0.00031 * clay/10 - 0.00240 * micro, "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.160016483, "fieldCapacity", 0),

 new Equation("Ros2", "", [InputsT.sand, InputsT.microporosity, ], (micro: number, sand: number, ): EqResult => {  return new EqResult( 0.057 - 0.001 * sand + 0.743 * micro, "cm³/cm³")}, "", [StatesT.CERRADO,], 0.034763995, "fieldCapacity", 0),

 new Equation("Sil5", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 9.3274 + 0.058 om + 0.1014 * clay, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.179564967, "fieldCapacity", 0),

 new Equation("Sil1", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 5.495 + 0.2152 clay + 0.8054 * om, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.155861, "fieldCapacity", 0),

 new Equation("Sil3", "", [InputsT.clay, InputsT.organicMatter, ], (clay: number, om: number, ): EqResult => {  return new EqResult( 1.854 + 0.2156 * clay + 0.8054 * om, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.188602683, "fieldCapacity", 0),

 new Equation("Gai", "", [InputsT.clay, InputsT.silt, InputsT.soilOrganicCarbon, ], (clay: number, silt: number, soc: number, ): EqResult => {  return new EqResult( 0.208 soc + 0.600 * clay + 0.166 * silt, "not_found")}, "", [StatesT.CE,StatesT.PI,], 0.101242193, "fieldCapacity", 0),

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

 new Equation("Ram4", "", [], (): EqResult => {  return new EqResult( 0.2682 - 0.0002*ta, "cm³/cm³")}, "Plintossolo", [StatesT.PI,], 0.1371207, "permanentWiltingPoint", 0),

 new Equation("Pe5", "", [InputsT.coarseSand, InputsT.densityOfParticle, InputsT.phosphor, ], (cs: number, dp: number, p: number, ): EqResult => {  return new EqResult( 0.014722 - 0.0005 * cs * 0.02831 * estabilidade de agregado - 0.098 * dp, "cm³/cm³")}, "Planossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Pe6", "", [InputsT.sand, InputsT.coarseSand, InputsT.densityOfParticle, InputsT.phosphor, InputsT.veryCoarseSand, InputsT.agregatesStability, InputsT.agregatesStability, ], (cs: number, dp: number, estabilidadeDeAgregados: number, estabilidadeDeAgregados: number, p: number, sand: number, vcs: number, ): EqResult => {  return new EqResult( 0.10070 + 0.00065694 * vcsand - 0.02232 * estabilidade de agregados - 0.03206 * dp, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Rei3", "", [InputsT.clay, InputsT.sand, InputsT.liquidLimits, ], (clay: number, ll: number, sand: number, ): EqResult => {  return new EqResult( 82 + 18.9 * log ((sand/10)) - 0.14 * clay/10 + 0.30 * ll, "g/kg")}, "", [StatesT.RS,StatesT.SC,], 0, "permanentWiltingPoint", 0),

 new Equation("Pe7", "", [InputsT.silt, InputsT.bulkDensity, InputsT.organicMatter, InputsT.agregatesStability, InputsT.agregatesStability, ], (bd: number, estabilidadeDeAgregados: number, estabilidadeDeAgregados: number, om: number, silt: number, ): EqResult => {  return new EqResult( - 0.084 + 0.0001 * silt * 0.0008 * om + 0.0464 * bd - 0.026 * estabilidade de agregados, "cm³/cm³")}, "Neossolo", [StatesT.PB,], 0.179177638, "permanentWiltingPoint", 0),

 new Equation("Sou2", "", [InputsT.macroporosity, ], (macro: number, ): EqResult => {  return new EqResult( 0.0591 + 0.00646 * macro, "not_found")}, "", [StatesT.TAB_COSTEIROS,], 0.184295407, "permanentWiltingPoint", 0),

 new Equation("Pe2", "", [InputsT.microporosity, ], (micro: number, ): EqResult => {  return new EqResult( 0.01321 + 0.20505 * micro, "cm³/cm³")}, "Latossolo", [StatesT.PB,], 0.156150254, "permanentWiltingPoint", 0),

 new Equation("Kl", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0003 * (clay/10) + 0.0118, "g/g")}, "", [StatesT.RS,], 0.208725098, "permanentWiltingPoint", 0),

 new Equation("NASC3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.0221 + 0.000288 * (clay/10), "cm³/cm³")}, "", [StatesT.TAB_COSTEIROS,], 0.209539865, "permanentWiltingPoint", 0),

 new Equation("Ram3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.1174 - 0.00034*clay/10, "cm³/cm³")}, "Neossolo", [StatesT.PI,], 0.1371207, "permanentWiltingPoint", 0),

 new Equation("Sil2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 2.2397 + 1.581 * clay, "%")}, "Argissolo", [StatesT.TAB_COSTEIROS,], 0.461145332, "permanentWiltingPoint", 0),

 new Equation("Sil3", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 6.7168 + 0.2281 * clay, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.096789974, "permanentWiltingPoint", 0),

 new Equation("Sil4", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 8.034 + 1.581 * clay, "%")}, "Latossolo", [StatesT.TAB_COSTEIROS,], 0.509504978, "permanentWiltingPoint", 0),

 new Equation("Sil6", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 9.0821 + 0.3781 * clay, "%")}, "", [StatesT.TAB_COSTEIROS,], 0.066745621, "permanentWiltingPoint", 0),

 new Equation("Al2", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.379 * clay ** 0.905, "(g/g)*100")}, "", [StatesT.PE,], 0.224948482, "permanentWiltingPoint", 0),

 new Equation("BAL", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 0.287 * (clay/10) + 1.4, "not_found")}, "", [StatesT.CERRADO,], 1.294.898.614, "permanentWiltingPoint", 0),

 new Equation("Vb1", "", [InputsT.clay, ], (clay: number, ): EqResult => {  return new EqResult( 6.35 + 0.284 * clay*100, "not_found")}, "", [StatesT.BR,], 0.084239942, "permanentWiltingPoint", 0),

 new Equation("Ol4", "Muito Argiloso", [InputsT.clay, InputsT.silt, InputsT.bulkDensity, ], (bd: number, clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000282 * silt/10 + 0.000487 * clay/10 - 0.101537 * bd, "kg/kg")}, "", [StatesT.PE,], 0.428949554, "permanentWiltingPoint", 0),

 new Equation("Rei2", "", [InputsT.clay, InputsT.sand, ], (clay: number, sand: number, ): EqResult => {  return new EqResult( 0.236 + 0.044 * clay*100 - 0.21 * (sand*100), "kg/kg")}, "", [StatesT.RS,], 0, "permanentWiltingPoint", 0),

 new Equation("Vb2", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 3.83 + 0.272 * clay*100 + 0.212 * silt*100, "not_found")}, "", [StatesT.BR,], 0.066539877, "permanentWiltingPoint", 0),

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

 new Equation("Ram2", "", [InputsT.clay, InputsT.silt, InputsT.fineSand, ], (clay: number, fs: number, silt: number, ): EqResult => {  return new EqResult( 0.0858 + 0.00021*clay/10 - 0.0002*silt/10 + 00001*fs/10, "cm³/cm³")}, "Argissolo", [StatesT.PI,], 0.145295814, "permanentWiltingPoint", 0),

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

 new Equation("DosS1", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 7.70062 + 1.91701 * om + 0.07225 * clay - 0.07730 * cs ?0.09263 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.100150993, "permanentWiltingPoint", 0),

 new Equation("DosS4", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 11.7889 + 0.9991 * om + 0.1557 * clay - 0.1419 * cs -0.1361 * fs, "dag/kg")}, "Argissolo", [StatesT.RS,], 0.056060028, "permanentWiltingPoint", 0),

 new Equation("DosS14", "", [InputsT.clay, InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (clay: number, cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 9.944674 + 1.01884 * om + 0.14405 * clay - 0.09538 * cs - 0.1052 * fs, "dag/kg")}, "", [StatesT.RS,], 0.065793849, "permanentWiltingPoint", 0),

 new Equation("DosS11", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 39.45134-2.47572*om-0.33157*cs-0.30641*fs, "dag/kg")}, "Neossolo", [StatesT.RS,], 0.107097364, "permanentWiltingPoint", 0),

 new Equation("DosS9", "", [InputsT.organicMatter, InputsT.coarseSand, InputsT.fineSand, ], (cs: number, fs: number, om: number, ): EqResult => {  return new EqResult( 27.08723 + 1.18014 * om - 0.29777 * cs - 0.35548 * fs, "dag/kg")}, "Cambissolo", [StatesT.RS,], 0.053494418, "permanentWiltingPoint", 0),

 new Equation("DosS6", "", [InputsT.organicMatter, InputsT.fineSand, ], (fs: number, om: number, ): EqResult => {  return new EqResult( 2.44219 + 5.17011 * om - 0.13334* fs, "dag/kg")}, "Planossolo", [StatesT.RS,], 0.156252694, "permanentWiltingPoint", 0),

 new Equation("Ram5", "", [InputsT.sand, InputsT.coarseSand, InputsT.soilOrganicCarbon, ], (cs: number, sand: number, soc: number, ): EqResult => {  return new EqResult( 0.074 + 0.00033 * sand/10 + 0.0382 * soc - 0.0001 * cs/10, "cm³/cm³")}, "", [StatesT.PI,], 0.135054683, "permanentWiltingPoint", 0),

 new Equation("Ol5", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000087 silt/10  + 0.000285 * clay/10, "kg/kg")}, "", [StatesT.PE,], 0.236266319, "permanentWiltingPoint", 0),

 new Equation("Ol6", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000072 * sand/10 + 0.000195 silt/10 + 0.000363 * clay/10  - 0.052198 * bd, "kg/kg")}, "", [StatesT.PE,], 0.331869618, "permanentWiltingPoint", 0),

 new Equation("Ol8", "", [InputsT.clay, InputsT.silt, ], (clay: number, silt: number, ): EqResult => {  return new EqResult( 0.000121 * silt/10 + 0.000260 * clay/10, "kg/kg")}, "", [StatesT.PE,], 0.236291028, "permanentWiltingPoint", 0),

 new Equation("Ol9", "", [InputsT.clay, InputsT.silt, InputsT.sand, InputsT.bulkDensity, ], (bd: number, clay: number, sand: number, silt: number, ): EqResult => {  return new EqResult( 0.000085 sand + 0.000229 * silt + 0.000381 * clay - 0.062662 * bd, "kg/kg")}, "", [StatesT.PE,], 0.351957242, "permanentWiltingPoint", 0),

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




//a ordem dos inputs deve ser em ordem alfabética

// PTF;varpredita;Equa??o;ƒClasse?;Unidade;Estado;Estado;Estado;Estado;
// ;;;;;;;;;



// DosS13;FCth33_DosS13;26.18555 + 1.84737 * OM  + 0.07352 * Clay - 0.28332 * CS - 0.26753 * FS;;dag/kg;RS;;;;0,0693910198
// DosS14;FCth33_DosS14;24.88952 + 1.46274 * OM - 0.24526 * CS - 0.23454 * FS;;dag/kg;RS;;;;0,0880179195
// DosS2;FCth33_DosS2;29.65022 + 1.06092 * OM ? 0.27668 * CS ? 0.31970 * FS;Cambissolo;dag/kg;RS;;;;0,0802912261
// DosS10;FCth33_DosS10;23.40215 + 1.94753 * OM + 0.10749 * Clay - 0.29745 * CS - 0.22021 * FS;Argissolo;dag/kg;RS;;;;0,0694280081
// DosS12;FCth33_DosS12;17.8200+5.5292*OM+0.2094*Clay-0.1698*CS-0.2433*FS;Planossolo;dag/kg;RS;;;;0,1341078678
// DosS1;FCth33_DosS1;17.1565 + 2.5169 * OM ? 0.1554 * CS ? 0.1621 * FS;Argissolo;dag/kg;RS;;;;0,1146542355
// DosS3;FCth33_DosS3;20.6977 + 1.7475 * OM - 0.2127 * CS - 0.1728 * FS;Argissolo;dag/kg;RS;;;;0,1033046586
// DosS4;FCth33_DosS4;30.1220 + 1.1781 * OM - 0.3264 * CS - 0.2956 * FS;Argissolo;dag/kg;RS;;;;0,0755677510
// DosS5;FCth33_DosS5;22.07036 + 2.37679 * OM - 0.21787 * CS - 0.20096 * FS;Neossolo;dag/kg;RS;;;;0,0903774641
// DosS6;FCth33_DosS6;21.9359 + 3.35081 * OM - 0.22751 * CS - 0.19371 * FS;Planossolo;dag/kg;RS;;;;0,0880415052
// DosS9;FCth33_DosS9;36.46889 + 2.63862 * OM - 0.44002 * CS - 0.38987 * FS;Cambissolo;dag/kg;RS;;;;0,0755236654
// DosS11;FCth33_DosS11;39.45134-2.47572*OM-0.33157*CS-0.30641*FS;Neossolo;dag/kg;RS;;;;0,1151884006
// Pe5;FCth33_Pe5;0.19916 - 0.0004 * CS - 0.0396 * DP;Planossolo;cm/cm;PB;;;;0,1959146015
// Men2;FCth33_Men2;0.04314 + 0.00762 * Micro - 0.00074 * TP - 0.00058 * FS/10;;cm/cm;BA;;;;0,2462552040
// Mar;FCth33_Mar;0.47352559 + 0.00017979 * Clay - 0.12025765 * BD;;m/mì;RS;;;;0,0836264034
// Ol3;FCth33_Ol3;0.000079 * (Sand/10) +0.000444 *(Silt/10) + 0.000484*(Clay/10) ? 0.069234 * BD;Argiloso;kg/kg;PE;;;;0,4361980955
// Ol6;FCth33_Ol6;0.000088 * (Sand/10) + 0.000449 * (Silt/10) + 0.000448 * (Clay/10) ? 0.058166 * BD;;kg/kg;PE;;;;0,4144975555
// Ol2;FCth33_Ol2;0.000341 * (Silt/10) + 0.000374 * (Clay/10);Francoargiloarenoso;kg/kg;PE;;;;0,3055896586
// Men1;FCth33_Men1;0.11305 + 0.02978 * BD + 0.01037 * Micro + 0.00049169 * Clay/10;;m/mì;RS;;;;0,1614988001
// Sou2;FCth33_Sou2;0.08595 + 0.006102 * Macro;;m/mì;Tab. Costeiros;;;;0,2241769157
// Ros1;FCth33_Ros1;0.241249 - 0.000117723 * Sand - 0.152483 * Meso - 0.046851 * BD;;cm/cm;Cerrado;;;;0,2251334285
// Sou1;FCth33_Sou1;0.15839 + 0.00031 * Clay/10 ? 0.00240 * Micro;;cm/cm;Tab. Costeiros;;;;0,1600164831
// Ros2;FCth33_Ros2;0.057 ? 0.001 * Sand + 0.743 * Micro;;cm/cm;Cerrado;;;;0,0347639949
// Sil5;FCth33_Sil5;9.3274 + 0.058 OM + 0.1014 * Clay;;%;Tab. Costeiros;;;;0,1795649668
// Sil1;FCth33_Sil1;5.495 + 0.2152 Clay + 0.8054 * OM;Argissolo;%;Tab. Costeiros;;;;0,1558610004
// Sil3;FCth33_Sil3;1.854 + 0.2156 * Clay + 0.8054 * OM;Latossolo;%;Tab. Costeiros;;;;0,1886026832
// Gai;FCth33_Gai;0.208 SOC + 0.600 * Clay + 0.166 * Silt;;m/mì;CE;PI;;;0,1012421926
// Sil6;FCth33_Sil6;9.7953 - 2.6231 * OM + 0.0891 * Clay;;%;Tab. Costeiros;;;;0,2646868724
// Pe1;FCth33_Pe1;0.011429 - 0.000066799 * Sand + 0.28462 * Micro + 0.04162 * Macro - 0.02548 * DP;;cm/cm;PB;;;;0,2523874407
// Soar4;FCth33_Soar4;0.0432 + 0.0019 * Clay + 0.0293 * DP + 0.1952 * TP;Argilo Siltoso;cm/cm;RS;;;;0,0754356136
// Soar10;FCth33_Soar10;0.0628 - 0.0005 * Sand - 0.00734 * OM + 0.0398 * DP + 0.1515 * TP;;cm/cm;RS;;;;0,1285969560
// Soar7;FCth33_Soar7;#NOME?;Francoargiloarenoso;cm/cm;RS;;;;22,3925725406
// Soar5;FCth33_Soar5;0.0746 + 0.4946 * TP;Argiloso;cm/cm;RS;;;;0,0749895992
// Soar3;FCth33_Soar3;#NOME?;Argilo Arenoso;cm/cm;RS;;;;24,6597103887
// And;FCth6_And;0.256931 -0.261746 * Meso/10 + 0.000104958 *  Clay/10 -0.0942794 *BD;;cm/cm;PE;;;;0,0000000000
// Ram1;FCth6_Ram1;0.122 + 0.0004*Clay/10 + 0.0138* P  + 0.0049*CEC;Latossolo;cm/cm;PI;;;;0,2938305860
// Ram5;FCth6_Ram5;0.645 - 0.00033 * Sand/10 ? 0.0002 * Clay/10 ? 0.0003 * Silt/10;;cm/cm;PI;;;;0,3063308784
// Ram4;FCth6_Ram4;0.4098 - 0.0002*Clay/10 - 0.0001*Silt/10 - 0.0397*SOC;Plintossolo;cm/cm;PI;;;;0,1227435233
// Ram2;FCth6_Ram2;0.1821 + 0.00034*FS/10 + 0.00022*Clay/10 ? 0.0347*SOC;Argissolo;cm/cm;PI;;;;0,2265138223
// Ram3;FCth6_Ram3;0.0507 + 0.0004*FS/10 + 0.1039*SOC ? 0.0007*Silt/10;Neossolo;cm/cm;PI;;;;0,2153711805
// Av8;FCth6_Av8;0.245*Sand+0.607*Clay;;cm/100cm;MG;;;;0,1033241477
// Av6;FCth6_Av6;0.119 * Sand + 0.410 * Clay + 0.396 * Silt + 6.242 * BD;;cm/100cm;MG;;;;0,0708615455
// Av7;FCth6_Av7;0.208*Sand+0.474*Clay+0.456*Silt;;cm/100cm;MG;;;;0,0594818885
// Av5;FCth6_Av5;#NOME?;;cm/100cm;MG;;;;0,0735840230
// Pe4;PWP_Pe4;0.16288 - 0.07336 * BD;Argissolo;cm/cm;PB;;;;0,1791776376
// Dicos2;PWP_Dicos2;0.24049 - 0.10555 * BD;;cm/cm;BA;;;;0,1494699620
// Dicos1;PWP_Dicos1;0.5624 - 0.1561 * BD- 0.5720 * TP;;cm/cm;BA;;;;0,1878096112
// Ram4;PWP_Ram4;0.2682 ? 0.0002*TA;Plintossolo;cm/cm;PI;;;;0,1371207004
// Pe5;PWP_Pe5;0.014722 - 0.0005 * CS * 0.02831 * Estabilidade de Agregado - 0.098 * DP;Planossolo;cm/cm;PB;;;;0,1791776376
// Pe6;PWP_Pe6;0.10070 + 0.00065694 * VCSand - 0.02232 * Estabilidade de Agregados - 0.03206 * DP;Neossolo;cm/cm;PB;;;;0,1791776376
// Rei3;PWP_Rei3;82 + 18.9 * Log ((Sand/10)) - 0.14 * Clay/10 + 0.30 * LL;;g/kg;RS;SC;;;0,0000000000
// Nob;PWP_Nob;#NOME?;;cm/cm;Agreste;;;;0,2072258389
// Pe7;PWP_Pe7;- 0.084 + 0.0001 * Silt . 0.0008 * OM + 0.0464 * BD - 0.026 * Estabilidade de Agregados;Neossolo;cm/cm;PB;;;;0,1791776376
// Sou2;PWP_Sou2;0.0591 + 0.00646 * Macro;;m3/m;Tab. Costeiros;;;;0,1842954066
// Pe2;PWP_Pe2;0.01321 + 0.20505 * Micro;Latossolo;cm/cm;PB;;;;0,1561502535
// Gue;PWP_Gue;#NOME?;;cm/cm;RS;;;;0,0955344576
// Soar2;PWP_Soar2;#NOME?;Argilo Arenoso;cm/cm;RS;;;;0,1061768098
// Kl;PWP_Kl;0.0003 * (Clay/10) + 0.0118;;g/g;RS;;;;0,2087250978
// NASC3;PWP_NASC3;0.0221 + 0.000288 * (Clay/10);;cm/cm;Tab. Costeiros;;;;0,2095398649
// Ram3;PWP_Ram3;0.1174 ? 0.00034*Clay/10;Neossolo;cm/cm;PI;;;;0,1371207004
// Sil2;PWP_Soar11;2.2397 + 1.581 * Clay;Argissolo;%;Tab. Costeiros;;;;0,4611453317
// Sil3;PWP_Soar12;6.7168 + 0.2281 * Clay;Latossolo;%;Tab. Costeiros;;;;0,0967899737
// Sil4;PWP_Soar13;8.034 + 1.581 * Clay;Latossolo;%;Tab. Costeiros;;;;0,5095049780
// Sil6;PWP_Soar15;9.0821 + 0.3781 * Clay;;%;Tab. Costeiros;;;;0,0667456214
// Al2;PWP_Al2;0.379 * Clay ** 0.905;;(g/g)*100;PE;;;;0,2249484821
// BAL;PWP_BAL;0.287 * (Clay/10) + 1.4;;m/mì;Cerrado;;;;12,9489861418
// Vb1;PWP_Vb1;6.35 + 0.284 * Clay*100;;m.m/10ì;BR;;;;0,0842399421
// Ol4;PWP_Ol4;0.000282 * Silt/10 + 0.000487 * Clay/10 ? 0.101537 * BD;Muito Argiloso;kg/kg;PE;;;;0,4289495541
// Rei2;PWP_Rei2;0.236 + 0.044 * Clay*100 - 0.21 * (Sand*100);;kg/kg;RS;;;;0,0000000000
// Mas1;PWP_Mas1;#NOME?;;g/kg;PE;;;;0,0738542629
// Vb2;PWP_Vb2;3.83 + 0.272 * Clay*100 + 0.212 * Silt*100;;m.m/10ì;BR;;;;0,0665398774
// Al1;PWP_Al1;129.0 - 0.04 ** Sand;;(g/g)*100;PE;;;;0,1163700388
// NASC4;PWP_NASC4;0.272 ? 0.000269 * (Sand/10);;cm/cm;Tab. Costeiros;;;;0,2072258389
// Soar9;PWP_Soar8;0.0826 + 0.0041 * Sand;Francosiltoso;cm/cm;RS;;;;0,1699223621
// Soar15;PWP_Soar15;0.0826 + 0.0041 * Sand;;cm/cm;RS;;;;0,1699223621
// ASS;PWP_ASS;26.16995195 - 0.04098682 * Sand * ln(Sand);;%;BR;;;;0,0656042362
// Mas2;PWP_Mas2;0.2708 + 0.3468 * (Clay);;g/kg;PE;;;;0,0909557899
// Av8;PWP_Av8;0.070 * Sand +0.358 * Clay;;cm/100cm;MG;;;;0,0933832680
// Av7;PWP_Av7;0.054 * Sand + 0.300 * Clay + 0.196 * Silt;;cm/100cm;MG;;;;0,0741647645
// Ol2;PWP_Ol2;0.000032 * Sand/10 + 0.000223 * Silt/10 +0.00062 * Clay/10;Francoargiloarenoso;kg/kg;PE;;;;0,2340755588
// Ol7;PWP_Ol7;#NOME?;;kg/kg;PE;;;;0,2363895729
// Al3;PWP_Al3;1.384 * Silt ** 0.654;;(g/g)*100;PE;;;;0,1370128170
// Gia2;PWP_Gia2;0.031 + 0.005 * Silt + 0.003 * Clay;;cm/cm;SC;RS;;;0,0700041721
// Gia3;PWP_Gia3;0.024 + 0.005 * Silt + 0.003 * Clay;;cm/cm;;;;;0,0674138337
// NASC1;PWP_NASC1;0.0812 + 0.000279* (Clay/10) + 0.0000713 * (Silt/10) ? 0.0457 * BD;;cm/cm;Tab. Costeiros;;;;0,2149543657
// NASC2;PWP_NASC2;0.360 ? 0.000279 * (Sand/10) ? 0.000208 * (Silt/10) ? 0.0457 * BD;;cm/cm;Tab. Costeiros;;;;0,2268569814
// Sil1;PWP_Soar10;1.946+ 0.0037 * Clay + 0.2231 * Silt;Argissolo;%;Tab. Costeiros;;;;0,1735768159
// Al4;PWP_Al4;0.213 * (Silt+Clay) ** 0.990;;(g/g)*100;PE;;;;0,2219929760
// Ar;PWP_Ar;398.9 * (Silt+Clay) / (1308.1 + Silt+Clay);;%;SP;;;;0,0751875287
// Ram2;PWP_Ram2;0.0858 + 0.00021*Clay/10 ? 0.0002*Silt/10 + 00001*FS/10;Argissolo;cm/cm;PI;;;;0,1452958137
// Fer;PWP_Fer;0.004705 + 0.00299 * Clay + 0.000642 * Silt - 0.000156 * FS;;cm/cm;MG;BA;ES;;0,0819786026
// Dicos3;PWP_Dicos3;0.17058 - 0.14580 * CS;;dag/kg;BA;;;;0,0413508527
// DosS7;PWP_DosS7;21.5649 - 0.1932 * CS - 0.2004 * FS;Neossolo;dag/kg;RS;;;;0,0678652482
// DosS8;PWP_DosS8;8.11431 + 0.21634 * Clay - 0.13063 * CS - 0.09715 * FS;Argissolo;dag/kg;RS;;;;0,0713938800
// DosS10;PWP_DosS10;7.20816 + 3.64925 * OM + 0.17031 * Clay - 0.15310 * CS - 0.10005 * FS;Argissolo;dag/kg;RS;;;;0,0709075162
// Sil5;PWP_Soar14;9.23 + 0.2511 * Silt - 0.074 * FS;;%;Tab. Costeiros;;;;0,1144756902
// Pe3;PWP_Pe3;0.19817 - 0.00007741 * CS - 0.09215 * BD;Argissolo;cm/cm;PB;;;;0,1496204306
// Dicos4;PWP_Dicos4;1.24529 - 0.21743 * CS - 0.43746 * BD - 0.99032 * TP;;cm/cm;BA;;;;0,0617065749
// Dicos5;PWP_Dicos5;1.30028 - 0.20449 * CS - 0.40620 * BD - 1.12476 * TP;;cm/cm;BA;;;;0,0576593283
// Men3;PWP_Men3;0.0468 + 0.0848 * BD + 0.0030 * Micro - 0.0022 * CS/10 - 0.0020 * FS/10;;cm/cm;MG;;;;0,1211442109
// Men4;PWP_Men4;0.0048 + 0.0525 * DP - 0.0020 * Macro + 0.0099 * Sand/10 + 0.0016 * FS + 0.0016 * Silt/10 + 0.0091 * Clay/10;;cm/cm;GO;;;;0,0913800040
// DosS12;PWP_DosS12;0.82593+5.38527*OM+0.29199*Clay-0.16418*FS;Planossolo;dag/kg;RS;;;;0,1137922583
// Doss13;PWP_DosS13;11.50346 + 1.55563 * OM + 0.14390 * Clay - 0.13118 * CS - 0.16458 * Clay;;dag/kg;RS;;;;0,1206810391
// DosS5;PWP_DosS5;17.31904 + 1.75679 * OM - 0.17837 * CS - 0.21368 * FS;Neossolo;dag/kg;RS;;;;0,0805377222
// DosS3;PWP_DosS3;2.57914 + 1.85627 * OM + 0.1759 * Clay - 0.04588 * CS;Argissolo;dag/kg;RS;;;;0,0831501941
// CO1;PWP_CO1;6.9214 - 3.4117 * BD / ln(BD);FrancoArgiloso;%;MG;;;;inf
// DosS1;PWP_DosS1;7.70062 + 1.91701 * OM + 0.07225 * Clay - 0.07730 * CS ?0.09263 * FS;Argissolo;dag/kg;RS;;;;0,1001509928
// DosS4;PWP_DosS4;11.7889 + 0.9991 * OM + 0.1557 * Clay - 0.1419 * CS -0.1361 * FS;Argissolo;dag/kg;RS;;;;0,0560600281
// DosS14;PWP_DosS14;9.944674 + 1.01884 * OM + 0.14405 * Clay - 0.09538 * CS - 0.1052 * FS;;dag/kg;RS;;;;0,0657938494
// DosS11;PWP_DosS11;39.45134-2.47572*OM-0.33157*CS-0.30641*FS;Neossolo;dag/kg;RS;;;;0,1070973639
// DosS9;PWP_DosS9;27.08723 + 1.18014 * OM - 0.29777 * CS - 0.35548 * FS;Cambissolo;dag/kg;RS;;;;0,0534944180
// DosS6;PWP_DosS6;2.44219 + 5.17011 * OM - 0.13334* FS;Planossolo;dag/kg;RS;;;;0,1562526940
// Ram5;PWP_Ram5;0.074 + 0.00033 * Sand/10 + 0.0382 * SOC ? 0.0001 * CS/10;;cm/cm;PI;;;;0,1350546827
// Men2;PWP_Men2;#NOME?;;cm/cm;BA;;;;0,2436332905
// Ol5;PWP_Ol5;0.000087 Silt/10  + 0.000285 * Clay/10;;kg/kg;PE;;;;0,2362663186
// Ol6;PWP_Ol6;0.000072 * Sand/10 + 0.000195 Silt/10 + 0.000363 * Clay/10  ? 0.052198 * BD;;kg/kg;PE;;;;0,3318696179
// Ol8;PWP_Ol8;0.000121 * Silt/10 + 0.000260 * Clay/10;;kg/kg;PE;;;;0,2362910280
// Ol9;PWP_Ol9;0.000085 Sand + 0.000229 * Silt + 0.000381 * Clay ? 0.062662 * BD;;kg/kg;PE;;;;0,3519572420
// Av6;PWP_Av6;#NOME?;;cm/100cm;MG;;;;0,0688855501
// Ur;PWP_Ur;29.8999 - 0.15600 * Sand + 0.18710 * Clay - 6.7591 * BD;;kg/kg;RS;;;;0,0830051094
// Ol1;PWP_Ol1;0.000038 * Sand/10 + 0.000153 * Silt/10 + 0.000341 * Clay/10 ? 0.030861 * BD;;kg/kg;PE;;;;0,2915935648
// Ol3;PWP_Ol3;0.000282 * Silt/10 + 0.000487 * Clay/10 ? 0.101537 * BD;Argiloso;kg/kg;PE;;;;0,4289495541
// And;PWP_And;0.241249 - 0.000117723 * Sand/10 - 0.152483 * Meso/10 - 0.046851 * BD;;cm/cm;PE;;;;0,2219929760
// Men1;PWP_Men1;1878 + 0.0872 * BD + 0.00374 * Micro + 0.00101 * Silt/10 + 0.00256 * Clay/10;;cm/cm;RS;;;;0,2943595402
// Mar;PWP_Mar;0.08487488 + 0.00097697 * OM +  0.00042973 * Clay - 0.0002316 * Silt + 0.16789394 * BD;;m/m;RS;;;;0,1565399212
// Soar10;PWP_Soar9;0.1531 * Clay + 0.0072 * BD + 0.0240 *TP;;cm/cm;RS;;;;0,0616227922
// Av5;PWP_Av5;#NOME?;;cm/100cm;MG;;;;0,0678599691
// Silv2;PWP_Silv2;0.246 - 0.00174 * Sand + 0.000069 * Silt - 0.0402 * (Silt/Clay) + 0.0190 * BD;;cm/cm;BA;GO;MG;RS;inf
// Ros2;PWP_Ros2;0.568 ? 0.003 * Sand ? 0.001 * Clay ? 0.281 * TP ? 0.069 * BD + 0.005 * SOC;;cm/cm;Cerrado;;;;0,0694884808
// Sou1;PWP_Sou1;0.15839 + 0.00031 * (Clay/10) ? 0.00240 * Micro;;m/m;Tab. Costeiros;;;;0,1041987992
// Ros1;PWP_Ros1;0.057 ? 0.001 * Sand + 0.743 * Micro;;cm/cm;Cerrado;;;;0,0630773684
// Ram1;PWP_Ram1;0.074 + 0.00033*Clay/10 + 0.0382*SOC ? 0.0001*CS/10;Latossolo;cm/cm;PI;;;;0,1339583451
// Gai;PWP_Gai;0.088 * SOC + 0.340 * Clay + 0.057 * Silt;;m/m;CE;PI;;;0,1016710383
// DosS2;PWP_DosS2;0.8351 + 0.5599 * OM + 0.3506 * Clay;Cambissolo;dag/kg;RS;;;;0,0798688422
// Rei5;PWP_Rei5;140 + 12.7 * Log ((OM/10)) + 0.065 * Clay/10 - 0.28 * Sand/10;;g/kg;RS;SC;;;0,1158694170
// Rei1;PWP_Rei1;#NOME?;;kg/kg;RS;;;;0,0214927446
// Soar6;PWP_Soar6;#NOME?;Francoarenoso;cm/cm;RS;;;;0,0764804037
// Soar1;PWP_Soar1;-2.8034 + 0.0127 * Sand . 0.7130 * DP;Arenoso Franco;cm/cm;RS;;;;0,7464593629
// Soar3;PWP_Soar3;-0.8519 - 0.0284 * Sand . 0.5231 * DP;Argilo Siltoso;cm/cm;RS;;;;0,0105694118
// Mi;PWP_Mi;#NOME?;;cm/cm;RS;;;;0,0889937383
// Pe1;PWP_Pe1;0.09715 - 0.00048 * Sand + 0.22538 * Micro - 0.02314 * DP;;cm/cm;PB;;;;0,1292255097
// Soar7;PWP_Soar7;0.1571 - 0.0048 * Silt - 3.8154 * OM - 0.0437 * DP . 0.4512 * TP;Francoargiloarenoso;cm/cm;RS;;;;0,0000000000
// Soar4;PWP_Soar4;0.1818 - 0.0022 * Silt - 0.0010 * Sand +  0.0279 * TP;Argiloso;cm/cm;RS;;;;0,1414588259
// Men5;PWP_Men5;#NOME?;;cm/cm;MT;;;;0,2750708052
// Silv1;PWP_Silv1;0.123 - 0.00108 * Sand - 0.0204 * (Silt/Clay) - 0.00171 * TP + 0.05710 * Micro;;cm/cm;BA;GO;MG;RS;0,1586578627
// Soar8;PWP_Soar8;0.0996 + 0.2248 * TP;Francoargiloso;cm/cm;RS;;;;0,0764051951


// Classes de Solo (input):

//Argissolos
// Cambissolos
// Chernossolos
// Espodossolos
// Gleissolos
// Latossolos
// Luvissolos
// Neossolos
// Nitossolos
// Organossolos
// Planossolos
// Plintossolos
// Vertissolos

//.
// Classe textural (input):
//Muito Argilosa
// Argiloso
// Argilo-arenosa
// Argilo-Siltosa
// Franco-Argilo Arenoso
// Franco-Argilo Siltosa
// Franco Arenosa
// Franca
// Franco Siltosa
// Silte
// Areia Fraca
// Areia

