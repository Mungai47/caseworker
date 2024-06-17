import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-6 lg:px-10 bg-[#f6f6f6] align-middle">
      <div>
        <h3 className="font-bold text-2xl">CaseWorker</h3>
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row justify-between">
          <p className="px-4 lg:px-6 hover:underline font-medium">Services</p>
          <p className="px-4 lg:px-6 hover:underline font-medium">Contact</p>
          <p className="px-4 lg:px-6 hover:underline font-medium">About</p>
          <p className="px-4 lg:px-6 hover:underline font-medium">Blog</p>
        </div>
        <div>
          <Button variant= "outline" className="font-semibold">Get Started</Button>
        </div>
      </div>
    </div>
  );
}