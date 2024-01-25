import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import UseTemplate from "../Functions/UseTemplate";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
// import { Input } from "../../ui/input";
// import { Label } from "../../ui/label";
import { H2, H3, H4, Para } from "../../ui/typography";
import { LogOut } from "lucide-react";

const NormalSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [displayType, setDisplayType] = useState("");

  useEffect(() => {
    console.log("Selected Template:", selectedTemplate);
    console.log("display type on admin: ", displayType);
  }, [selectedTemplate]);

  return (
    <MaxWidthWrapper className="container mt-2">
      <H2 className="flex items-center justify-between w-full">
        <span>Kafka User Dashboard</span>{" "}
        <Button variant="destructive" onClick={onLogout}>
          Logout <LogOut className="ml-2 w-4 h-4" />
        </Button>
      </H2>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Preset Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <PresetTemplate2
            setSelectedTemplate={setSelectedTemplate}
            setDisplayType={setDisplayType}
          />
          {/* <UseTemplate
            selectedTemplate={
              selectedTemplate && selectedTemplate.template_content
            }
            displayType={displayType}
          /> */}
          <UseTemplate
            selectedTemplate={
              selectedTemplate &&
              (displayType === "plaintext"
                ? selectedTemplate.template_content
                : displayType === "json"
                ? JSON.stringify(selectedTemplate.jsontemplate_content)
                : null)
            }
            displayType={displayType}
          />
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default NormalSection;
