import { Input } from "antd";

<Input
    type="date"
    value={date}
    format={"YYYY/MM/DD"}
    placeholder="0000/00/00"
    onChange={onChange}
    suffixIcon={<Icons icon="clock" />}
/>

<Input onChange={onChange}>
    <Input.Date value={date} format={"YYYY/MM/DD"} placeholder="0000/00/00" suffixIcon={<Icons icon="clock" />} />
</Input>