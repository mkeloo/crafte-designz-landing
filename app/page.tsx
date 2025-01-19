import Image from "next/image";
import bgImage from "@/public/BackgroundIMage.webp";
import logo from "@/public/craftedesignz_logo.webp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Content Container */}
      <div className="flex flex-col items-center justify-start flex-grow px-4 py-10 gap-y-4">
        {/* Logo */}
        <div className="mt-10">
          <Image
            src={logo}
            alt="Crafted Designz Logo"
            width={400}
            height={100}
          />
        </div>

        <Card className="w-full max-w-xl p-8 backdrop-blur-md bg-white bg-opacity-10 text-blue-900">
          {/* Heading and Description */}
          <div className="max-w-xl text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-900">
              Welcome to Crafte Designz
            </h1>
            <p className="text-blue-900 leading-relaxed font-semibold text-[18px] flex flex-col justify-center items-center space-y-2">
              <span>We specialize in handcrafted chunky blankets, unique keychains,
                and the fun &ldquo;Blind Date with a Book&rdquo; experience!</span>
              <span> Sign up below to stay updated on our latest products and deals,
                or visit our Etsy store in the meantime.</span>
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md mx-auto">
            <form className="flex flex-col items-center gap-y-4">
              <div className="flex flex-col w-full gap-y-4 sm:flex-row sm:gap-x-4">
                <div className="w-full">
                  <Label htmlFor="name" className="text-slate-800">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="text-slate-800 bg-orange-50"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="email" className="text-slate-800">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="text-slate-800 bg-orange-50"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full font-bold text-lg">
                Join Our List
              </Button>
            </form>
          </div>

          {/* Etsy Link */}
          <div className="mt-8 text-center">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold text-lg"
            >
              <a
                href="https://www.etsy.com/shop/craftedesignzstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Etsy Store
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}