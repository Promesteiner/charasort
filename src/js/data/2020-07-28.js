dataSetVersion = "2020-07-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Agency", tooltip: "Starcross, Heavencross, and Fatecross", key: "SC" },
      { name: "Black Widow", tooltip: "Stupid Occult Detective Bullshit", key: "BW" },
      { name: "Suicide Kings", tooltip: "Local Tomboy Forced to Gamble Soul", key: "SK" },
      { name: "Sweet Malus", tooltip: "Gods Go on Road Trip, Catastrophe Ensues", key: "SM" },
      { name: "Roleplays and etc.", tooltip: "Characters made for roleplays or for some other setting", key: "RP" },     
      { name: "Nightmare Creatures", tooltip: "Things I Saw In My Dreams", key: "NC" },               
      { name: "Rafflesia", tooltip: "Useless Vampire Shotguns Bloodbag", key: "RN" }     
    ]
  },
 {
  name: 'Remove Irrelevant Characters',
  key: 'notwiki',
  tooltip: 'Check this to get the characters not on the wiki yet, or that are otherwise irrelevant to the FC/OC community, out of there.',
  checked: true
  },
 {
  name: 'Remove Boys',
  key: 'boy',
  tooltip: 'Check this to get the boys out of there.',
  checked: false
  },
 {
  name: 'Remove Girls',
  key: 'girl',
  tooltip: 'Check this to get the girls out of there for some reason.',
  checked: false
  },
 {
  name: 'Remove Misc.',
  key: 'nb',
  tooltip: 'Check this to get the miscellaneously gendered characters out of there.',
  checked: false
  }
];

dataSet[dataSetVersion].characterData = [
   {
    name: "Minna Yamane",
    img: "kuM1zBQ.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "EQUINOX",
    img: "AJbXI4b.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Kyarne",
    img: "92JxBkP.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Anya Kimura",
    img: "uAGnMJT.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Enkh Khenbishiin",
    img: "Ao4FKEf.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Milky Way",
    img: "vp33NDQ.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Mariposa",
    img: "3Vz0Vrf.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Shrike",
    img: "pblpBOS.png",
    opts: {
      series: [ "SC" ],
      nb: true
    }
  },
  {
    name: "Alice Kang (SOLSTICE)",
    img: "a6FIIqG.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "IEniRrn.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Neptune",
    img: "9ZsujHY.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },  
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "Mmgnyz5.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Condor",
    img: "hPWTHVf.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      nb: true
    }
  },
  {
    name: "Toya Pastore (Trance)",
    img: "aS7JM2P.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Instant",
    img: "pKtTaV4.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "qR8rLrg.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Warden",
    img: "XcYXVhN.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Langosta",
    img: "R0mabWt.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Deleter",
    img: "nh5yCGO.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Hanael (Observer)",
    img: "LxeuXeB.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  }, 
  {
    name: "Harahel",
    img: "gIVffti.png",
    opts: {
      series: [ "SC" ],
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "N96ekTR.png",
    opts: {
      series: [ "SC" ],
      nb: true
    }
  },
  {
    name: "Canace",
    img: "QQY4NxY.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Baphomet",
    img: "cLfQC3U.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "MA98fF2.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "SrwQxHN.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "Vcd4Fo0.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Hexenn",
    img: "ayRlyPs.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "9YBTuIl.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  }, 
  {
    name: "Arista",
    img: "fN5wrFD.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Morsitans",
    img: "m3iYl4U.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Murmur",
    img: "TpsqFBk.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Beelzebub",
    img: "7n81hHu.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Azrael",
    img: "it9jzWs.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Mastema",
    img: "0KCKfO7.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Abaddon",
    img: "PLUhF85.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Uriel",
    img: "tIYGcfp.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "OZ8LA4q.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "AktH9Js.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "K80sWZ1.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "2gJr08M.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "SXrNNYO.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },

  {
    name: "Sophia Astaphe",
    img: "fh0XvPt.png",
    opts: {
      series: [ "SC" ],
      girl: true
    }
  },
  {
    name: "Logos (Synthesizer)",
    img: "DW4eEMx.png",
    opts: {
      series: [ "SC" ],
      nb: true
    }
  },
  {
    name: "Logos Prime",
    img: "l0CuGXp.png",
    opts: {
      series: [ "SC" ],
      boy: true
    }
  },
  {
    name: "Zoe",
    img: "KsuXSol.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Sige",
    img: "WP2oweu.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Horos Astaphe",
    img: "6va41xY.png",
    opts: {
      series: [ "SC" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Iris Widow",
    img: "yjrvPwD.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Sherry Watson",
    img: "R1TGVOx.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Ivy Branwen",
    img: "phzxd54.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Dorothy",
    img: "0NLww72.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Finn Schrieve",
    img: "hNBgn7h.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      boy: true     
    }
  },  
  {
    name: "Annis Doyle",
    img: "HeOut1S.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Blake Corbet",
    img: "FBLka2q.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Hanami Yako",
    img: "jNjZX24.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Trespasser",
    img: "Ur1CCfC.png",
    opts: {
      series: [ "BW" ],
      nb: true
    }
  },  
  {
    name: "Monika Čierny",
    img: "WhBGMWX.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Roxanne Royale",
    img: "d9zX9K3.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "rNBgOjx.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "4HCPHq3.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Daniel Sharpe",
    img: "DKtB6hv.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Noelle Germaine",
    img: "F2DfRbe.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Giselle Glamour",
    img: "cb6kOD1.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "The Wild Card",
    img: "0KmwDGp.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      nb: true
    }
  },      
  {
    name: "The Ace of Spades",
    img: "OSHj8eD.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      nb: true
    }
  },
  {
    name: "Justine Royale",
    img: "eunKzz3.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Nemesis Cain",
    img: "YvDFd0z.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Eris Strife",
    img: "vrokAWb.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Momo",
    img: "08xvyoJ.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Momus",
    img: "dqSyr9x.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Yan",
    img: "aR8jGVc.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      nb: true
    }
  },
  {
    name: "Merche Ramón",
    img: "OG0v6Bm.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Anastasia Friede Ende",
    img: "orUwyaM.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "9xUZZgp.png",
    opts: {
      series: [ "SK", "RP" ],
      girl: true
    }
  },
  {
    name: "Felicia Mink",
    img: "yJ6tONE.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },    
  {
    name: "Sidney Lynch",
    img: "ba7W4Un.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "5JAjn4N.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "S1yRjDs.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Lili Kiraly",
    img: "xkzCQ4P.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },  
  {
    name: "Akira Kogure (Drowning Pool)",
    img: "wp1KrEP.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },  
  {
    name: "Suicide Taker",
    img: "3b3xEQZ.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Fisher Perry",
    img: "gCTlOdJ.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Anglermouth",
    img: "8eXEb12.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Peek",
    img: "wNMKG0z.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Rafflesia Nightingale",
    img: "LuFZaak.png",
    opts: {
      series: [ "RN" ],
      notwiki: true,
      girl: true
    }
  }
];
