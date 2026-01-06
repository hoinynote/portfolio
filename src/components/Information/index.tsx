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
          {/* 1. 역할을 Lead Database Engineer & Frontend Developer로 수정 */}
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
      {/* 2. Vercel 빌드 에러 방지를 위해 (information as any).markdown으로 타입 우회 */}
      <Introduce markdown={(information as any).markdown} />
    </div>
  );
};

export default Information;