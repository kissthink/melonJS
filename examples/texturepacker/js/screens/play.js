game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer('background', '#330000', 0));
        me.game.world.addChild(game.texture.createSpriteFromName('backdrop.png'), 1);

        var animationSheet = new me.AnimationSheet(200, 200, {
            image: game.texture.getTexture(),
            framewidth: 64,
            frameheight: 64,
            region: game.texture.getRegion('simplecharacter.png')
        });
        animationSheet.addAnimation('idle', [1, 5, 9, 13], 2);
        animationSheet.setCurrentAnimation('idle');
        animationSheet.pos.x = 200;
        animationSheet.pos.y = 200;
        me.game.world.addChild(animationSheet, 2);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.device.unwatchDeviceOrientation();
        me.device.unwatchAccelerometer();
    }
});
