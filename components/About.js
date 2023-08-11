const About = () => {
  return (
    <div className=' flex flex-col items-center w-full h-full  m-4 p-4' id="about">
      <div className="w-3/4 items-center ">
        <div className="w-full flex justify-center">
        <h1 className='flex w-fit text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed mb-4 border-b-2 border-blue-500'>About Us</h1>
        </div>
        <div className='w-full border-solid border-2 border-gray-100 p-4'>
          <h2 className='text-lg text-black-600 font-medium my-1'>Company Overview</h2>
          <p>BluFountainRentACar has established itself as one of South Africa's leading global car rental companies. The professional, reliable rental experience expected from BluFountain is the result of decades of commitment to creating a brand that delivers locally relevant, world-class service excellence, from the extensive network and fleet, simple booking tools, to the effortless check-out process and even the little signature Europcar mints in the consol. <br/><br/>
            Forming part of an award-winning international network, Europcar is owned by the Motus Group. The company has operated as Europcar since 2009, building on a rich 43-year history rooted in Imperial Car Rental. We offer a fleet of over 20 000 vehicles across 100 locations. <br/> <br/>
            In 2021 BluFountainRentACar was honoured as Africa's Leading Car Hire Company at the World Travel Awards. With achievements like these, an effortless four-step online booking process and 30-seconds-keys-in-hand counter service for registered 'Ready Service' customers, it's easy to see how BluFountainRentACar is all about striving for big things while never losing sight of the little ones.</p>
        </div>
      
      </div>

    </div>
  )
}

export default About