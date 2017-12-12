var button1;
var button2;
var button3;

function setup() 
{
  createCanvas(1920,1080);
  button1 = createButton('Choice 1');
  button1.position(850,850);
  button1.mousePressed(answer1);
  button2 = createButton('Choice 2');
  button2.position(1000,850);
  button2.mousePressed(answer2);
  
  background(0);
  fill(255);
  textSize(32);
  text('Choice 1 = Shoot                        Choice 2 = Pick a Non-Lethal Option',575,50);
  textSize(24);
  text('You have pulled over a car for speeding.  As you approach the car the man exits his vehicle and begins to walk towards you.',300,250);
  text('He does not have a weapon, but he is much larger than you are.  You tell him to stop, but he is not listening to your request.',300,280);
  text('What do you do?',865,600);
}

function answer1()
{
  createCanvas(1920,1080);
  background(0);
  button1.hide();
  button2.hide();
  button3 = createButton('Reset');
  button3.position(900,850);
  button3.mousePressed(Reset);
  fill(255);
  textSize(32);
  text('You chose to shoot.  As you were approaching the vehicle a group took out their cell phones and began to record you.',170,210);
  text('As you fired your shots, eacho one of them hit the man.  He fell to the ground and the people recording began to yell.',170,250);
  text('All of them began yelling "murderer" and "pig".',170,290);
  text('Hit the reset button below to see what the other option yields.  If you have already selected that option then you now',170,500);
  text('understand that regardless of what choice an officer makes.  The public always finds a way to complain.',170,540);
}

function answer2()
{
  createCanvas(1920,1080);
  background(0);
  button1.hide();
  button2.hide();
  button3 = createButton('Reset');
  button3.position(900,850);
  button3.mousePressed(Reset);
  fill(255);
  textSize(32);
  text('You chose to not shoot.  As you were approaching the vehicle a group took out their cell phones and began to record you.',170,210);
  text('You pull out your taser and tell the man to stop one more time.  He obviously does not listen.  You fire your taser at him.',170,250);
  text('As he hits the ground, the group starts screaming "why did you do that" and "you could have killed him"',170,290);
  text('Hit the reset button below to see what the other option yields.  If you have already selected that option then you now',170,500);
  text('understand that regardless of what choice an officer makes.  The public always finds a way to complain.',170,540);
}

function Reset() 
{
  createCanvas(1920,1080);
  button1 = createButton('Choice 1');
  button1.position(850,850);
  button1.mousePressed(answer1);
  button2 = createButton('Choice 2');
  button2.position(1000,850);
  button2.mousePressed(answer2);
  button3.hide();
  background(0);
  fill(255);
  textSize(32);
  text('Choice 1 = Shoot                        Choice 2 = Pick a Non-Lethal Option',575,50);
  textSize(24);
  text('You have pulled over a car for speeding.  As you approach the car the man exits his vehicle and begins to walk towards you.',300,250);
  text('He does not have a weapon, but he is much larger than you are.  You tell him to stop, but he is not listening to your request.',300,280);
  text('What do you do?',865,600);
}