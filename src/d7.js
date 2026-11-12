/* ===== Einheit 7 ===== */
EH[7]={z:'Abgrenzung SGB II / SGB XII, Grundsicherung im Alter und bei Erwerbsminderung, Bedarfe, Einkommen und Vermögen im SGB XII, Unterhaltsrückgriff und weitere Hilfen – plus Wohngeld als Alternative.',
 ks:['SGB II und SGB XII schließen sich beim Lebensunterhalt gegenseitig aus; entscheidend sind Erwerbsfähigkeit und Alter.','Grundsicherung im Alter und bei dauerhafter voller Erwerbsminderung muss beantragt werden; Hilfe zum Lebensunterhalt setzt nur Kenntnis des Trägers voraus.','Die dauerhafte volle Erwerbsminderung stellt der Rentenversicherungsträger fest; Werkstattbeschäftigte sind in der Regel erfasst.','Im SGB XII gelten 10.000 Euro Schonvermögen je volljährige Person; beim Wechsel aus dem SGB II kann bisher geschütztes Vermögen einzusetzen sein.','Kinder und Eltern werden nur bei einem Jahreseinkommen über 100.000 Euro zum Unterhalt herangezogen.'],
 kq:[['Wer ist für den Lebensunterhalt eines 45-Jährigen zuständig, der nach Feststellung der Rentenversicherung dauerhaft voll erwerbsgemindert ist?','Der Sozialhilfeträger: Grundsicherung bei Erwerbsminderung nach dem 4. Kapitel SGB XII.'],
 ['Worin unterscheidet sich der Antragsgrundsatz im 3. und 4. Kapitel SGB XII?','3. Kapitel: Kenntnisgrundsatz (§ 18 SGB XII); 4. Kapitel: Antrag erforderlich (§ 44 SGB XII).'],
 ['Wie hoch ist der Barbetrag in einer stationären Einrichtung 2026 mindestens?','27 % von 563 € = 152,01 € monatlich (§ 27b Abs. 3 SGB XII).'],
 ['Wie viel Vermögen darf eine alleinstehende Grundsicherungsbezieherin behalten?','10.000 € kleinere Barbeträge, zusätzlich weiteres Schonvermögen nach § 90 Abs. 2 (Hausrat, angemessenes Kfz, ggf. Hausgrundstück) und Härtefälle nach § 90 Abs. 3 SGB XII.'],
 ['Wann werden die Kinder einer Grundsicherungsbezieherin zum Unterhalt herangezogen?','Nur bei einem Jahreseinkommen von jeweils mehr als 100.000 € (§ 94 Abs. 1a SGB XII).'],
 ['Eine Werkstattbeschäftigte verdient 200 €. Wie hoch ist der Freibetrag?','70,38 € + 50 % von 129,62 € (64,81 €) = 135,19 €.']]};

