ServerEvents.recipes(neofastftl => {
neofastftl.replaceInput(
  { output: 'sophisticatedstorage:barrel' }, // Arg 1: the filter
  'minecraft:redstone_torch',            // Arg 2: the item to replace
  'minecraft:torch'         // Arg 3: the item to replace it with
)
neofastftl.replaceInput(
  { output: 'sophisticatedstorage:filter_upgrade' }, // Arg 1: the filter
  'minecraft:redstone',            // Arg 2: the item to replace
  'minecraft:quartz'         // Arg 3: the item to replace it with
)
})