import React from 'react';
import './Navbar';
import './modify'

const Experience3D = () => {

  return (
    <>
      <div className='aframe'>
        <a-scene>
          <a-entity id="camera" camera="active: true" look-controls position="0 1.6 0" light="type: point; color: white; intensity: 3"></a-entity>
          
          <a-entity id="AvatarPpal" position="-0.49 0.775 -0.561" rotation="1 40 1" scale="0.5 0.5 0.5" gltf-model="https://cdn.glitch.global/db0323a9-14af-4a55-b631-eeff849c990d/avatar12final.glb?v=1703058091252" href="/imgavatar"
          animation-mixer="action"
          play-all-model-animations modify-materials></a-entity>
          
          <a-box id="imageWelcome" position="-0.43485 1.27955 -0.47527" rotation="1 40 1" scale="0.4 0.1 0.00001" material="" geometry="" src="./img/Items/imageWelcome.png"></a-box>
          <a-image src="#imgavatar1" position="-0.3 1.48 -1.20" rotation="7 42 -0.1" scale="0.3 0.2 0.00001"></a-image>

          <a-entity position="-0.41134 1.11797 -1.371" rotation="1 40 1" scale="0.5 0.5 0.5" gltf-model="./img/items/Desk.glb" href="/imgavatar"></a-entity>

          <a-assets id="scene">
            <img id='imgavatar' src="./img/Proyects/appreact111.png" alt="appreact"/>
            <img id='imgavatar1' src="./img/Proyects/crunchify.png" alt="crunchify" />
            <img id='imgavatar2' src="./img/Proyects/movieland.png" alt="movieland" />
            <img id='imgavatar3' src="./img/Proyects/Sushburger.jpeg" alt="Sushburger" />
            <img id='imgavatar4' src="./img/Proyects/apigames1.png" alt="apigames1" />
            <img id='imgavatar5' src="./img/Proyects/chopstick.png" alt="chopstick" />
            <img id='imgavatar6' src="./img/Proyects/viajes.png" alt="viajes" />
          </a-assets>

          {/* <a-entity link="href: https://github.com/GreiskelS/React-RickandMorty; title: Proyect React; image: #imgavatar"></a-entity> */}

          <a-image src="#imgavatar"
            animation="property:rotation.y;from:0;to:360;
            dur:8000;dir:normal;loop:true;easing:linear; "
            position="3 5 -5"
            wigth="1"
            height="1"
            scale="2 2 1"
            clickable>
          </a-image>

          <a-image src="#imgavatar1"
            position="-4 3.5 -3"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar2"
            position="1 2.5 -4"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar3"
            position="-1 5 -7"
            wigth="1"
            scale="2 2 -1">
          </a-image>

          <a-image src="#imgavatar4"
            position="-3 2 -6"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar5"
            animation="property:rotation.y;from:0;to:360;
          dur:8000;dir:normal;loop:true;easing:linear;"
            position="-5 5 -8"
            wigth="2"
            scale="3 2 -1">
          </a-image>

          <a-image src="#imgavatar6"
            position="4 3 -4"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-camera>
            <a-cursor cursor="rayOrigin: mouse;" raycaster="objects: data-raycastable"></a-cursor>
          </a-camera>

          <a-sky src="https://cdn.glitch.global/dfc8eacd-6caa-44ba-bf5f-563114f6b04e/holographic_mountain_sky_galaxy.jpg?v=1689079816219"></a-sky>

        </a-scene>
      </div>

    </>
  )
}

export default Experience3D