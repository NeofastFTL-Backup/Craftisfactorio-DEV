// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.

ServerEvents.recipes(neofastftl => {
	neofastftl.recipes.createoreexcavation.vein('{"text": "Lunarite Vein"}', 'kubejs:raw_lunarite')
		.placement(1024, 128, 1024).veinSize(3, 8.5).biomeWhitelist('craftisfactory:is_moon')
		.id("kubejs:raw_lunarite_vein");
	neofastftl.recipes.createoreexcavation.drilling('kubejs:raw_lunarite', 'kubejs:raw_lunarite_vein', 100)
    .drill('createoreexcavation:netherite_drill')
    .id("kubejs:raw_lunarite_vein_1");

    	neofastftl.recipes.createoreexcavation.vein('{"text": "Aurelite Vein"}', 'kubejs:raw_aurelite')
		.placement(1024, 128, 1024).veinSize(3, 8.5).biomeWhitelist('craftisfactory:is_venus')
		.id("kubejs:raw_aurelite_vein");
	neofastftl.recipes.createoreexcavation.drilling('kubejs:raw_aurelite', 'kubejs:raw_aurelite_vein', 100)
    .drill('createoreexcavation:netherite_drill')
    .id("kubejs:raw_aurelite_vein_1");

     	neofastftl.recipes.createoreexcavation.vein('{"text": "Ferrite Vein"}', 'kubejs:raw_ferrite')
		.placement(1024, 128, 1024).veinSize(3, 8.5).biomeWhitelist('craftisfactory:is_mars')
		.id("kubejs:raw_ferrite_vein");
	neofastftl.recipes.createoreexcavation.drilling('kubejs:raw_ferrite', 'kubejs:raw_ferrite_vein', 100)
    .drill('createoreexcavation:netherite_drill')
    .id("kubejs:raw_ferrite_vein_1");

         	neofastftl.recipes.createoreexcavation.vein('{"text": "Heliolyte Vein"}', 'kubejs:raw_heliolyte')
		.placement(1024, 128, 1024).veinSize(3, 8.5).biomeWhitelist('craftisfactory:is_mercury')
		.id("kubejs:raw_heliolyte_vein");
	neofastftl.recipes.createoreexcavation.drilling('kubejs:raw_heliolyte', 'kubejs:raw_heliolyte_vein', 100)
    .drill('createoreexcavation:netherite_drill')
    .id("kubejs:raw_heliolyte_vein_1");
});
// This file has been copyrighted on NeofastFTL's name.
// So if you want to make use or modify or grab it in any way. Go ask NeofastFTL on different Socials.
