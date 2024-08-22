import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function B7() {
  return (
    <>
      <h1>Tạo dự án</h1>
      <label htmlFor="">Tên</label>
      <Input type="text" placeholder="Name of your project"></Input>
      <label htmlFor="">Công nghệ</label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="vui lòng chọn" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="CSS">CSS</SelectItem>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="ReactJs">ReactJs</SelectItem>
            <SelectItem value="Next.js">Next.js</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant={"secondary"}>Đóng</Button>
      <Button variant={"primary"}>Tạo</Button>
    </>
  );
}
