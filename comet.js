// https://docs.compound.finance/#networks
const comet = {
  abi: [
    "function getSupplyRate(uint) public view returns (uint)",
    "function getBorrowRate(uint) public view returns (uint)",
    "function getUtilization() public view returns (uint)",
    "function baseTokenPriceFeed() public view returns (address)",
    "function getPrice(address) public view returns (uint128)",
    "function totalSupply() external view returns (uint256)",
    "function totalBorrow() external view returns (uint256)",
    "function baseIndexScale() external pure returns (uint64)",
    "function baseTrackingSupplySpeed() external view returns (uint)",
    "function baseTrackingBorrowSpeed() external view returns (uint)",
    "function supply(address asset, uint amount)",
    "function collateralBalanceOf(address, address) external view returns (uint128)",
    "function balanceOf(address) external view returns (uint256)",
    "function borrowBalanceOf(address ) external view returns (uint256)",
    "function userBasic(address) external view returns (int104, uint64, uint64, uint16, uint8)",
    "function withdraw(address asset, uint amount)",
  ],
  weth: {
    // cWETHv3
    v3: "0x2943ac1216979aD8dB76D9147F64E61adc126e96",
    address: "0x2D5ee574e710219a521449679A4A7f2B43f046ad",
    symbol: "WETH",
    decimals: 18,
  },
  usdc: {
    // cUSDCv3
    v3: "0xAec1F48e02Cfb822Be958B68C7957156EB3F0b6e",
    address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    symbol: "USDC",
    decimals: 6,
  },
};

const erc20 = {
  abi: [
    "function approve(address, uint256) public returns (bool)",
    "function allowance(address, address) public view returns (uint256)",
    "function balanceOf(address) public view returns (uint256)",
  ],
};
