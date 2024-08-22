import React from "react";
import { Button } from "@/components/ui/button";

export default function B1() {
  return (
    <>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"primary"} size={"lg"}>
        Size large
      </Button>
      <Button variant={"primary"} size={"sm"}>
        Size small
      </Button>
    </>
  );
}
