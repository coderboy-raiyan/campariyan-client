import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";

type TInputs = {
  name: string;
  price: number;
  stock: number;
  brand: string;
  description: string;
  color: string;
  categories: string | string[];
};
function CreateProduct() {
  const [userInput, setUserInput] = useState<TInputs>({
    name: "",
    price: 0,
    stock: 0,
    brand: "",
    description: "",
    color: "",
    categories: "",
  });
  const [files, setFiles] = useState<any>(null);

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const categories: string[] = [];

    if (name === "categories") {
      categories.push(...(value?.trim()?.split(",") as string[]));
    }

    setUserInput((prev) => {
      if (name === "categories") {
        return {
          ...prev,
          categories,
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
    setFiles(e.target.files as FileList);
  }

  async function handleFromSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", JSON.stringify(userInput));
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleFromSubmit}
        className="w-[80%] flex flex-col space-y-4 my-10 shadow-sm border rounded-md p-10 text-gray-700"
      >
        <label className="space-y-2" htmlFor="name">
          <p className="text-sm font-medium">Name</p>
          <input
            className="border w-full rounded placeholder:text-sm p-2"
            id="name"
            type="text"
            name="name"
            placeholder="Tent ZX 899"
            value={userInput?.name}
            onChange={handleOnChange}
          />
        </label>
        <label className="space-y-2" htmlFor="price">
          <p className="text-sm font-medium">Price</p>
          <input
            className="border w-full rounded placeholder:text-sm p-2"
            id="price"
            type="number"
            min={0}
            name="price"
            placeholder="299"
            value={userInput?.price}
            onChange={handleOnChange}
          />
        </label>

        <label className="space-y-2" htmlFor="description">
          <p className="text-sm font-medium">Description</p>
          <textarea
            className="border w-full rounded placeholder:text-sm p-2"
            id="description"
            name="description"
            placeholder="It's has..."
            value={userInput?.description}
            onChange={handleOnChange}
          />
        </label>
        <label className="space-y-2" htmlFor="categories">
          <p className="text-sm font-medium">Category</p>
          <textarea
            className="border w-full rounded placeholder:text-sm p-2"
            id="categories"
            name="categories"
            placeholder="Separate each category by (,) comma"
            onChange={handleOnChange}
          />
        </label>
        <label className="space-y-2" htmlFor="brand">
          <p className="text-sm font-medium">Brand</p>
          <input
            className="border w-full rounded placeholder:text-sm p-2"
            id="brand"
            type="text"
            name="brand"
            placeholder="Mac"
            value={userInput?.brand}
            onChange={handleOnChange}
          />
        </label>
        <label className="space-y-2" htmlFor="images">
          <p className="text-sm font-medium">Images</p>
          <input
            className="border w-full rounded placeholder:text-sm p-2"
            id="images"
            type="file"
            name="images"
            multiple
            onChange={handleFileInput}
          />
        </label>
        <label className="space-y-2" htmlFor="color">
          <p className="text-sm font-medium">Color</p>
          <input
            className="border w-full rounded placeholder:text-sm p-2"
            id="color"
            type="text"
            name="color"
            placeholder="Purple"
            value={userInput?.color}
            onChange={handleOnChange}
          />
        </label>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
