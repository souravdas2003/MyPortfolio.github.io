import { Fade, Slide, JackInTheBox, Reveal, Bounce, Rotate, Hinge, AttentionSeeker } from "react-awesome-reveal";
export default function Projects() {

  const projectsData = [
    {
      img: '/tindog.png',
      title: 'Tindog',
      details: "A simple frontend project tindog from where you can find and meet various dogs, you can also buy them.",
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'jQuery']
    },
    {
      img: '/melody.png',
      title: 'Melody (Music Player)',
      details: 'A Music player app with 10 songs, added features in it like next song, previous song, play, pause etc.',
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JavaScript']
    },
    
    {
      img: '/todolist.png',
      title: 'React-To-Do-List',
      details: 'A To-Do-List app from where you can list what to do next.Added features to dynamically  add what to do by passing required parrameters to each of the components.',
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'React']
    },
    {
      img: '/emojipedia.png',
      title: 'Emojipedia App',
      details: 'A Emojipedia which tells you the information about different emojies',
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'React']
    },
    {
      img: '/whitelistdapp.png',
      title: 'WhitelistDapp',
      details: 'For launching NFT Collections You have to give your early supporters access to a whitelist for your NFT collection so here is  a whitelist dapp for the NFT Collections.',
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'Solidity', 'Next.js']
    },
    {
      img: '/nftcollection.png',
      title: 'NFT Collection',
      details: 'Its a NFT collections made with blockchain Technology which mint NFTs to your Ethereum wallet.',
      tags: ['HTML', 'CSS', 'BOOTSTRAP', 'Solidity', 'Next.js']
    },
  ]

  return (
    <div className="flex flex-col items-center ml-11" id="projects">
      <div className='flex flex-col items-center mb-11'>
        <h1 className='project-heading text-3xl ml-2 mb-5'>PROJECTS</h1>
        <div className=" h-0.5 w-64 bg-purple-400 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Slide direction="right" cascade delay={0} triggerOnce>

          {projectsData.map((item, index) => (
            <div className="project max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg bg-white mx-4 pb-5" key={index}>
              <div className="p-6">
                <img width={400} height={400} src={item.img} alt="Sunset in the mountains" />
              </div>
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2" style={{color: '#cecece'}}>{item.title}</div>
                  <p className="text-white font-semibold text-base">
                    {item.details}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}