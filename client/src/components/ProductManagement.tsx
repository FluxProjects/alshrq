import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, LogOut } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
}

interface ProductManagementProps {
  onLogout: () => void;
}

export default function ProductManagement({ onLogout }: ProductManagementProps) {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      imageUrl: "",
    });
    setEditingProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...editingProduct, ...formData, price: parseFloat(formData.price) }
          : p
      ));
      toast({
        title: "Product Updated",
        description: "Product has been successfully updated.",
      });
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...formData,
        price: parseFloat(formData.price),
      };
      setProducts([...products, newProduct]);
      toast({
        title: "Product Added",
        description: "New product has been added successfully.",
      });
    }
    
    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Product Deleted",
      description: "Product has been removed successfully.",
    });
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8" data-testid="section-admin-products">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2" data-testid="text-admin-heading">
              Product Management
            </h1>
            <p className="text-muted-foreground" data-testid="text-admin-subheading">
              Manage your luxury jewelry collection
            </p>
          </div>
          <Button variant="outline" onClick={onLogout} data-testid="button-logout">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button size="lg" className="mb-8" data-testid="button-add-product">
              <Plus className="h-5 w-5 mr-2" />
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? "Edit Product" : "Add New Product"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm uppercase tracking-widest">
                  Product Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                  required
                  data-testid="input-product-name"
                />
              </div>

              <div>
                <Label htmlFor="price" className="text-sm uppercase tracking-widest">
                  Price ($)
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="mt-2"
                  required
                  data-testid="input-product-price"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-sm uppercase tracking-widest">
                  Category
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger className="mt-2" data-testid="select-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Rings">Rings</SelectItem>
                    <SelectItem value="Necklaces">Necklaces</SelectItem>
                    <SelectItem value="Bracelets">Bracelets</SelectItem>
                    <SelectItem value="Earrings">Earrings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm uppercase tracking-widest">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-2"
                  required
                  data-testid="input-product-description"
                />
              </div>

              <div>
                <Label htmlFor="imageUrl" className="text-sm uppercase tracking-widest">
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="mt-2"
                  required
                  data-testid="input-product-image"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" data-testid="button-save-product">
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden" data-testid={`card-admin-product-${product.id}`}>
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-admin-product-${product.id}`}
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2" data-testid={`text-admin-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="font-accent text-2xl font-bold text-primary mb-4" data-testid={`text-admin-price-${product.id}`}>
                  ${product.price.toLocaleString()}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(product)}
                    data-testid={`button-edit-${product.id}`}
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDelete(product.id)}
                    data-testid={`button-delete-${product.id}`}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground" data-testid="text-no-products">
              No products yet. Click "Add New Product" to get started.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
