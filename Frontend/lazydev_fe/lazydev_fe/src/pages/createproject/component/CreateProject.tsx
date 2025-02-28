"use client";

import { Link } from "lucide-react";
import { useState } from "react";
// import ReactQuill from "react-quill-new";
// import 'react-quill-new/dist/quill.snow.css';
import { Button } from "../../homeloggedin/ui/buttons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

export default function OrganizationSettings() {
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-[#0D0F17] text-white">
      <Card className="mx-auto max-w-7xl border-0 bg-[#151725] shadow-lg">
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  className="border-gray-800 bg-[#0D0F17] text-gray-200 text-lg p-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (will be public)</Label>
                <Input
                  id="email"
                  type="email"
                  className="border-gray-800 bg-[#0D0F17] text-gray-200 text-lg p-6 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">Introduction</Label>
                <Input
                  id="url"
                  type="url"
                  className="border-gray-800 bg-[#0D0F17] text-gray-200 text-lg p-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                {/* <
                  value={description}
                  onChange={setDescription}
                  className="bg-[#0D0F17] text-gray-200 "
                /> */}
              </div>

              <div className="space-y-4">
                <Label>Social accounts</Label>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative">
                    <Input
                      className="border-gray-800 bg-[#0D0F17] pl-9 text-gray-200 rounded-xl"
                      placeholder="Link to social profile"
                    />
                    <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <Label>Profile picture</Label>
              <div className="w-60 h-60 overflow-hidden rounded-lg border-2 border-dashed border-white">
                <img
                  src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                  alt="Organization profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button className="bg-[#0D0F17] text-white hover:bg-gray-800 rounded-xl">
                Upload new picture
              </Button>
              <p className="text-sm text-gray-400 text-center">
                Note: To apply for a publisher verification your
                organization&apos;s profile picture should not be irrelevant,
                abusive, or vulgar. It should not be a default image provided by
                GitHub.
              </p>
              <div className="flex justify-center mt-5">
                <Button className="bg-[#b7d24c] text-white hover:bg-gray-800 rounded-xl px-4 py-2 text-sm">
                  Create
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