N('n_sgb12_abgr','t_sozhilfe','Nachrang und Abgrenzung SGB II / SGB XII',{p:'§ 2 SGB XII, § 21 SGB XII, § 5 SGB II',k:['SGB XII|2','SGB XII|21','SGB XII|19'],m:[7],src:'SGBXII',sum:'Erwerbsfähigkeit und Alter entscheiden, welches Buch den Lebensunterhalt sichert.',
 b:`<p><b>§ 2 Abs. 1 SGB XII (Nachrang):</b> Sozialhilfe erhält nicht, wer sich vornehmlich durch Einsatz seiner Arbeitskraft, seines Einkommens und seines Vermögens selbst helfen kann oder die erforderliche Leistung von anderen, insbesondere von Angehörigen oder Trägern anderer Sozialleistungen, erhält.</p>
<h4>Abgrenzungsschema</h4>
<ol><li><b>Erwerbsfähig (§ 8 SGB II)?</b> Ja und unter der Altersgrenze → <b>SGB II</b> (Grundsicherungsgeld).</li><li>Nicht erwerbsfähig, aber Altersgrenze erreicht oder dauerhaft voll erwerbsgemindert → <b>SGB XII, 4. Kapitel</b> (Grundsicherung im Alter und bei Erwerbsminderung).</li><li>Nicht erwerbsfähig, nicht dauerhaft voll erwerbsgemindert, in Bedarfsgemeinschaft mit Erwerbsfähigen → <b>SGB II</b> (Grundsicherungsgeld für nicht Erwerbsfähige, § 23).</li><li>Nicht erwerbsfähig, ohne Bedarfsgemeinschaft mit Erwerbsfähigen → <b>SGB XII, 3. Kapitel</b> (Hilfe zum Lebensunterhalt).</li></ol>
<p>Wer dem Grunde nach nach dem SGB II leistungsberechtigt ist, erhält keinen Lebensunterhalt nach dem SGB XII (§ 21 S. 1 SGB XII, § 5 Abs. 2 SGB II). Leistungen des 4. Kapitels gehen der Hilfe zum Lebensunterhalt vor (§ 19 Abs. 2 S. 2 SGB XII) und auch dem Grundsicherungsgeld für nicht erwerbsfähige Mitglieder der Bedarfsgemeinschaft (§ 5 Abs. 2 S. 2 SGB II).</p>
<h4>Unterschiede im Überblick</h4>
<div class="tw"><table><thead><tr><th></th><th>SGB II</th><th>SGB XII, 3. Kap.</th><th>SGB XII, 4. Kap.</th></tr></thead><tbody>
<tr><td>Personenkreis</td><td>Erwerbsfähige und ihre Bedarfsgemeinschaft</td><td>Nicht Erwerbsfähige, nicht dauerhaft voll Erwerbsgeminderte unter der Altersgrenze</td><td>Ab Altersgrenze; ab 18 bei dauerhafter voller Erwerbsminderung</td></tr>
<tr><td>Träger</td><td>Jobcenter</td><td>örtlicher Sozialhilfeträger</td><td>örtlicher Sozialhilfeträger (Bundeserstattung)</td></tr>
<tr><td>Antrag</td><td>erforderlich (§ 37)</td><td>Kenntnisgrundsatz (§ 18)</td><td>erforderlich (§ 44)</td></tr>
<tr><td>Gemeinschaft</td><td>Bedarfsgemeinschaft</td><td>Einsatzgemeinschaft (§ 27 Abs. 2), Vermutung bei Haushaltsgemeinschaft (§ 39)</td><td>ohne Vermutung nach § 39 S. 1 (§ 43 Abs. 5)</td></tr>
<tr><td>Unterhaltsrückgriff</td><td>möglich (§ 33 SGB II)</td><td>nur bei Einkommen über 100.000 € (§ 94 Abs. 1a)</td><td>nur bei Einkommen über 100.000 €</td></tr>
<tr><td>Vermögensfreibetrag</td><td>altersabhängig 5.000–20.000 €</td><td>10.000 € je Volljährigem</td><td>10.000 € je Volljährigem</td></tr>
<tr><td>Mitwirkung am Arbeitsmarkt</td><td>Kooperationsplan, Minderungen</td><td>eingeschränkt (§ 39a)</td><td>keine</td></tr></tbody></table></div>`,
 f:'Abgrenzungsschema sicher anwenden; Nachrang und Vorrang des 4. Kapitels.',rel:['n_erwerbsf','n_sgb12_ga','f7_1','n_vermoegen'],l:LK(['SGB XII',2],['SGB XII',19],['SGB XII',21],['SGB II',5])});

