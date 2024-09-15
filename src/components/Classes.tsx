import image1 from "../assets/classes-pic1.png";
import image2 from "../assets/classes-pic2.png";
import image3 from "../assets/classes-pic3.png";
import image4 from "../assets/classes-pic4.png";
import image5 from "../assets/classes-pic5.png";
import Class from "./Class";

type ClassesType = {
  name: string;
  description: string;
  imgUrl: string;
};

const classes: ClassesType[] = [
  {
    name: "Power Circuit",
    description:
      "Build strength and endurance in this high-intensity class that combines weightlifting with bodyweight exercises. Perfect for those looking to tone and challenge their entire body.",
    imgUrl: image1,
  },
  {
    name: "Strength HIIT",
    description:
      "A fast-paced, high-energy session that combines intense cardio with strength training. Push your limits on the bike, then switch it up with kettlebells and dumbbells for a total-body workout.",
    imgUrl: image2,
  },
  {
    name: "Kettlebell Conditioning",
    description:
      "Sculpt and strengthen every muscle group with this dynamic class. Learn kettlebell techniques that enhance core stability, improve strength, and boost endurance.",
    imgUrl: image3,
  },
  {
    name: "Core Balance",
    description:
      "Develop balance and core strength with stability ball exercises that target your midsection. A low-impact class that's great for improving posture and core stability.",
    imgUrl: image4,
  },
  {
    name: "Battle Ropes Burn",
    description:
      "Burn calories and build muscle with this intense class that focuses on battle ropes. Work your arms, shoulders, and core with powerful, full-body movements for maximum impact.",
    imgUrl: image5,
  },
];

export default function Classes() {
  return (
    <div className="relative my-10 flex h-[153px] w-full overflow-x-auto overflow-y-hidden sm:h-[369px] md:h-[495px]">
      <ul className="min-w-2800px whitespace-nowrap">
        {classes.map((item, index) => (
          <Class
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.imgUrl}
          />
        ))}
      </ul>
    </div>
  );
}
