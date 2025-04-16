"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Tooltip,
} from "@heroui/react";
import { Meme } from "@/lib/types";
import NextLink from "next/link";

export default function MemeCard({ meme }: { meme: Meme }) {
  const { title, imageUrl, likes } = meme;

  return (
    <Card className="shadow-md">
      <CardHeader className="flex justify-center">
        <Image
          src={imageUrl}
          alt={`Meme: ${title}`}
          width={250}
          height={250}
          className="object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="text-center space-y-2">
        <Tooltip content={title}>
          <h2 className="text-lg font-semibold truncate cursor-default">
            {title}
          </h2>
        </Tooltip>
        <p className="text-gray-600">Likes: {likes}</p>

        <Link
          as={NextLink}
          href={imageUrl}
          target="_blank"
          color="primary"
          className="mx-auto"
        >
          Open image
        </Link>
      </CardBody>
    </Card>
  );
}
