import { ref, onMounted, onUnmounted } from 'vue';
import { Bodies, Engine, Events, Render, Runner, World } from 'matter-js';
import { VEGGES_HLW } from './vegges';

export function createWorld(delta, gameContainer) {
  const game = ref({
    ended: false,
  });

  let engine, render, world;
  let num_pickled = 0;

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);

    if (render) {
      Render.stop(render);
    }
  });

  function handleKeyDown(event) {
    if (event.code === 'Escape' && !game.value.ended) {
      onStop();
    }
  }

  function createEngine() {
    engine = Engine.create();

    render = Render.create({
      element: gameContainer,
      engine,
      options: {
        wireframes: false,
        background: '#F7F4C8',
        width: 620,
        height: 715,
      },
    });

    world = engine.world;
    game.value.ended = false;

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

    World.add(world, [leftWall, rightWall, ground, topLine]);

    Render.run(render);
  }

  function createRunner() {
    const runner = Runner.create();
    const start = Date.now();
    setInterval(() => {
      Runner.tick(runner, engine, Date.now() - start);
    }, delta);

    Events.on(engine, 'collisionStart', handleCollision);

    addVeggetable();
  }

  function handleCollision(event) {
    event.pairs.forEach((collision) => {
      if (!game.value.ended) {
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
        } else if (num_pickled === 2) {
          endGame('You Win (Press F5 to Refresh the Page to Restart)');
        }
      }
    });
  }

  function addVeggetable() {
    const index = Math.floor(Math.random() * VEGGES_HLW.length);
    const veggetable = VEGGES_HLW[index];
    const body = Bodies.circle(
      Math.random() * 500 + 50,
      -50, 
      veggetable.radius,
      {
        index,
        isSleeping: true,
        render: {
          sprite: { texture: `${veggetable.name}.png` },
        },
        restitution: 0.2,
      }
    );
  
    World.add(world, body);
  }

  function onStop() {
    game.value.ended = true;
  }

  
  createEngine();
  createRunner();
}
