import Card from "../../common/card/Card";
import { generationalGroups } from "../../../data/GenerationalGroups";
const Group = () => {
  return (
    <section>
      <h3 className="text-xl md:text-title-sm text-center md:text-title-xs font-extralight capitalize my-6">
        Generational Groups
      </h3>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mx-4">
        {generationalGroups.map((group, index) => (
          <Card
            key={index}
            caption={group.caption}
            description={group.description}
            image={group.image}
            className="h-36 w-36 rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Group;
