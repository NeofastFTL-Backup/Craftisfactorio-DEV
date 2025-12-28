ServerEvents.recipes(neofastftl => {
  neofastftl.remove({ output: 'ftbquests:screen_1' })
  neofastftl.shapeless(
  Item.of('ftbquests:screen_1', 1),
  [
    'minecraft:dirt'
  ]
)
})