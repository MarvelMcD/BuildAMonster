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
        my.sprite.antenna = this.add.sprite(this.bodyX + 14, this.bodyY - 90, "monsterParts", "detail_dark_antenna_large.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthB.png");


        //my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.input.keyboard.on("keydown", function(event){
            if(event.code == "KeyS"){
                my.sprite.smile.visible = true;
                my.sprite.fangs.visible = false;
            }
            else if(event.code == "KeyF"){
                my.sprite.fangs.visible = true;
                my.sprite.smile.visible = false;
            }
            if(event.code == "KeyD"){
                my.sprite.body.x += 0.01;
                my.sprite.RightArm.x += 0.01;
                my.sprite.LeftArm.x += 0.01;
                my.sprite.RightLeg.x += 0.01;
                my.sprite.LeftLeg.x += 0.01;
                my.sprite.RightEye.x += 0.01;
                my.sprite.LeftEye.x += 0.01;
                my.sprite.RightBrow.x += 0.01;
                my.sprite.LeftBrow.x += 0.01;
                my.sprite.nose.x += 0.01;
                my.sprite.antenna.x += 0.01;
                my.sprite.smile.x += 0.01;
                my.sprite.fangs.x += 0.01;
                
            }
            if(event.code == "KeyA"){
                my.sprite.body.x -= 0.01;
                my.sprite.RightArm.x -= 0.01;
                my.sprite.LeftArm.x -= 0.01;
                my.sprite.RightLeg.x -= 0.01;
                my.sprite.LeftLeg.x -= 0.01;
                my.sprite.RightEye.x -= 0.01;
                my.sprite.LeftEye.x -= 0.01;
                my.sprite.RightBrow.x -= 0.01;
                my.sprite.LeftBrow.x -= 0.01;
                my.sprite.nose.x -= 0.01;
                my.sprite.antenna.x -= 0.01;
                my.sprite.smile.x -= 0.01;
                my.sprite.fangs.x -= 0.01;
                
            }
        })
    }

}