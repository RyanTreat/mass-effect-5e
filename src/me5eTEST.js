Hooks.once("init", () => {

	CONFIG.DND5E.itemProperties = foundry.utils.deepClone(CONFIG.DND5E.itemProperties);
	CONFIG.DND5E.validProperties = foundry.utils.deepClone(CONFIG.DND5E.validProperties);

	CONFIG.DND5E.currencies = {
	  gp: { label: "Credits", abbreviation: "cr" }
	};
  
	
//Create new weapon properties
    CONFIG.DND5E.itemProperties.arc = {
        label: "Arc",
        isPhysical: true,
        reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.coUqupVCukVK3vFc.JournalEntryPage.viRtMNVmzOHD5pTX"
    };
    CONFIG.DND5E.itemProperties.bfr = {
        label: "Burst Fire",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.dtp = {
        label: "Double Tap",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.heat = {
        label: "Heat",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.hip = {
        label: "Hip Fire",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.mel = {
        label: "Melee",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.rcl = {
        label: "Recoil",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.slt = {
        label: "Silent",
        isPhysical: true
    };
    CONFIG.DND5E.itemProperties.vtd = {
        label: "Vented",
        isPhysical: true
    };

    //Add new weapon properties to "valid"
    CONFIG.DND5E.validProperties.weapon.add("arc");
    CONFIG.DND5E.validProperties.weapon.add("bfr");
    CONFIG.DND5E.validProperties.weapon.add("dtp");
    CONFIG.DND5E.validProperties.weapon.add("heat");
    CONFIG.DND5E.validProperties.weapon.add("hip");
    CONFIG.DND5E.validProperties.weapon.add("mel");
    CONFIG.DND5E.validProperties.weapon.add("rcl");
    CONFIG.DND5E.validProperties.weapon.add("slt");
    CONFIG.DND5E.validProperties.weapon.add("vtd");

    //Remove depricated weapon properties from "valid"
    CONFIG.DND5E.validProperties.weapon.delete("ada");
    CONFIG.DND5E.validProperties.weapon.delete("amm");
    CONFIG.DND5E.validProperties.weapon.delete("fir");
    CONFIG.DND5E.validProperties.weapon.delete("foc");
    CONFIG.DND5E.validProperties.weapon.delete("lod");
    CONFIG.DND5E.validProperties.weapon.delete("mgc");
    CONFIG.DND5E.validProperties.weapon.delete("rel");
    CONFIG.DND5E.validProperties.weapon.delete("ret");
    CONFIG.DND5E.validProperties.weapon.delete("sil");


//Create new skills
    CONFIG.DND5E.skills.ele = {
        label: "Electronics",
        ability: "int",
        fullkey: "electronics",
        reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.R0dKAZvHn6z3oylI.JournalEntryPage.xUwZdpm6F1PUa2mK",
        icon: "" //#TODO
    };
    CONFIG.DND5E.skills.eng = {
        label: "Engineering",
        ability: "int",
        fullkey: "engineering",
        reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.R0dKAZvHn6z3oylI.JournalEntryPage.qXY39DJTcAbz0r6B",
        icon: "" //#TODO
    };
    CONFIG.DND5E.skills.sci = {
        label: "Science",
        ability: "int",
        fullkey: "science",
        reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.R0dKAZvHn6z3oylI.JournalEntryPage.pmQWAbKyuF5kkgNf",
        icon: "" //#TODO
    };
    CONFIG.DND5E.skills.veh = {
        label: "Vehicle Handling",
        ability: "dex",
        fullkey: "vehiclehandling",
        reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.R0dKAZvHn6z3oylI.JournalEntryPage.xVjyRLNRenSuPieh",
        icon: "" //#TODO
    };

    //Remove depricated skill
    delete CONFIG.DND5E.skills.ani;
    delete CONFIG.DND5E.skills.arc;
    delete CONFIG.DND5E.skills.nat;
    delete CONFIG.DND5E.skills.rel;


//Create new equipment types
    CONFIG.DND5E.miscEquipmentTypes.program = "Program";
    CONFIG.DND5E.miscEquipmentTypes.armMod = "Armor Mod";
    CONFIG.DND5E.miscEquipmentTypes.wepMod = "Weapon Mod";
    CONFIG.DND5E.miscEquipmentTypes.bodArm = "Body Armor";

    //Remove depricated equipment types
    delete CONFIG.DND5E.miscEquipmentTypes.wand;
    delete CONFIG.DND5E.miscEquipmentTypes.rod;
    delete CONFIG.DND5E.miscEquipmentTypes.wondrous;


//Create new consumable types
    CONFIG.DND5E.consumableTypes.singProg = "Single-Use Program";
    CONFIG.DND5E.consumableTypes.grenade = "Grenade";
    CONFIG.DND5E.consumableTypes.narcotic = "Narcotic";

    //Remove depricated consumable types
    delete CONFIG.DND5E.consumableTypes.scroll;
    delete CONFIG.DND5E.consumableTypes.wand;
    delete CONFIG.DND5E.consumableTypes.rod; 
    delete CONFIG.DND5E.consumableTypes.potion;

    
//Create new weapon types
    CONFIG.DND5E.weaponTypes.aRifle = "Assault Rifle";
    CONFIG.DND5E.weaponTypes.hPistol = "Heavy Pistol";
    CONFIG.DND5E.weaponTypes.smg = "Sub-machine Gun";
    CONFIG.DND5E.weaponTypes.sGun = "Shotgun";
    CONFIG.DND5E.weaponTypes.sRifle = "Sniper Rifle";
    CONFIG.DND5E.weaponTypes.melee = "Melee";
    CONFIG.DND5E.weaponTypes.heavy = "Heavy";

    CONFIG.DND5E.weaponIds.assaultRifle = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.mdMOsXHsH1ExSyk7";
    CONFIG.DND5E.weaponIds.heavyPistol = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.rCSJsC4y6JT1zSQv";
    CONFIG.DND5E.weaponIds.subMachineGun = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.yFN7A6oYEAA10YwH";
    CONFIG.DND5E.weaponIds.shotGun = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.Nn2dPAJon6cJUaLe";
    CONFIG.DND5E.weaponIds.sniperRifle = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.XGCY9ZqdPuKGdzpV";
    CONFIG.DND5E.weaponIds.melee = "Compendium.mass-effect-5e.item-weapons-me5e-r.Item.mAtAsxTcfYYkKTIZ";

    //Remove depricated weapon types
    delete CONFIG.DND5E.weaponTypes.simpleM;
    delete CONFIG.DND5E.weaponTypes.simpleR;
    delete CONFIG.DND5E.weaponTypes.martialM;
    delete CONFIG.DND5E.weaponTypes.martialR;
    delete CONFIG.DND5E.weaponTypes.natural;
    delete CONFIG.DND5E.weaponTypes.improv;
    delete CONFIG.DND5E.weaponTypes.siege;

    delete CONFIG.DND5E.weaponProficiencies.sim;
    delete CONFIG.DND5E.weaponProficiencies.mar;

    delete CONFIG.DND5E.weaponIds.battleaxe;
    delete CONFIG.DND5E.weaponIds.blowgun;
    delete CONFIG.DND5E.weaponIds.club;
    delete CONFIG.DND5E.weaponIds.dagger;
    delete CONFIG.DND5E.weaponIds.dart;
    delete CONFIG.DND5E.weaponIds.flail;
    delete CONFIG.DND5E.weaponIds.glaive;
    delete CONFIG.DND5E.weaponIds.greataxe;
    delete CONFIG.DND5E.weaponIds.greatclub;
    delete CONFIG.DND5E.weaponIds.greatsword;
    delete CONFIG.DND5E.weaponIds.halberd;
    delete CONFIG.DND5E.weaponIds.handaxe;
    delete CONFIG.DND5E.weaponIds.handcrossbow;
    delete CONFIG.DND5E.weaponIds.heavycrossbow;
    delete CONFIG.DND5E.weaponIds.javelin;
    delete CONFIG.DND5E.weaponIds.lance;
    delete CONFIG.DND5E.weaponIds.lightcrossbow;
    delete CONFIG.DND5E.weaponIds.lighthammer;
    delete CONFIG.DND5E.weaponIds.longbow;
    delete CONFIG.DND5E.weaponIds.longsword;
    delete CONFIG.DND5E.weaponIds.mace;
    delete CONFIG.DND5E.weaponIds.maul;
    delete CONFIG.DND5E.weaponIds.morningstar;
    delete CONFIG.DND5E.weaponIds.net;
    delete CONFIG.DND5E.weaponIds.pike;
    delete CONFIG.DND5E.weaponIds.quarterstaff;
    delete CONFIG.DND5E.weaponIds.rapier;
    delete CONFIG.DND5E.weaponIds.scimitar;
    delete CONFIG.DND5E.weaponIds.shortsword;
    delete CONFIG.DND5E.weaponIds.sickle;
    delete CONFIG.DND5E.weaponIds.spear;
    delete CONFIG.DND5E.weaponIds.shortbow;
    delete CONFIG.DND5E.weaponIds.sling;
    delete CONFIG.DND5E.weaponIds.trident;
    delete CONFIG.DND5E.weaponIds.warpick;
    delete CONFIG.DND5E.weaponIds.warhammer;
    delete CONFIG.DND5E.weaponIds.whip;

    
//Add Item Rarity
    CONFIG.DND5E.itemRarity.spectre = 'Spectre'
    delete CONFIG.DND5E.itemRarity.legendary;
    delete CONFIG.DND5E.itemRarity.artifact;

//Create tools
    CONFIG.DND5E.toolTypes.starship = "Starship";

    CONFIG.DND5E.tools.armorSmith = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.0fakcHNiJ3JxYGB4"
    };

    CONFIG.DND5E.tools.chemist = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.HoZ3Ieg0SsNpaVJO"
    };

    CONFIG.DND5E.tools.hacking = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.Lu8joXlut3wrp0jm"
    };

    CONFIG.DND5E.tools.medical = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.WjxpzqH7SSC33uS4"
    };

    CONFIG.DND5E.tools.musical = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.wupPhivdYQifa0cL"
    };

    CONFIG.DND5E.tools.tailor = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.9KxP2pyyNxOpHDJE"
    };

    CONFIG.DND5E.tools.weaponSmith = {
        ability: "int",
        id: "Compendium.mass-effect-5e.item-gear-me5e-r.Item.tUHnf4csZ5NLvcmJ"
    };

    CONFIG.DND5E.tools.starDrive = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.XUcyHg59IWKfgbHD"
    };

    CONFIG.DND5E.tools.starEWS = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.AuVEMnBZo9zvqASa"
    };

    CONFIG.DND5E.tools.starHelm = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.Yc3f7wDEmPLQ6hfH"
    };

    CONFIG.DND5E.tools.starNav = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.NTxzvwfl58SOmHoB"
    };

    CONFIG.DND5E.tools.starSSC = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.jxXkdRqkQWLefnMf"
    };

    CONFIG.DND5E.tools.starWeapons = {
        ability: "int",
        id: "Compendium.mass-effect-5e.vehicle-system-actions-me5e-r.Item.oxqbqZMgsPkyhNW6"
    };

    delete CONFIG.DND5E.tools.alchemist;
    delete CONFIG.DND5E.tools.bagpipes;
    delete CONFIG.DND5E.tools.calligrapher;
    delete CONFIG.DND5E.tools.carpenter;
    delete CONFIG.DND5E.tools.cartographer;
    delete CONFIG.DND5E.tools.cobbler;
    delete CONFIG.DND5E.tools.drum;
    delete CONFIG.DND5E.tools.dulcimer;
    delete CONFIG.DND5E.tools.flute;
    delete CONFIG.DND5E.tools.forg;
    delete CONFIG.DND5E.tools.glassblower;
    delete CONFIG.DND5E.tools.herb;
    delete CONFIG.DND5E.tools.horn;
    delete CONFIG.DND5E.tools.jeweler;
    delete CONFIG.DND5E.tools.leatherworker;
    delete CONFIG.DND5E.tools.lute;
    delete CONFIG.DND5E.tools.lyre;
    delete CONFIG.DND5E.tools.mason;
    delete CONFIG.DND5E.tools.navg;
    delete CONFIG.DND5E.tools.panflute;
    delete CONFIG.DND5E.tools.potter;
    delete CONFIG.DND5E.tools.shawm;
    delete CONFIG.DND5E.tools.smith;
    delete CONFIG.DND5E.tools.viol;
    delete CONFIG.DND5E.tools.weaver;
    delete CONFIG.DND5E.tools.woodcarver;

    delete CONFIG.DND5E.toolTypes.music;
	
  // --- Add Biotic ---
		CONFIG.DND5E.spellSchools.biotic = {
		label: "Biotic",
		icon: "modules/mass-effect-5e/assets/icons/classes/Biotic.svg",
		fullKey: "biotic",
	  };
  // --- Add Tech ---
	  CONFIG.DND5E.spellSchools.tech = {
		label: "Tech",
		icon: "modules/mass-effect-5e/assets/icons/classes/Tech.svg",
		fullKey: "tech",
	  }
  
	CONFIG.DND5E.spellSchools.combat = {
		label: "Combat",
		icon: "modules/mass-effect-5e/assets/icons/classes/Combat.svg",
		fullKey: "combat",
	  };
		
