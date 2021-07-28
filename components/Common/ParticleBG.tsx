import Particles from 'react-particles-js'

interface props {
  backgroundMode: boolean
}

const ParticleBG = ({ backgroundMode }: props): JSX.Element => {
  return (
    <Particles
      className="absolute top-0 w-full h-full "
      params={{
        background: {
          color: {
            value: 'rgba(255, 255, 255,0,0)',
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#005BDC',
          },
          links: {
            color: '#005BDC',
            distance: 35,
            enable: true,
            opacity: 0.9,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1500,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        backgroundMode: {
          enable: backgroundMode,
          zIndex: 0,
        },
      }}
    />
  )
}

export default ParticleBG
