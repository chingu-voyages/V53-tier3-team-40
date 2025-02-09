import { profiles } from "./footerUserData";
import FooterUserProfiles from "./FooterUserProfiles";
import FooterTechStack from "./FooterTechStack";
import { techstack } from "./FooterTechStackData";

function FooterContent() {
  return (
    <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 text-gray-200 pt-2">
      <FooterUserProfiles profiles={profiles} />

      <FooterTechStack techstack={techstack} />
    </div>
  );
}

export default FooterContent;
