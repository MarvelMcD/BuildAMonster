class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redD.png");
        my.sprite.RightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 60, "monsterParts", "arm_redA.png");
        my.sprite.LeftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 60, "monsterParts", "arm_redA.png");
        my.sprite.LeftArm.flipX = true;
        my.sprite.RightLeg = this.add.sprite(this.bodyX + 60, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.LeftLeg = this.add.sprite(this.bodyX - 60, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.LeftLeg.flipX = true;

        my.sprite.RightEye = this.add.sprite(this.bodyX + 50, this.bodyY+10, "monsterParts", "eye_human_red.png");
        my.sprite.LeftEye = this.add.sprite(this.bodyX + -50, this.bodyY +10, "monsterParts", "eye_human_red.png");
        my.sprite.LeftEye.flipX = true;
        my.sprite.RightBrow = this.add.sprite(this.bodyX + 50, this.bodyY -20, "monsterParts", "eyebrowA.png");
        my.sprite.LeftBrow = this.add.sprite(this.bodyX + -50, this.bodyY -20, "monsterParts", "eyebrowA.png");
        my.sprite.LeftBrow.flipX = true;
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "nose_red.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_happy.png");
        my.sprite.antenna = this.add.sprite(this.bodyX + 14, this.bodyY - 90, "monsterParts", "detail_dark_antenna_large.png");

        //my.sprite.smile.visible = false;
        my.sprite.smile.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //changes during runtime(movement, changing expressions)
        //var s = this.input.keyboard.addkey('s');
       // var s = this.input.keyboard.addkey('s');

       
    }

}