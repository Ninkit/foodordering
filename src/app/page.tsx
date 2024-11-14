import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";


export default function Home() {
  return (
    <>
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
      <SectionHeader
        subHeader={'Our story'}
        mainHeader={'About us'} 
      />
      <div className="text-gray-500 max-w-2xl mx-auto mt-4 
      flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Quibusdam similique facilis
          modi amet optio velit ducimus, quidem, at explicabo 
          nesciunt perferendis necessitatibus! Assumenda
          iste impedit molestiae vitae voluptatibus quae magnam.
        </p>
        <p>
          Aperiam expedita sed laborum repellendus autem maxime explicabo 
          enim? Explicabo provident tempore omnis 
          temporibus adipisci minus ratione aliquid, 
          aspernatur modi accusantium unde.
        </p>
        <p>
          Explicabo provident tempore omnis 
          temporibus adipisci minus ratione aliquid, 
          aspernatur modi accusantium unde.
        </p>
      </div>
    </section>
    <section className="text-center">
      <SectionHeader 
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact us'}
      />
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+46 738123123">
          +46 738 123 123
        </a>
      </div>
    </section>
    </>
  );
}
