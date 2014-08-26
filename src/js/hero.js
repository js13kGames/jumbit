$.Hero = function () {
	this.x = 75;
	this.y = $.base_y;
    this.vy = 0.0;
    this.hp = 100;

    this.width = 30;
    this.height = 30;

	this.background = '#f02f2f';
    this.onGround = true;
    this.name = 'hero'; 

    this.listen();
};

$.Hero.prototype.listen = function () {
    var self = this;

    window.addEventListener('click', function(e) {
        e.preventDefault();
        self.startJump(e);
    }, false);

    window.addEventListener('touchstart', function(e) {
        e.preventDefault();
        self.startJump(e);
    }, false);

    window.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    window.addEventListener('touchend', function(e) {
        e.preventDefault();
    }, false);
};

$.Hero.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.width, this.height, this.background);
};

$.Hero.prototype.update = function () {
    this.width = this.hp / 3;
    this.height = this.hp / 3;
 
    this.vy += $.gravity;
    this.y += this.vy;
    
    if (this.y > $.base_y) {
        this.vy = 0;
        this.y = $.base_y;
        this.onGround = true;
    }
};

$.Hero.prototype.startJump = function () {
    
    if (this.onGround && this.y > 70) {
        this.vy = -8;
    }
};

$.Hero.prototype.decreaseLife = function () {
   this.hp -= 15; 
};
