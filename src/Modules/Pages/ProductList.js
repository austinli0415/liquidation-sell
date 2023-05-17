import React from 'react'
import AppBar from '../Components/AppBar'
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../Components/StateProvider';

const images = [
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKaWidwFCjDJt-ZDBtczntiK91HCJHpcElKJ7tm85Vp6fntAwI7ogTKOQ0avCe81CSRwToSdivmka_CMyRrRxTIG0b_bPaxpr5S61JMmtl7bXv6VqgHDj1Gw&usqp=CAE',
      catagory: 'Tools',
      originalPrice: 399,
      salePrice: 249,
      title: `Makita 18V LXT Lithium-Ion Cordless 8-Piece Combo Kit (3.0Ah)`,
      description: `These products are part of Makita's expanding 18-Volt LXT system, the worlds largest cordless tool system powered by 18-Volt lithium-ion batteries. Makita 18-Volt LXT Batteries have the fastest charge times in their categories, so they spend more time working and less time sitting on the charger. Batteries and charger are included in this kit. For improved tool performance and extended battery life, Makita created Star Protection Computer Controls. Star Protection is communication technology that allows the Star Protection-equipped tool and battery to exchange data in real time and monitor conditions during use to protect against overloading, over-discharging and overheating. For increased versatility, the tool can also be powered by Makita 18-Volt LXT and Compact Lithium-Ion Batteries with the star symbol on the battery indicating Star Protection inside.`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNSlounchafHRl6RM1Fq9l-hNQgUmYHJFyoeCeR_6LrKBz0OVCDDvFG-HtpRoV1tIYf-89356zGcqJ632d1Aa8JJldTrpjtRiHXLATFPs2STrMx0YF5114Bg',
      catagory: 'Tools',
      originalPrice: 279,
      salePrice: 180,
      title: `DeWalt DCK283D2R 20V Max XR Cordless Lithium-Ion Drill Driver & Impact Driver Combo Kit`,
      description: `Dewalt 20V MAX XR Cordless Driver Combo Kit - Engineered For the Professional This DeWalt drill driver and impact driver combo kit packs exceptional power and durability. Equipped with innovative technology and designed with handy features, the drill driver and impact driver feature brushless motors to deliver maximum run time. The lightweight and compact design allows you to work effortlessly in tight working spaces, the 3-mode built-in LED light enhances visibility in dark areas.`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9JrPH2ZHrwHKNc6LE0SiEGq0Avr0Do0x2HT4hlKRGPd1VqDxxOa5vNAblR5f-yUwM-LHQNCqVebLWhomb6ioWeu70OCx0TuGyltfSUpGxXJ7k9PUCVksZ',
      catagory: 'Tools',
      originalPrice: 399,
      salePrice: 280,
      title: `DeWalt 12-in 15 Amps-Amp Dual Bevel Sliding Compound Corded Miter Saw`,
      description: `The dewalt DWS779 sliding compound miter saw is precision at it's toughest, delivering accuracy and capacity for everyday jobsite use. This miter saw is designed with a powerful 15 amp, 3800 revolutions per minute motor that delivers extended power and durability. Tall sliding fences support 7-1/2 inch of crown nested and up to 2x14 dimensional lumbers at 90 degree and 2x10 at 45 degree. A cam lock miter handle with detent override delivers quick and accurate miter angles.`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz1mOly-hDPf5d2ZgySOtN3UUlLdsvgTebgEmLFB4iF9ZA2Yl7gKY-nE4WTMOsCgRX3rhFy7bPyT6UxQfmG6tp48P-po05uWWRlyjEkf6T',
      catagory: 'Tools',
      originalPrice: 279,
      salePrice: 190,
      title: `Milwaukee 3004-20 M18 Fuel Hatchet 8 in Pruning Saw`,
      description: `The Milwaukee M18 Fuel Hatchet 8 in. pruning saw delivers increased control and access, has the power to cut hardwoods and is the fastest cutting pruning saw. This pruning saw is designed to meet the ergonomic, performance and durability needs of the professional arborist, landscape maintenance professional and power utility linemen. Weighing less than 5 lbs without a battery and featuring a compact design, the cordless pruning saw provides increased control and maneuverability in tight access areas. The Powerstate brushless motor maintains speed under heavy loads without bogging down to complete demanding cuts faster than 25cc gas. The Redlink Plus Intelligence enables full-circle communication between the tool and battery, allowing for unmatched performance, protection and productivity levels. M18 Fuel technology enables the saw to reach full throttle in under 1 second and a variable speed trigger for ultimate control over the power range. This pruning saw features a lanyard loop, full house chain, easy access chain tensioner, automatic oiler, metal bucking spikes, onboard scrench storage, lanyard loop and a climbing scabbard. The M18 Fuel Hatchet 8 in. pruning saw is fully compatible with 250+ solutions on the M18 system.`,
    },
    {
        url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcRIyKuIWDn36gCFMt4qVB0VgEmMyJCrhyNR0exbztvQxxuSNZMH8MUCR3tuJqsDTva153-Yi1IugsrZK-vHxnfMNeYBfQEMEJ25p_L_E&usqp=CAE',
        catagory: 'Tools',
        originalPrice: 499,
        salePrice: 349,
        title: `Makita XML03CM1 36V (18V X2) LXT® Brushless 18" Lawn Mower Kit with 4 Batteries`,
        description: `Makita is expanding the line of cordless OPE to include the 18V X2 LXT Lithium-Ion (36V) 18 In. Lawn mower. With zero emissions, lower noise and reduced maintenance, the 18V X2 (36V) cordless lawn mower is a welcome solution for efficient grass cutting. It's powered by two 18V LXT batteries for maximum power and run time, but without leaving the 18V battery platform. The Makita-built motor delivers up to 3,300 RPM. The mower offers ease-of-use features including quick height adjustments and folding handles for compact storage.`,
      },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDA3TeAUaLkXb4AUWNel9XiVoCbDkNr5-GM2vCZP_rms55t6o5HIGjQQnrUHEcbhmyHin4guHYRyOsZxo-p1pPGQneMinW7ZsOHYZckMFowkhEv-ZaE9N7Ew&usqp=CAE',
      catagory: 'Tools',
      originalPrice: 144,
      salePrice: 95,
      title: `Makita E-10899 76 Piece Hand Tool Set PRR9J2S`,
      description: `Makita E-10899 76 Piece Hand Tool Set - Makita is the leading manufacturer of professional power tools on the market. The E-10899 is a compact and easy to carry 76 Piece Hand Tool Set, containing some of the most popular hand tools, suitable for car mechanics, construction industry works, handymen, DIY enthusiast and more. The E-10899 is supplied in a blue plastic moulded case and contains 3/8” ratchet handle, snap off knife, hammer, combination pliers, a variety of 3/8” drive sockets, magnetic bit holder and 30 x 25mm screw bits in popular sizes. Size of carry case 350mm x 265mm x 110mm.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwVmIEkfmNh1LsSh1nUehAzYvAOIdM_SKfplAgpvjJBi_x-FC2MWLC47GQEc_heHYYg7MjetunmdTrHYL2Gc0aqRYo8NcxKAM8G3IxJHvtG2z80VB7f1jdHA&usqp=CAE',
      catagory: 'Tools',
      originalPrice: 42,
      salePrice: 24,
      title: 'Makita DTD152Z 18v Lithium Ion Impact Driver LXT',
      description: `The new 18v Li-ion Impact Driver from Makita is an extremely light and versatile tool with its overall length being a very compact 137mm paired with its ergonomically designed soft grip handle. This cordless impact driver has an electric brake which cuts out the motor the moment the trigger is released. The variable speed control trigger on this Makita 18v driver allows any professional to have complete control over this power tool by simply adjusting the switch. The forward and reverse rotation settings on this Li-ion impact driver allows for a dual use of screwing in or removing nails and screws. The twin LED job light is perfect for any one who likes to work in all types of lighting condition. The high rotation speed on this 18v impact driver makes for a professional finish thanks to the enhanced motor. Changeover is simple with this cordless driver’s one-touch drill bit feature which means it’s easy to swap between drill parts in a touch. This driver is ergonomically designed to be compact with overall length of 137mm, and lightweight, weighing in at under 1kg. This driver also comes with a battery protection circuit.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_Ard_rEip6Ti4ZVu5RCVLwEGIznRH3nv76D9Nn-msD3tokOUlpSTMjIUdPLvvmXtn9EDMhR_sIBuMrx9xxIXdeDkGieOIMzbCGerXZPE&usqp=CAE',
      catagory: 'Tools',
      originalPrice: 386,
      salePrice: 220,
      title: 'Makita MAC320Q Quiet Series 1‑1/2 HP, 3 Gallon, Oil‑Free, Electric Air Compressor',
      description: `Makita Air Compressors are favorites for their faster recovery time, lower noise, longer tool life, and consistent performance. The Makita Quiet Series 1-1/2 HP, 3 Gallon, Oil-Free, Electric Air Compressor (MAC320Q) features a Quiet Series Design, combining strong performance with lower noise. At only 60 dBA, its ideal for indoor use during case and base installation, trim and finish carpentry, cabinet or furniture making, and more. The MAC320Q runs at a lower RPM, resulting in longer motor and pump life. It is powered by an efficient 1-1/2 horsepower induction motor that provides up to 90 PSI. It also features a lightweight design (only 44 lbs.) for increased portability. The roll-cage construction provides added protection for the pump and motor assembly during transportation, in storage, and on the job site. Additional features include a low AMP draw that reduces the incidents of tripped breakers at start-up, an oil-free dual-piston pump designed for maintenance-free operation, and hooks for convenient AC power cord storage.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1sDODyAE57oISiDolYyO_zHQY2IijcEEPJbuqksA_xuFB6NlUA1ywGpntI2o6ld7oxwFuq1FwbjkJFL-tmLp9HwNfLYMbMfpd61hIBL0&usqp=CAE',
      catagory: 'Tools',
      originalPrice: 619,
      salePrice: 449,
      title: 'Makita 18V X2 36V LXT Lithium-Ion Brushless Cordless 16 in. Chain Saw Kit with 4 Batteries, XCU04PT1',
      description: `Landscapers and contractors are demanding more cordless alternatives to gas-powered outdoor power equipment. Makita is meeting demand with an expanding line of cordless OPE, including the 18V X2 LXT (36V) Brushless 16 chain Saw (XCU04PT1). With zero emissions, lower noise, and considerably less maintenance, the XCU04PT1 is a welcome solution for cutting and trimming applications. Its powered by two 18V LXT Batteries for maximum power, speed and run-time, but without leaving the strongly-preferred 18V battery platform. And with the efficient Makita outer rotor brush less motor with direct drive system, users get high power efficiency that is equivalent to a gas chain saw. The XCU04PT1 has a 16 guide bar and the Makita-built Outer Rotor BL Brushless Motor direct drive system motor with variable speed delivers 0-3,940 FPM for increased cutting speed. It has zero emissions and reduced maintenance: there's no engine oil to change, no spark plug to replace, and no air filter or muffler to clean. And there's no need to drain the fuel for storage. Simply pick it up, load two 18V LXT Lithium-Ion batteries, and the saw is ready to use. Convenience features include a tool-less chain adjustments, a front hand guard engineered to actuate chain brake when engaged, an electric brake for maximum productivity, and more.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQokOlPyhE8VGhv5rMxZlmZQZpxS8rCWGioeybnVWSQxAwUIfwofHTg7bdo3rb3uXT12icNKUJWaGYZU8nUs-EhCfVLY_UGkNbNPwbMFeEe9SEc-try42SE&usqp=CAE',
      catagory: 'Electronics',
      originalPrice: 399,
      salePrice: 270,
      title: 'EOS Rebel T7 EF-S 18-55mm IS II Kit',
      description: `deal for mobile device users wanting to take the next step with their photography, the EOS Rebel T7 camera combines fantastic features with the easy-to-use operation for high-quality images you'll be proud to share. Harness the power of the EOS Rebel T7's large 24.1 Megapixel CMOS sensor to realize your potential for great shots. Share the memories with your friends and family quickly and easily via built-in Wi-Fi and NFC technology. With the EOS Rebel T7's fast autofocus system, you can capture every moment as it happens, viewing each shot through the bright optical viewfinder. A range of additional features, including a large LCD screen, Full HD video recording, and an on-board feature guide help you capture eye-catching photos and video. The EOS M50 is a compact interchangeable lens camera for aspiring photographers looking for an easy way to boost the quality of their photos and videos. With clear, high-resolution 4K UHD 24p video, you can capture the incredible details and cinematic moments of your life at home or wherever your adventures take you. Snap vibrant, eye-catching photos with a 24.1 Megapixel (APS-C) CMOS Sensor using the built-in Electronic Viewfinder or Vari-angle Touchscreen LCD. Thanks to the fast and improved Dual Pixel CMOS Autofocus system, you can quickly lock focus on your subject to make sure you don't miss the action. See how the EOS M50 can easily deliver the high-quality photos and videos you've always imagined.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTY3uVUg2_PfTuPB_LHs6QuLdoQ2piNwkPE3W3_tLzhSrUBMilFm5JEQw0l4Umu_coidbNeMXamEpmEiz2IXmC_iga5aUVYY_YI7Egto_inkxLm2zTtXv2Z&usqp=CAE',
      catagory: 'Electronics',
      originalPrice: 650,
      salePrice: 480,
      title: 'Sony PlayStation 5 - Digital Edition',
      description: `Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games. Lightning speed Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrites the rules of what a PlayStation console can do. Ultra-High-Speed SSD Maximize your play sessions with near-instant load times for installed PS5 games. Integrated I/O The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible. Ray tracing Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games. 4K-TV gaming Play your favorite PS5 games on your stunning 4K TV. Up to 120fps with 120Hz output Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays. HDR technology With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors. 8K output PS5 consoles support 8K Output, so you can play games on your 4320p resolution display.`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT27uJ7JIKejoF4NDgEJeqqsAKcbwqM0KkjWiDN8z7XE-Gssh-LKOEdRyeL6FnAbiYlnHWjgI8ycYEfOoUJ-u-7Z5oDEaOSWRbc_ETl94M',
      catagory: 'Electronics',
      originalPrice: 149,
      salePrice: 99,
      title: 'Amazon Fire Black HD 10 Tablet 32 GB 10.1"',
      description: `Fast and responsive – powerful octa-core processor and 3 GB RAM. 50% more RAM than previous generation. Long-lasting 12-hour battery and 32 or 64 GB internal storage. Add up to 1 TB with microSD (sold separately). Brighter display – Vivid 10.1′′ 1080p Full HD display is 10% brighter than previous generation, with more than 2 million pixels. Enjoy your favorite apps like Netflix, Facebook, Hulu, Instagram, TikTok, and more through Amazon’s Appstore (Google Play not supported. Subscription for some apps required). Stay connected – Download apps like Zoom, or ask Alexa to make video calls to friends and family. Get more done – Check email, update shopping lists, and set reminders. Use your favorite apps like Microsoft Office, OneNote, and Dropbox. Hands-free with Alexa, including on/off toggle.`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWGvn1-NXDsCEvDr8AXHI5yTR7pdJ7w6U1DJROlCxIPyzoqqaNO6p_a2dSa1gN1KcqWeV09RDT-BJ0jUQe3zsowihmVmCaf6gc8sF13729ZYoAy_BB77CP',
      catagory: 'Electronics',
      originalPrice: 1399,
      salePrice: 899,
      title: 'Fujifilm X100V Digital Camera (Silver)',
      description: `Building on the success of the X100F, the Fujifilm X100V Digital Camera (Silver) is a retro-styled, premium compact digital camera that delivers high power in a small, elegant design. Featuring a fixed 23mm f/2 focal length lens, finding and framing a subject is easier than ever with a hybrid OVF/EVF system. A back-illuminated 26.1 MP sensor, paired with the powerful X-Processor 4 Quad-Core image processing engine ensures fast, accurate imagery, whether shooting stills or 4K video. Fast, accurate imagery Capture the moment beautifully, no matter the shooting situation, with the Fujifilm X100V. A back-illuminated 26.1 MP imaging sensor coupled with Fujifilm’s X-Processor 4 Quad-Core processing engine delivers outstanding color reproduction and gradation of tones, incredible image quality in both stills and videos, and lightning-fast performance. New ways to frame Easily change viewfinders to shoot the scene with the Fujifilm X100V. Use the 0.52x magnification Optical Viewfinder (OVF), featuring parallax-correcting frame lanes for enhanced image framing, or the 3.69 million dot OLED Electronic Viewfinder (EVF), which provides a real-time view of the exposure. Or combine the two together using the Electric Rangefinder Function (ERF), which activates a miniature EFV display within the OVF window. Shoot innovative video Use the Fujifilm X100V to create stunning 4K video at 30 frames per second, or super slow-motion footage with the Full HD/120p setting. Use one of the 17 digital film simulation modes for distinctive character, straight out of the camera.`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeNeAoDcMyJZB3KRw8Rgp9Y-cNMvMw95FCXl7MVa7CRQaiWCEuvmecjsxK4frr3T1NW2u-nfJ-XeMsMJpjTSP0n_rYpBw5AbeUcecPQjE',
      catagory: 'Electronics',
      originalPrice: 299,
      salePrice: 199,
      title: 'Logitech - G Cloud Gaming Handheld Console - White',
      description: `WHATS IN THE BOX? Logitech G CLOUD gaming handheld Power adaptor USB cable (USB-A to USB-C) User documentation DESCRIPTION Logitech G CLOUD gaming handheld puts next-games right in your hand by putting the processing power and bookshelf of games in the cloud. This frees you to play in a ridiculous amount of locations around your home. You’ll have access to an incredible amount of games through Xbox Cloud Gaming (Beta) and NVIDIA GeForce NOW. You can even download apps from the Google Play Store for remote play, social media and more. CLOUD is also extremely lightweight with incredibly engineered controls and a 7 hour battery life. Don’t just play games, play with CLOUD Gaming Handheld in your hands and play ridiculously.`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdyuisyxA9li1ULMg24VYA3Wi20NMD2HcbQcWecqmniDBTEWzRn3YN4EgC4qCTyZzCHrUgg_qBcvoQDRDUBt3t4cKbc3TsVosQQmo2JAVrYqxxFznhZmEp3g',
      catagory: 'Electronics',
      originalPrice: 449,
      salePrice: 359,
      title: 'Alesis Nitro 8-Piece Electronic Drum Kit',
      description: `The kit delivers the most realistic playing experience for every drummer, and it remains perfectly quiet in situations when you don’t want to disturb anyone. Mesh heads are the unanimous preference of electronic drummers for their natural feel and ultra-quiet response. The Nitro Mesh Kit gives you an 8 inch dual-zone mesh snare drum and (3) 8 inch mesh toms. It includes everything else you need to make a complete drum kit; (3) 10" cymbals, custom-designed Alesis hi-hat pedal and kick pedal, and a durable 4-post aluminum rack. We also include all the cabling, a power supply, and drum key for easy setup. All of this connects to our legendary Nitro electronic drum module, which has hundreds of drum and percussion sounds, 40 drum kits, and 60 built-in play-along tracks. And, as all drummers demand, it has an aux input to connect a smartphone or music player for instant practice and accompaniment.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnXIIg3enQaXADWqp4H09BujJZ2JJVxQxUIhB77rEeVw4dwvyJWvtiR2qxql0DW5OZEhd_64C-NFpbpIUgIGJbIU97DpPnfHOTYxgUHO8NIWTl2G4Hl0tiEg&usqp=CAE',
      catagory: 'Electronics',
      originalPrice: 59,
      salePrice: 49,
      title: 'Blink Video Doorbell Black',
      description: `Answer your door no matter where you are from your smartphone with 1080p HD day and infrared night video and two-way audio. Experience long-lasting battery life, custom alerts, privacy settings, and more. Get alerts when motion is detected or someone presses Video Doorbell. Connect to existing doorbell wiring or pair with a Sync Module (sold separately) to engage live view and two-way audio on demand. Choose to save and share clips in the cloud with a free 30-day trial of the Blink Subscription Plan or locally with the Sync Module 2 and USB drive (each sold separately). Designed for every home, go wire-free or connect to doorbell wiring to also sound your existing in-home chime. Without wiring, you can use your Blink Mini camera (sold separately) as an indoor plug-in chime. Set up yourself in minutes with the two included AA lithium batteries then connect to wifi in the app. Works with Alexa - receive alerts and answer with two-way audio. When wired or paired with a Sync Module, just ask Alexa to answer the front door. Includes one Video Doorbell, 2 AA 1.5V Lithium Batteries, 4 Screws, 1 Case Opening Tool. Does not include Sync Module 2 which can be found in all “Systems" above (recommended for optimal use while on battery).`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfiHyDHthnbWBv_1yQi9L3IVce0RcLtI7nUpUwKbm4WFu40yuPCn6vQ6XPcSmFn-g8UUiS9XQri_Sdx0fLfa4UlTRu5sXKYxTC8iMH0sF6DAYhxj53ilAKig',
      catagory: 'Electronics',
      originalPrice: 199,
      salePrice: 120,
      title: 'Onn. 50" Class 4K UHD (2160p) LED Roku Smart TV HDR (100012585)',
      description: `Enhance your entertainment experience with the 50" 4K Ultra High Definition onn. You can enjoy your favorite shows and movies in stunning clarity with vivid colors, sharper images, and incredible detail. Fast and simple cross-channel search makes it easy to stream the 500,000+ movies and TV episodes through thousands of free or paid channels available on your onn. Enjoy access to features such as automatic software updates and the free Roku mobile app. Plus, HDMI compatibility makes playing music and videos from your favorite devices easier than ever with the superior sound & picture quality you expect. USB, digital audio, and audio line out capabilities allow you to further customize the viewing and listening experience for your onn.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTprIPQORskt7qSVJx_Cp-WLG5jc7ALEQEEPy6Yx0In7Z3tU_gowGr_b7aiY6H9pqsLua2GAaStOXb1XYJHTUghuWlX3lAGr0DoCCMreGLJbTV_mOLwdJ0&usqp=CAE',
      catagory: 'Electronics',
      originalPrice: 599,
      salePrice: 399,
      title: 'Google Pixel 7 - 128 GB - Snow - Unlocked',
      description: `Meet Pixel 7. Powered with the aid of Google Tensor G2, it’s quick and secure, with great battery lifestyles and the superior Pixel Camera. Take superbly authentic, correct photographs with Real Tone and beautiful video with Cinematic Blur. And with the licensed Titan M2 protection chip and a built-in VPN, Pixel helps shield your non-public data. Features Universal Unlocked. Compatible with all Carries and countries. The brains behind Pixel 7. Google Tensor G2 makes Pixel 7 faster, greater efficient, and more secure.2 And it supplies even greater beneficial points and the great photograph and video first-class but on Pixel.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTibvdOCy0zXSU1eI0dpYz-J5xvzyY7t6AfFiJj8lFnwI4Wc_qMgFz-lMwcEM44xKFCwN-xq5TU0V_WGc9IEHiM7wqNXrL5N763ROlS3bw',
      catagory: 'Electronics',
      originalPrice: 840,
      salePrice: 699,
      title: 'Apple iPhone 14 - 128 GB - Midnight - Unlocked',
      description: `WHATS IN THE BOX? Apple iPhone 14 USB-C to Lightning Cable Documentation DESCRIPTION iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light. Get peace of mind with groundbreaking safety features. *Until 12/30/22 get a free pair of earbuds (a $29.99 value) with purchase of this product. Just add to cart and you will see them added automatically.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTI8yWoFIlFO-IeuDzOu2krVpEZYnLUoEej7DMzbA2SuTilGZQhUKJwWNuRpWPjvLvWvTRJfUx-pgrZTy7hfwIYJeaZhhQlHVHT2OASDW31',
      catagory: 'Infant & Baby',
      originalPrice: 79,
      salePrice: 59,
      title: `Graco Pack 'n Play Playard with Automatic Folding Feet - Stratus , Gray`,
      description: `Perfect for traveling, this mesh-sided Pack 'n Play Playard by Graco sets up in less than a minute. It comes with a toy bar, plus a full-size removable bassinet for catching naps at home or on the go. WARNING: Possible entanglement injury. Keep out of baby's reach. Remove mobile from crib or playpen when baby begins to push up on hands and knees. Graco Pack 'n Play On The Go Playard provides the ideal place for napping and playing whether at home or away Bassinet maximum weight: 15 lb. Playard for children under 35" tall and unable to climb out Removable, full-size bassinet provides extra-comfy spot for napping Push-button fold makes closing playard quick and hassle-free. Automatically folding feet and wheels allow for a more compact fold. Mattress pad Toy bar features soft toys Convenient carrying bag for no-fuss travel and storage. Measures 40" L x 28.5" W x 29" H . Weighs 22.9 lb.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDOd3WjzaRw3_5V2y8_ZS6iU7Q3_q09AMAOxA4dpRNTKflESVn3KAsQSsnuTGG0z8tzx2hDuux_Z2Wt7vJ2Ei974FdiwUs6tv5Zbf9d9oBkdb1ztsnrl0Pjg',
      catagory: 'Infant & Baby',
      originalPrice: 119,
      salePrice: 79,
      title: `Baby Einstein Around We Grow 4-in-1 Walk Around Discovery Activity Center`,
      description: `The Baby Einstein Around We Grow 4-in-1 brings the benefits of a baby walker and stationary entertainer together in one solution that will captivate your little one. From sitting to standing to walking, there's a mode for every stage. Measures 34.06" L x 20.47" W x 23.22" H.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoMGCHZpXwsWzRW-Mp96kz0sWeUGMUtKKlilP38_PI62iBsW51kMVOGJR_BEK3ymLqsoK_-Nwu7qzOfgwN9SLqYDqziXiYyzWcz5lmolAJcVh19DSXcFD7pA',
      catagory: 'Infant & Baby',
      originalPrice: 108,
      salePrice: 86,
      title: `Monbebe Tranquility Bluetooth Enabled Indoor Baby Swing, Stardust`,
      description: `It's time to get dinner started but your little one is fussing and your oldest child needs help with their homework, and of course, your partner is nowhere to be found. Let the Monbebe Tranquility Baby Swing be your answer whenever you find yourself wishing for an extra set of hands. A Smart Swing for Busy Parents With its Bluetooth enabled digital touch screen and remote control, you'll be able to quiz your oldest on spelling words while easily changing the baby swing's speed or built in music with the remote, or play your baby's favorite songs from your smart phone while the swing is in Bluetooth mode. Remarkable Comfort and Safety This exceptional baby swing also features a deep seat with incredibly plush fabric for baby's comfort, a removable canopy with plush toys to entertain your little one, a removable infant pillow, and an adjustable 5 point safety harness for your peace of mind. Plenty of Options to Soothe Your Little One The Monbebe Tranquility Indoor Baby Swing offers 5 different modes of speed, 10 built in soft melodies, and 3 set timers to soothe your little one at their fussiest. Our Commitment to Children Worldwide Monbebe has partnered with Watsi to help support life changing surgeries for children around the world.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkgJhjM6OMT9w0iun3bk7q3KqdJ93s0g0gW0Jsf841vhIkKvzaMR471zmOP-05VK6j6PNY1_YoZYiprlc2__QD8-15825JalIJAhdfxJh1',
      catagory: 'Infant & Baby',
      originalPrice: 69,
      salePrice: 49,
      title: `Uanlauo Baby Playpen, 47x47inch Playpen for Babies and Toddlers`,
      description: `The 47x47inch Uanlauo baby playpen suit can provide a safe space for your baby to move around when you are busy doing chores or working, realizing that mom can also do her own thing when baby is awake, and the grid on all sides of the playpen will not make baby cry because they feel constrained. Uanlauo's T-joint uses high toughness material, which makes the playpen more stable than other brands after assembly. This design allows the baby to push the playpen from the outside or inside, and it will not bend from the middle to cause danger, making it safer for the baby to use. Thickened steel pipe makes the playpen stronger and can withstand the push and pressure from the baby; the playpen has 4 suction cups at the bottom, the fence is not easy to flip over; the overall height of 27inch, and the baby can't climb out, strong and stable protection of the baby. The fabric of Playard is made of 320D Oxford cloth, tested by a CPSC-accredited laboratory, non-toxic, BPA-free, PVC-free, and safe for babies who want to bite things during teething; the upper steel pipe of the fence is wrapped by a foam cover, making the playpen softer and babies won't get hurt after a collision.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8p8bC1WtHx34FpRpHwffRuQwSAw4jNgGPOvnDtJrgreHSTN8phRts_DmrjqDkDP-kUl_Q5nAdsP01PN9vU33JaMjda8cI5GaMgVP7lcAc0-CbHDUIiDoS&usqp=CAY',
      catagory: 'Infant & Baby',
      originalPrice: 499,
      salePrice: 280,
      title: `Babyletto Lolly Natural Wood 3-in-1 Convertible Baby Crib with Toddler Bed Conversion Kit `,
      description: `With a unique 3-in-1 design, the Babyletto Natural Lolly Crib can transform from a crib into a daybed into a toddler bed with ease. It features gently contoured corners and a beautiful natural finish, plus spindles and feet that show off the grain of New Zealand Pine. Designed for modern nurseries, the crib also includes a toddler rail for effortless conversion into a toddler bed.GREENGUARD Gold CertificationLearn how to choose a crib. • Assembly provided upon delivery • Meets or exceeds applicable US safety standards • Finish meets all children's safety requirements for lead and phthalates content • For Toddler Bed use, the minimum age should be no less than 15 mos. and the maximum weight should not be greater than 50 lbs. • Meets ASTM International safety standards • Product is GREENGUARD Gold Certified • Due to infant teething, you may wish to purchase a separate teething rail for your crib check other retailers for availability • Unique 3-in-1 design makes it a crib, daybed and toddler bed all in one • Features four adjustable mattress heights: 9", 11", 13" and 15"h measured from floor to top of mattress support • Toddler rail included • Sustainable New Zealand Pine Wood • Crib: Stop using when child begins to climb or reaches 35 inches tall • Metal mattress support • Made in Taiwan`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVdJXW0z0rtIckSTDgNg_MuqNm42rMzPtnrioPVc94P60fs1sOyGhfDauhSpvLSathmmmYTTtXBBsxoL1EWhqiYI1qfpFiDw',
      catagory: 'Infant & Baby',
      originalPrice: 169,
      salePrice: 98,
      title: `Mid-Century Crib Grck Navy`,
      description: `KEY DETAILS Crib: Kiln-dried solid and engineered wood. Crib is covered in a child-safe, water-based paint. Made with FSC -certified wood from responsibly managed forests. Metal mattress platform has two height options to accommodate your growing baby (mattress sold separately). Full details for the add-on Lullaby Crib Mattress can be found HERE. Easily adapts from crib to toddler bed (conversion kit sold separately).`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKvUsrv9S4wDqitlqZZ7AOL59l1yGjiCvRQ5pu6G0ikQ1bk1kiSrOupC0Qs2Brm8zQB0byBwKElxMbmfYCaLH7hsjGRNpvQmv1mahiP1nzOXNIDFT6ra4R',
      catagory: 'Infant & Baby',
      originalPrice: 550,
      salePrice: 420,
      title: `Nuna - Tavo Next Stroller - Granite`,
      description: `Fold the stroller in one step with one hand and stand it upright for easy storage, or add a Nuna infant car seat to make a travel system in just one click—no adapters required. New for the TAVO Next model, the stroller now offers a standing fold and is 7 inches shorter than the previous model when folded. Other upgrades include a magnetic buckle that makes harnessing your child even easier, a leatherette bumper bar and an updated extendable canopy with greater coverage and ventilation. Recline the seat to a flat position for newborns, adjust the handlebar and footrest, and change the harness without rethreading it. On warm days, unzip the ventilation panel on the back of the seat and remove the seat insert for an all-weather mesh seat. The TAVO Next is the only stroller that doesn't require adapters to attach a Nuna car seat. The car seat locks in against the bumper bar and can be quickly removed with one hand. The Nuna PIPA infant car seat features side impact protection, a durable yet lightweight design weighing just 7.9 pounds, and the Sky Drape, a unique, full-cover canopy to keep your little one comfortably out of the elements. An additional safety feature not seen on most car seats, the Nuna PIPA base includes a load leg that attaches to the floor of your car, providing stability in the event of a crash. This product is a bundle consisting of the Nuna TAVO Next stroller and Nuna PIPA infant car seat and car seat base.`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRdF5qWS8xD-Py1n5rtpKElQVH2wlgGlUKdsbEoOWu_bCbMz7QK_zFGTru2MwvEklZe4pM67YvjijuzjbMUDuQBRUep-U-44G5C4XzJPhLaRA21iLESCQp',
      catagory: 'Infant & Baby',
      originalPrice: 99,
      salePrice: 69,
      title: `Summer 3Dlite Convenience Stroller, Gray`,
      description: `Transport children in safety and comfort on errands and outings with the Summer 3D Lite Stroller. It has a lightweight and stylish aluminum frame to make it durable and supportive as well as easy to handle. With a convenient folding frame and carry strap, you can be on the go or stow and go with ease. The large seat area comfortably accommodates little ones and keeps them secure with a 5-point safety harness. It also offers a 4-position recline that lays nearly flat for napping or diaper changes. The open design of this lightweight baby stroller makes the extra-large storage basket easy to access. An adjustable and removable canopy with flip-out visor blocks out the sun and keeps babies in the cool shade. There's also a convenient cup holder and a rear storage pocket for small items. Anti-shock front wheels absorb vibrations and swivel for greater maneuverability while the curved and cushioned handles supply parents with a comfortable grip. Lock the rear wheels to safely park this gray stroller with sun visor.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQdPKcIy067tXWzy27IdidzEbA-TAiKrjdH_4X4vJhcv_iu0xuzTRWA8pUptDjEM6ESys1vA7xYwkDnvCqHtrQPq6vAZgMtlr8WSwc8Yxyva5mIcoXVgevy_g',
      catagory: 'Infant & Baby',
      originalPrice: 197,
      salePrice: 120,
      title: `Baby Joy Baby Stroller, 2 in 1 Convertible Carriage Bassinet to Stroller, Pushchair with Foot Cover, Cup Holder, Large Storage Space, Wheels`,
      description: `Brand: Baby Joy Color: Black Features: FOOT COVER IS AVAILABLE - It can not only be considered as an ordinary stroller, but also a WARM removal BED for your baby! Equipped with a foot cover, which can prevent pitiless wind in winter to well protect your baby. When summer comes, you can remove the foot cover to keep your baby cool. Solid & Stable Construction - Constructed by durable but light weighted aluminum frame and wearable & breathable Oxford cover which can well-protect your babies from rains or harmful rays. This stroller features solidity and stability. Adjustable Backrest and Handle - You can adjust the back of this stroller to meet your baby's different requirements to lie, sit, or sleep. The comfortable seat with 5-point safety harness and tilt-adjustable sleeping cushion equipped for babies comfortable sleeping. Pushing handle have two-way conversions. You can choose to face your baby at your convenience. Flexible Operation - Lockable wheels adds a sense of safety and flexibility when you go out along with your little baby. You can operate it easily with foot-operated linked parking brakes. Ready To Go - The storage basket underneath is ideal for holding purses, groceries, and diaper bags.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgqx-bKWRZ7nZZKhe6xUGDJA1w8kj_H9XW1OPlSzaEbwMimK2kyp1KKJ-MuOdI7jWz79eShmSeuIhiAPGo6n8BTBTtEhl4-ISnuqQPa1wUYkpQJ6HRkN4m&usqp=CAY',
      catagory: 'Infant & Baby',
      originalPrice: 96,
      salePrice: 67,
      title: `Disney Baby Minnie Mouse Peekaboo Activity Jumper`,
      description: `Minnie Mouse entertains baby with 12+ engaging toys & activities. Electronic station with lights and sounds and 2 volume options keep baby delighted. Fun toys include a spinning ball with colorful beads, a heart shaped mirror for self-discovery, Minnie Mouse bead chaser toy, and tactile leaf stalk. 3 link loops allow mom to attach more of babys favorite toys to keep playtime fresh. 4 easy-adjust height positions to grow with baby. Seat rotates 360 so baby can easily reach all the toys. Pink, Minnie Mouse-inspired seat pad is machine washable. Convenient, built-in toy tray.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSK3R45jpcVM-9k3dtObmLLaaY6N7KsXe-ASecsOf-eoD7uP5-IxB6F6X02di-WZeNeawaaCbzMHG8O54R-dQp0mggbNCIiVOMbeIr9Xa7V9u91ydsohqxj',
      catagory: 'Housewares',
      originalPrice: 166,
      salePrice: 110,
      title: `Hodedah Kitchen Cabinet in CHERRY`,
      description: `Dimensions: 23.85W x 15.75D x 70.86H in.. Wood cabinet. Finish options available. Includes 4 cabinet doors & 1 drawer. Countertop size: 23.85W in.. Includes space for small appliances. Assembly required. Modern/contemporary style. Sleek, straight lines lend a modern look to the Hodedah HIK96 Kitchen Cabinet, featured in your choice of available finish. This tall, sturdy cabinet is enhanced with two transparent cabinet doors above, with a roomy center drawer and two solid cabinet doors below. Store cooking tools, dinnerware, utensils, and more while you enjoy functionality from the large, open center shelf that's perfect for small appliances. Color: Cherry.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdhdI2gOaClfRfWRHD8FNuzxQ_KczQb8h_j4l-lbECnqHCh4QWYhPDnf4iMcT2M-3BBTM00U-biFM4RiGvHRL7atPkEHsh4XA5Fte42ziwAqfMK09SLzB0',
      catagory: 'Housewares',
      originalPrice: 663,
      salePrice: 330,
      title: `Cambridge Solid Granite Top Kitchen Island - Crosley - White`,
      description: `Naturally hard, naturally beautiful, the multi-hued gray surface of the Cambridge Solid Granite Top Kitchen Island feels rich under your fingers. You'll enjoy having a great workspace where you need it, out of the way when you don't. Constructed of solid hardwood and wood veneers, this beautiful kitchen island rolls easily on removable casters, then locks in place. Two deep drawers and four cabinet doors sport raised panels and a hand-rubbed, multi-step finish in a variety of shades. A convenient towel bar, spice rack, and paper towel holder hang on the sides. Inside, you'll appreciate the three large adjustable shelves. Brushed metal hardware is a quality touch. Assembles easily. Enjoy the beauty and durability of granite.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9o71e0JGO8ZQaSI8thmg-gnoCYrFUVJsrsBMV8NA41woBPRwA65S1x6qT87tP2jmxQyRW-FwN9GEh3P1vRIfvlkgS1hPoJHwhgk3OSD4&usqp=CAY',
      catagory: 'Housewares',
      originalPrice: 699,
      salePrice: 430,
      title: `Samsung - 6.3 cu. ft. Freestanding Electric Range with WiFi and Steam Clean - Stainless stee`,
      description: `Smart Freestanding Electric Range with Steam Clean Elevated Design - Our Stainless Steel design elegantly wraps around the cooktop sides and up through the slim control panel, elevating the look of any kitchen Make cooking simple with smart technology - Preheat, monitor and adjust time and temperature of your oven from wherever you are using your smartphone. More family time, less cleaning - Steam Clean your oven in 20 minutes for easier cleaning jobs. Cook enough for the whole crew - This large 6.3 cu. ft. oven can fit multiple dishes at one time and can easily accommodate big casserole dishes and large roasting pans. A cooktop that gets it all done! - This 4-burner cooktop includes 2 adjustable dual ring burners so you can cook with a variety of pot and pan sizes. Cooking simplified with easy preset buttons - Prepare foods with the aid of easy preset buttons. Three preset buttons include: Bread Proof, Keep Warm and Favorite Cook. Cleaning is seamless - The Hidden Bake element at the bottom of the oven provides a seamless cavity making it easy to clean.`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUumY_lbkDNEG704gV593tW3yXO6Venv2N7KLfbj9UNzxvwiy6P_wY7sPHCj3qdCx-ZdqEu7Si8ODHqmT5jyY1I9TWmw7D45BxabaQFxUCEG94bK1zTY0-EKNm',
      catagory: 'Housewares',
      originalPrice: 106,
      salePrice: 59,
      title: `Toshiba EM925A5A-SS Microwave Oven`,
      description: `Microwave Oven with Eco Mode - Convenience and Durability The Toshiba black stainless steel microwave oven helps you stay well-fed even when you have little time to spare. Offering 10 power levels with a power of 900W, this microwave with a clear digital display and LED interior lighting makes light of quick cooking. One-touch buttons and 6 pre-programmed settings simplify operation. The audio signal at the end of the cooking cycle can be softened in case you find it too loud. With a black stainless steel exterior, this appliance looks good in any kitchen.`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpbb_rhkYyluK-LGiZDbFYwXbZZW7WHl0BRXbhe0en9TaN89ZYgT85qWdYt4pfxL6ubNdl7bti1cZOJNrqxru4ekJzvbW22l16kxmSRinzCXYs80FbUc7viA&usqp=CAY',
      catagory: 'Housewares',
      originalPrice: 599,
      salePrice: 470,
      title: `Breville Barista Express Espresso Machine`,
      description: `A barista will quickly tell you that the most important ingredient to deliver an amazing espresso is to use fresh beans and to grind them as close to the time of use as possible. Actually, it's best to limit the time between grinding and extraction to seconds, not minutes. The in-built conical burr grinder allows you to grind only what you need directly into the porta filter. It's fully adjustable in grind size and dose, so you can tweak to taste. The patented Razor dosing tool trims the puck for consistent extraction, while PID digital temperature control delivers accurate water temperature throughout the extraction. With a dedicated hot water outlet, impressive steam pressure and dual and single wall filters, you'll move from novice to barista in no time at all.`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYihrdAfTg2ikMXvUicwRgRz6j9p0LDkbgC2cbe6_YATAoqu-mQqp150BOJUQ6Zz-pbLerjOt-2bIaVxMQkn_66uCBnrnTPZLTlfHkrGlwZezfHP75RcI',
      catagory: 'Housewares',
      originalPrice: 170,
      salePrice: 99,
      title: `Breville Nespresso Essenza Mini Espresso Machine, Piano Black`,
      description: `Nespresso by Breville Essenza Mini Espresso Maker offers a convenient, compact design without compromising taste. Designed to deliver flavorful coffee within minutes, this deluxe machine offers 2 programmable cup sizes (Espresso and Lungo). Save counter space while brewing delicious espresso or coffee with the Nespresso by Breville Essenza Mini Espresso Maker. High-pressure pump and fast heat-up system 1-touch operation, 1 speed setting. Compatible with Nespresso and single serve pods, Automatic ejection of capsules for easy disposal Offers 2 programmable cup sizes: Espresso & Lungo Includes a complimentary welcome set with a range of Nespresso capsules with unique aromatic profiles, Removable reservoir 20 oz. capacity, Brew time ranges between 18-30 seconds 19 bars of pump pressure, Energy-saving automatic off 1220 watts Acrylic plastic/cast metal interiors Wipe clean. Measures 12.9′′ L x 3.3′′ W x 8′′ H. Cord measures 31′′. Weighs 5.1 lb.`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDesedgPzFfvIrcJWPMQHgU9OsL7qW9dH72vdukeeFeqHE19Rz-FuKoQFRBgm2nX09razTVLI7gndojepEX-1bBAeeFFkLNc1HKmEJffG2EgzZpn90BBf86g',
      catagory: 'Housewares',
      originalPrice: 38,
      salePrice: 19,
      title: `Frigidaire, 2 Slice Retro Toaster Eto102, White`,
      description: `Jumpstart your day bright and early with eggs, bacon, and 2 delicious slices of toast made just the way you like it in the Frigidaire Retro Wide Slot Toaster. This retro-styled toaster takes you back to when life was a little more simple. By pushing down on the lever, you can lower your bread into the oven and eagerly wait for the toasting process to complete. There's no need to overcomplicate your toasted foods. The dual, extra-large slots let you choose between inserting bread, bagels, toaster strudels, and more with ease. Everyone prefers a different amount of crunch. With a setting for 5 different browning levels, you can achieve the texture you absolutely prefer. Featuring a bagel button, the old-school toaster can adjust the toasting time for thicker bread types. Once your toasted snack is ready, pop out the convenient crumb tray to keep your funky fun toaster clean. Kick bag with your toasted bagel covered in your favorite jam and add a little pop culture to your kitchen with the Retro 2-Slice Toaster by Frigidaire.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnQYwVxr4ehE4J32-yHwle9LiqHaEQ_uiGSPoUIIuRF4BdgrOvErDGlMc1bekPWxY_WKYYf1HAqtP5dXZ6g0DkPrbNj2CPcN5g-8Ymcv8hNgxiKzGejzR52g',
      catagory: 'Outdoor',
      originalPrice: 569,
      salePrice: 380,
      title: `Weber Spirit II E-310 Propane Gas Grill, Black`,
      description: `Weber Spirit II E-310 LP Gas Grill has 30,000 BTU, GS4 Grilling System includes 3 high performance stainless steel burners, Infinity Electronic ignition, grease management system, and porcelain enameled flavorizer bars. Porcelain enameled cast iron cooking grates provide 424 Sq. In. of cooking space and warming rack adds an additional 105 Sq. In. for a total cooking area of 529 Sq. In. Features: porcelain enameled lid with center mounted thermometer, side tables with built in tool hooks, the left shelf folds down, and welded tube design with open cart and bottom shelf. Easy access to gas tank storage with fuel gauge. Wheels for easy mobility. 10 year warranty on GS4 Grilling System, 5 year warranty on porcelain enameled cast iron grates and porcelain flavorizer bars. Number of Main Burners:3 Burners, Color: Black, Primary BTU Rating:30,000 BTU, Fuel Type: LP Gas, Side Burner: No, Grate Material: Cast Iron, Grill Material: Steel, Burner Material: Stainless Steel, Total Cooking Surface Area: 529 Sq. In., Dimensions:52 In. W. x 44.5 In. H. x 27 In. D., Warming Rack Upper:Yes, Weight:114 Lb.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfXOaYm9cdx0_KFbIj5qu4B80t344MtqYSLIfy4y_wFfJe-yu_IS0FKPZRkgPY71NQYjY2AU6U7C02Hnm8zEZXCrmsVM8M&usqp=CAY',
      catagory: 'Outdoor',
      originalPrice: 674,
      salePrice: 410,
      title: `Real Living - Lakewood 4-Piece All-Weather Wicker Cushioned Patio Seating Set`,
      description: ``,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQF-06H1Qox4_-cqswNZjXrmUWWAANdxZOMU5lvkuf5zgVwgRMR7f4Ywjz3apKhXpqevlmESztWkYQCPm_EQ2Iq1-kh87-bamdJCatXa_fU',
      catagory: 'Outdoor',
      originalPrice: 299,
      salePrice: 180,
      title: `Kemon Patio Furniture Round Outdoor Daybed`,
      description: `『Fashionable Design』 Black smooth PE wicker with beige cushions and pillows, simple and beautiful design. Modern and Home-warm style, become a unique highlight in your outdoor furniture,what applies to you Garden, patio, courtyard,balcony,pool edge, etc. 『Study and Comfort』 Patio furniture with high quality and tough PE rattan, which is precisely woven, weather-resistant, waterproof and sun-resistant, providing adequate support. 3 soft pillows and soft cushions that can be fixed on the round bed for the comfortable feel. 『Multi-Function』 Our daybed can be used as a whole, but only needs to adjust the connection between the various parts, or can be divided into two parts or four parts to meet your different use needs.The entire round bed weight is not heavy that an adult can move it. 『Product Details』 Retractable Canopy with hydraulic system,You don't have to worry about the sun outside in summer. If you feel hot, you can remove the cushions and sit on this wicker bed for a great summer. The covers and pillows are made from a high-quality sponge, and covers are detachable to clean. 『Installation Recommendations』 Because the volume of round bed is larger, suggest two people assemble together. You will bask in the afternoon sun with your lover.`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPhCu4PrYQ5i4HrbjPYzontHQi7kUYQekrnv61fPdfHzk3Gn32VuctQqaT80FxsowriIYAdhIBmbfccjpYQVsJNrtXvs9R3FOIYsHeJqXYAJqDOyJ4IZ91tw',
      catagory: 'Outdoor',
      originalPrice: 795,
      salePrice: 580,
      title: `Purple Leaf 12 Feet Double Top Deluxe Square Patio Umbrella`,
      description: `The canopy size of this patio umbrella is square, unique double-top canopy design for commercial and residential use. This paito umbrella has unique handle design and crank system, 6 height and angle to choose, 360-degree rotation for easier shading area control. All-aluminum umbrella bones and 8 heavy-duty ribs, anti-oxidation spray painted, maintain a long period life. With Purple Leaf patio umbrella you can enjoy your outdoor life no matter it is raining or on sunshine days. Get one now and start your wonderful outdoor life! Weighted base in the picture is NOT included. For 9'x9' ,10'x10'square umbrella,recomend 34' Size Base, for 11'x11'square umbrella, recomend 36.6' Size Base, for 12'x12' square umbrella,recomend 39.4' Size Base. Base with Wheels is suitable for all size umbrellas.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxvDP1MxTFWqnQ8R2wU2sWbz60awVtnD58ax7Z6cZ2PbOuDYyIHjdu5oGspXePBbM5h-yoTRkBeNAJcBsf03-Hp7BbSrNWQ2P8vofXkIB39p1OBz0mP47N&usqp=CAY',
      catagory: 'Outdoor',
      originalPrice: 580,
      salePrice: 380,
      title: `Weber 22" Performer Deluxe Charcoal Grill-Crimson`,
      description: `With a push of a button, the coals are lit, and the essence of BBQ fills the air. The Performer Deluxe charcoal grill performs from beginning to end. Light coals with the Touch-N-Go gas ignition, prep food on the large work table, and know that cleanup will be easy with the One-Touch cleaning system.`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9ShJPdtb3r6S1ngVsQaKUTJNaBnfZEq6FBQZSgEOS8ZlfSxeJgnay_5Z0FgvREXHmOoWIE_5WDAo0t_RY3_Y2U2KXFh0ehkKb7Kyn8Fvi',
      catagory: 'Outdoor',
      originalPrice: 999,
      salePrice: 666,
      title: `Marlo Outdoor 6 Piece Sofa Seating Group Foundstone`,
      description: `Foundstone This 10-person outdoor seating group is just right for large families or those who love to entertain. Made with a durable acacia wood frame, this set includes 6 pieces: A loveseat, a sofa, two armchairs, and a coffee table. Each of the seating pieces is topped with wicker rattan for a traditional, timeless look that's easy to pair with all sorts of different outdoor styles, while the gray complements all sorts of different color palettes. Plus, all the tools you need to put it together are included.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR01DL-hicTm19gyJAF-twTkrxHBd-7swvqSPbl90aBWF7ByoF__BTeozqzcSNrDBk5qSftF6IK5t2QIYwb5sw5__t-snC1OqrhE8NwrodS71N913Sg72qjQw',
      catagory: 'Outdoor',
      originalPrice: 2479,
      salePrice: 1600,
      title: `NewAge Products Outdoor Furniture Rhodes 3 Piece Patio Chair Set with Coffee Table`,
      description: `With its artful blend of clean, simple angles and minimalist styling, Rhodes Collection seating is reminiscent of high-end rooftop patios nestled in exclusive private clubs of a bygone era. The thick, uniquely angled framework exudes a feeling of sturdiness and timeless style, crafted in premium natural teak or dusky powder coated aluminum with sophisticated teak inlay armrest inserts. Our Chat Sets are all about relaxing, connecting with family and friends and conversations enjoyed in welcoming comfort. Placed next to sofas and loveseats or at the center of a cozy chat set, the Rhodes Coffee Table shares the contemporary slatted teak design of other set pieces, coordinating the look throughout your backyard oasis while providing a convenient surface for you and your guests.`,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3SUrOlBNkbvOLQITBOqSKGEFMJtw4JQUB0-SW4nrbVR6lz4D_lNkDMObLtPR5GgMfJ0n7vzRDUnKxfs7xqmX1NI7Nh9AkxUm-oxpcRZHq-5J-K2ocZogs&usqp=CAY',
      catagory: 'Outdoor',
      originalPrice: 2452,
      salePrice: 1400,
      title: `Lifetime Storage Shed - 15 ft. x 8 ft. - Browns/Tans`,
      description: `Don't be fooled by the decorative design, this shed is tough. Constructed of high-density polyethylene (HDPE) plastic and reinforced with powder-coated steel, this attractive outdoor shed is built to weather the storms. Keep all tools and garden equipment safe, dry, and conveniently located in the yard, where you use them. No more rummaging through the house or garage. Several shelving units and peg strips are included to help you keep your tools organized and right at your fingertips. Low maintenance weather resistant design prevents fading and cracking. Best of all, no painting required. Note: This shed must be built on a flat level foundation of wood or concrete (not included). Color: Browns / Tans.`,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpiYGH9WHZtTezNwbl7B825nSws1hSqb2LRGYYi8AI2dt0wGFItsE_EV23qD4L9wqJ7mJhuPFtWeC-WkkGZhAEvc46vSgj-OAoFUceZmq4C1-BIjNAkTAI',
      catagory: 'Outdoor',
      originalPrice: 229,
      salePrice: 160,
      title: `Backyard Discovery Acacia Farmhouse Porch Swing`,
      description: `Backyard Discovery Functional yet charming, this farmhouse porch swing is made from durable Indonesian Acacia wood. Being naturally water resistant, Acacia lumber makes this rustic farmhouse swing a striking addition to any porch or patio. Large enough to comfortably seat two people along with accent pillows and a blanket, you and your sweetie can swing in the breeze in style!`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwq1nrGAvizK33M6YWzFXuTgc7yfeP1pQ2mhC5uxi4RWazSR5D0K9dB9fI4uSL2f-RGAKACgtv2YOtfVaT5N8Ts3U8uvrwlBCWxs0Idl13UI5Ou5wAkVhu',
      catagory: 'Outdoor',
      originalPrice: 550,
      salePrice: 350,
      title: `Britanna 2pk Patio Club Chair, Outdoor Furniture - Natural - Opalhouse`,
      description: `These sturdy patio chairs feature a weather- and rust-resistant steel frame covered in a woven material, providing a natural look for your outdoor space while also being able to withstand the elements. Thick back and seat cushions provide excellent comfort, allowing you to sit back and enjoy time with a loved one or relax with a book. This is your house. Where you create spaces as bold as your spirit. Collect objects as inspired as your dreams. Find pieces that remind you of every place you’ve been. Discover stories to inspire everywhere you have yet to go. This is Opalhouse. Color: One Color. Pattern: Solid.`,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8x_9jz0pGgex4-7fHYSZRDlMsMV3fg7-kicznDTdcpHMSdj0XsGZsV5Jv14LQgvrR1oELaL4PzFJhUeMVsgGKeqi72YGf53ij--ZOeDo&usqp=CAY',
      catagory: 'Outdoor',
      originalPrice: 759,
      salePrice: 450,
      title: `Backyard Discovery 16 x 12 Barrington Gazebo`,
      description: `Meet the Barrington Gazebo by Backyard Discovery! Available in a variety of sizes the Barrington is a reliable upgrade to any space as it is a Pro-Tect™ certified structure; certified to withstand up to 7,800 lbs of snow load (or up to 30 inches of snow) and 100 mph winds*. The thermal insulated 29 gauge steel roof will reduce heat transfer by up to 20 degrees, making this structure enjoyable in any region for relaxing or entertaining. And if you’re looking to plug in lights, charge your devices or anything else that requires power, Backyard Discovery has you covered with their exclusive PowerPort™ making it convenient with 3 outlets and 3 USB ports. If timeless style combined with superior performance is what you’re looking for in an outdoor gazebo, look no further. Bring the Barrington home today!`,
    },{
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZphrwKxYDj5B3F24cTbyVaWv7a_di_NR3MO97b4vhHvrB7ohh_uk5eBm7873tCmbpuimUorPEunmapnCewERdVi0fSWS8jxrzHoCDJn9pebRS_ah9mELdEw',
      catagory: 'Outdoor',
      originalPrice: 259,
      salePrice: 120,
      title: `Home Decorators Collection Celene 62 in. LED Indoor/Outdoor Matte Black Ceiling Fan`,
      description: `The Home Decorators Collection Celene 62 in. Matte Black Ceiling Fan offers a 8-blade windmill design. The integrated LED light kit offers versatile lighting options. Choose from 3,000K, 4,000K or 5,000K light output options. The DC motor has 9 speeds and the included remote controls the dimming and speed functions. DC motor fans are 70% more energy efficient than AC motor fans (when comparing efficiency (CFM/W) of DC vs AC motors in published FTC Energy Guides for ceiling fans).`,
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqI9ZuLnBC9_upKsi7BXLNjZwVVCFbnxUbO7Nw2vdP4LcobSiSA-Jnaq4FTZ06R76AFYClfJm4SYRRtvoNWmdDIQ9HAryn9fpbnQyY3D2Y_I57n2QNuoUbAw',
      catagory: 'Office',
      originalPrice: 1649,
      salePrice: 1100,
      title: `Herman Miller Aeron Chair, Size B - Medium`,
      description: `Aeron office chair revolutionized office seating with its defining design qualities: the pioneering Pellicle suspension material and its patented PostureFit SL back support, which affords the ideal sit — chest open, shoulders back, pelvis tilted slightly forward. Combining a deep knowledge of human-centered design with cutting-edge technology, the classic Aeron chair is engineered with state-of-the-art adjustability, from the arms, seat height, depth, and recline, to help you maintain the optimal seating posture so you can focus on the task at hand. And it comes available in three chair sizes, offering the most comfort to the largest range of users.`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTElhDjG-T82KAp_ULHIWv3YLgFHsAKdgn8hG9WanRUVrk1p-eI3EXepweGwwG1LvtQ4ZRYHcHKDByaVlCF-5LEMTsqguN5YUnw2chdypX5WxPTVK6gNvgP',
      catagory: 'Office',
      originalPrice: 130,
      salePrice: 75,
      title: `FlexiSpot EN1 Electric Height Adjustable Desk`,
      description: `EXTRA-SPACIOUS WHOLE-PIECE DESKTOP: Expansive 55” x 28” eco-friendly whole-piece desktop offers more than ample workspace for 2 monitors, a laptop and more so you can confidently tackle any work situation that arises. Please allow a slight 0 to1-inch difference in desktop size due to manual measurement. ELECTRIC HEIGHT ADJUSTABLE LIFT SYSTEM: The motor lift mechanism offers smoother height adjustments, from 28" to 47.6" (without 1" thickness of table top included) , at a speed of 1"/second with low noise(under 50 dB) while running. BUILT FOR WORK FROM HOME: The perfect standing desk to allow independent and remote workers to stay active, healthy, and productive while working from home. Precisely adjust your desk to your height and insert healthy movement into your day. An industrial-grade steel frame combined with a solid desktop allows for a 154 lbs. LED MEMORY CONTROL PANEL: A 6-button controller with 4 programmable memory presets lets you set 4 desired desk heights for convenient switching from sitting to standing throughout the day. Some steps may require a drill, which is not included. FLEXISPOT EN1 55 x 28 Inch Electric Stand Up Desk Workstation, Ergonomic Memory Controller Standing Height Adjustable Whole-Piece Desk Top Base (Gray Frame + 55" White Top) FLEXISPOT has always been the go-to for the best adjustable height standing desks, offering ergonomic solutions that help people upgrade their home office to work. Flexible working environment allows you to have a better working experience. It reduces the risk of back pain, diabetes, heart problems, obesity and other physical problems while switching between sitting and standing.The FLEXISPOT desk frame has been engineered for safe, reliable, and fast height adjustment. The FLEXISPOT desktop have Various Color and Size Options, you can Choose from 4 different board colors (Black, White, Natural, Walnut) and 4 different top size (42", 48", 55", 60") to match your decor and space, achieve the customized look you want!`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQk4M32zakKZv9NKJfYWDqSwfINHcXT5NuvYddGNyWHFU-phgERGGh1UtFHZWOe_aJ9jSj8vAUjkPRamgPpOg9_Wn8lpyv5PT11A__65wp1bPkof7Y8mCm6iQ&usqp=CAY',
      catagory: 'Office',
      originalPrice: 124,
      salePrice: 78,
      title: `Brother HLL2320D Compact Single-Function Monochrome Laser Printer`,
      description: `Brother HLL-2320D Mono Laser Printer helps lower your operating costs with a high-yield 2,600-page replacement toner cartridge. It creates two-sided documents and help save paper with automatic duplex printing. Brother HLL2320D Mono Laser Printer has a 250-sheet capacity paper tray adjustable for letter or legal size paper, plus a manual feed slot for envelopes. It prints professional reports, spreadsheets, and documents at up to 2400 x 600 dpi resolution. FeaturesBrother HLL-2320D Mono Laser Printer helps lower your operating costs with a high-yield 2,600-page replacement toner cartridge. It creates two-sided documents and help save paper with automatic duplex printing. Brother HLL2320D Mono Laser Printer has a 250-sheet capacity paper tray adjustable for letter or legal size paper, plus a manual feed slot for envelopes. It prints professional reports, spreadsheets, and documents at up to 2400 x 600 dpi resolution.`,
    },{
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThe53g0X4sYhBN4udzcYrE4R1lKkzfHbt3ROYj5z2P6bZCfJ0xS6cMozJTVtWTYgLCWzeeIAz3rHEVyPbzseGuLcw7Vn6fmKK3JWhGhWaTxozxOFscCOA3',
      catagory: 'Office',
      originalPrice: 18,
      salePrice: 9,
      title: `Heavyweight Poly File Folders`,
      description: `A convenient way to keep your important documents, bills, and projects organized and better protected. The 1/3rd cut tab design provides a 3.5 inch tab area at the top of each folder to allow for easy identification of the folder's contents. Durable, spill-proof and stain-resistant, these specially-designed folders are made of textured extra strength polypropylene that easily expand to 1/2 inch or 1 inch capacity with a simple fold across the bottom length of the folder. A heavy-duty tray-style box with interlocking tabs keeps your file folders like new until you put them to work!`,
    },{
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSH-dmDfd-R7ftwm2mZwyhqAV5gy-w_aT8QnK7yikB3WTOBFhtmF5Wj9_D-M8u9uvGWA03rfwDud9y7LkajEo3PJwCz9_brDGRV__bp9GhHuoK9zzAhXGThHA',
      catagory: 'Office',
      originalPrice: 52,
      salePrice: 35,
      title: `MobileVision Bamboo Multi-function Desktop Organizer`,
      description: `Keep loose papers, file folders, mailing envelopes, as well as pens, pencils and paper clips neat, sorted with the MobileVision Bamboo Desktop Organizer - Beautiful high-quality Bamboo divider tall enough to keep files upright and easily visible at your fingertips, separate compartments for storing pens, pencils and other items, short tray perfect for post-its or paperclips - Rubber feet keep organizer sturdy, stable, and in place (Dimensions: 7.25" x 8.5" x 4.5") Refer to image for individual compartment dimensions. - Perfect for use in home, office, classrooms, waiting rooms, and more - Have your important items gotten lost in the clutter on your desk? Keep files, daily mail, business envelopes as well as pens, pencils, post-its and paperclips organized and easily accessible, at your fingertips with the MobileVision Bamboo Desktop Organizer. This is the right step needed to bringing order in an already chaotic environment. Staying organized can be the difference between a tough day and a productive one. Ensure your days at home, office or classroom are great ones with the MobileVision Multi-Function Bamboo Desktop Organizer with Compartment - SKU: 1867AA`,
    },
  ];

