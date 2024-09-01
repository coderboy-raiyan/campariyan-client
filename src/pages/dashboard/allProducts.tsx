import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/redux/hooks/hooks";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const { products } = useAppSelector((state) => state?.products);
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <Table className="border">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Categories</TableHead>
            <TableHead className="">Brand</TableHead>
            <TableHead className="">Color</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">Stock</TableHead>
            <TableHead className="">Image</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.length ? (
            products?.map((product) => (
              <TableRow key={product?._id}>
                <TableCell className="w-[200px]">{product?.name}</TableCell>

                <TableCell>
                  {product?.categories.map(({ _id, name }) => (
                    <span key={_id}>{name}</span>
                  ))}
                </TableCell>
                <TableCell>{product?.brand}</TableCell>
                <TableCell>{product?.color}</TableCell>
                <TableCell>${product?.price}</TableCell>
                <TableCell>{product?.stock}</TableCell>
                <TableCell>
                  <img
                    className="w-[50px]"
                    src={product?.images[0].secure_url}
                    alt=""
                  />
                </TableCell>
                <TableCell className="space-x-2">
                  <Button
                    onClick={() =>
                      navigate(`${product?._id}`, {
                        replace: true,
                      })
                    }
                    variant="outline"
                    className="text-2xl rounded-md bg-cyan-100"
                  >
                    <FiEye />
                  </Button>
                  <Button
                    variant="destructive"
                    className="text-2xl rounded-md "
                  >
                    <AiTwotoneDelete />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="w-full">
              <TableCell>No product is Available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllProducts;
