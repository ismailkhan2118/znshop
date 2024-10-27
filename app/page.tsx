import { ShoppingCart, Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {

  const productsList = [
    {
      name: "Beats Wireless Headphone",
      price: "₹999",
      image_url: "/headphones.jpeg"
    },
    {
      name: "Comfy Chair",
      price: "₹7,999",
      image_url: "/chair.jpeg"
    },
    {
      name: "Royal Teakwood Bed",
      price: "₹88,000",
      image_url: "/bed.jpeg"
    },
    {
      name: "Iphone 14 Pro Max",
      price: "₹99,999",
      image_url: "/mobile.jpeg"
    },
    {
      name: "Women's Sneakers",
      price: "₹1,999",
      image_url: "/shoes.jpeg"
    },
    {
      name: "Sturdy Office Chair",
      price: "₹12,999",
      image_url: "/officechair.jpeg"
    },
    {
      name: "Automatic Watch",
      price: "₹18,999",
      image_url: "/watch.jpeg"
    },
    {
      name: "Macbook Pro",
      price: "₹1,20,000",
      image_url: "/laptop.jpeg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="inline-block font-bold">Ibrahim&apos;s Store</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <div className="hidden sm:flex">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-[300px] mr-2"
                />
                <Button type="submit" size="icon" variant="ghost">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Our Latest Collection
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Shop the newest trends and find your perfect style. Free shipping on orders over $50.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Shop Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="rounded-xl">
                <Image
                  src="/bannercom.jpeg"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8">
          <div className="px-4 md:px-6 w-full">
            <h2 className=" text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
            <div className="flex justify-center w-full">
              <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {productsList?.map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`${item.image_url}`}
                      alt={`Product ${i + 1}`}
                      width={350}
                      height={350}
                      className="object-contain w-full h-60 transition-transform group-hover:scale-105"
                    />
                    <div className="p-4 bg-background">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-muted-foreground">{item.price}</p>
                      <Button className="w-full mt-2">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2023 Ibrahim&apos;s Store. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}