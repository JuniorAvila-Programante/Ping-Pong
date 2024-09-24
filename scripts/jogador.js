class Player {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 0;
        this.y = 450;
        this.vel = 5;
        this.gravidade = 7;
        this.teste = 0;
        this.Player = new Image();
        this.Player.src = "assets/Player.png"
        this.Player.addEventListener('load', () => {
            this.draw()
        })
        this.Player.width = 50;
        this.Player.height = 50;
    }

    management() {
        if (this.keyboard.esquerda)
            if (this.x > 0)
                this.x -= this.vel;
        if (this.keyboard.direita)
            if (this.x < this.c.canvas.width - this.Player.width) { this.x += this.vel; }
        if (this.keyboard.cima)
           
            if (this.y > 0)
                this.y -= this.vel;
        if (this.keyboard.cima == false)
            if (this.y < this.c.canvas.height - this.Player.height - 100) { this.y += this.gravidade; }
    }
    draw() {
        this.management();
        this.c.drawImage(this.Player, this.x, this.y, this.Player.width, this.Player.height)
        LoadMap()
    }



}

BlocoLeft = new Image()
BlocoLeft.src ="assets/Blocos/BlocoEsquerda.png"
BlocoMiddle= new Image()
BlocoMiddle.src = "assets/Blocos/BlocoMeio.png"
BlocoRight= new Image()
BlocoRight.src="assets/Blocos/BlocoDireita.png"

function LoadMap(){c.drawImage(BlocoLeft,0,500,100,100)
                   c.drawImage(BlocoRight,700,500,100,100)
                   for (Blocox = 100; Blocox<=600; Blocox+=100) 
                    {c.drawImage(BlocoMiddle,Blocox,500,100,100);}

}