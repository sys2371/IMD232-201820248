var decomp = require('poly-decomp');
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies,
  Vertices = Matter.Vertices;

// body
var group = Body.nextGroup(true);

var ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
  // rect body
  var rectangleBody = Bodies.rectangle(x, y, 50, 20, {
    collisionFilter: { group: group },
  });

  // concave
  var concaveVertices = decomp.quickDecomp(
    Vertices.create(rectangleBody.vertices)
  );

  // use concave
  var concaveBody = Bodies.fromVertices(x, y, concaveVertices, {
    collisionFilter: { group: group },
  });

  return concaveBody;
});

Composite.add(world, [
  ropeA,
  ropeB,
  ropeC,
  Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
]);
