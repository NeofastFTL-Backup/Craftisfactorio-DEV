ServerEvents.recipes(event => {
    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }

    addRecipeRockGen('enderio:vibrant_alloy_block', 'minecraft:end_portal_frame','minecraft:end_stone','kubejs:rock_gen/end_stone')
})