function ProductList(props) {
  const location = useLocation();
  const {catagory} = location.state;
  const filteredList = images.filter(item => item.catagory === catagory);

  const [, dispatch] = useStateValue();

  return (
    <>
      <AppBar />
      <Box align="center" mt={6}>
        <Typography variant="h4">
          {catagory}
        </Typography>
      </Box>
      <Box padding={5}>
        <Grid container spacing={3}>
          {filteredList.map((item) => (
            <Grid item xs={12} md={3} align="center" style={{display: 'flex'}}> 
              <Card raised style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1}}>
                <CardHeader
                  title={item.title}
                />
                <CardMedia
                  component="img"
                  height="250"
                  image={item.url}
                  alt="img"
                  sx={{ objectFit: 'contain'}}
                />
                <CardContent>
                  <Typography variant='h5' >
                    ${item.salePrice}
                  </Typography>
                  <Typography sx={{color:'grey'}}>
                    compare at ${item.originalPrice}
                  </Typography>
                  <Button 
                      variant="contained" 
                      sx={{width:"60%", height:40}}
                      onClick={() => {
                        dispatch({
                          type: 'ADD_TO_CART',
                          item: {
                              title: item.title,
                              url: item.url,
                              salePrice: item.salePrice
                          }
                        })
                      }}
                  >
                      Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
          }
      </Grid>   
    </Box>
    </>
  )
}

export default ProductList