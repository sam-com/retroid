export const roms: Rom[] = [
  {
    id: "bcd830e4-9ced-11ec-b909-0242ac120002",
    name: "The Legend of Zelda: A Link to the Past",
    art: "https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg",
    path: "zelda.sfc",
  },
  {
    id: "ccd59fb8-9ced-11ec-b909-0242ac120002",
    name: "Super Mario World",
    art: "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
    path: "smw.sfc",
  },
  {
    id: "317754fb-1dca-4090-827a-f96edd527c7e",
    name: "Donkey Kong Country",
    art: "https://upload.wikimedia.org/wikipedia/en/c/c1/Dkc_snes_boxart.jpg",
    path: "dkc.sfc",
  },
  {
    id: "a1ba8a24-7897-41aa-ad82-6e5bedc58496",
    name: "Super Metroid",
    art: "https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg",
    path: "sm.sfc",
  },
  {
    id: "db117dc4-a01a-11ec-b909-0242ac120002",
    name: "Star Fox",
    art: "https://upload.wikimedia.org/wikipedia/en/5/52/Star_Fox_SNES.jpg",
    path: "sf.sfc",
  },
  {
    id: "26ce0188-a01b-11ec-b909-0242ac120002",
    name: "Chrono Trigger",
    art: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger.jpg",
    path: "ct.sfc",
  },
  {
    id: "72822d3e-a01b-11ec-b909-0242ac120002",
    name: "Secret of Mana",
    art: "https://upload.wikimedia.org/wikipedia/en/b/b7/Secret_of_Mana_Box.jpg",
    path: "som.sfc",
  },
];

export interface Rom {
  id: string;
  name: string;
  art: string;
  path: string;
}