N('n_sgb12_ga','t_sozhilfe','Grundsicherung im Alter und bei Erwerbsminderung',{p:'§§ 41, 44, 45 SGB XII',k:['SGB XII|41','SGB XII|44','SGB XII|45'],m:[7],src:'SGBXII',sum:'Leistungsberechtigt sind Personen ab Altersgrenze und dauerhaft voll Erwerbsgeminderte ab 18; Antrag nötig.',
 b:`<p><b>§ 41 Abs. 1:</b> Älteren und dauerhaft voll erwerbsgeminderten Personen mit gewöhnlichem Aufenthalt im Inland ist Grundsicherung zu leisten, wenn sie ihren notwendigen Lebensunterhalt nicht oder nicht ausreichend aus Einkommen und Vermögen (§§ 43, 43a) bestreiten können.</p>
<ul><li><b>Abs. 2 (Alter):</b> Wer die Altersgrenze erreicht hat.</li><li><b>Abs. 3 (Erwerbsminderung):</b> Wer 18 ist, unabhängig von der Arbeitsmarktlage voll erwerbsgemindert im Sinne des § 43 Abs. 2 SGB VI ist und bei dem unwahrscheinlich ist, dass die Minderung behoben werden kann.</li><li><b>Abs. 3a:</b> Auch wer 18 ist und für den sich die Kostenträgerschaft im <b>Eingangsverfahren und Berufsbildungsbereich einer WfbM</b> ergibt.</li></ul>
<h4>Altersgrenze (§ 41 Abs. 2)</h4>
<div class="tw"><table><thead><tr><th>Jahrgang</th><th>Altersgrenze</th></tr></thead><tbody><tr><td>1959</td><td>66 Jahre 2 Monate</td></tr><tr><td>1960</td><td>66 Jahre 4 Monate</td></tr><tr><td>1961</td><td>66 Jahre 6 Monate</td></tr><tr><td>1962</td><td>66 Jahre 8 Monate</td></tr><tr><td>1963</td><td>66 Jahre 10 Monate</td></tr><tr><td>ab 1964</td><td>67 Jahre</td></tr></tbody></table></div>
<h4>Feststellung der dauerhaften vollen Erwerbsminderung (§ 45)</h4>
<p>Der Sozialhilfeträger ersucht den Rentenversicherungsträger um Prüfung; dessen Entscheidung ist bindend. Entbehrlich ist das Ersuchen u. a., wenn bereits eine Rente wegen voller Erwerbsminderung auf Dauer bewilligt wurde oder wenn die Person im Arbeitsbereich einer WfbM beschäftigt ist und ein entsprechendes Votum bzw. Teilhabeplanverfahren vorliegt.</p>
<div class="mark"><b>Typische Beratungsfalle:</b> Junge Erwachsene mit Behinderung erhalten schon im Eingangs- und Berufsbildungsbereich der WfbM Grundsicherung (§ 41 Abs. 3a). Der Antrag wird häufig zum 18. Geburtstag vergessen.</div>
<h4>Ausschluss (§ 41 Abs. 4)</h4>
<p>Kein Anspruch, wer in den letzten zehn Jahren die Bedürftigkeit vorsätzlich oder grob fahrlässig herbeigeführt hat – etwa durch Schenkungen kurz vor Antragstellung. Daneben Rückforderung nach § 528 BGB, überleitbar nach § 93 SGB XII (siehe <a data-go="f7_4">Fall 7.4</a>).</p>
<h4>Antrag und Bewilligungszeitraum</h4>
<p>Leistungen nur auf <b>Antrag</b>, der auf den Ersten des Antragsmonats zurückwirkt (§ 44 Abs. 2); Bewilligungszeitraum regelmäßig zwölf Monate (§ 44 Abs. 3).</p>`,
 f:'Altersgrenzentabelle, § 45 Bindung an den Rentenversicherungsträger, § 41 Abs. 3a WfbM.',
 q:['Wer stellt die dauerhafte volle Erwerbsminderung fest?','Der Rentenversicherungsträger auf Ersuchen des Sozialhilfeträgers; dessen Entscheidung bindet (§ 45 SGB XII).'],
 rel:['n_sgb12_abgr','n_sgb12_regel','n_sgb12_eink','f7_1','f7_2','f7_4','n_rente'],l:LK(['SGB XII',41],['SGB XII',44],['SGB XII',45],['SGB XII',93],['BGB',528])});

