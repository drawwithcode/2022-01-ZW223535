function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background("#FAF2F0");
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  // put drawing code here
  if (frameCount <= 900) {
    push();
    stroke(lerpColor(color("#C057A1"), color("#E8ECF7"), frameCount / 500));

    strokeWeight(sin(frameCount));

    translate(width / 2, height / 2);

    line(width / 2, 0, cos(frameCount) * 360, sin(frameCount) * 360);
    line(-width / 2, 0, -cos(frameCount) * 360, -sin(frameCount) * 360);
    pop();

    // Semicerchio Sx-Alto

    push();
    let Segment1 = lerpColor(
      color("#D78F8F"),
      color("#21C5B3"),
      frameCount / 500
    );
    strokeWeight(1);
    stroke(Segment1);
    rotate(frameCount);
    line(0, 0, 250, 250);
    pop();

    //Semicerchio Sx-Mezzo

    push();
    translate(0, height / 2);
    let Segment2 = lerpColor(
      color("#21C5B3"),
      color("#D78F8F"),
      frameCount / 450
    );
    strokeWeight(1);
    stroke(Segment2);
    rotate(frameCount);

    line(0, 0, 250, 250);
    pop();

    //Semicerchio Sx-Basso

    push();
    translate(0, height);
    let Segment3 = lerpColor(
      color("#21C5B3"),
      color("#CE96B3"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment3);
    rotate(frameCount);

    line(0, 0, 250, 250);
    pop();

    //Semicerchio Dx-Alto

    push();
    translate(width, 0);
    let Segment4 = lerpColor(
      color("#21C5B3"),
      color("#CE96B3"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment4);
    rotate(frameCount);

    line(0, 0, 250, 250);
    pop();

    //Semicerchio Dx-Mezzo

    push();
    translate(width, height / 2);
    let Segment5 = lerpColor(
      color("#DB9449"),
      color("#49DBC0"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment5);
    rotate(frameCount);

    line(0, 0, 250, 250);
    pop();

    //Semicerchio Dx-Basso

    push();
    translate(width, height);
    let Segment = lerpColor(
      color("#AA4F68"),
      color("#4FA0AA"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment);
    rotate(frameCount);

    line(0, 0, 250, 250);
    pop();

    //Semicerchio in Alto

    push();
    translate(width / 2, 0);
    let Segment7 = lerpColor(
      color("#8383bc"),
      color("#33afc1"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment7);
    rotate(frameCount);

    line(0, 0, 350, 350);
    pop();

    //Semicerchio in Basso

    push();
    translate(width / 2, height);
    let Segment8 = lerpColor(
      color("#33afc1"),
      color("#8383bc"),
      frameCount / 400
    );
    strokeWeight(1);
    stroke(Segment8);
    rotate(frameCount);

    line(0, 0, 350, 350);
    pop();
    
      //Colonna 1
    push();
    translate((3*width) / 4, frameCount);
    noFill();
    let MyEllipse2 = lerpColor(
      color("#8383bc"),
      color("#33afc1"),
      sin(frameCount)
    );
    strokeWeight(sin(frameCount));
    stroke(MyEllipse2);
    ellipse(0, 0, sin(frameCount) * 300);
    pop();

    //Colonna 2
     push();
    translate(width / 4, frameCount);
    noFill();
    let MyEllipse1 = lerpColor(
      color("#33afc1"),
      color("#8383bc"),
      sin(frameCount)
    );
    strokeWeight(sin(frameCount));
    stroke(MyEllipse1);
    ellipse(0, 0, sin(frameCount) * 300);
    pop();


    //Elemento al centro

    push();
    const amount = 3;
    translate(width / 2, height / 2);
    for (let i = 1; i <= amount; i++) {
      let myRectColor = lerpColor(
        color("#F9D1D1"),
        color("#AAAAF6"),
        sin(frameCount)
      );
      const angle = 50 * i + frameCount;
      const rotation = sin(angle) * 45;
      const x = 0;
      const y = 0;
      const rectWidth = 170 * i;
      const rectHeight = 170 * i;
      stroke(myRectColor);
      noFill();
      rotate(rotation);
      rect(x, y, rectWidth, rectHeight);
    }
    pop();
  }
}
