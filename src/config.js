const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Swol Mfers";
const description = "Let's get swol mfer.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2500,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Veins" },
      { name: "P.E.D-Lyte" },
      { name: "Ear" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Nipple" },
      { name: "Hat" },
      { name: "Wraps" },
      { name: "Slingshot" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Veins" },
      { name: "P.E.D-Lyte" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Headphones" },
      { name: "Nipple" },
      { name: "Hat" },
      { name: "Wraps" },
      { name: "Slingshot" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
  {
    growEditionSizeTo: 6950,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "P.E.D-Lyte" },
      { name: "Ear" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Eyes" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Paump Cover" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
  {
    growEditionSizeTo: 6969,
    layersOrder: [
      {
        name: "1-1",
        options: {
          displayName: "1/1",
        },
      },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 600,
  height: 600,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