N('n_sgb12_regel','t_sozhilfe','Bedarfe im SGB XII',{p:'§§ 27a–42b SGB XII',k:['SGB XII|27a','SGB XII|30','SGB XII|35','SGB XII|42a','SGB XII|27b','SGB XII|42b'],m:[7],src:'SGBXII',sum:'Regelbedarf 563 Euro, Mehrbedarfe, Unterkunft (neu: Deckelung 1,5-fach), Barbetrag 152,01 Euro in Einrichtungen.',
 b:`<div class="tw"><table><thead><tr><th>Baustein</th><th>Norm</th><th>Hinweise</th></tr></thead><tbody>
<tr><td>Regelbedarf</td><td>§§ 27a, 28 und Anlage</td><td>identisch mit SGB II; 2026: 563 € (Stufe 1)</td></tr>
<tr><td>Mehrbedarfe</td><td>§ 30</td><td>Merkzeichen G oder aG bei Altersgrenze/voller Erwerbsminderung: 17 % (95,71 €); Alleinerziehung, Schwangerschaft, Ernährung, dezentrale Warmwasserbereitung wie SGB II</td></tr>
<tr><td>Mittagessen in der Werkstatt</td><td>§ 42b Abs. 2</td><td>Mehrbedarf je Arbeitstag, bemessen nach dem Sachbezugswert; aktuellen Wert prüfen</td></tr>
<tr><td>Unterkunft und Heizung</td><td>§§ 35, 42a</td><td>Karenzzeit; seit 1.7.2026 Deckelung auf das 1,5-Fache der abstrakt angemessenen Kosten (BGBl. 2026 I Nr. 107, Art. 9)</td></tr>
<tr><td>Kranken- und Pflegeversicherung</td><td>§ 32</td><td>bei freiwilliger Versicherung</td></tr>
<tr><td>Vorsorgebeiträge</td><td>§ 33</td><td>angemessene Alterssicherung/Sterbegeld</td></tr>
<tr><td>Einmalige Bedarfe</td><td>§ 31</td><td>Erstausstattungen wie im SGB II</td></tr>
<tr><td>Darlehen</td><td>§ 37</td><td>unabweisbarer, vom Regelsatz umfasster Bedarf</td></tr></tbody></table></div>
<h4>Unterkunft nach neuem Recht (§ 35 Abs. 1)</h4>
<p>Tatsächliche Aufwendungen werden nicht als Bedarf anerkannt, soweit sie mehr als das <b>Eineinhalbfache</b> der abstrakt angemessenen Aufwendungen betragen; in der Karenzzeit können im Einzelfall höhere Aufwendungen anerkannt werden, wenn sie unabweisbar sind oder in Haushaltsgemeinschaften mit Kindern anfallen.</p>
<h4>Besondere Wohnsituationen</h4>
<ul><li><b>Bei den Eltern ohne eigenen Mietvertrag:</b> Differenzmethode (§ 42a Abs. 3) – Mehrkosten des Mehrpersonenhaushalts.</li><li><b>Besondere Wohnformen der Eingliederungshilfe:</b> Regelbedarfsstufe 2; Unterkunft nach § 42a Abs. 5 bis zur Angemessenheitsgrenze, darüber hinaus über die Eingliederungshilfe (Modul 9).</li></ul>
<h4>Barbetrag in Einrichtungen (§ 27b Abs. 3)</h4>
<p>Mindestens <b>27 % der Regelbedarfsstufe 1</b>, 2026 also <b>152,01 €</b> monatlich, plus Bekleidungspauschale nach Träger-/Landespraxis.</p>
<div class="mark">Der Barbetrag gehört dem betreuten Menschen, nicht der Einrichtung. Betreuer klären, ob die Einrichtung ihn verwahrt, und prüfen regelmäßig die Abrechnung. Wünsche des Betreuten zur Verwendung haben Vorrang (§ 1821 Abs. 2 BGB).</div>`,
 f:'Regelbedarf 563 €, Barbetrag 27 % = 152,01 €, Deckelung 1,5-fach seit 1.7.2026.',
 q:['Wie hoch ist der Mindestbarbetrag 2026 und woraus berechnet er sich?','27 % der Regelbedarfsstufe 1 (563 €) = 152,01 € (§ 27b Abs. 3 SGB XII).'],
 rel:['n_bausteine','n_sgb12_ga','n_sgb12_eink','f7_2','f7_3'],l:LK(['SGB XII','27a'],['SGB XII','27b'],['SGB XII',30],['SGB XII',35],['SGB XII','42a'],['SGB XII','42b'],['BGB',1821])});

