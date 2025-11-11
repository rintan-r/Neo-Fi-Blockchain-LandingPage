import Accordion from '../components/Accordion'
import SectionLabel from '../components/SectionLabel'
import EllipseBackground from '../decorations/EllipseBackground'


const faqData = [
  {
    title: 'What is NexoFi, and how does it work?',
    content:
      'NexoFi is a decentralized finance (DeFi) platform that allows users to earn, borrow, and trade digital assets securely using smart contracts and blockchain transparency.'
  },
  {
    title: 'How is blockchain related to cryptocurrency?',
    content:
      'Blockchain is the foundational technology behind cryptocurrencies, acting as a distributed digital ledger that records all transactions securely and transparently.'
  },
  {
    title: 'Is Blockchain technology secure?',
    content:
      'Yes, blockchain is inherently secure due to cryptographic hashing and its decentralized network design that makes data tampering nearly impossible.'
  },
  {
    title: 'How does blockchain enhance security?',
    content:
      'Blockchain enhances security by eliminating single points of failure. Transactions are verified by multiple nodes through consensus mechanisms like Proof of Work or Proof of Stake.'
  },
  {
    title: 'Can blockchain be hacked?',
    content:
      'It’s extremely difficult to hack a blockchain because modifying past records requires controlling over 51% of the network’s computing power — nearly impossible for large blockchains.'
  },
  {
    title: 'How can I implement blockchain in my industry?',
    content:
      'You can use blockchain for supply chain tracking, identity verification, and secure data sharing. Identify areas needing trust or transparency, then choose a framework like Ethereum or Hyperledger.'
  }
]

function FAQsection () {
  return (
    <div className='relative'>
      <EllipseBackground top='7.7%' centerX={true} width={606} height={425} />
      <div className='relative z-10 flex flex-col mx-5 xl:mx-[75.5px] xl:px-[217px] my-10 gap-8 text-center'>
        <div className='flex flex-col gap-5 items-center'>
          <SectionLabel label='FAQ' />
          <h2>Get Answers To Common Questions</h2>
          <p className='p-subtitle text-gray-1 xl:w-[600px]'>
            From basics to advanced topics, find everything you need to know
            right here. Let us help you simplify the process and find the
            clarity you're looking
          </p>
        </div>
        <div className='flex flex-col gap-4 xl:gap-[30px]'>
          {faqData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQsection
