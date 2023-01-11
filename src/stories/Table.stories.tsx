import { Story } from "@storybook/react";
import React from "react";

import Table, { TableType } from "../Table";

export default {
  title: "Common/Table",
  component: Table,
};

const arr = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Link",
    dataIndex: "link",
    key: "link",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "32",
    link: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "42",
    link: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "32",
    link: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Joe Black",
    email: "32",
    link: "Sidney No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Joe Black",
    email: "32",
    link: "Sidney No. 1 Lake Park",
  },
];

const Template: Story<TableType> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
  columns: arr,
};
