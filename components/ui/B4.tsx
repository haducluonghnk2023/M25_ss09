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

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Môn Học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="HTML">HTML</SelectItem>
          <SelectItem value="CSS">CSS</SelectItem>
          <SelectItem value="JavaScript">JavaScript</SelectItem>
          <SelectItem value="ReactJs">ReactJs</SelectItem>
          <SelectItem value="Next.js">Next.js</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
