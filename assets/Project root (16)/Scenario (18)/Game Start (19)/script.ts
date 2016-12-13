let mainCharacter = new Sup.Actor("Main character");
let leonard = new Sup.SpriteRenderer(mainCharacter, "Project root/Leonard");

let cam = new Sup.Actor("cam");
let camera = new Sup.Camera(cam);

mainCharacter.setPosition(0, 0, 0);
cam.setPosition(0, 0, 5);