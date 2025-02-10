import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import FooterHeader from "./FooterHeader";

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-gray-800 text-teal-400 dark:bg-footerBackgroundColor dark:text-footerTextColor">
      <div className="max-w-7xl mx-auto rounded-lg col-span-12 pt-10">
        <div className="w-full mx-auto px-8">
          <FooterHeader />
          <FooterContent />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
