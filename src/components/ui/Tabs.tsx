import { Tabs as AntTabs } from "antd";
import { TabsProps as AntTabsProps } from "antd/lib/tabs";
import React, {FC} from "react";

interface TabsProps extends AntTabsProps {

}

export const Tabs: FC<TabsProps> = (props) => {
    return <AntTabs {...props} />
}