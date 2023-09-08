import React, {useCallback} from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


function ParticlesContainer() {

  const particlesInit = useCallback(async (engine:any) =>{
    await loadFull(engine);
  },[]);

  const particlesLoaded = useCallback(async () =>{}, []);

  return (
    <Particles
      className='absolute w-full h-full translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: false},
        background: {
          color: {
            value: ''
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quanity: 90,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
              factor:	100,
              speed:	1,
              maxSpeed:	50,
              easing:	'ease-out-quad',
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5}
          }
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesContainer