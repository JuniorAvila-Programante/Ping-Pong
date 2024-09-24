class CPU {
    constructor(c, bola) {
        this.c = c;
        this.bola = bola;
        this.largura = 100;
        this.altura = 130;
        this.x = this.c.canvas.width - this.largura - 5;
        this.y =(this.c.canvas.height/2)-(this.altura/2);
        this.vel = 5;
        this.meioY= Math.random() * this.altura;

        this.cpuimagem = new Image ();
        this.cpuimagem.width = 100;
        this.cpuimagem.height = 130;
        this.cpuimagem.src = "assets/messipng.png";
        this.cpuimagem.addEventListener('load', () => {
            this.draw()
        });
    }

    management() {
       if ((this.bola.dirX>0)&&(this.bola.x>(this.c.canvas.width/2)))
        {
            if (this.bola.y + (this.bola.altura/2)>this.y + (this.altura/2))
                this.y+=this.vel;
            if (this.bola.y + (this.bola.altura/2) < this.y + (this.altura/2))
                this.y -= this.vel;
        }
        else {
            if (this.y>this.inicioY){
                this.y -= this.vel
            }
            if(this.y<this.inicioY){
                this.y += this.vel
            }

        }
         if ((this.x<= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x)
                && ((this.y + this.altura >= this.bola.y)&& (this.y <= this.bola.altura + this.bola.y)))
               {
                   this.bola.dirX=-1;
                   this.bola.dirY=((this.bola.y +(this.bola.altura/2))-(this.y + (this.altura/2)))/16;
                   this.meioY = Math.random()* this.altura
               }
    }
    draw() {
        this.management();
        this.c.fillStyle="green"
        this.c.drawImage(this.cpuimagem, this.x, this.y, this.cpuimagem.width, this.cpuimagem.height);
    }



}
