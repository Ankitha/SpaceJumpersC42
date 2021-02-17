var start = 0, play = 1, end = 2, win = 4, begin = 5;
var gameState = start;
function setup()
{
  createCanvas(400, 400);
}

function draw()
{
  if(gameState === start)
  {
    background(255, 0, 0)
    var heading = createElement("h1");
    heading.html(" SPACE JUMPERS ");
    heading.position(75, 20);
    var startButton = createButton(" START ");
    startButton.position(165, 200);

    startButton.mousePressed(() =>
    {
      removeElements();
      frameCount = 0;
      
      setup();
      gameState = begin;
    })
  }


  if(gameState === begin)
  {
    background(0, 255, 0);
    var he = createElement('h2');
    he.html(" Choose A Level ");
    he.position(75, 50);

    var ll1 = createButton(" Level 1 ");
    ll1.position(120, 200);

    var ll2 = createButton(" Level 2 ");
    ll2.position(120, 250);

    var ll3 = createButton(" Level 3 ");
    ll3.position(200, 200);

    var ll4 = createButton(" Level 4 ");
    ll4.position(200, 250);

  }
}

