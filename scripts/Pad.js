class Pad {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 5;
        this.vel = 5;
        this.largura = 100;
        this.altura = 120;
        this.y =(this.c.canvas.height/2)-(this.altura/2);

        this.padimagem = new Image ();
        this.padimagem.width = 100;
        this.padimagem.height = 130;
        this.padimagem.src = "assets/neymapng.png";
        this.padimagem.addEventListener('load', () => {
            this.draw()
        });
    }

    management() {
        if (this.keyboard.cima)
            if (this.y > 0)
                this.y -= this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height - this.altura) 
                { this.y += this.vel; }
    }
    draw() {
        this.management();
        this.c.fillStyle="purple"
        this.c.drawImage(this.padimagem, this.x, this.y, this.padimagem.width, this.padimagem.height);
    }



}