N('n_sgb12_eink','t_sozhilfe','Einkommen im SGB XII',{p:'§§ 82, 82a SGB XII',k:['SGB XII|82','SGB XII|82a'],m:[7],src:'SGBXII',sum:'30 % Erwerbstätigenfreibetrag (max. 281,50 €), Werkstattentgelt, Altersvorsorge, Grundrentenfreibetrag.',
 b:`<p><b>§ 82 Abs. 3 S. 1:</b> Vom Einkommen aus selbständiger und nichtselbständiger Tätigkeit sind 30 % abzusetzen, höchstens 50 % der Regelbedarfsstufe 1. <b>S. 2:</b> Bei Beschäftigung in einer WfbM oder bei einem anderen Leistungsanbieter: ein Achtel der Regelbedarfsstufe 1 plus 50 % des übersteigenden Entgelts.</p>
<div class="tw"><table><thead><tr><th>Einkommen</th><th>Freibetrag</th><th>Norm</th></tr></thead><tbody>
<tr><td>Erwerbseinkommen</td><td>30 %, höchstens 281,50 € (50 % von 563 €)</td><td>§ 82 Abs. 3 S. 1</td></tr>
<tr><td>Werkstattentgelt</td><td>70,38 € (1/8 von 563 €) + 50 % des übersteigenden Entgelts</td><td>§ 82 Abs. 3 S. 2</td></tr>
<tr><td>Zusätzliche Altersvorsorge (Betriebsrente, Riester)</td><td>100 € + 30 % des übersteigenden Betrags, höchstens 281,50 €</td><td>§ 82 Abs. 4</td></tr>
<tr><td>Gesetzliche Rente mit mind. 33 Jahren Grundrentenzeiten</td><td>100 € + 30 % des übersteigenden Betrags, höchstens 281,50 €</td><td>§ 82a</td></tr>
<tr><td>Aufwandspauschale § 1878 BGB</td><td>bis zum Betrag nach § 3 Nr. 26 S. 1 EStG jährlich</td><td>§ 82 Abs. 1 S. 2 Nr. 4</td></tr>
<tr><td>Erbschaften, Vermächtnisse</td><td>einmalige Einnahmen kein Einkommen; Prüfung als Vermögen</td><td>§ 82 Abs. 1 S. 2 Nr. 9</td></tr>
<tr><td>Nachzahlungen</td><td>Verteilung auf sechs Monate, wenn Anspruch sonst entfiele</td><td>§ 82 Abs. 7</td></tr></tbody></table></div>`,
 f:'Freibetragsrechnung Werkstatt: 70,38 € + 50 % des Rests.',
 q:['Berechne den Freibetrag bei 200 € Werkstattentgelt.','70,38 € + 50 % von 129,62 € (64,81 €) = 135,19 €.'],
 rel:['n_sgb12_regel','n_sgb12_verm','n_einkommen','f7_3'],l:LK(['SGB XII',82],['SGB XII','82a'],['BGB',1878])});

