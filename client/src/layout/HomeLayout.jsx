import Header from "../components/Header";
import Animals from "../components/Animals";
import Component2 from "../components/Component2";
import Footer from "../components/Footer/Footer";
import Problem from "../components/Problem";


const HomeLayout = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-900">
      <section className="w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <Problem />
          </div>
          <div className="flex justify-center w-full">
            <Animals />
          </div>
          <div className="flex justify-center w-full">
            <Component2 />
          </div>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
