import React from 'react';
import {Treemap} from 'react-vis';
import './logo.css';

export default function Logo() {
  const MODE = [
    'circlePack',
    'partition',
    'partition-pivot',
    'squarify',
    'resquarify',
    'slice',
    'dice',
    'slicedice',
    'binary'
  ];

  const STYLES = {
    SVG: {
      stroke: '#ddd',
      strokeWidth: '0.25',
      strokeOpacity: 0.5
    },
    DOM: {
      border: 'thin solid #ddd'
    }
  };
  
  const modeIndex = 0;
  const useSVG = true;
  const myData = {
    "title": "",
    "color": "rgb(255, 152, 51)",
    "children": [
      {
        "title": "",
        "color": "rgb(255, 152, 51)",
        "children": [
          {"title": "", "color": "#12939A", "size": 1938},
          {"title": "", "color": "#12939A", "size": 2812},
          {"title": "", "color": "#12939A", "size": 4714},
          {"title": "", "color": "#12939A", "size": 1743},
          {"title": "", "color": "#12939A", "size": 743},
          {"title": "", "color": "#12939A", "size": 543}
        ]
      },
      {
        "title": "",
        "color": "rgb(255, 152, 51)",
        "children": [
          {"title": "", "color": "#12939A", "size": 3534},
          {"title": "", "color": "#12939A", "size": 5731},
          {"title": "", "color": "#12939A", "size": 7840},
          {"title": "", "color": "#12939A", "size": 914},
          {"title": "", "color": "#12939A", "size": 1416},
          {"title": "", "color": "#12939A", "size": 2416},
          {"title": "", "color": "#12939A", "size": 1416},
          {"title": "", "color": "#12939A", "size": 2416},
          {"title": "", "color": "#12939A", "size": 3534},
          {"title": "", "color": "#12939A", "size": 5731},
          {"title": "", "color": "#12939A", "size": 7840},
          {"title": "", "color": "#12939A", "size": 914},
          {"title": "", "color": "#12939A", "size": 1416},
          {"title": "", "color": "#12939A", "size": 2416},
          {"title": "", "color": "#12939A", "size": 1416},
          {"title": "", "color": "#12939A", "size": 2416}
        ]
      },
      {
        "title": "",
        "color": "rgb(255, 152, 51)",
        "children": [
          {"title": "", "color": "#12939A", "size": 3534},
          {"title": "", "color": "#12939A", "size": 5731},
          {"title": "", "color": "#12939A", "size": 840},
          {"title": "", "color": "#12939A", "size": 5914},
          {"title": "", "color": "#12939A", "size": 1416},
          {"title": "", "color": "#12939A", "size": 2416},

        ]
      }
    ]
  };
  
  return (
    <Treemap
      className="logo--spin"
      {...{
        animation: true,
        colorType: 'literal',
        colorRange: ['#12939A'],
        data: myData,
        mode: MODE[modeIndex],
        renderMode: useSVG ? 'SVG' : 'DOM',
        height: 60,
        width: 60,
        margin: 10,
        style: STYLES[useSVG ? 'SVG' : 'DOM']
      }}
    />
    );
}