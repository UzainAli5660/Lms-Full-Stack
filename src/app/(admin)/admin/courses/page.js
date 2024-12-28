import { CoursesTable } from "@/components/ui/Tables/CourseTable";
import { CourseModal } from "@/components/ui/Modals/CourseModal";
export default function Courses() {
  return (
<div className="min-h-screen p-10" > 
  <div className="flex justify-between">
  <h1 className="text-3xl font-bold text-black text-center">Courses </h1>
  <CourseModal/>
  </div>
 
    <CoursesTable/>
</div>
     
  );
}