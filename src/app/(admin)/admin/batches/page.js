import { BatchModal } from "@/components/ui/Modals/BatchModal";
import { BatchesTable } from "@/components/ui/Tables/BatchTable";
export default function Courses() {
  return (
<div className="min-h-screen p-10" > 
  <div className="flex justify-between">
  <h1 className="text-3xl font-bold text-black text-center">Batches </h1>
  <BatchModal/>
  </div>
 
    <BatchesTable/>
</div>
     
  );
}