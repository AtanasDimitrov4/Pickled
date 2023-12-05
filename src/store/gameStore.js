import { Bodies, Body, Engine, Events, Render, Runner, World } from 'matter-js';
import { VEGGES_HLW } from './vegeStore';

export function createWorld(delta) {
  const engine = Engine.create();
  const element = document.createElement('div');
  document.body.appendChild(element);

  const render = Render.create(
    {
      element,
      engine,
      options: {

        wireframes: false,
        background: '#F7F4C8',
        width: 620,
        height: 715,
      },
    },
  );

  const world = engine.world;

  const leftWall = Bodies.rectangle(15, 385, 30, 650, {
    isStatic: true,
    render: { fillStyle: '#E6B143' },
  });

  const rightWall = Bodies.rectangle(605, 385, 30, 650, {
    isStatic: true,
    render: { fillStyle: '#E6B143' },
  });

  const topLine = Bodies.rectangle(310, 150, 620, 2, {
    name: 'topLine',
    isStatic: true,
    isSensor: true,
    render: { fillStyle: '#E6B143' },

  });

  const ground = Bodies.rectangle(310, 700, 620, 60, {
    isStatic: true,
    render: { fillStyle: '#E6B143' },
  });

  World.add(engine.world, [leftWall, rightWall, ground, topLine]);

  Render.run(render);

  let currentBody = null;
  let currentVeggetable = null;
  let disableAction = false;
  let interval = null;
  let num_pickled = 0;
  let gameEnded = false;

  const runner = Runner.create();
  const start = Date.now();
  setInterval(() => {
    Runner.tick(runner, engine, Date.now() - start);
  }, delta);

  function addVeggetable() {
    const index = Math.floor(Math.random() * 5);
    const veggetable = VEGGES_HLW[index];
    const body = Bodies.circle(300, 50, veggetable.radius, {
      index,

      isSleeping: true,
      render: {
        sprite: { texture: `${veggetable.name}.png` },
      },

      restitution: 0.2,
    });

    currentBody = body;
    currentVeggetable = veggetable;

    World.add(world, body);
  }

  window.onkeydown = (event) => {
    if (disableAction || gameEnded) {
      return;
    }
    switch (event.code) {
      case 'KeyA':
        if (interval)
          return;

        interval = setInterval(() => {
          if (currentBody.position.x - currentVeggetable.radius > 30)
            Body.setPosition(currentBody, {
              x: currentBody.position.x - 1,
              y: currentBody.position.y,
            });
        }, 5);

        break;

      case 'KeyD':
        if (interval)
          return;

        interval = setInterval(() => {
          if (currentBody.position.x + currentVeggetable.radius < 590)
            Body.setPosition(currentBody, {
              x: currentBody.position.x + 1,
              y: currentBody.position.y,
            });
        }, 5);
        break;

      case 'KeyS':
        currentBody.isSleeping = false;
        disableAction = true;

        setTimeout(() => {
          addVeggetable();
          disableAction = false;
        }, 1200);
        break;
    }
  };

  window.onkeyup = (event) => {
    switch (event.code) {
      case 'KeyA':
      case 'KeyD':
        clearInterval(interval);
        interval = null;
    }
  };

  const canvas = document.querySelector('canvas');
  const canvasStyle = canvas.style;
  canvasStyle.marginTop = '20px';
  canvasStyle.position = 'absolute';
  canvasStyle.left = '50%';
  canvasStyle.top = '50%';
  canvasStyle.transform = 'translate(-50%, -50%)';

  Events.on(engine, 'collisionStart', (event) => {
    event.pairs.forEach((collision) => {
      if (!gameEnded) {
        const indexA = collision.bodyA.index;
        const indexB = collision.bodyB.index;

        if (indexA === indexB) {
          const index = indexA;

          if (index === VEGGES_HLW.length - 1) {
            return;
          }

          World.remove(world, [collision.bodyA, collision.bodyB]);

          const newVeggetable = VEGGES_HLW[index + 1];

          const newBody = Bodies.circle(
            collision.collision.supports[0].x,
            collision.collision.supports[0].y,
            newVeggetable.radius,
            {
              render: {
                sprite: { texture: `${newVeggetable.name}.png` },
              },
              index: index + 1,
            },
          );

          World.add(world, newBody);

          if (newBody.index === 10) {
            num_pickled++;
          }
        }

        if (!disableAction && (collision.bodyA.name === 'topLine' || collision.bodyB.name === 'topLine')) {
          endGame('Game Over (Press F5 to Refresh the Page to Restart)');
        }
        else if (num_pickled === 2) {
          endGame('You Win (Press F5 to Refresh the Page to Restart)');
        }
      }
    });
  });

  function endGame(message) {
    
    alert(message);
    gameEnded = true;
  }

  addVeggetable();
}

createWorld(100 / 60);
