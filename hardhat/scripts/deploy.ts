import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)

  const WavePortal = await ethers.getContractFactory('WavePortal')
  const wave = await WavePortal.deploy()
  await wave.deployed()

  console.log('Wave portal deployed to:', wave.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
