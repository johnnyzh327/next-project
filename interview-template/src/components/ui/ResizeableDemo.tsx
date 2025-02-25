import {
    ResizableHandle,
    ResizablePanelGroup,
    ResizablePanel,
  } from "@/components/ui/resizable"
  
  export function ResizableDemo() {
    return (
        <ResizablePanelGroup direction="vertical">
      <ResizableHandle />
            <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Content</span>
            </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
  }
  