N('n_sgb12_verm','t_sozhilfe','Vermögen und Unterhaltsrückgriff im SGB XII',{p:'§ 90 SGB XII, § 94 Abs. 1a SGB XII',k:['SGB XII|90','SGB XII|94','SGB XII|93'],m:[7],src:'SGBXII',sum:'Kleinere Barbeträge 10.000 Euro; Härte (Bestattungsvorsorge); Unterhalt von Kindern und Eltern erst über 100.000 Euro.',
 b:`<p><b>§ 90 Abs. 1:</b> Einzusetzen ist das gesamte verwertbare Vermögen. <b>Abs. 2</b> schützt u. a. angemessenen Hausrat (Nr. 4), ein angemessenes Hausgrundstück, das bewohnt wird und nach dem Tod von Angehörigen bewohnt werden soll (Nr. 8), <b>kleinere Barbeträge</b> (Nr. 9) und ein angemessenes Kfz (Nr. 10). <b>Abs. 3:</b> keine Verwertung, soweit sie eine Härte bedeutete.</p>
<ul><li>Kleinere Barbeträge (Durchführungsverordnung): <b>10.000 €</b> je volljähriger Person und je alleinstehender minderjähriger Person, 500 € je überwiegend unterhaltener Person.</li><li>Härtefälle: insbesondere angemessene <b>Bestattungsvorsorge</b>, je nach Einzelfall auch Altersvorsorge. Das BSG verlangt konkrete Prüfung von Verwertbarkeit, Rückkaufswert und Härtegründen (BSG, Urteil vom 27.5.2026, B 8 SO 5/24 R).</li></ul>
<div class="mark"><b>Planungspunkt:</b> Der Freibetrag im SGB XII (10.000 €) ist für Ältere deutlich niedriger als der SGB-II-Freibetrag ab 51 (20.000 €). Beim Wechsel zum Sozialamt kann bisher geschütztes Vermögen plötzlich einzusetzen sein.</div>
<h4>Unterhaltsrückgriff (§ 94 Abs. 1a)</h4>
<p>Unterhaltsansprüche gegen Kinder und Eltern gehen nur über, wenn deren jährliches Gesamteinkommen (§ 16 SGB IV) jeweils mehr als <b>100.000 €</b> beträgt; es wird vermutet, dass die Grenze nicht überschritten ist. In der Praxis werden Angehörige nur selten herangezogen – ein gutes Argument, Leistungen überhaupt zu beantragen („Die Kinder müssen nicht zahlen“).</p>`,
 f:'Schonbetrag 10.000 €, Wechselrisiko SGB II → SGB XII, 100.000-€-Grenze.',
 q:['Wann werden Kinder von Grundsicherungsbeziehern zum Unterhalt herangezogen?','Nur bei einem Jahreseinkommen von jeweils mehr als 100.000 € (§ 94 Abs. 1a SGB XII); die Unterschreitung wird vermutet.'],
 rel:['n_vermoegen','n_sgb12_eink','f7_1','f7_4'],l:LK(['SGB XII',90],['SGB XII',94],['SGB XII',93],['SGB IV',16])});

N('n_sgb12_weitere','t_sozhilfe','Weitere Hilfen des SGB XII und Wohngeld',{p:'§§ 61 ff., 67 ff., 70 ff., 74 SGB XII; § 7 WoGG',k:['SGB XII|61','SGB XII|67','SGB XII|70','SGB XII|74'],m:[7],src:'SGBXII',sum:'Hilfe zur Pflege, besondere soziale Schwierigkeiten, andere Lebenslagen, Bestattung – und Wohngeld als Alternative.',
 b:`<div class="tw"><table><thead><tr><th>Hilfe</th><th>Norm</th><th>Bezug zur Betreuung</th></tr></thead><tbody>
<tr><td>Hilfe zur Pflege</td><td>§§ 61 ff.</td><td>ergänzend zur Pflegeversicherung, v. a. bei Heimkosten (Modul 9)</td></tr>
<tr><td>Hilfe zur Überwindung besonderer sozialer Schwierigkeiten</td><td>§§ 67 ff.</td><td>Wohnungslosigkeit, Haftentlassung; Beratung und persönliche Unterstützung</td></tr>
<tr><td>Hilfe in anderen Lebenslagen</td><td>§§ 70 ff.</td><td>Weiterführung des Haushalts, Altenhilfe, Blindenhilfe</td></tr>
<tr><td>Bestattungskosten</td><td>§ 74</td><td>für Verpflichtete, denen die Kostentragung nicht zumutbar ist; mit dem Tod endet die Betreuung</td></tr>
<tr><td>Eingliederungshilfe</td><td>SGB IX Teil 2</td><td>seit 2020 nicht mehr im SGB XII (Modul 9)</td></tr></tbody></table></div>
<h4>Wohngeld als vorrangige Alternative</h4>
<p>Wohngeld ist eine Förderleistung. Beziehende von Grundsicherung im Alter und bei Erwerbsminderung sind vom Wohngeld ausgeschlossen (§ 7 Abs. 1 WoGG). Liegt das Einkommen knapp über dem Grundsicherungsbedarf, kann Wohngeld günstiger sein: keine Vermögensprüfung nach SGB XII und kein Kostenersatz. Eine <b>Vergleichsberechnung</b> lohnt sich besonders bei Rentnern mit Grundrentenzuschlag. Wohngeldstellen und Sozialämter müssen auf vorrangige Leistungen hinweisen.</p>`,
 f:'Wohngeld-Vergleichsberechnung; Wohngeld und Grundsicherung schließen sich aus.',
 rel:['n_sgb12_ga','f7_1'],l:LK(['SGB XII',61],['SGB XII',67],['SGB XII',70],['SGB XII',74],['WoGG',7])});

