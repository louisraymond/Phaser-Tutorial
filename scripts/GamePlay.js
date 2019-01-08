const config = {
  type = Phaser.AUTO,
  width:800,
  height:600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
  scene:{
    preload:preload,
    create:create,
    update:update,
  },
}

//Above is the configuration object... We now need to pass it to an instance of Phaser.game

const game = new Phaser.Game(config)

//Now we have set up the game and configured it, we now write out our main funcitons

function preload(){
  this.load.image('sky','../assets/sky.png')
  this.load.image('ground','assets/platform.png')
  this.load.image('star','assets/star.png')
  this.load.image('bomb', 'assets/bomb.png')
  this.load.spritesheet(
        'dude',
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    )
}

function create(){
  this.add.image(400,300,'sky')

  const platforms = this.physics.add.staticGroup()

  platforms.create(400,568,'ground').setScale(2).refreshBody()

  platforms.create(600,400,'ground')
  platforms.create(50,250, 'ground')
  platforms.create(750,220,'ground')
}

function update(){

}
