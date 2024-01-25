import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { CopyPlus, Trash2 } from "lucide-react";
import {toast} from 'react-toastify';

// This component is used to add and delete templates.
export default function AddDeleteTemplate(props) {
  // const [showAddForm, setShowAddForm] = useState(false);
  const [templateName, setName] = useState("");
  const [templateContent, setContent] = useState("");

  const handleAddTemplate = (e) => {
    e.preventDefault();
    //console.log("Testing");
    const templateData = {
      templateName: templateName,
      templateContent: templateContent,
    };

    axios
      .post("http://localhost:8081/template/save", templateData)
      .then((response) => {
        console.log("Template added successfully:", response.data);
        toast.success('Template added successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
        setName("");
        setContent("");
        document.getElementById("close-add-dialog").click(); // Close the add template form dialog box
      })
      .catch((error) => {
        console.error("Error adding template:", error);
        toast.error('Error adding template. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleDeleteTemplate = () => {
    if (!props.selectedTemplate.id) {
      console.error("Please provide a template ID for deletion.");
      return;
    }

    axios
      .delete(
        `http://localhost:8081/template/delete/${props.selectedTemplate.id}`
      )
      .then((response) => {
        console.log(
          "Template deleted successfully:",
          props.selectedTemplate.id
        );
        props.setSelectedTemplate(null);
        toast.success('Template deleted successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.error("Error deleting template:", error);
        toast.error('Error deleting template. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        {/* Add Template Form as a dialog box */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="small" className="m-0">
              <CopyPlus className="mr-1 h-3 w-3" /> Add Template
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[640px]">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Create a new message template for your Kafka topic. You can use
                placeholders to dynamically insert data into your message using
                curly braces. For example, if you want to insert the name of the
                user, you can use the placeholder <code>{"{name}"}</code>. If
                you want to make a field mandatory, you can use the placeholder{" "}
                <code>{"{name*}"}</code>.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right m-0">
                  Template Name
                </Label>
                <Input
                  id="templateName"
                  className="col-span-3 m-0"
                  value={templateName}
                  placeholder="Enter template name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right m-0">
                  Template Content
                </Label>
                <Input
                  id="templateContent"
                  className="col-span-3 m-0"
                  placeholder="Hello {name*}, welcome to {company}!"
                  value={templateContent}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddTemplate}>
                Add Template
              </Button>

              {/* Hidden button to trigger close action after submission */}
              <DialogClose asChild>
                <Button type="button" id="close-add-dialog" className="hidden">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Template Button */}
        <Button
          variant="destructive"
          size="small"
          className="m-0"
          onClick={handleDeleteTemplate}
          disabled={!props.selectedTemplate}
        >
          <Trash2 className="mr-1 h-3 w-3" />
          Delete Template
        </Button>
      </div>
    </div>
  );
}
