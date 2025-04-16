"use client";

import {
  Alert,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { Meme } from "@/lib/types";
import { useState } from "react";
import { updateMeme } from "@/lib/update-meme";

const schema = z.object({
  title: z.string().min(3).max(100),
  imageUrl: z.string().url(),
  likes: z.number().min(0).max(99),
});

export type MemeFormData = z.infer<typeof schema>;

export default function EditModal({
  meme,
  onSave,
}: {
  meme: Meme;
  onSave: (data: Meme) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemeFormData>({
    resolver: zodResolver(schema),
    defaultValues: meme,
  });

  const handleSave = async (data: MemeFormData) => {
    const updated = { ...meme, ...data };

    try {
      const result = await updateMeme(updated);
      onSave(result);
      setError(null);
      onOpenChange();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleClose = () => {
    setError(null);
    onOpenChange();
  };

  return (
    <>
      <Button size="sm" variant="bordered" onPress={onOpen}>
        Edit
        <Pencil className="ml-1" size={12} />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Meme
              </ModalHeader>
              <ModalBody>
                <form
                  id="edit-meme-form"
                  className="space-y-4"
                  onSubmit={handleSubmit(handleSave)}
                >
                  <div>
                    <label className="block text-sm mb-1">Title</label>
                    <Input {...register("title")} />
                    {errors.title && (
                      <p className="text-sm text-red-500">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Image URL</label>
                    <Input {...register("imageUrl")} />
                    {errors.imageUrl && (
                      <p className="text-sm text-red-500">
                        {errors.imageUrl.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Likes</label>
                    <Input
                      type="number"
                      {...register("likes", { valueAsNumber: true })}
                    />
                    {errors.likes && (
                      <p className="text-sm text-red-500">
                        {errors.likes.message}
                      </p>
                    )}
                  </div>
                </form>
                {error && (
                  <Alert color="danger" className="mb-4">
                    {error}
                  </Alert>
                )}
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button variant="light" color="danger" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit" form="edit-meme-form">
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