//Add senses
    CONFIG.DND5E.senses.tremorsense = 'Infrared';
	
	CONFIG.DND5E.conditionTypes.lifted = {
	  name: "EFFECT.DND5E.StatusLifted",
	  img: "modules/mass-effect-5e/assets/icons/lifted.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.x4Ql5AfEVs77TC5m",
	  pseudo: false,
	  statuses: ["restrained"]
	};

	CONFIG.DND5E.conditionTypes.frozen = {
	  name: "EFFECT.DND5E.StatusFrozen",
	  img: "modules/mass-effect-5e/assets/icons/frozen.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.h2DSPh0eoZOGg0e1",
	  pseudo: false,
	  statuses: ["incapacitated"]
	};
	
	CONFIG.DND5E.conditionTypes.pcold = {
	  name: "EFFECT.DND5E.Statuspcold",
	  img: "modules/mass-effect-5e/assets/icons/pcold.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.bA4tUUWDD9W0KkcH",
	  pseudo: false,
	  statuses: ["Primed: Cold"]
	};
	
	CONFIG.DND5E.conditionTypes.pfire = {
	  name: "EFFECT.DND5E.Statuspfire",
	  img: "modules/mass-effect-5e/assets/icons/pfire.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.x0O7UvbkK0CP8Y6m",
	  pseudo: false,
	};
	
	CONFIG.DND5E.conditionTypes.pforce = {
	  name: "EFFECT.DND5E.Statuspforce",
	  img: "modules/mass-effect-5e/assets/icons/pforce.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.wD28HUD1g2STaTB1",
	  pseudo: false,
	};
	
	CONFIG.DND5E.conditionTypes.plightning = {
	  name: "EFFECT.DND5E.Statusplightning",
	  img: "modules/mass-effect-5e/assets/icons/plightning.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.juzBx97rjwqXLSIY",
	  pseudo: false,
	};
	
	CONFIG.DND5E.conditionTypes.pnecrotic = {
	  name: "EFFECT.DND5E.Statuspnecrotic",
	  img: "modules/mass-effect-5e/assets/icons/pnecrotic.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.apVuR8NpS4tCt3za",
	  pseudo: false,
	};
	
	CONFIG.DND5E.conditionTypes.pradiant = {
	  name: "EFFECT.DND5E.Statuspradiant",
	  img: "modules/mass-effect-5e/assets/icons/pradiant.svg",
	  reference: "Compendium.mass-effect-5e.me5e-r-rules.JournalEntry.fjrkdCYzMtGncBjh.JournalEntryPage.qexa4XoQ8DEhFUAA",
	  pseudo: false,
	};
	
	CONFIG.DND5E.itemProperties.det = {
		label: "DND5E.ITEM.Property.Detonates",
		icon: "",
		abbreviation: "DND5E.ComponentDetonatesAbbr",
		reference: "",
		isTag: true
	};
	
	CONFIG.DND5E.itemProperties.primesCold = {
		label: "DND5E.ITEM.Property.PrimesCold",
		icon: "modules/mass-effect-5e/assets/icons/primed-cold.svg",
		abbreviation: "DND5E.ComponentPrimesColdAbbr",
		reference: "",
		isTag: true
	};

	  CONFIG.DND5E.itemProperties.primesFire = {
		label: "DND5E.ITEM.Property.PrimesFire",
		icon: "modules/mass-effect-5e/assets/icons/primed-fire.svg",
		abbreviation: "DND5E.ComponentPrimesFireAbbr",
		reference: "",
		isTag: true
	};

	  CONFIG.DND5E.itemProperties.primesForce = {
		label: "DND5E.ITEM.Property.PrimesForce",
		icon: "",
		abbreviation: "DND5E.ComponentPrimesForceAbbr",
		reference: "",
		isTag: true
	};

	  CONFIG.DND5E.itemProperties.primesLightning = {
		label: "DND5E.ITEM.Property.PrimesLightning",
		icon: "",
		abbreviation: "DND5E.ComponentPrimesLightningAbbr",
		reference: "",
		isTag: true
	};
	  
	  CONFIG.DND5E.itemProperties.primesNecrotic = {
		label: "DND5E.ITEM.Property.PrimesNecrotic",
		icon: "",
		abbreviation: "DND5E.ComponentPrimesNecroticAbbr",
		reference: "",
		isTag: true
	};

	  CONFIG.DND5E.itemProperties.primesRadiant = {
		label: "DND5E.ITEM.Property.PrimesRadiant",
		icon: "",
		abbreviation: "DND5E.ComponentPrimesRadiantAbbr",
		reference: "",
		isTag: true
	};
	
	// Make it a valid property for spells
	CONFIG.DND5E.validProperties.spell.add("det");
	CONFIG.DND5E.validProperties.spell.add("primesCold");
	CONFIG.DND5E.validProperties.spell.add("primesFire");
	CONFIG.DND5E.validProperties.spell.add("primesForce");
	CONFIG.DND5E.validProperties.spell.add("primesLightning");
	CONFIG.DND5E.validProperties.spell.add("primesNecrotic");
	CONFIG.DND5E.validProperties.spell.add("primesRadiant");
	
	  CONFIG.DND5E.itemProperties.ammo = {
		label: "DND5E.ITEM.Property.Ammo"
	  };
	  CONFIG.DND5E.itemProperties.barrel = {
		label: "DND5E.ITEM.Property.Barrel"
	  };
	  CONFIG.DND5E.itemProperties.body = {
		label: "DND5E.ITEM.Property.Body"
	  };
	  CONFIG.DND5E.itemProperties.magazine = {
		label: "DND5E.ITEM.Property.Magazine"
	  };
	  CONFIG.DND5E.itemProperties.strike = {
		label: "DND5E.ITEM.Property.Strike"
	  };
	  CONFIG.DND5E.itemProperties.grip = {
		label: "DND5E.ITEM.Property.Grip"
	  };
	
	CONFIG.DND5E.validProperties.equipment.add("ammo");
	CONFIG.DND5E.validProperties.equipment.add("barrel");
	CONFIG.DND5E.validProperties.equipment.add("body");
	CONFIG.DND5E.validProperties.equipment.add("magazine");
	CONFIG.DND5E.validProperties.equipment.add("grip");
	CONFIG.DND5E.validProperties.equipment.add("strike");

	
 CONFIG.DND5E.spellcasting.adept = {
    label: "ME5E.BioticCasting",   // your localization key
    type: "multi",                 // multiple spell levels
    cantrips: true,
    prepares: true,                // uses prepared casting rules
    order: 30,                     // position in sheet tabs
    table: [                       
      [2],
      [4],
      [6],
      [7],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6, 1],
      [7, 6, 2],
	  [7, 6, 3],
	  [7, 6, 3],
	  [7, 6, 3, 1],
	  [7, 6, 3, 1],
	  [7, 6, 3, 2],
	  [7, 6, 3, 2],
	  [7, 6, 3, 2, 1],
	  [7, 6, 4, 2, 1],
	  [7, 6, 5, 2, 1],
	  [7, 6, 5, 3, 1],
    ],
    progression: {
      adept: {
        label: "ME5E.AdeptProgression",
        divisor: 1
      }
    }
  };
  
  CONFIG.DND5E.spellcasting.vanguard = {
    label: "ME5E.BioticCasting",
    type: "multi",
    cantrips: true,
    prepares: true,
    order: 31,
    table: [                         // Power Slots by class level
      [],            // 1  → no slots
      [2],           // 2
      [3],           // 3
      [4],           // 4
      [6],           // 5
      [7],           // 6
      [7],           // 7
      [7],           // 8
      [7, 2],        // 9
      [7, 2],        // 10
      [7, 3],        // 11
      [7, 3],        // 12
      [7, 4],        // 13
      [7, 4],        // 14
      [7, 5],        // 15
      [7, 5],        // 16
      [7, 6, 1],     // 17
      [7, 6, 1],     // 18
      [7, 6, 2],     // 19
      [7, 6, 2]      // 20
    ],
    progression: {
      vanguard: {
        label: "ME5E.VanguardProgression",
        divisor: 1 // Half-caster progression (affects multiclassing)
      }
    }
  };
  
    CONFIG.DND5E.spellcasting.sentinel = {
    label: "ME5E.BioticCasting",   // i18n key for display name
    type: "single",                  // all slots are the same level (like Pact Magic)
    cantrips: true,                  // can use cantrips/powers
    prepares: false,                 // powers are known, not prepared
    order: 32,                       // sheet display order
    img: "modules/mass-effect-5e/assets/icons/classes/Sentinel.svg", // optional
    table: {                         // number of slots and their level by class level
      1:  { slots: 1, level: 1 },
      2:  { slots: 2, level: 1 },
      3:  { slots: 2, level: 1 },
      4:  { slots: 2, level: 1 },
      5:  { slots: 2, level: 2 },
      6:  { slots: 2, level: 2 },
      7:  { slots: 2, level: 2 },
      8:  { slots: 2, level: 2 },
      9:  { slots: 2, level: 3 },
      10: { slots: 2, level: 3 },
      11: { slots: 3, level: 3 },
      12: { slots: 3, level: 3 },
      13: { slots: 3, level: 3 },
      14: { slots: 3, level: 3 },
      15: { slots: 3, level: 3 },
      16: { slots: 3, level: 3 },
      17: { slots: 4, level: 3 },
      18: { slots: 4, level: 3 },
      19: { slots: 4, level: 3 },
      20: { slots: 4, level: 3 }
    },
    progression: {
      sentinel: {
        label: "ME5E.SentinelProgression",
        divisor: 1 // counts fully toward total slot math; unique table anyway
      }
    }
  };
 
}); 


Hooks.once("ready", () => {
  CONFIG.DND5E.spellcasting.spell.progression.vanguard = {
    label: "ME5E.VanguardProgression",
    divisor: 1
  };
  
  CONFIG.DND5E.spellcasting.spell.progression.sentinel = {
    label: "ME5E.SentinelProgression",
    divisor: 1
  };
  
  CONFIG.DND5E.spellcasting.spell.progression.biotic = {
    label: "ME5E.AdeptProgression",
    divisor: 1
  };
});