TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.mp3",
     "oggUrl": "media/audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47.ogg"
    },
    "class": "PanoramaAudio",
    "loop": true,
    "id": "audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47"
   }
  ],
  "partial": false,
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A9CDD502_A468_0A51_41D6_07C79FD0EAA9",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.37,
        "hfov": 30.7,
        "pitch": -20.29
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.37,
        "hfov": 30.7,
        "image": {
         "levels": [
          {
           "height": 156,
           "class": "ImageResourceLevel",
           "width": 585,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A812CB62_A468_FED1_41E3_9FAFE1FCF6D1",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 142,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 0.19,
        "hfov": 15.54,
        "pitch": -13.81
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.19,
        "hfov": 15.54,
        "image": {
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 285,
           "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.81
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "OP(1)",
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverOpacity": 0.8,
   "children": [
    {
     "label": "OP(1)",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": " Gapura Timur",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "Beteng timur",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "Pintu selatan paduraksa",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "Halaman Depan",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "Tugu jam",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "Jagang",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "Serambi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "Bedug",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "Ruang Utama",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "Depan Mimbar",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "Pawestran",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "label": "Bangsal Utara",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "label": "Bangsal Selatan",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    }
   ],
   "rollOverBackgroundColor": "#000000",
   "selectedBackgroundColor": "#202020",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "fontColor": "#FFFFFF"
  },
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.mp3",
     "oggUrl": "media/audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0"
   }
  ],
  "partial": false,
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A82BE4D1_A4A8_0BF3_41DE_AD6CD1DB562D",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.76,
        "hfov": 11.37,
        "pitch": 6
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 4.76,
        "hfov": 11.37,
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A55A5AB4_A977_9072_41AA_7A02697B4876, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A8FC659B_A498_0A77_41B7_71038B18F42B",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 153,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 21.14,
        "hfov": 16.11,
        "pitch": 19.91
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 21.14,
        "hfov": 16.11,
        "image": {
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 306,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 19.91
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A4637116_B482_3AE7_41D9_411908C96F8E",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 173,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -16.48,
        "hfov": 24.11,
        "pitch": -11.04
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -16.48,
        "hfov": 24.11,
        "image": {
         "levels": [
          {
           "height": 507,
           "class": "ImageResourceLevel",
           "width": 439,
           "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.04
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A88851C5_A468_0DD2_41D8_EA963347C751.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": " Gapura Timur",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.mp3",
     "oggUrl": "media/audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4"
   }
  ],
  "partial": false,
  "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A427AE2F_A991_906E_41CD_430E5C7A5D4C, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A8BB811F_A498_0A6F_41C1_12D18D3EEAF4",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 124,
           "class": "ImageResourceLevel",
           "width": 120,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -76.29,
        "hfov": 13.51,
        "pitch": -1.14
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -76.29,
        "hfov": 13.51,
        "image": {
         "levels": [
          {
           "height": 248,
           "class": "ImageResourceLevel",
           "width": 241,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.14
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A46A114E_A996_902E_41D8_222F177FF178, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A52B024C_A992_F012_41C2_9FCDCF8FD360",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 105,
           "class": "ImageResourceLevel",
           "width": 96,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.48,
        "hfov": 10.85,
        "pitch": -0.28
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -0.48,
        "hfov": 10.85,
        "image": {
         "levels": [
          {
           "height": 210,
           "class": "ImageResourceLevel",
           "width": 193,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.28
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDFCB05E_B38E_1B67_41DC_2B167E922B7B",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 42.56,
        "hfov": 23.82,
        "pitch": -14
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 42.56,
        "hfov": 23.82,
        "image": {
         "levels": [
          {
           "height": 95,
           "class": "ImageResourceLevel",
           "width": 438,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BE77917C_B38F_FD2B_41AD_81AA81A4243B",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 42.67,
        "hfov": 11.29,
        "pitch": -9.05
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 42.67,
        "hfov": 11.29,
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.05
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Beteng timur",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.mp3",
     "oggUrl": "media/audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11"
   }
  ],
  "partial": false,
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A78766D5_A993_9032_41DA_0A67D437776E",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 180,
           "class": "ImageResourceLevel",
           "width": 156,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -176.57,
        "hfov": 17.52,
        "pitch": -0.29
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -176.57,
        "hfov": 17.52,
        "image": {
         "levels": [
          {
           "height": 360,
           "class": "ImageResourceLevel",
           "width": 313,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_E6C2784D_ED1F_C78F_41C1_792A89CBBC6B",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 139,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20,
        "hfov": 12.43,
        "pitch": 37.24
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -20,
        "hfov": 12.43,
        "image": {
         "levels": [
          {
           "height": 292,
           "class": "ImageResourceLevel",
           "width": 279,
           "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.24
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A73323B6_A99F_907E_41DA_9BA56748C827.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Pintu selatan paduraksa",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.mp3",
     "oggUrl": "media/audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A"
   }
  ],
  "partial": false,
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_FBCF146F_F640_2C2A_41DD_AD25AE0D8419); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_AA4F8557_A4E8_0AFF_41DF_2A8589A5D9A0",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 137,
           "class": "ImageResourceLevel",
           "width": 141,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.48,
        "hfov": 15.81,
        "pitch": 0.76
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 4.48,
        "hfov": 15.81,
        "image": {
         "levels": [
          {
           "height": 275,
           "class": "ImageResourceLevel",
           "width": 282,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.76
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BF495F73_B386_053E_41D4_0BC825A1DB76",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 123.05,
        "hfov": 11.1,
        "pitch": -13.67
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 123.05,
        "hfov": 11.1,
        "image": {
         "levels": [
          {
           "height": 205,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.67
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E, this.camera_FB382468_F640_2C56_4189_9700D2AE6587); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDD4D841_B382_0B5A_41E2_E2CB95658782",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 93,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -79.71,
        "hfov": 10.29,
        "pitch": -10.81
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -79.71,
        "hfov": 10.29,
        "image": {
         "levels": [
          {
           "height": 178,
           "class": "ImageResourceLevel",
           "width": 187,
           "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.81
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Halaman Depan",
  "adjacentPanoramas": [
   {
    "panorama": {
     "audios": [
      {
       "autoplay": true,
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.mp3",
        "id": "audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
        "oggUrl": "media/audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B.ogg"
       },
       "class": "PanoramaAudio",
       "id": "audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3"
      }
     ],
     "partial": false,
     "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
     "hfov": 360,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
     "class": "Panorama",
     "hfovMin": 60,
     "frames": [
      {
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_A440985C_B486_0B6A_41D7_9FD1681C54DE",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 152,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -21.15,
           "hfov": 28.83,
           "pitch": -10.57
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -21.15,
           "hfov": 28.83,
           "image": {
            "levels": [
             {
              "height": 401,
              "class": "ImageResourceLevel",
              "width": 524,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.57
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_FBC31475_F640_2C3E_41DC_CEBFB4029BA1); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_A6315028_B486_1B2A_418D_A494D9AD3996",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 85,
              "class": "ImageResourceLevel",
              "width": 90,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 166.38,
           "hfov": 9.55,
           "pitch": -19
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 166.38,
           "hfov": 9.55,
           "image": {
            "levels": [
             {
              "height": 171,
              "class": "ImageResourceLevel",
              "width": 180,
              "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E.jpeg"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "label": "Bangsal Selatan",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "yaw": 166.38,
       "backwardYaw": -79.71,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": -79.71,
    "backwardYaw": 166.38,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "audios": [
      {
       "autoplay": true,
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.mp3",
        "oggUrl": "media/audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01.ogg"
       },
       "class": "PanoramaAudio",
       "id": "audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01"
      }
     ],
     "partial": false,
     "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
     "hfov": 360,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
     "class": "Panorama",
     "hfovMin": 60,
     "frames": [
      {
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showWindow(this.window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B, null, false)"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_AABF9161_A4E8_0AD3_419C_13ECC0CEF900",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 173,
              "class": "ImageResourceLevel",
              "width": 185,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 3.71,
           "hfov": 19.24,
           "pitch": -22
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 3.71,
           "hfov": 19.24,
           "image": {
            "levels": [
             {
              "height": 347,
              "class": "ImageResourceLevel",
              "width": 370,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_FBD7047C_F640_2C2E_41E1_C30B9EA43536); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_ABAA8C28_A498_1A51_419E_3006B556451A",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 167,
              "class": "ImageResourceLevel",
              "width": 166,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -85.33,
           "hfov": 17.86,
           "pitch": -16.88
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -85.33,
           "hfov": 17.86,
           "image": {
            "levels": [
             {
              "height": 334,
              "class": "ImageResourceLevel",
              "width": 333,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -16.88
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_BDF5C5BB_B382_052E_41B8_D97447B676B9",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 190,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -36.96,
           "hfov": 27.5,
           "pitch": -33.9
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -36.96,
           "hfov": 27.5,
           "image": {
            "levels": [
             {
              "height": 622,
              "class": "ImageResourceLevel",
              "width": 592,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -33.9
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B, this.camera_FBE94483_F640_2CDA_41B8_CF1D9852EE6B); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "id": "overlay_FCAD411B_F15A_9B02_41AB_D600CC6059A0",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 195,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 108.1,
           "hfov": 21.75,
           "pitch": -21.81
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 108.1,
           "hfov": 21.75,
           "image": {
            "levels": [
             {
              "height": 408,
              "class": "ImageResourceLevel",
              "width": 418,
              "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.81
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536.jpeg"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "label": "Jagang",
     "adjacentPanoramas": [
      {
       "panorama": {
        "audios": [
         {
          "autoplay": true,
          "audio": {
           "class": "AudioResource",
           "mp3Url": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.mp3",
           "oggUrl": "media/audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C.ogg"
          },
          "class": "PanoramaAudio",
          "id": "audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C"
         }
        ],
        "partial": false,
        "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
        "hfov": 360,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
        "class": "Panorama",
        "hfovMin": 60,
        "frames": [
         {
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_AA360F6D_A499_F6D3_4190_7C3D533E68AE",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 122,
                 "class": "ImageResourceLevel",
                 "width": 115,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 6.29,
              "hfov": 12.95,
              "pitch": 1.43
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 6.29,
              "hfov": 12.95,
              "image": {
               "levels": [
                {
                 "height": 245,
                 "class": "ImageResourceLevel",
                 "width": 231,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.43
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536, this.camera_FA2AD4A3_F640_2CDA_4162_18D8D202C076); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_B4DEA708_A498_1651_41DF_95EBAB6D2B9F",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 138,
                 "class": "ImageResourceLevel",
                 "width": 139,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 170.29,
              "hfov": 15.15,
              "pitch": -14.13
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 170.29,
              "hfov": 15.15,
              "image": {
               "levels": [
                {
                 "height": 276,
                 "class": "ImageResourceLevel",
                 "width": 279,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.13
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4, this.camera_FA2EE49C_F640_2CEE_41EC_922E17806DAA); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "id": "overlay_BC5EDA4C_B39E_0F6B_41E2_7F79E2F111A1",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 72,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -56.38,
              "hfov": 8.93,
              "pitch": -12.33
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -56.38,
              "hfov": 8.93,
              "image": {
               "levels": [
                {
                 "height": 144,
                 "class": "ImageResourceLevel",
                 "width": 163,
                 "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_0_HS_2_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -12.33
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8.jpeg"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "label": "Serambi",
        "adjacentPanoramas": [
         {
          "panorama": {
           "audios": [
            {
             "autoplay": true,
             "audio": {
              "class": "AudioResource",
              "mp3Url": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.mp3",
              "oggUrl": "media/audio_A3A18480_B382_3BDA_41C2_B065B593F8FB.ogg"
             },
             "class": "PanoramaAudio",
             "id": "audio_A3A18480_B382_3BDA_41C2_B065B593F8FB"
            }
           ],
           "partial": false,
           "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
           "hfov": 360,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
           "class": "Panorama",
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_BDE28CFE_B382_0B26_41CE_BD978435215D",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 161,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 39.62,
                 "hfov": 23.35,
                 "pitch": -19.42
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 39.62,
                 "hfov": 23.35,
                 "image": {
                  "levels": [
                   {
                    "height": 547,
                    "class": "ImageResourceLevel",
                    "width": 442,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_0_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.42
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showWindow(this.window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A, null, false)"
                }
               ],
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_BDDE2397_B3FE_1DE6_41E1_8B201664657A",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 159,
                    "class": "ImageResourceLevel",
                    "width": 173,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 12.57,
                 "hfov": 19.11,
                 "pitch": -10.19
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 12.57,
                 "hfov": 19.11,
                 "image": {
                  "levels": [
                   {
                    "height": 319,
                    "class": "ImageResourceLevel",
                    "width": 347,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_1_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.19
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8, this.camera_FA27D4AA_F640_2C2A_41EB_8C557D489FC0); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "id": "overlay_A38E0B08_B382_0EEA_41E6_483291F2D8CF",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 85,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 58.1,
                 "hfov": 10.47,
                 "pitch": -11
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 58.1,
                 "hfov": 10.47,
                 "image": {
                  "levels": [
                   {
                    "height": 171,
                    "class": "ImageResourceLevel",
                    "width": 190,
                    "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_0_HS_2_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4.jpeg"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "label": "Bedug",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
             "yaw": 58.1,
             "backwardYaw": -56.38,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": -56.38,
          "backwardYaw": 58.1,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
          "yaw": 170.29,
          "backwardYaw": -85.33,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": -85.33,
       "backwardYaw": 170.29,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B",
       "yaw": 108.1,
       "backwardYaw": 4.48,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": 4.48,
    "backwardYaw": 108.1,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.mp3",
     "oggUrl": "media/audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74"
   }
  ],
  "partial": false,
  "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A834D34F_A4E8_0EEF_41DE_3A4D9CFD8E65",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 141,
           "class": "ImageResourceLevel",
           "width": 141,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.28,
        "hfov": 15.71,
        "pitch": 6.29
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 4.28,
        "hfov": 15.71,
        "image": {
         "levels": [
          {
           "height": 282,
           "class": "ImageResourceLevel",
           "width": 282,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BEEA64FB_B386_1B2E_41E6_6F62B2B93ABD",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 74,
           "class": "ImageResourceLevel",
           "width": 79,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 51.14,
        "hfov": 8.83,
        "pitch": -9.38
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 51.14,
        "hfov": 8.83,
        "image": {
         "levels": [
          {
           "height": 148,
           "class": "ImageResourceLevel",
           "width": 159,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.38
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDDA8B6D_B382_0D25_41DC_38BC6B9B5D45",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 91,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -32.19,
        "hfov": 10.07,
        "pitch": -11.86
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -32.19,
        "hfov": 10.07,
        "image": {
         "levels": [
          {
           "height": 175,
           "class": "ImageResourceLevel",
           "width": 183,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.86
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDB524BF_B382_7B26_41E4_5485BCB53EAF",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 178,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 27.62,
        "hfov": 24.66,
        "pitch": -11.14
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 27.62,
        "hfov": 24.66,
        "image": {
         "levels": [
          {
           "height": 503,
           "class": "ImageResourceLevel",
           "width": 449,
           "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_0_HS_6_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.14
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Tugu jam",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.mp3",
     "oggUrl": "media/audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3"
   }
  ],
  "partial": false,
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_B49E69A7_A498_1A5F_41D1_6F451025BFCF",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 110,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.81,
        "hfov": 11.79,
        "pitch": -17.76
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.81,
        "hfov": 11.79,
        "image": {
         "levels": [
          {
           "height": 216,
           "class": "ImageResourceLevel",
           "width": 221,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.76
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_B9268ACE_A9F2_902E_41DC_0D70CFDD4CAE",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 165,
           "class": "ImageResourceLevel",
           "width": 158,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 169.05,
        "hfov": 17.63,
        "pitch": -5.71
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 169.05,
        "hfov": 17.63,
        "image": {
         "levels": [
          {
           "height": 330,
           "class": "ImageResourceLevel",
           "width": 316,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.71
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A3D15370_AD00_97B8_4192_AFEE74833F02",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 63.52,
        "hfov": 15.04,
        "pitch": -0.19
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 63.52,
        "hfov": 15.04,
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDB99953_B382_0D7E_41C3_39067C338574",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 125,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -46.67,
        "hfov": 14.04,
        "pitch": -4.47
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -46.67,
        "hfov": 14.04,
        "image": {
         "levels": [
          {
           "height": 217,
           "class": "ImageResourceLevel",
           "width": 251,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.47
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BD8E2F49_B386_056A_41E3_5D6B13077607",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 170,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 62.19,
        "hfov": 21.41,
        "pitch": -16.09
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 62.19,
        "hfov": 21.41,
        "image": {
         "levels": [
          {
           "height": 469,
           "class": "ImageResourceLevel",
           "width": 398,
           "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_AB302472_A498_0AB1_41E2_1E9529F5765B.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Ruang Utama",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.mp3",
     "oggUrl": "media/audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268"
   }
  ],
  "partial": false,
  "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A6B2892C_A9F1_F012_41D4_2F053443E4FF, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A79C43BD_A996_9072_41BE_17ACC1B08D72",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -32.48,
        "hfov": 15.02,
        "pitch": -3.23
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -32.48,
        "hfov": 15.02,
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.23
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A6B2DBA7_A991_B01E_41CA_B5C93593BF1F",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -1.24,
        "hfov": 14.48,
        "pitch": -15.62
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -1.24,
        "hfov": 14.48,
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.62
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_B9E2CF50_A9F1_9032_41C7_AE1BF336D482",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -137.52,
        "hfov": 11.33,
        "pitch": -7.71
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -137.52,
        "hfov": 11.33,
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.71
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BE631795_B38E_05FA_41E2_83F2D3FCB53B",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 195,
           "class": "ImageResourceLevel",
           "width": 185,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -52.67,
        "hfov": 19.97,
        "pitch": -15.81
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -52.67,
        "hfov": 19.97,
        "image": {
         "levels": [
          {
           "height": 391,
           "class": "ImageResourceLevel",
           "width": 370,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.81
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BD88B33C_B386_1D2A_41BB_D0092ECEDE3A",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 188,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 33.71,
        "hfov": 21.09,
        "pitch": -20.19
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 33.71,
        "hfov": 21.09,
        "image": {
         "levels": [
          {
           "height": 377,
           "class": "ImageResourceLevel",
           "width": 401,
           "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.19
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Depan Mimbar",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.mp3",
     "oggUrl": "media/audio_B85C4BEA_A993_9016_41DE_311CC1771B4C.ogg"
    },
    "class": "PanoramaAudio",
    "id": "audio_B85C4BEA_A993_9016_41DE_311CC1771B4C"
   }
  ],
  "partial": false,
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_B9064232_A9F1_7076_41C5_47BE15AD4EDF",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -27.24,
        "hfov": 11.43,
        "pitch": -1.05
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -27.24,
        "hfov": 11.43,
        "image": {
         "levels": [
          {
           "height": 204,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.05
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_B901E884_A98E_9012_41E5_394E8E9673D9",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -77.05,
        "hfov": 15.02,
        "pitch": -3.23
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -77.05,
        "hfov": 15.02,
        "image": {
         "levels": [
          {
           "height": 268,
           "class": "ImageResourceLevel",
           "width": 268,
           "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.23
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Pawestran",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "audios": [
   {
    "autoplay": true,
    "audio": "this.audioresource_F981625E_EDF4_CC1E_41DC_4D65AA4F7A2E",
    "class": "PanoramaAudio",
    "id": "audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B"
   }
  ],
  "partial": false,
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB",
  "hfov": 360,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BD9E88B4_B382_0B3A_41E0_F03F230CC701",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 19.51,
        "hfov": 23.05,
        "pitch": -24.38
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 19.51,
        "hfov": 23.05,
        "image": {
         "levels": [
          {
           "height": 153,
           "class": "ImageResourceLevel",
           "width": 452,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.38
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BD8F6AE6_B38E_0F26_41D8_5BFF9980F220",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -135.62,
        "hfov": 10.33,
        "pitch": -25.29
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -135.62,
        "hfov": 10.33,
        "image": {
         "levels": [
          {
           "height": 205,
           "class": "ImageResourceLevel",
           "width": 204,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_BDA44DE5_B386_055A_41D4_92F2F07FBC21",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 188,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.38,
        "hfov": 25.94,
        "pitch": -13.33
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -20.38,
        "hfov": 25.94,
        "image": {
         "levels": [
          {
           "height": 507,
           "class": "ImageResourceLevel",
           "width": 476,
           "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.33
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "Bangsal Utara",
  "cardboardMenu": "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AD09DC19_A468_FA73_41D2_7B259C9F45F5"
   },
   {
    "camera": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A88851C5_A468_0DD2_41D8_EA963347C751"
   },
   {
    "camera": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A986247A_A498_0AB1_41E1_9B90F3DC6696"
   },
   {
    "camera": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A73323B6_A99F_907E_41DA_9BA56748C827"
   },
   {
    "camera": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AAAA476D_A4E8_36D3_41E1_A9D97A66989B"
   },
   {
    "camera": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A9B60A21_A4E8_3E53_41D3_6460418B4370"
   },
   {
    "camera": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AA67325D_A4E8_0EF2_419D_AF010DC8B536"
   },
   {
    "camera": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB88BD66_A498_7AD1_41C9_76BEE9EF70F8"
   },
   {
    "camera": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BC792DC2_B382_055F_41C4_D316B4B5CBA4"
   },
   {
    "camera": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB302472_A498_0AB1_41E2_1E9529F5765B"
   },
   {
    "camera": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A7CE8F73_A997_B0F6_41C7_227DE234F93E"
   },
   {
    "camera": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A45D9F0F_A997_902E_41E1_B9714E34E48C"
   },
   {
    "camera": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BDB6984C_B382_0B67_41D9_20DE8D9655AB"
   },
   {
    "camera": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A483ECAA_B486_0B2E_41A1_E45E039F768E"
   }
  ]
 },
 "this.Menu_FB24A44E_F640_2C6A_41D1_F21CC29E161B",
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "GAPURA PADURAKSA",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidF832F40F_F640_23E9_41DA_A5700A316B7E",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Masjid Gedhe Mataram Kotagede ini menyuguhkan arsitektur yang menyimbolkan makna kerukunan dimana gapura yang ada di masjid secara tidak langsung melambangkan kerukunan dari umat Islam dan Hindu-Buddha pada masa Kerajaan Mataram Islam. Gapura yang berada di depan masjid memiliki bentuk yang berbeda dengan masjid-masjid pada umumnya. Gapura pada Masjid Gedhe Mataram berbentuk seperti bangunan yang biasanya di tempat ibadah umat Hindu-Buddha. Pada Gapura Paduraksa, terdapat hiasan kala yang umum dijumpai pada bangunan Hindu-Buddha. Keberadaan Gapura Paduraksa ini mencerminkan sikap toleransi terhadap agama Hindu-Buddha, serta menunjukkan respons arsitektur masjid pada masa itu terhadap gaya arsitektur lokal yang masih dipengaruhi oleh unsur-unsur Hindu-Buddha. Di sisi kanan dan kiri Gapura, terdapat pagar setinggi 2,5 meter yang mengelilingi kompleks masjid dan area pemakaman.</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidF832F40F_F640_23E9_41DA_A5700A316B7E_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_A55A5AB4_A977_9072_41AA_7A02697B4876",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "TEMBOK PAGAR",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidF8CFF417_F640_23F9_41E6_CB19BC34C9FC",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Masjid gedhe Mataram memiliki dua buah prasasti di bagian depan yang di dalamnya menjelaskan mengenai proses pembangunan Masjid Gedhe Mataram. Prasasti tersebut menyebutkan bahwa proses pembangunan Masjid dilakukan melalui dua tahapan. Tahap pertama dibangun pada masa Sultan Agung dan hanya berupa bangunan inti masjid dengan ukuran yang relatif kecil atau biasa disebut dengan Langgar. Tahap kedua dibangun oleh Raja Kasunanan Surakarta, Paku Buwono X. Hal tersebut ditunjukkan melalui struktur bahan bangunan yang digunakan dalam pembuatan tembok di sekeliling masjid. Pada bagian kiri masjid, terdiri dari batu bata dengan ukuran yang lebih besar dan berwarna merah tua, serta terdapat batu seperti marmer dengan tulisan aksara jawa. Tembok tersebut dibangun pada masa Sultan Agung menggunakan perekat berbahan dasar air aren yang menjadikannya lebih kuat karena proses pembatuan dari perekat tersebut. Kemudian untuk sebagian tembok lainnya merupakan hasil renovasi pembangunan pada masa Paku Buwono X. </SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: javatourasian.com</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidF8CFF417_F640_23F9_41E6_CB19BC34C9FC_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_A427AE2F_A991_906E_41CD_430E5C7A5D4C",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "ORNAMEN KALA",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB11541C_F640_23EE_41CB_F50295142E09",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Tembok Kelir pada halaman depan Masjid Gedhe Mataram Kotagede ini berfungsi untuk menutupi atau menghalangi pandangan bagian luar ke bagian dalam masjid. Pada tembok Kelir tersebut, terdapat sebuah ornamen berbentuk Kala. Umumnya, ornamen Kala berada pada bangunanbangunan di zaman Hindu-Buddha. Ornamen muka Kala itu sering disebut sebagai makara (muka angkara) yang memiliki makna bahwa Kala atau Buto raksasa ini menunjukkan waktu yang terus memakan kita dan biasanya ornamen Kala ditempatkan pada bagian atas gapura. Ornamen tersebut, pada dasarnya ditujukan menjadi sebuah simbol yang baik yaitu untuk menunjukkan kebijaksanaan dan nilai-nilai luhur para pembangun Masjid Gedhe Mataram Kotagede serta generasi setelahnya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Anggrahito Ananggadipo E </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB11541C_F640_23EE_41CB_F50295142E09_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_A46A114E_A996_902E_41D8_222F177FF178",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "KEMUNCAK",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB108423_F640_23DA_41E3_E9B1F8D9E373",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Selain ornamen yang menghiasi dinding masjid, terdapat juga hiasan kemuncak yang mengelilingi halaman Masjid Gedhe Mataram. Terdapat 63 kemuncak yang melambangkan usia Nabi Muhammad SAW. Bentuk kemuncak ini mengerucut ke atas, dengan ukuran yang bervariasi: bagian bawahnya besar, bagian tengah sedang, dan bagian atas kecil. Setiap kemuncak memiliki makna yang mendalam, yaitu syariat, hakikat, dan makrifat. Kemuncak bagian bawah melambangkan syariat, yang berarti hukum atau peraturan, menunjukkan bahwa meskipun seseorang mengetahui adanya peraturan yang ditetapkan, sering kali peraturan tersebut dilanggar. Kemuncak bagian tengah melambangkan hakikat, yang berarti kebenaran atau kenyataan, mencerminkan kemampuan seseorang untuk merasakan dan menyaksikan kehadiran Allah SWT, sehingga hakikat menjadi aspek penting dalam setiap amal dan rahasia. Sementara itu, kemuncak paling atas yang berbentuk kecil melambangkan makrifat, yang merupakan hasil dari hakikat dan mencakup hal-hal yang dapat dirasakan secara istiqamah. Makrifat sendiri merupakan tahapan rohaniah tertinggi yang memungkinkan seseorang untuk benar-benar mengenal Allah SWT dan rahasia-rahasia-Nya.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB108423_F640_23DA_41E3_E9B1F8D9E373_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_E1CE937A_ED1F_4995_41ED_4A11955A0BB2",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "TUGU JAM",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2F8425_F640_23DE_4174_1A8DA741DE5A",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada halaman depan masjid terdapat sebuah tugu dengan ukuran 1,5 m x 1,5 m dengan tinggi 4 m. Tugu tersebut memiliki ukuran kayu berbentuk makula pada bagian atasnya. Bangunan tugu tersebut merupakan tetenger Sunan Paku Buwana sepuluh. Selain itu, tugu tersebut juga difungsikan sebagai jam penunjuk waktu shalat. Pada puncak tugu dihiasi dengan hiasan kupluk/ peci raja sebagai penunjuk bahwa masjid tersebut merupakan bangunan milik kerajaan. </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2F8425_F640_23DE_4174_1A8DA741DE5A_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_FC77D8D0_F14D_A91E_41C4_8560C5048F7A",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "JAGANG",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2EF427_F640_23DA_41D9_4C2421E6EBD8",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Di sekeliling Masjid Gedhe Mataram Kotagede terdapat sebuah kolam kecil untuk cuci kaki sebagai simbol jamaah yang masuk ke dalam masjid harus dalam keadaan suci, baik jiwa maupun raganya. Selain itu, Jagang di sekeliling masjid digunakan untuk benteng keamanan setelah pagar pembatas serta digunakan sebagai sarana membersihkan kaki sebelum masuk ke dalam masjid.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2EF427_F640_23DA_41D9_4C2421E6EBD8_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_F9B8726D_EDF4_4C22_41E6_223CB50FB07B",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "BEDUG ",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2D9429_F640_23D6_41E7_0CABD9DF8B77",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Bedug yang terletak di pojok selatan serambi tersebut dibuat atas usulan Sunan Kalijaga. Pada saat Sunan Kalijaga sedang melakukan perjalan ke Kulon Progo, tepatnya ke Desa Dondong, ia (Sunan Kalijaga) menemukan sebuah pohon dengan diameter batang yang cukup besar. Pohon tersebut pada zaman dahulu dinamakan sebagai pohon bayam. Pada saat Sunan Kalijaga menemukan pohon tersebut, ia berfikir untuk membawa batang pohon tersebut yang nantinya akan digunakan untuk membuat bedug. Meskipun pohon tersebut berada di tengah hutan, Sunan Kalijaga tetap mencari pemilik pohon tersebut. Pada akhirnya, muncul seorang bernama Nyai Pringgit atau biasa disebut dengan Nyai Brintik yang mengaku bahwa ia adalah pemilik pohon tersebut. Setelah melakukan diskusi, Sunan Kalijaga memerintah Kyai Pringgit membawa batang pohon tersebut menuju ke Keraton Mataram yang pada saat itu sedang melakukan pembangunan Masjid Gedhe Mataram di Kotagede. Sesampainya di Mataram, Nyai Pringgit diangkat menjadi abdi dalem dan dipersilahkan untuk tinggal di kawasan sekitar Masjid Gedhe Mataram yang saat ini bernama Kampung Dondongan. Kampung tersebut merupakan tempat tinggal para abdi dalem keturuan Nyai Pringgit. </SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2D9429_F640_23D6_41E7_0CABD9DF8B77_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_BCB498DC_B3FE_0B6A_41E5_D1345FAAA59A",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2CF430_F640_2C36_41C3_DAAA24A0FE24",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Relasi antara Saka Guru dengan arsitektur masjid merupakan perwujudan yang berhubungan dengan kepercayaan serta makna metafisik. Berikut visualisasi perwujudan dualisme Saka Guru dan arah vertikal antara manusia dengan kekuatan markokosmos. Ruang di dalam Saka Guru membentuk sebuah koneksi antara kehidupan sosial dengan keagamaan. Keagamaan dalam konteks tersebut yakni sesuai dengan pengalaman spiritual masing-masing individu. Manifestasi tersebut dapat disimpulkan secara signifikan bahwa makna Saka Guru dalam bangunan Masjid Gedhe Mataram Kotagede, yaitu: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">1. Secara praktis, Saka Guru sebagai penopang atap. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">2. Secara metafisik, Saka Guru memiliki sifat dualitas atau mendua. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Saka guru juga dapat diartikan sebagai sebuah lambang dari 4 (empat) unsur kehidupan yaitu tanah, air, api, dan udara.. Selain Saka Guru, terdapat sebuah mimbar yang sangat ikonik di dalam ruang utama Masjid tersebut. Mimbar tersebut, merupakan hadiah dari Sultan Palembang kepada Sultan Agung. Sebelumnya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri ketika ikut berburu dengan raja. Hingga pada akhirnya setelah diberikan kepada Sultan Agung, tempat duduk tersebut dijadikan sebuah mimbar dan diletakkan di Masjid Gedhe Mataram. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">(Sumber Gambar: Frick 1977 dimodifikasi oleh Ajeng Kusuma, 2020)</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2CF430_F640_2C36_41C3_DAAA24A0FE24_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "normal",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_BD20E8AC_AD00_92A8_41CD_6F0F08B15ED2",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Arial",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "MIHRAB",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2BD433_F640_2C3A_41ED_69C1F0174237",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada bagian Mihrab terdapat ornamen dengan motif sulur daun dan tiang semu dengan dilengkapi bingkai di bagian atasnya. Ornamen tersebut, pada dasarnya disesuaikan dengan anjuran di dalam agama Islam yang melarang adanya ornamen berbentuk menyerupai manusia maupun hewan. Sebagian besar ornamen yang terdapat di dalam ruang utama Liwan memiliki motif berupa sulur dan juga lung-lungan yang secara simbolik menunjukkan makna sebagai tumbuhan surga di dalam kepercayaan Hindu-Buddha. Motif lung-lungan dalam Islam juga dapat dimaknai sebagai pengingat umat muslim dalam bersosial dan tolong-menolong. </SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2BD433_F640_2C3A_41ED_69C1F0174237_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_A6B2892C_A9F1_F012_41D4_2F053443E4FF",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "MIMBAR",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2BB435_F640_2C3E_41CD_086E1C5789D0",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Mimbar dalam masjid Islam adalah tempat yang digunakan oleh khatib untuk menyampaikan khutbah, terutama pada hari Jumat. Biasanya terletak di dekat mihrab, mimbar memiliki berbagai bentuk dan desain yang mencerminkan budaya setempat, serta berfungsi sebagai simbol kepemimpinan dan penyampaian pesan dakwah kepada jamaah. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada ruangan Liwan atau ruangan utama masjid, terdapat dua buah mimbar dengan ukuran dan bentuk yang berbeda. Mimbar pertama/ mimbar besar yang terbuat dari kayu dan terkesan unik karena berbeda dengan mimbar masjid pada umumnya. Mimbar tersebut merupakan hadiah dari Sultan Palembang kepada Mataram pada masa itu. Dahulunya, mimbar tersebut merupakan tandu yang digunakan sebagai tempat duduk istri raja ketika ikut berburu. Kemudian pada mimbar kedua, memiliki ukuran yang lebih kecil. Selain itu, mimbar kecil ini biasanya digunakan untuk kebutuhan kultum harian di Masjid gedhe Mataram. Penempatan mimbar di sebelah kanan mihrab memiliki makna mengenai keutamaan kanan daripada yang kiri karena kanan merupakan hal yang utama dibandingakan yang kiri.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Sumber Gambar: Nimas Ayu Pramesti</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "width": "100%",
    "height": "55%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2BB435_F640_2C3E_41CD_086E1C5789D0_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "44%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_B9AE8EF5_A992_F1F2_41DC_A16A03B048A9",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "bodyPaddingLeft": 5,
  "bodyPaddingBottom": 5,
  "headerPaddingRight": 10,
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "headerBackgroundOpacity": 1,
  "modal": true,
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonBorderRadius": 11,
  "scrollBarWidth": 10,
  "closeButtonIconHeight": 12,
  "title": "PAWESTRAN",
  "titleFontStyle": "normal",
  "minHeight": 20,
  "children": [
   {
    "id": "htmlText_uidFB2A7437_F640_2C3A_41E3_F3B9C99A094D",
    "borderRadius": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "minWidth": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\">Pada bangunan masjid kuno di Indonesia, terutama di Jawa, terdapat sebuah ruangan khusus yang terletak di samping kiri atau sebelah selatan ruang utama masjid dengan tetap berada pada bangunan utama. Ruangan atau bangunan tersebut biasa disebut dengan Pawestran. Pawestran merupakan tempat shalat yang dikhususkan untuk perempuan dan berada di dalam ruangan utama masjid. Pawestran berasal dari kata estru (istri) yang artinya perempuan dan kemudian diberikan imbuhan \u2018pa-an\u2019 menjadi paistriaan sehingga menunjukkan tempat. Saat ini ruangan pawestran di Masjid Gedhe Mataram juga digunakan sebagai tempat mengaji bagi anak-anak maupun jamaah lainnya yang ada di lingkungan masjid tersebut.</SPAN></SPAN></DIV></div>",
    "width": "100%",
    "height": "50%",
    "paddingBottom": 10,
    "class": "HTMLText",
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "borderSize": 0
   },
   {
    "verticalAlign": "middle",
    "minHeight": 0,
    "id": "image_uidFB2A7437_F640_2C3A_41E3_F3B9C99A094D_1",
    "minWidth": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "50%",
    "shadow": false,
    "scaleMode": "fit_inside",
    "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg",
    "paddingBottom": 0,
    "class": "Image",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "borderSize": 0
   }
  ],
  "headerVerticalAlign": "middle",
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "titleFontWeight": "bold",
  "gap": 10,
  "minWidth": 20,
  "width": 400,
  "height": 600,
  "bodyBorderSize": 0,
  "backgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingBottom": 0,
  "titleTextDecoration": "none",
  "bodyPaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingBottom": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "id": "window_BAC6D9AB_A992_B015_41BA_AC64D10DFE98",
  "headerBorderSize": 0,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "bodyBackgroundOpacity": 1,
  "bodyBorderColor": "#000000",
  "shadow": true,
  "backgroundColorRatios": [],
  "headerBorderColor": "#000000",
  "shadowHorizontalLength": 3,
  "horizontalAlign": "center",
  "titleFontSize": 14,
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 5,
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconWidth": 12,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "veilColorDirection": "horizontal",
  "contentOpaque": false,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "closeButtonIconLineWidth": 2,
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "titlePaddingRight": 5,
  "titleFontFamily": "Lucida Console",
  "titlePaddingLeft": 5
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FB382468_F640_2C56_4189_9700D2AE6587",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.62,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FBCF146F_F640_2C2A_41DD_AD25AE0D8419",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.9,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FBC31475_F640_2C3E_41DC_CEBFB4029BA1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.29,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FBD7047C_F640_2C2E_41E1_C30B9EA43536",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.71,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FBE94483_F640_2CDA_41B8_CF1D9852EE6B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.52,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FA2EE49C_F640_2CEE_41EC_922E17806DAA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -121.9,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FA2AD4A3_F640_2CDA_4162_18D8D202C076",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.67,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_FA27D4AA_F640_2C2A_41EB_8C557D489FC0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.62,
   "pitch": 0
  }
 },
 "this.audio_AE980FB9_A468_15B3_41E3_A1C21EB54A47",
 "this.audio_A2FBBAD4_A972_B032_41D0_4662D3D3335A",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88_t.jpg",
  "class": "Photo",
  "id": "photo_A4FF733C_A973_9072_41C6_43A355F99D88",
  "label": "Gapura Paduraksa",
  "image": {
   "levels": [
    {
     "url": "media/photo_A4FF733C_A973_9072_41C6_43A355F99D88.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 5984,
  "width": 11968
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C_t.jpg",
  "class": "Photo",
  "id": "photo_A5D33363_A97E_F016_41E3_E11843ACB34C",
  "label": "PADURAKSA(1)",
  "image": {
   "levels": [
    {
     "url": "media/photo_A5D33363_A97E_F016_41E3_E11843ACB34C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 1920,
  "width": 2560
 },
 "this.audio_A45EFC4A_A971_9016_41BE_7DDE5ED706B4",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792_t.jpg",
  "class": "Photo",
  "id": "photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792",
  "label": "masjid-kotagede-edit-1",
  "image": {
   "levels": [
    {
     "url": "media/photo_A40AC1FA_A9B2_93ED_41D9_6E821FFC4792.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 438,
  "width": 600
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C_t.jpg",
  "class": "Photo",
  "id": "photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C",
  "label": "Javanese_Decoration",
  "image": {
   "levels": [
    {
     "url": "media/photo_A4FACAEB_A991_7016_41D8_B2EAA044C21C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 4000,
  "width": 4000
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C_t.png",
  "class": "Photo",
  "id": "photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C",
  "label": "Mimbar",
  "image": {
   "levels": [
    {
     "url": "media/photo_B91BC9EE_A991_93EE_41CF_4F1F7829D88C.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 683,
  "width": 383
 },
 {
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.mp3",
   "oggUrl": "media/audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59.ogg"
  },
  "class": "MediaAudio",
  "id": "audio_A6B6E128_A9F6_9012_41E2_C6F27F4E7F59"
 },
 {
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.mp3",
   "oggUrl": "media/audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13.ogg"
  },
  "class": "MediaAudio",
  "id": "audio_A664CDEC_A9F1_B012_41E2_B3D169F18C13"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53_t.png",
  "class": "Photo",
  "id": "photo_B9341347_A9F2_901E_41D8_9D58AF49BA53",
  "label": "Mihrab",
  "image": {
   "levels": [
    {
     "url": "media/photo_B9341347_A9F2_901E_41D8_9D58AF49BA53.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 368,
  "width": 554
 },
 "this.audio_A64C2DE4_A9FE_B012_41D6_6BB98C3216F3",
 {
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.mp3",
   "oggUrl": "media/audio_B98A9738_A9FE_9072_41D8_9489BF11BA30.ogg"
  },
  "class": "PanoramaAudio",
  "id": "audio_B98A9738_A9FE_9072_41D8_9489BF11BA30"
 },
 "this.audio_B8CA56C2_A992_F016_41E0_D05DBCAE0268",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B_t.jpg",
  "class": "Photo",
  "id": "photo_BB76BDE8_A993_F012_41CF_C2991C92D05B",
  "label": "IMG_20250304_094213_00_010_PureShot",
  "image": {
   "levels": [
    {
     "url": "media/photo_BB76BDE8_A993_F012_41CF_C2991C92D05B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 2250,
  "width": 4000
 },
 "this.audio_B85C4BEA_A993_9016_41DE_311CC1771B4C",
 "this.audio_A3BBD50D_AD00_B368_41CF_FC51F11314C0",
 "this.audio_A3A5AABA_AD01_96A8_41D7_8186BBAACA11",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17_t.png",
  "class": "Photo",
  "id": "photo_A2F8F352_AD03_97F8_41E0_E159A156AF17",
  "label": "Saka guru",
  "image": {
   "levels": [
    {
     "url": "media/photo_A2F8F352_AD03_97F8_41E0_E159A156AF17.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 470,
  "width": 458
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464_t.jpg",
  "class": "Photo",
  "id": "photo_BCBBFC5F_B382_0B66_41D4_FB7577536464",
  "label": "IMG_20250304_094745_00_012_PureShot",
  "image": {
   "levels": [
    {
     "url": "media/photo_BCBBFC5F_B382_0B66_41D4_FB7577536464.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 4000,
  "width": 4000
 },
 "this.audio_A3A18480_B382_3BDA_41C2_B065B593F8FB",
 "this.audio_A3B082D6_B381_FF66_41DF_D078F31A5F4C",
 "this.audio_E1877EA9_ED76_D8B7_41A4_3C2D1763A66B",
 "this.audio_FD6EA9EB_EDF4_DC26_41E7_34E5E0258C01",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C_t.png",
  "class": "Photo",
  "id": "photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C",
  "label": "KEMUNCAK",
  "image": {
   "levels": [
    {
     "url": "media/photo_FE2F437C_EDFC_CC22_41E5_5F498897DB1C.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 600,
  "width": 400
 },
 "this.audio_F981125E_EDF4_CC1E_41DF_7D51EA31A6B3",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36_t.png",
  "class": "Photo",
  "id": "photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36",
  "label": "jAGANG",
  "image": {
   "levels": [
    {
     "url": "media/photo_F8E3D68E_EDEC_54FF_41D3_EA6788893D36.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 406,
  "width": 606
 },
 "this.audio_FDB39B0F_F14F_6F02_41D7_4C7E65554B74",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850_t.png",
  "class": "Photo",
  "id": "photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850",
  "label": "tugu jam",
  "image": {
   "levels": [
    {
     "url": "media/photo_FF4CB6F1_F145_7901_41E1_DFAB2BAA9850.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 4163,
  "width": 3330
 }
], "children": [
 {
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarRight": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBottom": 0,
  "paddingTop": 0,
  "toolTipPaddingLeft": 6,
  "minWidth": 100,
  "width": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "toolTipBorderRadius": 3,
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "progressBarBorderColor": "#000000",
  "paddingBottom": 0,
  "toolTipFontColor": "#606060",
  "progressLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressHeight": 10,
  "toolTipPaddingTop": 4,
  "playbackBarHeadOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "transitionMode": "blending",
  "toolTipBorderSize": 1,
  "progressBorderSize": 0,
  "borderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "top": 0,
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingLeft": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "toolTipFontFamily": "Arial",
  "progressRight": 0,
  "class": "ViewerArea",
  "left": 0,
  "progressOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowBlurRadius": 3
 },
 {
  "borderSize": 0,
  "id": "HTMLText_A1CAD743_AD01_9FD8_41C9_46423D8EAD3A",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "width": "29.701%",
  "shadowHorizontalLength": 2,
  "borderRadius": 10,
  "shadow": true,
  "backgroundColorRatios": [
   0.11
  ],
  "scrollBarWidth": 10,
  "paddingLeft": 20,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "paddingTop": 20,
  "shadowOpacity": 0.19,
  "minWidth": 1,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>VIRTUAL TOUR</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>MASJID GEDHE MATARAM KOTAGEDE </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Kerajaan Mataram Islam merupakan salah satu Kerajaan bercorak islam yang berdiri di pulau Jawa. Kerajaan Mataram Islam menjadi salah satu kerajaan besar dengan cakupan wilayah yang hampir mencakup seluruh wilayah di Pulau Jawa. Mataram Islam berdiri pada abad ke-17 M yang dipimpin pertama kali oleh keturunan dari Ki Ageng Pemanahan yaitu Panembahan Senapati. Meskipun masa dari Kerajaan Mataram Islam memang sudah selesai sejak lama namun tidak serta merta hilang dari peradaban begitu saja. Banyaknya peninggalan yang berhubungan dengan Kerajaan Mataram Islam masih ada hingga masa kini terutama di wilayah Yogyakarta seperti di Kotagede. </SPAN></SPAN></DIV></div>",
  "backgroundColorDirection": "horizontal",
  "shadowBlurRadius": 7,
  "shadowSpread": 1,
  "height": "16.667%",
  "shadowColor": "#000000",
  "paddingBottom": 10,
  "class": "HTMLText",
  "paddingRight": 20,
  "shadowVerticalLength": 2,
  "scrollBarVisible": "rollOver",
  "left": "3.76%",
  "backgroundOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "top": "5.28%"
 },
 {
  "bottom": "0.6%",
  "iconURL": "skin/IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246.png",
  "id": "IconButton_A132C64E_AD03_91E9_41BA_42A64BDC5246",
  "maxWidth": 500,
  "borderRadius": 0,
  "mode": "push",
  "maxHeight": 500,
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "width": 101,
  "height": 77.5,
  "cursor": "hand",
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "backgroundOpacity": 0,
  "right": "9.15%",
  "borderSize": 0
 },
 {
  "bottom": "2.38%",
  "iconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66.png",
  "id": "IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
  "borderRadius": 0,
  "mode": "toggle",
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "paddingLeft": 0,
  "minHeight": 0,
  "paddingTop": 0,
  "verticalAlign": "middle",
  "minWidth": 0,
  "width": 51.5,
  "height": 46.55,
  "cursor": "hand",
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "right": "4.27%",
  "pressedIconURL": "skin/IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66_pressed.png",
  "backgroundOpacity": 0,
  "borderSize": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "borderRadius": 0,
 "contentOpaque": false,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_A0B77364_AD00_B7D8_41D2_EB97CF772B66",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "verticalAlign": "top",
 "gap": 10,
 "width": "100%",
 "minWidth": 20,
 "layout": "absolute",
 "height": "100%",
 "paddingRight": 0,
 "overflow": "visible",
 "paddingBottom": 0,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "borderSize": 0
})