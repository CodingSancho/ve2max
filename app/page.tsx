"use client";
import { AddSurvivorDialog } from "@/components/AddSurvivorDialog";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Table />
      <AddSurvivorDialog />
    </main>
  );
}
