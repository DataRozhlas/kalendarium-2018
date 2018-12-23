const data = {
  week1: {
    wiki: {
      title: "Marie Terezie",
      text: "ČT vysílala něco o Marii Terezii.",
    },
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/kaufland-zakaz-jidlo-piti-interni-narizeni-zamestnanci_1801031135_ako",
      title: "Na pracovišti nesmíte jíst a pít, nařídil zaměstnancům Kaufland. Po dni to odvolal",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/profimedia-035830218_180103-111741_ako.jpg?itok=Msdm_Not",
    },
    google: {
      title: "Prezidentské volby",
      term: "prezidentské volby 2018 preference",
    },
  },
  week2: {
    wiki: {
      title: "Cosi dalšího",
      text: "Máme tu cosi dalšího.",
    },
    ir: {
      url: "https://www.irozhlas.cz/volby/prezidentske-volby-2018-volebni-pruzkum-zeman-drahos-prvni-druhe-kolo-kantar_1801082030_haf",
      title: "Poslední průzkum: Zeman má podporu 42,5 %, ve druhém kole by ho ale porazil Drahoš",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/volba_prezidenta_1_180108-200834_rez.png?itok=KIlwJT7e",
    },
    google: {
      title: "Prezidentské volby",
      term: "prezidentské volby 2018",
    },
  },} /*
  week3: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/aktivistka-femen-milos-zeman-putins-slut-angelina-diash-rozhovor_1801161100_ogo",
      title: "Dostala jsem hodně nenávistných zpráv, doporučili mi hned opustit Prahu, říká 'Zemanova sextremistka'",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/angelina2_180115-162303_ogo.jpg?itok=m9d7ybAx",
    },
  },
  week4: {
    ir: {
      url: "https://www.irozhlas.cz/volby/debata-prezidentskych-kandidatu-milos-zeman-jiri-drahos-prima_1801231705_ako",
      title: "První prezidentská debata. Co zaznělo v duelu Zemana s Drahošem?",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/img_9059_180123-210706_bar.jpg?itok=0iyyeEe_",
    },
  },
  week5: {
    ir: {
      url: "https://www.irozhlas.cz/volby/data-prezidentske-volby-mapa_1801271900_cib",
      title: "Koho volili vaši sousedi? Prohlédněte si nejpodrobnější mapu výsledků druhého kola prezidentské volby",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/mapa_180127-185248_cib.jpg?itok=DZyJcPcY",
    },
  },
  week6: {
    ir: {
      url: "https://www.irozhlas.cz/veda-technologie/vesmir/elon-musk-falcon-heavy-space-x-tesla-roadster-mys-caneveral-start-rakety_1802061915_dp",
      title: "Falcon Heavy úspěšně vynesl elektromobil do vesmíru. Jeden ze tří stupňů ale při návratu spadl do Atlantiku",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/2018-02-06t214450z_1_180206-224554_dp.jpg?itok=Z8VAPv1Z",
    },
  },
  week7: {
    ir: {
      url: "https://www.irozhlas.cz/sport/olympijske-hry/ester-ledecka-superobri-slalom-zlata-medaile-komentatori_1802171012_ako",
      title: "Olympijský sen, neuvěřitelná jízda, křičeli světoví komentátoři. Poslechněte si reakce po dojezdu Ledecké",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/ivr_9167_ester_ledec_180215-071107_vman.jpg?itok=v4De8Ock",
    },
  },
  week8: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-svet/maria-troskova-jan-kuciak-robert-fico-vrazda-novinare-italska-mafie-smer_1802281520_dp",
      title: "Z pánského časopisu do úřadu premiéra. Kdo je Ficova asistentka a jak dovedla novináře k mafii?",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/dxhnt0kvqaa9xre_180228-132712_dp.jpg?itok=S0ANOgpE",
    },
  },
  week9: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/milos-zeman-inaugurace-2018-zajimave-momenty_1803082110_hm",
      title: "Pět důvodů, proč si pamatovat Zemanovu inauguraci v roce 2018",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/dsc_5526_180308-182631_mda.jpg?itok=4u15SUvd",
    },
  },
  week10: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-svet/syrie-afrin-turecko-boje-klicperova-kutilova_1803151230_ako",
      title: "Ticho po Afrínu. 'Všichni tady umřeme,' říká Češka z odříznutého města",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/img_9672_180314-231657_ako.jpg?itok=cfo6YU-7",
    },
  },
  week11: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/premier-andrej-babis-rozhovor-radiozurnal_1803202038_ako",
      title: "Mám jasnou politickou kariéru. Nemám žádnou aféru, žádný problém, dělám to nezištně, řekl Babiš",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/2017-10-20t130854z_1_171024-162236_ako.jpg?itok=KWEgMJGO",
    },
  },
  week12: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/ceska-statni-hymna-olympijsky-vybor-nova-hymna-verze-milos-bok-cov-sportovci_1803281025_haf",
      title: "'Pompéznější, než jsou lidé zvyklí.' Poslechněte si novou verzi hymny podle olympijského výboru",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/kde_domov_muj_180328-121707_bar.jpg?itok=ZubW3RI1",
    },
  },
  week13: {
    ir: {
      url: "https://www.irozhlas.cz/kultura/hudba/metallica-praha-jozin-z-bazin-ivan-mladek_1804031436_mos",
      title: "Obdivuji, že se to byli schopni naučit česky, říká o Metallice a Jožinovi z bažin Ivan Mládek",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/profimedia-036250464_180403-125226_mos.jpg?itok=b_n3cECu",
    },
  },
  week14: {
    ir: {
      url: "https://www.irozhlas.cz/kultura/film-milos-forman-umrti-86-let_1804140749_vman",
      title: "Po krátké nemoci zemřel Miloš Forman. Oscarovému režisérovi bylo 86 let",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/images/03803996_0.jpeg?itok=_1haVc25",
    },
  },
  week15: {
    ir: {
      url: "https://www.irozhlas.cz/kultura/hudba/avicii-dj-umrti-svedsko_1804201956_ako",
      title: "Zemřel slavný DJ Avicii, autor hitů Levels nebo Wake Me Up. Bylo mu 28 let",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/profimedia-028822452_180420-200156_ako.jpg?itok=OVqQdufc",
    },
  },
  week16: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/letiste-policie-utocnici-cisnik-restaurace_1804231907_rez",
      title: "Policie zadržela na letišti skupinu mužů, které podezírá z brutálního útoku v centru Prahy",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/img-20180423-wa0004_180423-190832_jak.jpg?itok=4fLX8WM0",
    },
  },
  week17: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/pyl-repka-jehlicnany-alergolog_1805011515_ogo",
      title: "Zasypal Česko pyl z řepky? 'Úplná blbost, pochází z jehličnanů,' upozorňuje alergolog",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/images/03422889.jpeg?itok=ltBu44F2",
    },
  },
  week18: {
    ir: {
      url: "https://www.irozhlas.cz/kultura/hudba/mikolas-josef-lie-me-eurovize-2018-vysledky-finale_1805130636_ako",
      title: "Historický úspěch. Mikolas Josef vybojoval na Eurovizi šesté místo, zvítězila Izraelka Netta",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/2018-05-08t192943z_8_180509-114929_dp.jpg?itok=iUT0xI6z",
    },
  },
  week19: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/jiri-maxon-twitter-dezinformace-fake-news-foldyna-drahos-zeman_1805160600_ogo",
      title: "Získáváme vliv, v Česku jsou nás desítky tisíc, říká dezinformátor, od něhož Foldyna citoval lež",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/jiri_maxon_kolaz_180516-073948_bar.jpg?itok=8D9c-KUS",
    },
  },
  week20: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/data-median-prokop-segmentace-volby-autoritari-liberalove_1805210740_cib",
      title: "Nejsou jen liberálové a autoritáři, to je nebezpečná iluze, říká Dan Prokop. Test prozradí, koho volíte",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/median_180521-101120_miz.png?itok=66JRNbL-",
    },
  },
  week21: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/lenka-krutilova-aktip-infiltrace-zdravi-na-prodej_1805302203_pj",
      title: "‚Psycholožka' Krutilová u nás nestudovala, ohradila se fakulta. Terapeutka z Aktipu ji měla v životopisu",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/3566481-lenka-krutil_180530-211936_pj.jpeg?itok=4sJsOL7R",
    },
  },
  week22: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/dezinformacefake-newsruskoalexandra-alvarova_1806050600_ogo",
      title: "Jsme krůček od vytvoření simulované demokracie, prohráváme dezinformační válku s Ruskem, varuje expertka",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/profimedia-021353639_180404-124423_dp.jpg?itok=8XugwKMQ",
    },
  },
  week23: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/cesky-hydrometeorologicky-ustav-predpoved-pocasi_1806161546_pj",
      title: "Meteorologové vydali měsíční předpověď: průměrné letní teploty, přeháňky a bouřky jen lokálně",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/images/03126534.jpeg?itok=3xntwjV1",
    },
  },
  week24: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-svet/rozhovor-ethan-gutmann-jatka-cina-odebirani-organu-falun-gong-ujgurove-zprava_1806221100_hm",
      title: "Čína staví devět krematorií pro půl milionu vězňů. Selhali jsme, děsí se autor Jatek",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/ethan_gutmann_danelo_180620-140828_mda_1.jpg?itok=hVP1vzCc",
    },
  },
  week25: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/tatana-mala-diplomova-prace-plagiatorstvi_1806281500_ace",
      title: "Nastupující šéfka justice Taťána Malá podle expertů opisovala v diplomové práci",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/mala-kolaz_180628-162238_ace.jpg?itok=5sgVEBsx",
    },
  },
  week26: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/ministryne-spravedlnosti-tatana-mala-opsana-diplomova-prace_1807031237_per",
      title: "Jasné plagiátorství, říká expert o další diplomové práci ministryně Malé. Označil hned 16 stran textu",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/strana-14_180703-135326_dp.jpg?itok=4MtJEUb_",
    },
  },
  week27: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/vlada-cr-andrej-babis-duvera-2018_1807110800_ako",
      title: "Druhá Babišova vláda získala po více než patnácti hodinách jednání poslanců důvěru",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/p201807110299101_180711-105439_ako.jpeg?itok=qdgxEqb1",
    },
  },
  week28: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/stalking-stalker-ponasledovani-sedm-let_1807160600_ogo",
      title: "Sedm let se stalkerem. Oběť pronásledoval i v cizině, vyhrožuje jí smrtí. Státní zástupce stopl jeho stíhání",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/stalkk_180716-112922_ogo.jpg?itok=VKE0betq",
    },
  },
  week29: {
    ir: {
      url: "https://www.irozhlas.cz/veda-technologie/vesmir/zatmeni-mesice-2018-zive-ted-video-online-hvezdarna-pozorovani-mesic-mars-hvezdy_1807271950_haf",
      title: "Měsíc vstoupil do zemského stínu, šlo o nejdelší zatmění v tomto století. Na řadě míst ale bylo zataženo",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/p201807270933001_180727-221148_haf.jpeg?itok=pphchEWs",
    },
  },
  week30: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/jezero-lhota-nestesti-utonuti_1808031508_hm",
      title: "Neštěstí na jezeře Lhota minutu po minutě: děti byly bez pomoci ve vodě několik hodin",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/3_180803-132139_bar.jpg?itok=o_kKGZlh",
    },
  },
  week31: {
    ir: {
      url: "https://www.irozhlas.cz/veda-technologie/veda/globalni-oteplovani-vedci-varuji-dominovy-efekt_1808071701_dbr",
      title: ",Doufáme, že se pleteme.' Vědci varují před spuštěním dominového efektu oteplování",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/images/03402101.jpeg?itok=RZ56vCnG",
    },
  },
  week32: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-svet/janov-zreceni-mostu-italie-dalnice_1808141240_dbr",
      title: "Desítky mrtvých po kolapsu dálničního mostu v italském Janově. Mezi zraněnými je i český řidič",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/2018-08-14t134353z_1_180814-182132_jak.jpg?itok=Ocd-02CL",
    },
  },
  week33: {
    ir: {
      url: "https://www.irozhlas.cz/volby/obecni-volby-2018-politika-kandidatky-demografie_1808231045_jab",
      title: "Interaktivní kandidátky: proklikejte si, kdo kandiduje, kdo obhajuje a kdo přestoupil",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/komunalni-volby_180220-114013_ace.png?itok=f5eYuT3e",
    },
  },
  week34: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/karel-rehka-informacni-valka-rusko-armada-rozhovor_1808310600_ogo",
      title: "V Česku probíhá informační válka, jsme testovací laboratoří Ruska, přiznává brigádní generál Řehka",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/karel_rehka_01_180830-182057_mda.jpg?itok=LCJAk6ZL",
    },
  },
  week35: {
    ir: {
      url: "https://www.irozhlas.cz/ekonomika/ceske-drahy-slevy-jizdne-tarif-student-senior_1809031830_pla",
      title: "Dospělý za 295 korun, student za 121. České dráhy změnou výpočtu ceny jízdenky vydělávají na nových slevách",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/img_6632_180410-133852_ace.jpg?itok=SgcVhbkH",
    },
  },
  week36: {
    ir: {
      url: "https://www.irozhlas.cz/sport/lezeni-sport-adam-ondra-senzory-motion-capture-senzorova-zurnalistika_1809101050_jab",
      title: "Adam Ondra ověšený senzory. Co z něj dělá nejlepšího lezce světa?",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/adam2_180909-150545_jab.jpg?itok=u06wCymb",
    },
  },
  week37: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/rodicovsky-prispevek-rust-materska-cerpani-pece-dite-kompenzace_1809210701_pla",
      title: "Rodičovské příspěvky vzrostou o 40 tisíc. Nárok má i rodič dítěte do čtyř let, který peníze už vyčerpal",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/deti_ilustracni_foto_171218-071219_ako_1.jpg?itok=xO23mcMu",
    },
  },
  week38: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/jan-merta-zadrzeni-hnuti-ano-napis-andrej-babis_1809281156_dbr",
      title: "Zbytky nápisu jsem odstranil, ale nehmotná stránka je nesmytelná, říká Merta o zadržení u stánku ANO",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/42665002_21559765844_180928-105929_dbr.jpg?itok=45b1ki51",
    },
  },
  week39: {
    ir: {
      url: "https://www.irozhlas.cz/volby/komunalni-volby-2018",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/komunalni-volby_180220-114013_ace.png?itok=f5eYuT3e",
    },
  },
  week40: {
    ir: {
      url: "https://www.irozhlas.cz/volby/mapa-okrsky-sousede-komunalni-volby-2018_1810080700_zlo",
      title: "Jak se volilo ve vašem okrsku? Prohlédněte si nejpodrobnější mapu výsledků komunálních voleb",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/cr_181007-234206_zlo.png?itok=njHkAbLx",
    },
  },
  week41: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/prezident-milos-zeman-20-minut-radiozurnalu-cesky-rozhlas-lany-jan-pokorny_1810151705_haf",
      title: "AUDIO: ‚Vyznamenám bojovníky proti ekonomickým zm*dům,' zaútočil Zeman v živém vysílání na Bakalu",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/images/28ebd85c7c94207e3c1b778557d060b5.jpg?itok=NSeKxE1n",
    },
  },
  week42: {
    ir: {
      url: "https://www.irozhlas.cz/ekonomika/zdenek-petran-numismatik-pametni-mince-ceska-narodni-banka-cnb-masaryk-benes_1810251348_jgr",
      title: "Numismatik: Čekat na mince v dlouhých frontách je pitomost, za 14 dní po nich neštěkne pes",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/dqqgtrewkaeve5m_181024-095704_haf.jpg?itok=yisvHbxO",
    },
  },
  week43: {
    ir: {
      url: "https://www.irozhlas.cz/ekonomika/robotizace-vyzkum-cesko-nahrazeni-prace_1810300700_zlo",
      title: "Skladníka zastoupí robot v práci na 81 procent. Zkuste si, jak je na tom vaše povolání",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/industry-3080550_192_181029-201258_zlo.jpg?itok=73arM7iE",
    },
  },
  week44: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/capi-hnizdo-dukazy-andrej-babis-olaf-soud-faltynek_1811060555_ace",
      title: "10 důkazů policie v kauze Čapí hnízdo: Babišovy e-maily, dohled na staveništi, report banky i platba za akcie",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/capi_hnizdo_g2_181105-192838_bar.jpg?itok=qp9hGYwc",
    },
  },
  week45: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/andrej-babis-kauza-capi-hnizdo-andrej-babis-mladsi-adriana-bobekova_1811130555_ogo",
      title: "Kauza Čapí hnízdo: obě Babišovy děti tvrdí, že jsou duševně nemocné. Vyšetřovatelé jim to nevěří",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/babis_kolaz2_181112-150840_ogo.jpg?itok=744pRFr7",
    },
  },
  week46: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/mapa-kvality-zivota-median-prokop-kscm-spd_1811220600_jab",
      title: "Interaktivní mapa kvality života: nastavte si vlastní kritéria a podívejte se, ve kterých obcích se dobře žije",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/xxx_181121-201856_jab.png?itok=CKMizXNL",
    },
  },
  week47: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/andrej-babis-mladsi-pritelkyne-krym-e-mail-petr-protopopov_1811291020_ako",
      title: "‚Můj otec potřeboval, abych zmizel.' Co napsal premiérův syn v e-mailu policii?",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/abml7_181128-154016_rak.png?itok=H8A_zNFc",
    },
  },
  week48: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/naklady-poslanecke-kluby-dotace-provoz-ano-pirati-ods-spd-cssd-kscm-top-09-stan_1812030600_tec",
      title: "Inventura výdajů poslaneckých klubů: Piráti utratili 33 tisíc za ovoce, ANO 136 tisíc za mediální analýzu",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/snemovna1004_2_danel_180413-093256_kno_0.jpg?itok=rz__rSK2",
    },
  },
  week49: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/bezpecnostni-informacni-sluzba-bis-milos-zeman-karel-randak_1812130600_ogo",
      title: "Zemanovi bych už neposlal žádnou zprávu, dokonce ani výroční, říká Randák o útoku na BIS",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/04f1c8fe-16ed-402d-9_181212-200810_cen.jpeg?itok=0-PEyZW5",
    },
  },
  week50: {
    ir: {
      url: "https://www.irozhlas.cz/zpravy-domov/vysetrovatele-kauzy-capi-hnizdo-pavla-nevtipila-sklonuje-rozsudek-pripadu_1812180600_rak",
      title: "Spojení vyšetřovatele kauzy Čapí hnízdo s Rittigem? ‚Říkali mu Nevťa a spoléhali na něj,' uvádí rozsudek",
      img: "https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/nevtipil_saroch_dane_170830-202701_haf.jpg?itok=pQfft_9r",
    },
  },
}; */
export default data;
