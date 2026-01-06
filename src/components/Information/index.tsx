import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="leading-[1.15]">
          안녕하세요,
          <br /> 
          {/* 직무명 수정 */}
          Lead Database Engineer & Frontend Developer{" "}
          <span className="text-PRIMARY font-semibold">{information.name}</span>
          입니다.
        </h1>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      
      {/* 👇 여기에 (as any)를 넣어서 타입 에러를 막았습니다. */}
      <Introduce markdown={(information as any).markdown || ""} />
    </div>
  );
};

export default Information;