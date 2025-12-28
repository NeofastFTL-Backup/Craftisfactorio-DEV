ServerEvents.recipes(neofastftl => {
  neofastftl.remove({ output: 'storagedrawers:compacting_drawers_2' })
  neofastftl.shaped(
  Item.of('storagedrawers:compacting_drawers_2', 1),
  [
    'AIA',
    'ADA',
    'AIA'
  ],
  {
    A: 'minecraft:stone',
    D: '#storagedrawers:drawers',
    I: 'minecraft:iron_ingot'
  })
  neofastftl.remove({ output: 'sophisticatedstorage:advanced_compacting_upgrade' })
  neofastftl.shaped(
  Item.of('sophisticatedstorage:advanced_compacting_upgrade', 1),
  [
    ' S ',
    'IDI',
    'AAA'
  ],
  {
    A: 'minecraft:iron_block',
    D: 'storagedrawers:compacting_drawers_2',
    I: 'allthecompressed:cobblestone_3x',
    S: 'allthecompressed:stone_3x'
  })
  neofastftl.remove({ output: 'create:water_wheel' })
  neofastftl.shaped(
  Item.of('create:water_wheel', 1),
  [
    'LSL',
    'LTL',
    'LSL'
  ],
  {
    S: 'minecraft:iron_block',
    L: 'minecraft:oak_wood',
    T: 'create:shaft'
  })
})