// The slots every card shows, in this order. Same list on every card = uniform cards.
const SLOTS = [
  "Muzzle", "Barrel", "Laser", "Optic", "Stock",
  "Underbarrel", "Ammunition", "Rear Grip", "Perk"
];

// The filter buttons, in this order. Add or remove names to change the buttons.
const CATEGORIES = [
  "Assault Rifle",
  "SMG",
  "LMG",
  "Sniper",
  "Shotgun",
  "Pistol",
  "Melee"
];

// Your guns. Each gun is one block between { and },
const weapons = [

  {
    name: "VMP",
    type: "SMG",
    build: "Stable af",
    attachments: {
      "Muzzle": "",
      "Barrel": "Heavy Barrel",
      "Laser": "Phoenix Laser",
      "Optic": "",
      "Stock": "Bandit Adjustable Pad",
      "Underbarrel": "",
      "Ammunition": "Mag Drum",
      "Rear Grip": "Integrated Grip Set",
      "Perk": ""
    }
  },

  {
    name: "Static - HV",
    type: "SMG",
    build: "",
    attachments: {
      "Muzzle": "Kastovia DX90",
      "Barrel": "Auger 840 Light Barrel",
      "Laser": "Kimura RYL33 Laser",
      "Optic": "",
      "Stock": "Spry 34 Light Stock",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "",
      "Perk": "Disable"
    }
  },

  {
    name: "Grau 5.56",
    type: "Assault Rifle",
    build: "",
    attachments: {
      "Muzzle": "Monolithic Suppressor",
      "Barrel": "ZLR Drifter A-08",
      "Laser": "",
      "Optic": "Classic Red Dot Sight",
      "Stock": "No Stock",
      "Underbarrel": "",
      "Ammunition": "50 Round Mag",
      "Rear Grip": "",
      "Perk": ""
    }
  },

  {
    name: "BAL-27",
    type: "Assault Rifle",
    build: "Mythic build",
    attachments: {
      "Muzzle": "",
      "Barrel": "Crown-H3 Barrel",
      "Laser": "Corio LAZ-44 V3",
      "Optic": "Classic Red Dot Sight",
      "Stock": "Clarent Light Stock",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "",
      "Perk": "Disable"
    }
  },

  {
    name: "KRM-262",
    type: "Shotgun",
    build: "",
    attachments: {
      "Muzzle": "Marauder Suppressor",
      "Barrel": "RTC Light Extended Barrel",
      "Laser": "MIP Laser 5mW",
      "Optic": "",
      "Stock": "",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "Stippled Grip Tape",
      "Perk": "Speed Up Kill"
    }
  },

  {
    name: "M13",
    type: "Assault Rifle",
    build: "parang stable SMG 'to boi",
    attachments: {
      "Muzzle": "Monolithic Suppressor",
      "Barrel": "RTC Mini Barrel / RTC Heavy long Barrel",
      "Laser": "",
      "Optic": "Classic Red Dot Sight",
      "Stock": "No Stock",
      "Underbarrel": "",
      "Ammunition": "Large Extended Mag B",
      "Rear Grip": "",
      "Perk": ""
    }
  },

  {
    name: "Fennec",
    type: "SMG",
    build: "Talentadong fennec tumatambling [tanggalin yung barrel if gusto ng ammunition] ",
    attachments: {
      "Muzzle": "Monolithic Suppressor",
      "Barrel": "MIP Extended Light Barrel",
      "Laser": "",
      "Optic": "Classic Red Dot Sight",
      "Stock": "No Stock / RTC Steady Stock",
      "Underbarrel": "Ranger Foregrip / Operator Foregrip",
      "Ammunition": "",
      "Rear Grip": "",
      "Perk": ""
    }
  },

  {
    name: "CR56-AMAX",
    type: "Assault Rifle",
    build: "Long range build",
    attachments: {
      "Muzzle": "",
      "Barrel": "MIP Custom Long",
      "Laser": "OWC - Laser Tactical",
      "Optic": "",
      "Stock": "No Stock",
      "Underbarrel": "",
      "Ammunition": "Extended Mag A",
      "Rear Grip": "",
      "Perk": "Disable"
    }
  },

  {
    name: "Locus",
    type: "Sniper",
    build: "",
    attachments: {
      "Muzzle": "",
      "Barrel": "YKM Lightweight Short",
      "Laser": "OWC Laser - Tactical",
      "Optic": "",
      "Stock": "OWC Skeleton Stock",
      "Underbarrel": "",
      "Ammunition": "OWC Stopping Power Reload / 10 Round Reload",
      "Rear Grip": "Stippled Grip Tape",
      "Perk": ""
    }
  },

  {
    name: "ISO Hemlock",
    type: "Assault Rifle",
    build: "beta testing phase gun, not sure if effective sa RG",
    attachments: {
      "Muzzle": "",
      "Barrel": "Series 4-MR",
      "Laser": "Corio LAZ-44 V3",
      "Optic": "Classic Red Dot Sight",
      "Stock": "Raid 90",
      "Underbarrel": "",
      "Ammunition": "45 Round Mags",
      "Rear Grip": "",
      "Perk": ""
    }
  },

  {
    name: "CBR-4",
    type: "SMG",
    build: "",
    attachments: {
      "Muzzle": "Monolithic Suppressor",
      "Barrel": "OWC Marksman",
      "Laser": "OWC Laser - Tactical",
      "Optic": "",
      "Stock": "YKM Light Stock",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "Granulated Grip Tape",
      "Perk": ""
    }
  },

  {
    name: "Swtichblade X9",
    type: "SMG",
    build: "pang makulit / rushdr build",
    attachments: {
      "Muzzle": "Monolithic Suppressor",
      "Barrel": "MIP Extended Light Barrel",
      "Laser": "",
      "Optic": "",
      "Stock": "OWC Skeleton Stock",
      "Underbarrel": "Ranger Foregrip",
      "Ammunition": "Extended Mag A",
      "Rear Grip": "",
      "Perk": ""
    }
  },

  {
    name: "DL Q33",
    type: "Sniper",
    build: "OG",
    attachments: {
      "Muzzle": "",
      "Barrel": "MIP Light",
      "Laser": "OWC Laser - Tactical",
      "Optic": "",
      "Stock": "YKM Combat Stock",
      "Underbarrel": "",
      "Ammunition": "Extended Mag A",
      "Rear Grip": "",
      "Perk": ""
    }
    
  },

  {
    name: "Katana",
    type: "Melee",
    build: "",
    attachments: {
      "Muzzle": "Bakit mo tinignan pare? HAHAHH laLAAA",
      "Barrel": "",
      "Laser": "",
      "Optic": "",
      "Stock": "",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "",
      "Perk": ""
    }
    
  },

  {
    name: "S36",
    type: "LMG",
    build: "",
    attachments: {
      "Muzzle": "",
      "Barrel": "Compagnie Generale Server - Light",
      "Laser": "",
      "Optic": "Classic Red Dot Sight",
      "Stock": "YKM Combat Stock",
      "Underbarrel": "",
      "Ammunition": "110 Round Belt",
      "Rear Grip": "Stippled Grip Tape",
      "Perk": ""
    }
  },

  {
    name: "MG42",
    type: "LMG",
    build: "speechless SPAM gun",
    attachments: {
      "Muzzle": "",
      "Barrel": "13.4 SOR Cut Down",
      "Laser": "",
      "Optic": "",
      "Stock": "Bandit Steady Stock",
      "Underbarrel": "Striker Foregrip",
      "Ammunition": "Vandal Speed Loader",
      "Rear Grip": "Scrapper Grip",
      "Perk": ""
    }
  },

  {
    name: "Holger 26",
    type: "LMG",
    build: "Pandemic build",
    attachments: {
      "Muzzle": "OWC Light Suppressor",
      "Barrel": "MIP Light",
      "Laser": "",
      "Optic": "Classic Red Dot",
      "Stock": "YKM Combat Stock",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "Stippled / Granulated Grip Tape",
      "Perk": "remove the barrel for a DISABLE Perk"
    }
  },

  {
    name: "Machine Pistol",
    type: "Pistol",
    build: "",
    attachments: {
      "Muzzle": "Strike Compensator",
      "Barrel": "VDD 35MM Short",
      "Trigger Action": "Lightweight Trigger",
      "Optic": "",
      "Stock": "",
      "Underbarrel": "",
      "Ammunition": "7.62 Gorenko 40 Round Mag",
      "Rear Grip": "Leather Grip",
      "Perk": ""
    }
  },

  {
    name: "L-CAR 9",
    type: "Pistol",
    build: "",
    attachments: {
      "Muzzle": "Agency Suppressor",
      "Barrel": "OWC Ranger",
      "Laser": "Aim Assist Laser",
      "Optic": "",
      "Stock": "Agile Stock",
      "Underbarrel": "",
      "Ammunition": "",
      "Rear Grip": "Rustle Grip Tape",
      "Perk": ""
    }
  },

  // ADD YOUR NEXT GUN BELOW THIS LINE (see Step 7)

];