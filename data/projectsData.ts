interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Maize: NFT Toolkit',
    description: `Maize is an innovative open-source console application designed to enhance the NFT creation experience on the Loopring platform. It simplifies the management of NFTs by enabling batch minting, providing detailed NFT information, discovering NFT holders, and facilitating airdrops. With seamless integration via the Loopring API, Maize supports creators in managing their collections and aligns with Loopring's vision of asset empowerment and control.`,
    imgSrc: '/static/images/MaizeCoverImage.png',
    href: 'https://maizehelps.art',
  },
  {
    title: "Cob's Farm",
    description: `Cob's Farm is a relaxing action RPG that offers players a unique blend of farming and combat within an open world. It's a game that promises diverse activities including farming, fishing, shop ownership, and engaging community interaction. With Alpha Fields as its first stage, the game is currently in a phase of community-driven development, integrating feedback, and introducing new features​.`,
    imgSrc: '/static/images/CobsFarmCoverImage.png',
    href: 'https://www.cobsfarm.com',
  },
]

export default projectsData
