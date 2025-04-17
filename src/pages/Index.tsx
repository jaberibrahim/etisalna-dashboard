
import { Layout } from "@/components/Layout";
import { PaymentForm } from "@/components/PaymentForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-8">
        <Alert className="w-full max-w-md bg-primary/5 border-primary/20">
          <Info className="h-5 w-5" />
          <AlertTitle className="text-right">بوابة الدفع الآمنة</AlertTitle>
          <AlertDescription className="text-right">
            أدخل بيانات بطاقتك بأمان تام. جميع المعلومات مشفرة ولا يتم تخزينها على خوادمنا.
          </AlertDescription>
        </Alert>
        
        <PaymentForm />
        
        <div className="flex items-center gap-3 justify-center">
          <img src="https://cdn.moyasar.com/media/mada.svg" alt="Mada" className="h-8" />
          <img src="https://cdn.moyasar.com/media/visa.svg" alt="Visa" className="h-8" />
          <img src="https://cdn.moyasar.com/media/mastercard.svg" alt="Mastercard" className="h-8" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