N('f7_1','t_faelle','Fall 7.1: Rente mit 66 und 4 Monaten',{p:'Fall',m:[7],src:'SGBXII',sum:'Wechsel vom Jobcenter zum Sozialamt bei Erreichen der Altersgrenze.',
 b:`<h4>Sachverhalt</h4><p>Frau G., geboren im Februar 1960, lebt allein in Dresden, bezieht Grundsicherungsgeld; Altersrente ab Juli 2026 voraussichtlich 780 €. Betreut für Vermögenssorge und Behördenangelegenheiten. Das Jobcenter teilt mit, dass die Leistungen mit Rentenbeginn enden. Bruttowarmmiete 520 € (angemessen), Sparkonto 14.000 €, keine 33 Jahre Grundrentenzeiten.</p>
<details><summary>Lösungshinweise</summary><ol><li><b>Ende SGB II:</b> Mit Erreichen der Altersgrenze nach § 7a SGB II (66 Jahre 4 Monate, also Juni 2026) endet die Leistungsberechtigung; der Bezug einer Altersrente schließt SGB-II-Leistungen zudem aus (§ 7 Abs. 4).</li><li><b>Zuständigkeit:</b> Grundsicherung im Alter, 4. Kapitel SGB XII, Sozialamt. Antrag erforderlich (§ 44) – rechtzeitig vor dem Wechsel stellen.</li><li><b>Bedarf:</b> 563 € + 520 € = 1.083 €; Einkommen: Rente 780 € → rechnerisch etwa 303 €, vorbehaltlich Vermögen.</li><li><b>Vermögen:</b> 14.000 € − 10.000 € = 4.000 € einzusetzen; bis zum Verbrauch kein Anspruch. Im SGB II wären 20.000 € geschützt gewesen – der Systemwechsel bringt hier einen Nachteil.</li><li><b>Alternative:</b> Wohngeld-Vergleichsberechnung.</li><li><b>Betreuung:</b> Rentenantrag, Antrag beim Sozialamt und ggf. Wohngeldantrag parallel und fristwahrend; mit Frau G. Verwendung des Vermögens besprechen (Wünsche, angemessene Anschaffungen, Bestattungsvorsorge).</li></ol></details>`,
 rel:['n_sgb12_abgr','n_sgb12_ga','n_sgb12_verm','n_sgb12_weitere'],l:[]});
