import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowRight } from "lucide-react";

type Base = "Bin" | "Oct" | "Dec" | "Hex";

const baseMap: Record<Base, number> = {
  Bin: 2,
  Oct: 8,
  Dec: 10,
  Hex: 16,
};

export const BaseConverter = () => {
  const [convertFrom, setConvertFrom] = useState<Base>("Dec");
  const [convertTo, setConvertTo] = useState<Base>("Hex");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const validateAndConvert = (value: string, from: Base, to: Base) => {
    if (!value) {
      setError("");
      setResult("");
      return;
    }

    try {
      const decimalNum = parseInt(value, baseMap[from]);
      
      if (isNaN(decimalNum)) {
        setError("Invalid number for the selected base");
        setResult("");
        return;
      }

      if (from === to) {
        setError("Select different bases for conversion");
        setResult("");
        return;
      }

      setError("");
      
      let convertedValue = "";
      switch (to) {
        case "Dec":
          convertedValue = decimalNum.toString();
          break;
        case "Bin":
          convertedValue = decimalNum.toString(2);
          break;
        case "Oct":
          convertedValue = decimalNum.toString(8);
          break;
        case "Hex":
          convertedValue = decimalNum.toString(16).toUpperCase();
          break;
      }
      
      setResult(convertedValue);
    } catch {
      setError("Invalid number for the selected base");
      setResult("");
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    validateAndConvert(value, convertFrom, convertTo);
  };

  const handleFromChange = (value: Base) => {
    setConvertFrom(value);
    validateAndConvert(inputValue, value, convertTo);
  };

  const handleToChange = (value: Base) => {
    setConvertTo(value);
    validateAndConvert(inputValue, convertFrom, value);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-4">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🔢 PROGRAMMER'S CALC
        </h1>
        <p className="text-muted-foreground">Convert between number systems</p>
      </div>

      <Card className="p-6 space-y-6 gradient-card border-2 border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from-base" className="text-foreground font-medium">
              Convert From
            </Label>
            <Select value={convertFrom} onValueChange={handleFromChange}>
              <SelectTrigger id="from-base" className="bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bin">Binary</SelectItem>
                <SelectItem value="Oct">Octal</SelectItem>
                <SelectItem value="Dec">Decimal</SelectItem>
                <SelectItem value="Hex">Hexadecimal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="to-base" className="text-foreground font-medium">
              Convert To
            </Label>
            <Select value={convertTo} onValueChange={handleToChange}>
              <SelectTrigger id="to-base" className="bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bin">Binary</SelectItem>
                <SelectItem value="Oct">Octal</SelectItem>
                <SelectItem value="Dec">Decimal</SelectItem>
                <SelectItem value="Hex">Hexadecimal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-2">
          <Label htmlFor="input-number" className="text-foreground font-medium">
            Enter a number
          </Label>
          <Input
            id="input-number"
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={`Enter ${convertFrom} number...`}
            className="bg-background border-border text-lg"
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && !error && (
          <div className="space-y-3">
            <div className="flex items-center justify-center text-muted-foreground">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
              <p className="text-sm text-muted-foreground mb-1">Result ({convertTo})</p>
              <p className="text-3xl font-mono font-bold text-accent break-all">
                {result}
              </p>
            </div>
          </div>
        )}
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>Works offline • Install to home screen</p>
      </div>
    </div>
  );
};
