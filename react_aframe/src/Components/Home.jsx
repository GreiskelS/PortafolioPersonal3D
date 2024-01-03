import React from 'react';
import './Navbar';
import './css/Home.css';
import Portafolio from './Portafolio';
import './Footer';

const Home = () => {
  return (
    <div>
      <a-scene>
        <a-sphere id="home" position="-5 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="-9 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="-1 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="3 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="7 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="11 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="15 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>
        <a-sphere id="home" position="-13 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/YellowBox.glb?v=1704310607568"></a-sphere>

        <a-sky src="./img/Items/holographic_landscape.jpg"></a-sky>

        <a-assets id="scene">
          <img id='logo' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/symfonyblack03.png?v=1704310806245" alt="symfony" />
          <img id='logo0' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/GitHublogo.png?v=1704310971902" alt="github" />
          <img id='logo1' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/phplogo.png?v=1704310811665" alt="php" />
          <img id='logo2' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/JavaScriptSymbol.png?v=1704310826156" alt="javascript" />
          <img id='logo3' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/wordpress.png?v=1704310796716" alt="wordpress" />
          <img id='logo4' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/html.png?v=1704310936147" alt="html" />
          <img id='logo5' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/csslogo.png?v=1704310932031" alt="css" />
          <img id='logo6' src="https://cdn.glitch.global/e143a3cd-7d15-4fb3-b52f-fc4c69a22d2f/MySQLlogo.png?v=1704310818439" alt="mysql" />
        </a-assets>

        <a-image src="#logo"
          position="-5 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo0"
          position="-9 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo1"
          position="-1 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo2"
          position="3 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo3"
          position="7 7 -9.8394"
          wigth="1"
          scale="2 2 1"
        >

        </a-image>

        <a-image src="#logo4"
          position="11 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo5"
          position="-13 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo6"
          position="15 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>
      </a-scene>
      <Portafolio />

    </div>
  )
}

export default Home