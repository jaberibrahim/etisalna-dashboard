
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock, AlertCircle } from "lucide-react";

export function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تمت عملية الدفع بنجاح",
        description: "شكراً لاستخدامك بوابة البتار للدفع",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 shadow-lg">
      <CardHeader className="text-right space-y-1 bg-primary/5 border-b">
        <CardTitle className="text-xl flex items-center justify-end gap-2">
          <span>بوابة الدفع الإلكتروني</span>
          <CreditCard className="h-5 w-5" />
        </CardTitle>
        <CardDescription className="flex items-center justify-end gap-1">
          <span>معاملات آمنة ومضمونة</span>
          <Lock className="h-4 w-4" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} dir="rtl">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input id="name" placeholder="الاسم كما يظهر على البطاقة" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="card">رقم البطاقة</Label>
              <Input id="card" placeholder="0000 0000 0000 0000" required />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">رمز التحقق</Label>
                <Input id="cvv" placeholder="CVV" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">قيمة الدفع</Label>
              <Input id="amount" placeholder="00.00 ريال" required />
            </div>
          </div>
          
          <div className="flex items-center mt-4 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4 ml-2" />
            <p>جميع المعلومات مشفرة ومؤمنة</p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end bg-muted/20 border-t">
        <Button 
          onClick={handleSubmit} 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "جاري المعالجة..." : "إتمام عملية الدفع"}
        </Button>
      </CardFooter>
    </Card>
  );
}