N('f7_2','t_faelle','Fall 7.2: Der 18. Geburtstag',{p:'Fall',m:[7],src:'SGBXII',sum:'Grundsicherung bei dauerhafter voller Erwerbsminderung, § 41 Abs. 3a, Bedarfe im Elternhaushalt.',
 b:`<h4>Sachverhalt</h4><p>Lukas, geboren im Dezember 2008, geistige Behinderung, besucht bis Juli 2027 eine Förderschule und lebt bei den Eltern. Seine Mutter ist Betreuerin. Ab August 2027 Wechsel in den Berufsbildungsbereich einer WfbM.</p>
<details><summary>Lösungshinweise</summary><ol><li>Seit Vollendung des 18. Lebensjahres (Dezember 2026) kommt Grundsicherung bei dauerhafter voller Erwerbsminderung in Betracht (§ 41 Abs. 3); Feststellung über den Rentenversicherungsträger (§ 45).</li><li>Ab Eintritt in den Berufsbildungsbereich gilt § 41 Abs. 3a.</li><li><b>Bedarf:</b> Regelbedarfsstufe 1 (563 €) – im SGB XII seit 2020 auch bei Erwachsenen im Elternhaushalt (anders als im SGB II für unter 25-Jährige); Mehrbedarf nach § 30 bei Merkzeichen G/aG; Unterkunft nach § 42a Abs. 3 (Differenzmethode) bzw. vertragliche Kosten bei Mietvertrag, soweit angemessen.</li><li><b>Unterhalt:</b> Eltern nur bei Einkommen über 100.000 € (§ 94 Abs. 1a). Kindergeld ist bei Volljährigen nur Einkommen, soweit es weitergeleitet wird.</li><li><b>Träger:</b> Landkreis Meißen als Sozialhilfeträger.</li></ol></details>`,
 rel:['n_sgb12_ga','n_sgb12_regel','n_sgb12_verm'],l:[]});
N('f7_3','t_faelle','Fall 7.3: Die Werkstattbeschäftigte',{p:'Fall',m:[7],src:'SGBXII',sum:'Freibetrag auf Werkstattentgelt und aufstockende Grundsicherung.',
 b:`<h4>Sachverhalt</h4><p>Frau E., 35, arbeitet im Arbeitsbereich einer WfbM (Entgelt 260 €), erhält Rente wegen voller Erwerbsminderung 820 € und wohnt allein (Bruttowarmmiete 480 €, angemessen).</p>
<details><summary>Lösungshinweise</summary><ol><li><b>Freibetrag Werkstattentgelt:</b> 70,38 € + 50 % von 189,62 € (94,81 €) = 165,19 €; anzurechnen: 94,81 €.</li><li><b>Rente:</b> voll anzurechnen (ggf. Versicherungspauschale nach Praxis); Freibetrag nach § 82a bei 33 Jahren Grundrentenzeiten (Werkstattzeiten sind Pflichtbeitragszeiten).</li><li><b>Bedarf:</b> 563 € + 480 € + Mittagessen-Mehrbedarf (§ 42b Abs. 2) + ggf. § 30.</li><li><b>Ergebnis:</b> Einkommen ca. 914,81 € gegenüber Bedarf von mindestens 1.043 € → aufstockende Grundsicherung.</li></ol></details>`,
 rel:['n_sgb12_eink','n_sgb12_regel'],l:[]});
N('f7_4','t_faelle','Fall 7.4: Die Schenkung an die Enkelin',{p:'Fall',m:[7],src:'BGB',sum:'Rückforderung wegen Verarmung des Schenkers, Überleitung, Genehmigungspflicht beim Verzicht.',
 b:`<h4>Sachverhalt</h4><p>Herr V., 78, lebt im Pflegeheim. Vor vier Jahren schenkte er seiner Enkelin 25.000 €. Sein Einkommen reicht nicht mehr für die Heimkosten.</p>
<details><summary>Lösungshinweise</summary><ol><li><b>Anspruch:</b> Rückforderung wegen Verarmung des Schenkers (§ 528 BGB) innerhalb von zehn Jahren (§ 529 BGB); er ist Vermögen des Herrn V.</li><li>Der Sozialhilfeträger kann den Anspruch überleiten (§ 93 SGB XII) oder auf Geltendmachung verweisen.</li><li><b>Betreuungsrecht:</b> Die Betreuerin muss den Anspruch prüfen und ggf. geltend machen; ein Verzicht wäre eine unentgeltliche Zuwendung und nach § 1854 Nr. 8 BGB genehmigungsbedürftig. Wünsche von Herrn V. sind zu berücksichtigen.</li><li>Hilfe zur Pflege selbst: Modul 9.</li></ol></details>`,
 rel:['n_sgb12_ga','n_sgb12_verm'],l:LK(['BGB',528],['BGB',529],['BGB',1854])});
