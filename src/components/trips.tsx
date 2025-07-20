import * as React from "react";
// import Destination from "./destination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Trips() {
  return (
    <Select>
      <SelectTrigger className="border-none outline-none text-white font-semibold text-sm hover:text-green-500 ">
        <SelectValue placeholder="Trips" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="font-semibold text-sm text-slate-700">
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="trekking">Trekking</SelectItem>
          <SelectItem value="city/safari">City/Safari</SelectItem>
          <SelectItem value="ethnic/roots">
            Ethnic/Root Cultural Art & Music Tour
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
