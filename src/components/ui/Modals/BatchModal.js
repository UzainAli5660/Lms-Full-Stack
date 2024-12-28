"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
export  function BatchModal() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true;  // Use media query here if needed

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
          <DrawerDescription>
            Add new batch information here
          </DrawerDescription>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function BatchForm({ className }) {
  const [batchName, setBatchName] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [trainer, setTrainer] = React.useState('')
  const [course, setCourse] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log({
      batchName,
      status,
      trainer,
      course
    })
  }

  return (
    <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
      {/* Batch Name */}
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input 
          required 
          type="text" 
          id="batchName" 
          value={batchName} 
          onChange={(e) => setBatchName(e.target.value)} 
          placeholder="Enter batch name" 
        />
      </div>

      {/* Status */}
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue required placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Trainer */}
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select value={trainer} onValueChange={setTrainer}>
          <SelectTrigger>
            <SelectValue required placeholder="Select Trainer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trainer1">Trainer 1</SelectItem>
            <SelectItem value="trainer2">Trainer 2</SelectItem>
            <SelectItem value="trainer3">Trainer 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course */}
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select value={course} onValueChange={setCourse}>
          <SelectTrigger>
            <SelectValue required placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="course1">Course 1</SelectItem>
            <SelectItem value="course2">Course 2</SelectItem>
            <SelectItem value="course3">Course 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Add Batch</Button>
    </form>
  )
}
