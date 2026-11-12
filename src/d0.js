/* ===== Daten ===== */
const G='https://www.gesetze-im-internet.de/', D='https://dejure.org/gesetze/';
const MODS=[
 {n:1,t:'Verfassungsrechtliche, europäische und internationale Grundlagen',inh:'Sozialstaatsprinzip, Menschenwürde und Existenzminimum, Gleichheit und Behinderung, Vorbehalt des Gesetzes, Rechtsschutzgarantie, UN-BRK, EU-Koordinierung.'},
 {n:2,t:'System des Sozialrechts: SGB I und SGB XIV',inh:'Sozialgesetzbücher im Überblick, Vorsorge – Entschädigung – Hilfe – Förderung, soziale Rechte, Leistungsträger, Soziale Entschädigung.'},
 {n:3,t:'Allgemeine Grundlagen und Verwaltungsverfahren',inh:'Beratung, Auskunft, Antrag, Verwaltungsakt, Bekanntgabe, Anhörung, Aufhebung und Rücknahme, Erstattung (SGB I, SGB X).'},
 {n:4,t:'Existenzsicherung nach SGB II: Zugang und Bedarfsgemeinschaft',inh:'Leistungsberechtigte, Erwerbsfähigkeit, Hilfebedürftigkeit, Bedarfsgemeinschaft, Ausschlüsse, Zuständigkeit.'},
 {n:5,t:'Leistungen nach SGB II',inh:'Regelbedarf, Mehrbedarfe, Unterkunft und Heizung, Bildung und Teilhabe, Mitwirkung, Pflichtverletzungen.'},
 {n:6,t:'Einkommen und Vermögen im SGB II',inh:'Einkommensbegriff, Absetzbeträge und Freibeträge, einmalige Einnahmen, Vermögensschutz.'},
 {n:7,t:'Existenzsicherung nach SGB XII',inh:'Hilfe zum Lebensunterhalt, Grundsicherung im Alter und bei Erwerbsminderung, Abgrenzung zum SGB II, Einsatzgemeinschaft, Vermögen.'},
 {n:8,t:'Leistungsansprüche nach SGB V, VI und XI',inh:'Krankenversicherung, Rentenversicherung, Pflegeversicherung: Versicherte, Leistungen, Zuzahlungen, Renten, Pflegegrade.'},
 {n:9,t:'Mitwirkung, Anspruchsdurchsetzung und Rechtsschutz',inh:'Mitwirkungspflichten, Versagung und Entziehung, Widerspruch, Klage, Eilrechtsschutz, Überprüfungsantrag, Untätigkeit.'},
 {n:10,t:'Vernetzte Abschlussfälle und Lernkontrolle',inh:'Prüfreihenfolge für komplexe Fälle, Abschlussfälle mit mehreren Leistungsträgern, Aktualitätshinweise.'}
];
const TH={grund:'Verfassung und Grundlagen',system:'System und Soziale Rechte',verfahren:'Verwaltungsverfahren',mitwirkung:'Mitwirkung und Versagung',rechtsschutz:'Rechtsschutz',zugang:'SGB II: Zugang',leist:'SGB II: Leistungen',eink:'Einkommen und Vermögen',sozhilfe:'SGB XII',entsch:'Soziale Entschädigung',kv:'Krankenversicherung',rv:'Rentenversicherung',pv:'Pflegeversicherung',faelle:'Fälle und Fallarbeit',pfad:'Lernpfad'};
const SRC={GG:'GG',SGBI:'SGB I',SGBII:'SGB II',SGBV:'SGB V',SGBVI:'SGB VI',SGBX:'SGB X',SGBXI:'SGB XI',SGBXII:'SGB XII',SGBXIV:'SGB XIV',SGG:'SGG',Weitere:'Weitere'};
const SRCK={'GG':'GG','SGB I':'SGBI','SGB II':'SGBII','SGB V':'SGBV','SGB VI':'SGBVI','SGB X':'SGBX','SGB XI':'SGBXI','SGB XII':'SGBXII','SGB XIV':'SGBXIV','SGG':'SGG'};
const SL={'SGB I':'sgb_1','SGB II':'sgb_2','SGB III':'sgb_3','SGB V':'sgb_5','SGB VI':'sgb_6','SGB X':'sgb_10','SGB XI':'sgb_11','SGB XII':'sgb_12','SGB XIV':'sgb_14','SGB IV':'sgb_4','WoGG':'wogg','SGG':'sgg','BGB':'bgb','GG':'gg'};
const DJ={'SGB I':'SGB_I','SGB II':'SGB_II','SGB III':'SGB_III','SGB V':'SGB_V','SGB VI':'SGB_VI','SGB X':'SGB_X','SGB XI':'SGB_XI','SGB XII':'SGB_XII','SGB XIV':'SGB_XIV','SGB IV':'SGB_IV','WoGG':'WoGG','SGG':'SGG','BGB':'BGB','GG':'GG'};
function lk1(b,n){const gg=b==='GG',lab=gg?'Art. '+n+' GG':'§ '+n+' '+b;return [[lab+' (gesetze-im-internet.de)',G+SL[b]+'/'+(gg?'art_':'__')+n+'.html'],[lab+' (dejure.org)',D+DJ[b]+'/'+n+'.html']];}
const LK=(...a)=>a.flatMap(x=>lk1(x[0],x[1]));
const NODES=[],EH={};
function N(id,parent,title,o={}){NODES.push(Object.assign({id,parent,title},o));}
