
import CustomeLink from "@/components/mainComponents/CustomeLink";
import Preview from "@/components/mainComponents/Preview";
import Profile from "@/components/mainComponents/Profile";
import Social from "@/components/mainComponents/Social";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row lg:space-x-8 max-w-[1800px] mx-auto overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel>
            <div className="flex-1 space-y-6 h-full overflow-y-auto custom-scrollbar mt-14">
              <Profile />
              <Social />
              <CustomeLink />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="flex justify-center items-center h-screen w-full pb-20">
            <Preview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
