/* =====================================================================
   PUJIVERSE TECH — DATA
   Edit this block to add gadgets or timeline events.
   power: "Battery" | "Plug-in" | "Both"   (for software use "Software")
   timeline entries: { year:"1876", title:"...", text:"..." }
   ===================================================================== */
var CATEGORIES = [
 {id:"phones", name:"Phones", intro:"Devices built to talk across distance, from wired desk sets to pocket supercomputers.",
  eras:["1876 Bell's telephone","Switchboards & rotary dials","Car & mobile radio phones","1G brick phones","2G & SMS","Feature phones","3G & the first smartphones","4G app era","5G & foldables","Satellite & AI phones"],
  items:[
  ["Smartphones","Both","Touchscreen pocket computers with apps, cameras, GPS and mobile internet.","iPhone, Galaxy S, Pixel, OnePlus, Xiaomi"],
  ["Foldable phones (book style)","Both","A phone that unfolds into a small tablet with a flexible screen.","Galaxy Z Fold, Pixel Fold, Honor Magic V"],
  ["Flip foldables","Both","Clamshell phones with a folding screen and a small cover display.","Galaxy Z Flip, Motorola Razr"],
  ["Feature phones","Both","Simple button phones for calls and texts with very long battery life.","Nokia, JioPhone, Kyocera"],
  ["Rugged phones","Both","Drop-proof, waterproof phones for job sites and outdoors.","CAT, Ulefone Armor, Samsung XCover"],
  ["Satellite phones","Both","Call and text from anywhere on Earth via satellites, no cell towers needed.","Iridium, Inmarsat, Thuraya"],
  ["Gaming phones","Both","Phones with high-refresh screens, cooling fans and shoulder triggers.","ROG Phone, RedMagic"],
  ["Kids' & senior phones","Both","Simplified phones with big buttons, SOS keys or parent controls.","Jitterbug, Gabb, Pinwheel"],
  ["Cordless home phones","Both","Landline handsets that connect wirelessly to a base station.","Panasonic, VTech, Gigaset"],
  ["Landline desk phones","Plug-in","Classic wired phones on a copper or fiber line.","AT&T, Panasonic, BSNL sets"],
  ["Office IP / VoIP phones","Plug-in","Desk phones that make calls over the internet, often powered by the network cable.","Cisco, Poly, Yealink"]]},

 {id:"computers", name:"Computers", intro:"Machines that calculate, store and connect, from room-sized mainframes to the chip in a Raspberry Pi.",
  eras:["Mechanical calculators","ENIAC & vacuum tubes","Transistors & mainframes","Minicomputers","Personal computers","GUIs & the mouse","Laptops","Cloud & servers","Apple Silicon & ARM PCs","AI PCs & quantum"],
  items:[
  ["Laptops","Both","Portable computers with a built-in screen, keyboard and battery.","MacBook, Dell XPS, ThinkPad, HP Spectre"],
  ["2-in-1 convertibles","Both","Laptops whose screen flips or detaches to work as a tablet.","Surface Pro, Yoga, HP Envy x360"],
  ["Chromebooks","Both","Light, low-cost laptops running ChromeOS, popular in schools.","Acer, ASUS, Lenovo Chromebooks"],
  ["Desktop PCs","Plug-in","Tower computers with separate monitor and upgradeable parts.","Dell, HP, Lenovo, custom builds"],
  ["All-in-one PCs","Plug-in","The whole computer hidden behind the display.","iMac, HP Pavilion AIO"],
  ["Mini PCs","Plug-in","Palm-sized desktops for home, office or media.","Mac mini, Intel NUC, Beelink"],
  ["Gaming PCs","Plug-in","High-power desktops and laptops with dedicated graphics cards.","Alienware, ROG, Legion, custom rigs"],
  ["Workstations","Plug-in","Professional machines for 3D, video, CAD and data science.","Mac Pro, HP Z, Dell Precision"],
  ["AI PCs","Both","Computers with a built-in NPU chip for on-device AI.","Copilot+ PCs, Snapdragon X laptops"],
  ["Servers","Plug-in","Always-on computers in data centers that run websites and cloud apps.","Dell PowerEdge, HPE, Supermicro"],
  ["Single-board computers","Plug-in","Credit-card-sized computers for learning and DIY projects.","Raspberry Pi, Arduino, Jetson Nano"],
  ["Supercomputers & quantum","Plug-in","The fastest machines on Earth, plus experimental quantum computers.","Frontier, El Capitan, IBM Quantum"]]},

 {id:"tablets", name:"Tablets & E-readers", intro:"Slate-shaped screens for reading, drawing, learning and watching.",
  eras:["Graphics tablets","Pen computers & PDAs","E-ink readers","iPad era","Pen & keyboard tablets"],
  items:[
  ["Tablets","Both","Large touchscreen devices for apps, video and browsing.","iPad, Galaxy Tab, Lenovo Tab"],
  ["Pro tablets","Both","High-end tablets with stylus and keyboard support for creative work.","iPad Pro, Galaxy Tab S Ultra"],
  ["Kids' tablets","Both","Durable tablets with cases and parental controls.","Fire Kids, LeapFrog"],
  ["E-readers","Both","Paper-like E Ink screens for books, with weeks of battery.","Kindle, Kobo, PocketBook"],
  ["E-ink notepads","Both","Digital paper you can write on with a pen.","reMarkable, Kindle Scribe, Boox"],
  ["Drawing / pen tablets","Plug-in","Pads and pen displays that connect to a computer for digital art.","Wacom, XP-Pen, Huion"]]},

 {id:"smarthome", name:"Smart Home", intro:"Connected devices that let a house listen, see, heat, light and lock itself.",
  eras:["Electric light & doorbells","Remote controls","X10 home automation","Wi-Fi smart plugs","Voice assistants","Matter & Thread"],
  items:[
  ["Smart speakers","Plug-in","Voice-controlled speakers that answer questions and run your home.","Echo, Nest Audio, HomePod"],
  ["Smart displays","Plug-in","Speakers with a screen for video calls, recipes and cameras.","Echo Show, Nest Hub"],
  ["Smart bulbs & light strips","Plug-in","Lights you can dim, color and schedule from your phone.","Philips Hue, LIFX, Wiz, Govee"],
  ["Smart plugs & switches","Plug-in","Turn any outlet or wall switch into an app-controlled one.","Kasa, Lutron Caseta, Meross"],
  ["Smart thermostats","Plug-in","Learn your schedule and save energy on heating and cooling.","Nest, Ecobee, Honeywell"],
  ["Video doorbells","Both","See and talk to visitors from anywhere.","Ring, Nest Doorbell, Eufy"],
  ["Security cameras","Both","Indoor and outdoor cameras with motion alerts and night vision.","Arlo, Wyze, Blink, Eufy"],
  ["Smart locks","Battery","Unlock with your phone, fingerprint or a code.","August, Yale, Schlage Encode"],
  ["Robot vacuums & mops","Both","Self-driving cleaners that map rooms and empty themselves.","Roomba, Roborock, Ecovacs"],
  ["Smoke & CO alarms","Both","Connected alarms that alert your phone.","Nest Protect, First Alert"],
  ["Smart hubs","Plug-in","Bridges that connect Zigbee, Z-Wave, Thread and Matter devices.","SmartThings, Home Assistant, Hubitat"],
  ["Smart blinds","Both","Motorized shades on a schedule or voice command.","Lutron Serena, IKEA, SwitchBot"],
  ["Garage & gate openers","Plug-in","Open and check the garage from your phone.","Chamberlain myQ, Meross"],
  ["Smart sprinklers","Plug-in","Watering controllers that skip when rain is forecast.","Rachio, Orbit B-hyve"]]},

 {id:"tvs", name:"TVs & Displays", intro:"Screens for watching and working, from glowing tubes to self-lit pixels.",
  eras:["Mechanical TV","Black & white CRT","Color TV","Cable & satellite","Plasma & LCD","HD & smart TVs","4K/8K, OLED","MicroLED & transparent screens"],
  items:[
  ["OLED TVs","Plug-in","Each pixel makes its own light, giving perfect blacks.","LG OLED, Sony Bravia, Samsung S-series"],
  ["Mini-LED & QLED TVs","Plug-in","Very bright LCD TVs with thousands of tiny backlights.","Samsung Neo QLED, TCL, Hisense"],
  ["MicroLED TVs","Plug-in","Modular self-lit screens, the newest premium display tech.","Samsung The Wall"],
  ["8K TVs","Plug-in","Four times the pixels of 4K for very large screens.","Samsung, Sony, LG"],
  ["Projectors","Plug-in","Throw a huge picture on a wall, including ultra-short-throw models.","Epson, XGIMI, Hisense Laser"],
  ["Streaming devices","Plug-in","Sticks and boxes that bring apps to any TV.","Roku, Fire TV, Chromecast, Apple TV"],
  ["Set-top & satellite boxes","Plug-in","Receivers for cable, satellite and IPTV channels.","Tata Play, DirecTV, Dish"],
  ["Computer monitors","Plug-in","Desktop screens for work and gaming, up to 500 Hz and beyond.","Dell, LG UltraGear, Samsung Odyssey"],
  ["Portable monitors","Both","Thin USB-C screens that slip into a laptop bag.","ASUS ZenScreen, Arzopa"],
  ["Digital photo frames","Plug-in","Screens that show a rotating album, often shared by family.","Aura, Nixplay"]]},

 {id:"wearables", name:"Wearables", intro:"Tech you wear on your wrist, finger, face or ears.",
  eras:["Pocket watches","Digital & calculator watches","Pedometers","Fitness bands","Smartwatches","Smart rings & glasses"],
  items:[
  ["Smartwatches","Battery","Notifications, health tracking, payments and apps on your wrist.","Apple Watch, Galaxy Watch, Pixel Watch, Garmin"],
  ["Fitness bands","Battery","Slim trackers for steps, sleep and heart rate.","Fitbit, Xiaomi Smart Band, Whoop"],
  ["Smart rings","Battery","Health tracking in a ring: sleep, temperature and readiness.","Oura, Galaxy Ring, RingConn"],
  ["Smart glasses","Battery","Glasses with cameras, speakers or a heads-up display.","Ray-Ban Meta, Xreal, Even Realities"],
  ["Wireless earbuds","Battery","Tiny Bluetooth earphones with noise cancellation.","AirPods, Galaxy Buds, Sony WF"],
  ["Kids' GPS watches","Battery","Watches that let parents call and locate children.","Gizmo, TickTalk"],
  ["Item trackers","Battery","Small tags that help you find keys, bags and luggage.","AirTag, Tile, SmartTag"],
  ["Smart clothing & shoes","Battery","Garments and insoles with built-in sensors.","Hexoskin, smart insoles"]]},

 {id:"os", name:"Operating Systems", intro:"The software layer that makes every gadget work. No OS, no smart device.",
  eras:["Batch systems","UNIX","MS-DOS","Mac OS & Windows GUIs","Linux","Symbian & BlackBerry","iOS & Android","Cloud & AI-native OS"],
  items:[
  ["Android","Software","The world's most used mobile OS, open source from Google.","Phones, tablets, TVs, cars"],
  ["iOS & iPadOS","Software","Apple's OS for iPhone and iPad.","iPhone, iPad"],
  ["Windows","Software","Microsoft's desktop OS, the most common on PCs.","Windows 11"],
  ["macOS","Software","Apple's desktop OS for Mac computers.","MacBook, iMac, Mac mini"],
  ["Linux","Software","Free, open-source OS behind most servers and many desktops.","Ubuntu, Fedora, Debian, Mint"],
  ["ChromeOS","Software","Google's browser-centered OS for Chromebooks.","Chromebooks"],
  ["HarmonyOS","Software","Huawei's OS spanning phones, watches, cars and TVs.","Huawei devices"],
  ["Wearable OS","Software","Systems built for watches and small screens.","watchOS, Wear OS"],
  ["TV OS","Software","Systems that run smart TVs and streaming boxes.","Google TV, tvOS, Tizen, webOS, Roku OS"],
  ["XR OS","Software","Operating systems for headsets and spatial computers.","visionOS, Horizon OS, Android XR"],
  ["Console OS","Software","The systems inside game consoles.","PlayStation, Xbox, Nintendo"],
  ["Embedded & real-time OS","Software","Tiny systems inside appliances, cars and IoT gadgets.","FreeRTOS, Zephyr, QNX"]]},

 {id:"audio", name:"Audio", intro:"Recording and playing sound, from the phonograph to spatial audio.",
  eras:["Phonograph","Radio","Vinyl & hi-fi","Cassettes & Walkman","CDs","MP3 & iPod","Streaming & Bluetooth","Spatial audio"],
  items:[
  ["Headphones","Battery","Over-ear and on-ear headphones with noise cancelling.","Sony WH, Bose QC, AirPods Max"],
  ["Bluetooth speakers","Battery","Portable wireless speakers, many waterproof.","JBL, UE Boom, Marshall"],
  ["Soundbars","Plug-in","Slim speakers under the TV for bigger sound.","Sonos Arc, Samsung, Bose"],
  ["Home theater systems","Plug-in","Receivers and surround speakers for movie nights.","Denon, Yamaha, Klipsch"],
  ["Turntables","Plug-in","Record players, back in style for vinyl fans.","Audio-Technica, Rega"],
  ["Microphones","Plug-in","USB and studio mics for podcasts and YouTube.","Shure, Rode, Blue Yeti"],
  ["Hi-fi players & DACs","Both","Gear for high-resolution music.","FiiO, Astell&Kern"],
  ["Radios","Both","AM/FM, DAB and internet radios.","Sangean, Tecsun"]]},

 {id:"cameras", name:"Cameras", intro:"Capturing light, from film plates to computational photography.",
  eras:["Camera obscura","Daguerreotype","Roll film","Instant photos","Camcorders","Digital cameras","Phone cameras","AI imaging"],
  items:[
  ["Mirrorless cameras","Battery","Interchangeable-lens cameras, now the pro standard.","Sony Alpha, Canon EOS R, Nikon Z, Fujifilm"],
  ["DSLR cameras","Battery","Mirror-based cameras still used by many photographers.","Canon EOS, Nikon D"],
  ["Action cameras","Battery","Tough, tiny cameras for sports and travel.","GoPro, DJI Osmo Action, Insta360"],
  ["360° cameras","Battery","Capture everything around you at once.","Insta360 X, Ricoh Theta"],
  ["Instant cameras","Battery","Print photos on the spot.","Instax, Polaroid"],
  ["Pocket & vlog cameras","Battery","Small gimbal cameras for creators.","DJI Osmo Pocket, Sony ZV"],
  ["Dashcams","Plug-in","Record the road while you drive.","Garmin, Vantrue, 70mai"],
  ["Webcams","Plug-in","Cameras for video calls and streaming.","Logitech, Elgato, Insta360 Link"],
  ["Cinema cameras","Plug-in","Professional filmmaking cameras.","RED, ARRI, Blackmagic"]]},

 {id:"gaming", name:"Gaming", intro:"Play machines, from oscilloscope tennis to cloud streaming.",
  eras:["Tennis for Two","Arcade","Atari & home consoles","8-bit & 16-bit","3D consoles","Online gaming","Mobile gaming","Handheld PCs & cloud"],
  items:[
  ["Home consoles","Plug-in","Living-room game machines.","PlayStation 5, Xbox Series X|S"],
  ["Hybrid consoles","Both","Play docked on the TV or handheld.","Nintendo Switch 2"],
  ["Handheld gaming PCs","Battery","Portable PCs that play your PC game library.","Steam Deck, ROG Ally, Legion Go"],
  ["Retro & mini consoles","Plug-in","Classic games in small modern boxes.","Anbernic, Analogue, mini consoles"],
  ["Cloud gaming devices","Both","Stream games instead of downloading them.","PlayStation Portal, Xbox Cloud, GeForce Now"],
  ["Controllers","Battery","Gamepads, arcade sticks and racing wheels.","DualSense, Xbox controller, 8BitDo"],
  ["Gaming keyboards & mice","Plug-in","Fast, programmable gear for PC gaming.","Razer, Logitech G, Corsair"]]},

 {id:"xr", name:"VR, AR & XR", intro:"Headsets and glasses that put digital worlds in front of your eyes.",
  eras:["Stereoscopes","Sensorama","Early VR headsets","Oculus Rift","Standalone VR","Mixed reality","AI glasses"],
  items:[
  ["VR headsets","Battery","Fully immersive virtual reality for games and fitness.","Meta Quest, PlayStation VR2, Valve Index"],
  ["Mixed-reality headsets","Battery","Blend virtual objects with your real room.","Apple Vision Pro, Quest 3, Galaxy XR"],
  ["AR glasses","Battery","Glasses that overlay information on the world.","Xreal, Viture, Magic Leap"],
  ["AI camera glasses","Battery","Everyday glasses with an AI assistant and camera.","Ray-Ban Meta, Oakley Meta"]]},

 {id:"networking", name:"Networking", intro:"The invisible roads that carry data between every device.",
  eras:["Telegraph","Telephone exchanges","ARPANET","Dial-up modems","Broadband","Wi-Fi","4G/5G","Satellite internet & Wi-Fi 7"],
  items:[
  ["Wi-Fi routers","Plug-in","Share internet across your home, now up to Wi-Fi 7.","TP-Link, Netgear, ASUS"],
  ["Mesh Wi-Fi systems","Plug-in","Several units that blanket a whole house with Wi-Fi.","eero, Deco, Nest Wifi"],
  ["Modems & fiber ONTs","Plug-in","Connect your home to the internet provider.","Arris, Motorola, ISP gateways"],
  ["5G home internet","Plug-in","Home internet over the mobile network.","T-Mobile, Verizon, Jio AirFiber gateways"],
  ["Mobile hotspots","Battery","Pocket Wi-Fi from a cellular connection.","Netgear Nighthawk, Jio JioFi"],
  ["Satellite internet dishes","Plug-in","Internet from low-orbit satellites anywhere.","Starlink, Project Kuiper"],
  ["Network switches","Plug-in","Add more wired ports for PCs, consoles and cameras.","TP-Link, Netgear, Ubiquiti"],
  ["NAS storage","Plug-in","Your own private cloud for files and backups.","Synology, QNAP, UGREEN"]]},

 {id:"peripherals", name:"Storage & Peripherals", intro:"The add-ons that store, print, type and point.",
  eras:["Punch cards","Magnetic tape","Floppy disks","CDs & DVDs","USB flash drives","SSDs","Cloud storage"],
  items:[
  ["SSDs","Plug-in","Fast flash storage, internal and portable.","Samsung, WD, Crucial, SanDisk"],
  ["Hard drives","Plug-in","Large, low-cost spinning-disk storage.","Seagate, WD"],
  ["USB drives & memory cards","Plug-in","Pocket storage for files and cameras.","SanDisk, Kingston"],
  ["Keyboards","Both","Wired, wireless and mechanical keyboards.","Logitech, Keychron, Apple Magic Keyboard"],
  ["Mice & trackpads","Both","Pointing devices for computers.","Logitech MX, Magic Trackpad"],
  ["Printers","Plug-in","Inkjet, laser and photo printers.","HP, Canon, Epson, Brother"],
  ["3D printers","Plug-in","Build real objects layer by layer.","Bambu Lab, Prusa, Creality"],
  ["Scanners","Plug-in","Turn paper into digital files.","Epson, Fujitsu ScanSnap"],
  ["Docks & hubs","Plug-in","One cable to connect screens, drives and chargers.","Anker, CalDigit, Belkin"]]},

 {id:"power", name:"Power & Charging", intro:"Where every gadget gets its energy. The heart of this whole site.",
  eras:["Voltaic pile","Lead-acid battery","Power grid","Alkaline cells","Lithium-ion","Fast & wireless charging","Solid-state batteries"],
  items:[
  ["Power banks","Battery","Portable batteries to charge phones on the go.","Anker, Mi, Belkin, MagSafe packs"],
  ["Fast chargers (GaN)","Plug-in","Small, powerful USB-C chargers.","Anker, Ugreen, Apple, Samsung"],
  ["Wireless chargers","Plug-in","Pads and stands using Qi / Qi2 charging.","MagSafe, Belkin, Mophie"],
  ["Portable power stations","Both","Big batteries for camping and outages.","EcoFlow, Jackery, Anker SOLIX"],
  ["Solar panels","Both","Make electricity from sunlight, rooftop or portable.","Tesla, Enphase, portable folding panels"],
  ["Home batteries","Plug-in","Store solar or grid power for the whole house.","Tesla Powerwall, Enphase IQ"],
  ["EV chargers","Plug-in","Home and public chargers for electric cars.","Tesla Wall Connector, ChargePoint"],
  ["UPS backup units","Plug-in","Keep computers running when power cuts out.","APC, CyberPower"],
  ["Smart power strips","Plug-in","Surge protection with app control and USB ports.","Kasa, Belkin"]]},

 {id:"appliances", name:"Home & Kitchen Appliances", intro:"Everyday machines that cook, clean, cool and wash.",
  eras:["Electric iron & fan","Refrigerator","Washing machine","Microwave","Dishwasher","Inverter tech","Wi-Fi appliances"],
  items:[
  ["Refrigerators","Plug-in","Keep food cold; smart models have screens and cameras.","Samsung, LG, Whirlpool, Godrej"],
  ["Microwave ovens","Plug-in","Heat food fast with microwaves.","Panasonic, LG, IFB"],
  ["Air fryers","Plug-in","Crispy food with little oil.","Ninja, Philips, Cosori"],
  ["Induction cooktops","Plug-in","Cook with magnetic fields, fast and efficient.","Prestige, Bosch, Frigidaire"],
  ["Multicookers","Plug-in","Pressure cook, slow cook and steam in one pot.","Instant Pot, Ninja Foodi"],
  ["Coffee machines","Plug-in","Espresso, drip and pod coffee makers.","Breville, Nespresso, De'Longhi"],
  ["Electric kettles","Plug-in","Boil water in minutes.","Philips, Hamilton Beach"],
  ["Mixers & blenders","Plug-in","Grind, blend and knead.","Vitamix, Preethi, KitchenAid"],
  ["Dishwashers","Plug-in","Wash and dry dishes automatically.","Bosch, Miele, KitchenAid"],
  ["Washing machines & dryers","Plug-in","Front-load, top-load and heat-pump laundry.","LG, Samsung, Whirlpool, IFB"],
  ["Air conditioners","Plug-in","Inverter ACs, window units and heat pumps.","Daikin, Voltas, LG, Carrier"],
  ["Air purifiers & fans","Plug-in","Clean and move the air indoors.","Dyson, Coway, Havells"],
  ["Water purifiers","Plug-in","RO and UV filters for safe drinking water.","Kent, Aquaguard"],
  ["Vacuum cleaners","Both","Cordless sticks and canisters.","Dyson, Shark, Eureka Forbes"]]},

 {id:"health", name:"Personal Care & Health", intro:"Devices for grooming, fitness and keeping an eye on your health.",
  eras:["Electric razor","Hair dryer","Digital thermometer","Home BP monitors","Connected health"],
  items:[
  ["Electric toothbrushes","Battery","Sonic and oscillating brushes with timers.","Oral-B, Philips Sonicare"],
  ["Shavers & trimmers","Battery","Cordless grooming tools.","Philips, Braun, Mi"],
  ["Hair dryers & stylers","Plug-in","Dry, curl and straighten hair.","Dyson Supersonic, Philips"],
  ["Smart scales","Battery","Weight and body composition synced to an app.","Withings, Eufy, Renpho"],
  ["Blood pressure monitors","Battery","Check BP at home.","Omron, Withings"],
  ["Pulse oximeters","Battery","Clip-on oxygen and pulse readers.","Masimo, Dr Trust"],
  ["Glucose monitors","Battery","Sensors that track blood sugar.","Dexcom, FreeStyle Libre"],
  ["Hearing aids","Battery","Help people hear better; some are now sold over the counter.","Phonak, Jabra Enhance, AirPods Pro hearing feature"],
  ["Massage guns","Battery","Percussion massagers for muscle recovery.","Theragun, Hypervolt"]]},

 {id:"transport", name:"Electric Mobility", intro:"Things that move on battery power instead of fuel.",
  eras:["Early electric carriages","Electric trams & trains","Golf carts","Hybrids","Modern EVs","E-bikes & scooters","Self-driving"],
  items:[
  ["Electric cars","Both","Battery-powered cars charged from the grid.","Tesla, BYD, Hyundai Ioniq, Tata Nexon EV"],
  ["Hybrid & plug-in hybrid cars","Both","Combine an engine with an electric motor.","Toyota Prius, RAV4 Hybrid"],
  ["E-bikes","Battery","Bicycles with a motor that helps you pedal.","Rad Power, VanMoof, Hero Lectro"],
  ["E-scooters","Battery","Stand-up scooters for short city trips.","Segway-Ninebot, Xiaomi, Lime"],
  ["Electric motorcycles & mopeds","Battery","Two-wheelers with electric motors.","Ola, Ather, Zero, Harley LiveWire"],
  ["Personal ride-ons","Battery","Hoverboards, onewheels and e-skateboards.","Onewheel, Segway"],
  ["Robotaxis","Battery","Driverless electric cars you can hail.","Waymo, Zoox, Baidu Apollo"]]},

 {id:"robots", name:"Robots & Drones", intro:"Machines that fly, roll and walk on their own.",
  eras:["Automatons","Industrial robot arms","Robot toys","Consumer drones","Home robots","Humanoids"],
  items:[
  ["Camera drones","Battery","Flying cameras for photos and video.","DJI Mini, DJI Air, DJI Mavic"],
  ["FPV drones","Battery","Fast drones flown through goggles.","DJI Avata, custom FPV builds"],
  ["Robot lawn mowers","Battery","Mow the yard on their own.","Husqvarna, Segway Navimow"],
  ["Pool robots","Both","Clean the pool floor and walls.","Dolphin, Aiper"],
  ["Robot pets & companions","Battery","Toy and companion robots.","Sony aibo, Loona"],
  ["Educational robot kits","Battery","Build and code robots to learn STEM.","LEGO, Sphero, micro:bit"],
  ["Humanoid robots","Battery","Two-legged robots built for factories and homes.","Tesla Optimus, Figure, Unitree, 1X"],
  ["Delivery robots","Battery","Sidewalk robots and drones that drop off packages.","Starship, Zipline, Wing"]]},

 {id:"ai", name:"AI Devices", intro:"Gadgets built around artificial intelligence, the newest chapter.",
  eras:["Speech recognition","Voice assistants","On-device AI chips","Generative AI","AI wearables"],
  items:[
  ["AI phones","Both","Phones with built-in AI for photos, translation and writing.","Pixel with Gemini, Galaxy AI, Apple Intelligence"],
  ["AI PCs","Both","Laptops with NPUs for local AI models.","Copilot+ PCs, MacBook with M-series"],
  ["AI wearables","Battery","Pins, pendants and glasses that listen and assist.","Ray-Ban Meta, Plaud, Limitless"],
  ["AI translators","Battery","Pocket devices and earbuds that translate live.","Timekettle, Pocketalk"],
  ["AI home assistants","Plug-in","Next-generation voice assistants with large language models.","Alexa+, Gemini for Home"]]}
];

/* Timeline events per category. Fill these in as each YouTube episode is made. */
var TIMELINES = {
  phones: [],      // Starts with Alexander Graham Bell, 1876 → today's smartphones
  computers: [], tablets: [], smarthome: [], tvs: [], wearables: [], os: [], audio: [],
  cameras: [], gaming: [], xr: [], networking: [], peripherals: [], power: [],
  appliances: [], health: [], transport: [], robots: [], ai: []
};
/* ===================================================================== */
