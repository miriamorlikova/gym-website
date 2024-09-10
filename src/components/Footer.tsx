import fastCompanySponsor from "../assets/fast-company.png";
import techCrunchSponsor from "../assets/tech-crunch.png";
import forbesSponsor from "../assets/forbes.png";
import mitSponsor from "../assets/mit.png";

type Props = {};

export default function Footer(props: Props) {
  return (
    <div>
      <div>
        <div className="m-8 flex justify-around bg-gray-20 bg-opacity-10 py-6">
          <img
            src={fastCompanySponsor}
            alt="Fast Company"
            className="h-4 w-auto"
          />
          <img
            src={techCrunchSponsor}
            alt="Tech Crunch"
            className="h-4 w-auto"
          />
          <img src={forbesSponsor} alt="Forbes" className="h-4 w-auto" />
          <img src={mitSponsor} alt="MIT" className="h-4 w-auto" />
        </div>
      </div>
    </div>
  );
}
