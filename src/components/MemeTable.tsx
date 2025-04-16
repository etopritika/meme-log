"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link as HeroLink,
} from "@heroui/react";
import NextLink from "next/link";
import EditModal from "./Modal/EditModal";
import { Meme } from "@/lib/types";
import { useState } from "react";

export default function MemeTable({ memes: initialMemes }: { memes: Meme[] }) {
  const [memes, setMemes] = useState(initialMemes);

  const handleSave = (updated: Meme) => {
    setMemes((prev) =>
      prev.map((meme) => (meme.id === updated.id ? updated : meme))
    );
  };
  return (
    <Table aria-label="Meme table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Images</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map(({ id, title, likes, imageUrl }) => (
          <TableRow key={id} className="text-center">
            <TableCell>{id}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{likes}</TableCell>
            <TableCell>
              <HeroLink as={NextLink} href={imageUrl} target="_blank">
                View
              </HeroLink>
            </TableCell>
            <TableCell>
              <EditModal
                meme={{ id, title, likes, imageUrl }}
                onSave={handleSave}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
