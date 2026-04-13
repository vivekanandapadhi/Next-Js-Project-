"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, Send } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { suggestions } from "@/data/constant";
import { useState } from "react";
import { DeviceType } from "@/type/type";

function Hero() {
  const [userInput, setUserInput] = useState<string>("");
  const [device, setDevice] = useState<string>("website");
  return (
    <div className="p-10 md:px-24 lg:px-48 xl:px-60 mt-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="flex items-center justify-center w-full mb-5">
        <RainbowButton
          className="rounded-full px-0 py-2 h-auto overflow-hidden border-none"
          variant="outline"
          asChild
        >
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer">
            <span
              className={cn(
                "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[0.5px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            ✨<hr className="mx-1 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText
              className="text-sm font-medium"
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
            >
              Design Faster with AI
            </AnimatedGradientText>
            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </div>
        </RainbowButton>
      </div>

      <h2 className="text-5xl font-bold text-center">
        Design High-Quality{" "}
        <span className="text-primary">Websites and Mobile Apps</span>
      </h2>

      <p className="text-center mt-3 text-lg text-muted-foreground">
        Create the best UI/UX designs for your website and mobile apps using an
        AI-powered design tool.
      </p>
      <div className="flex w-full justify-center gap-6 mt-5">
        <InputGroup className="max-w-xl bg-white z-10 rounded-2xl">
          <InputGroupTextarea
            className="flex min-h-24 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base outline-none md:text-sm"
            placeholder="Describe the design you want to create..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <InputGroupAddon align="block-end">
            <Select
              defaultValue="website"
              onValueChange={(value) => setDevice(value as DeviceType)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a design type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>

            <InputGroupButton
              className="ml-auto bg-primary text-white hover:scale-105 transition-transform"
              size="sm"
            >
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex gap-3 mt-4">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              key={index}
              className="p-2.5 border rounded-2xl flex flex-col items-center gap-2 bg-white z-10 cursor-pointer"
              onClick={() => {
                setUserInput(suggestion?.description);
              }}
            >
              <h2 className="text-lg">{suggestion?.icon}</h2>
              <h2 className="text-center line-clamp-2 text-sm">
                {suggestion?.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
