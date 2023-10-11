import { Tab } from "@headlessui/react";
import { ReactNode } from "react";

export interface ICustomTabProps {
  tabs: ReactNode[];
  pannels: ReactNode[];
}

export default function CustomTab(props: ICustomTabProps) {
  const { tabs, pannels } = props;
  return (
    <Tab.Group>
      <Tab.List className="flex flex-row mt-4 mb-2">
        {tabs.map((tab: ReactNode, index: number) => (
          <Tab
            key={index}
            className="ui-selected:bg-primary-200 rounded-md px-3 py-2 font-medium block"
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {pannels.map((pannel: ReactNode, index: number) => (
          <Tab.Panel
            key={index}
            className="bg-primary-100 p-4 pt-2 pb-2 rounded-md"
          >
            <p>{pannel}</p>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
