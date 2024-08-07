import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4">Euclid</h1>
        <p className="text-2xl mb-8">The AI dev tool that autonomously builds web apps by talking to users</p>
        <img src="/placeholder.svg" alt="Futuristic AI" className="mx-auto object-cover w-full max-w-2xl h-64 mb-8 rounded-lg shadow-lg" />
        <div className="flex justify-center space-x-4">
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Watch Demo</Button>
            </DialogTrigger>
            <DialogContent className="max-w-full p-0 h-screen flex items-center justify-center bg-black bg-opacity-90">
              <DialogClose className="absolute top-4 right-4 text-white">
                <X className="h-6 w-6" />
              </DialogClose>
              <div className="w-full max-w-7xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4g-1cPGK0GA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={() => alert("Examples page not implemented yet")}>View Examples</Button>
          <Button variant="outline" as="a" href="https://marketplace.visualstudio.com/items?itemName=PythagoraTechnologies.gpt-pilot-vs-code" target="_blank" rel="noopener noreferrer">
            Download for VS Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
